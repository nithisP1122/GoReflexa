import { NextRequest, NextResponse } from "next/server";
import { checkEmailExists, insertRegistration, EarlyAccessRegistration } from "../../../lib/supabase";
import { sendEarlyAccessConfirmationEmail } from "../../../lib/resend";
import { isRateLimited } from "../../../lib/rate-limiter";

// Email format regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    // 1. Client IP for Rate Limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    // Max 20 requests per 10 minutes per IP
    const rateCheck = isRateLimited(ip, 20, 10 * 60 * 1000);
    if (rateCheck.limited) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many registration attempts. Please wait a few minutes before trying again.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": Math.ceil(rateCheck.resetMs / 1000).toString(),
          },
        }
      );
    }

    // 2. Parse Body
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Invalid request payload." },
        { status: 400 }
      );
    }

    const {
      full_name,
      email,
      mobile_number,
      country,
      interests,
      privacy_consent,
      marketing_consent,
      honeypot, // hidden spam protection field
    } = body;

    // 3. Honeypot Spam Check
    // If a bot filled out the hidden honeypot field, silently ignore or reject
    if (honeypot && String(honeypot).trim().length > 0) {
      console.warn(`[Spam Blocked] Honeypot triggered by IP: ${ip}`);
      return NextResponse.json(
        { success: true, message: "Registration received." },
        { status: 200 }
      );
    }

    // 4. Validate Inputs
    if (!full_name || typeof full_name !== "string" || full_name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide your full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!country || typeof country !== "string" || country.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please select your country." },
        { status: 400 }
      );
    }

    if (!privacy_consent) {
      return NextResponse.json(
        {
          success: false,
          error: "You must accept the Privacy Policy to join early access.",
        },
        { status: 400 }
      );
    }

    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedName = full_name.trim();
    const sanitizedMobile =
      typeof mobile_number === "string" && mobile_number.trim().length > 0
        ? mobile_number.trim()
        : null;

    if (sanitizedMobile && !/^[+0-9\s\-()]{7,25}$/.test(sanitizedMobile)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid mobile number or leave it blank." },
        { status: 400 }
      );
    }
    const sanitizedInterests = Array.isArray(interests)
      ? interests.filter((i) => typeof i === "string" && i.length > 0)
      : [];

    // 5. Prevent Duplicate Registrations
    const alreadyExists = await checkEmailExists(sanitizedEmail);
    if (alreadyExists) {
      return NextResponse.json(
        {
          success: false,
          code: "DUPLICATE_EMAIL",
          error:
            "This email is already registered on our early-access list! We have you reserved for launch day.",
        },
        { status: 409 }
      );
    }

    // 6. Save in Supabase PostgreSQL
    const registrationRecord: EarlyAccessRegistration = {
      full_name: sanitizedName,
      email: sanitizedEmail,
      mobile_number: sanitizedMobile,
      country: country.trim(),
      interests: sanitizedInterests,
      privacy_consent: Boolean(privacy_consent),
      marketing_consent: Boolean(marketing_consent),
      registration_source: "marketing_website",
    };

    const insertResult = await insertRegistration(registrationRecord);
    if (!insertResult.success) {
      const status = insertResult.isDuplicate ? 409 : 500;
      return NextResponse.json(
        {
          success: false,
          code: insertResult.isDuplicate ? "DUPLICATE_EMAIL" : "INSERT_FAILED",
          error: insertResult.error || "Unable to save registration. Please try again.",
        },
        { status }
      );
    }

    // 7. Send Automated Confirmation Email via Resend (async / non-blocking of response)
    const emailPromise = sendEarlyAccessConfirmationEmail({
      name: sanitizedName,
      email: sanitizedEmail,
      country: country.trim(),
      interests: sanitizedInterests,
    }).catch((emailErr) => {
      console.warn("[Email Send Notice] Could not deliver email:", emailErr);
    });

    // Don't wait endlessly for email, but initiate it
    await Promise.race([
      emailPromise,
      new Promise((resolve) => setTimeout(resolve, 800)),
    ]);

    // 8. Return Success Confirmation
    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for joining GoReflexa! You're officially on our early-access list. We'll keep you updated about our launch.",
        data: {
          id: insertResult.data?.id,
          name: sanitizedName,
          email: sanitizedEmail,
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("[Early Access API Fatal Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected server error occurred. Please try again shortly.",
      },
      { status: 500 }
    );
  }
}

