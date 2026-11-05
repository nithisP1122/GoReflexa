import { createClient } from "@supabase/supabase-js";

export interface EarlyAccessRegistration {
  id?: string;
  full_name: string;
  email: string;
  mobile_number?: string | null;
  country: string;
  interests: string[];
  privacy_consent: boolean;
  marketing_consent: boolean;
  registration_source?: string;
  created_at?: string;
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// Server-side route handler uses SUPABASE_SERVICE_ROLE_KEY for privileged RLS operations
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
    supabaseUrl.startsWith("http") &&
    !supabaseUrl.includes("your-project-id") &&
    !supabaseUrl.includes("your-project.supabase.co") &&
    supabaseKey &&
    supabaseKey !== "your-supabase-service-role-key" &&
    supabaseKey !== "your-supabase-anon-key"
);

// Server-only client instance
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabaseKey!, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    })
  : null;

/**
 * Checks whether an email is already registered in the Supabase early_access_registrations table.
 */
export async function checkEmailExists(email: string): Promise<boolean> {
  const normalizedEmail = email.trim().toLowerCase();

  if (!isSupabaseConfigured || !supabase) {
    return false;
  }

  try {
    const { data, error } = await supabase
      .from("early_access_registrations")
      .select("id")
      .eq("email", normalizedEmail)
      .maybeSingle();

    if (error && error.code !== "PGRST116") {
      console.error("[Supabase] Query error in checkEmailExists:", error.message);
    }

    return Boolean(data);
  } catch (err) {
    console.error("[Supabase] Connection error during checkEmailExists:", err);
    return false;
  }
}

/**
 * Inserts a new registration into the Supabase PostgreSQL table 'early_access_registrations'.
 * Never returns fake success. Confirms actual insertion into Supabase before resolving success: true.
 */
export async function insertRegistration(
  record: EarlyAccessRegistration
): Promise<{
  success: boolean;
  data?: EarlyAccessRegistration;
  isDuplicate?: boolean;
  error?: string;
}> {
  const normalizedRecord: Omit<EarlyAccessRegistration, "id"> = {
    full_name: record.full_name.trim(),
    email: record.email.trim().toLowerCase(),
    mobile_number: record.mobile_number ? record.mobile_number.trim() : null,
    country: record.country.trim(),
    interests: Array.isArray(record.interests) ? record.interests : [],
    privacy_consent: Boolean(record.privacy_consent),
    marketing_consent: Boolean(record.marketing_consent),
    registration_source: record.registration_source || "marketing_website",
    created_at: new Date().toISOString(),
  };

  if (!isSupabaseConfigured || !supabase) {
    return {
      success: false,
      error:
        "Database is currently not connected. Please verify that NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set in your environment variables.",
    };
  }

  try {
    const { data, error } = await supabase
      .from("early_access_registrations")
      .insert([normalizedRecord])
      .select(
        "id, full_name, email, mobile_number, country, interests, privacy_consent, marketing_consent, registration_source, created_at"
      )
      .single();

    if (error) {
      // PostgreSQL Unique Violation code 23505
      if (
        error.code === "23505" ||
        error.message?.toLowerCase().includes("duplicate") ||
        error.message?.toLowerCase().includes("unique")
      ) {
        return {
          success: false,
          isDuplicate: true,
          error:
            "This email is already registered on our early-access list! We have you reserved for launch day.",
        };
      }

      console.error("[Supabase] Insert operation failed:", error);
      return {
        success: false,
        error: `Database insertion error: ${error.message}`,
      };
    }

    if (!data) {
      return {
        success: false,
        error: "Database insertion could not be confirmed.",
      };
    }

    return {
      success: true,
      data: data as EarlyAccessRegistration,
    };
  } catch (err: unknown) {
    console.error("[Supabase] Unexpected exception during insertion:", err);
    return {
      success: false,
      error:
        (err as Error)?.message ||
        "A database connection failure occurred. Please try again.",
    };
  }
}
