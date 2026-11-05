import { Resend } from "resend";
import { siteConfig } from "../config/site";

const resendApiKey = process.env.RESEND_API_KEY;
export const isResendConfigured = Boolean(
  resendApiKey && resendApiKey !== "re_your_api_key_here"
);

const resend = isResendConfigured ? new Resend(resendApiKey) : null;

export interface SendEarlyAccessEmailParams {
  name: string;
  email: string;
  country: string;
  interests?: string[];
}

export function generateEmailHtml(name: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to GoReflexa</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #F7F8FA;
      color: #182230;
      margin: 0;
      padding: 32px 16px;
    }
    .container {
      max-width: 580px;
      margin: 0 auto;
      background-color: #FFFFFF;
      border: 1px solid #E5E7EB;
      border-radius: 12px;
      padding: 40px 32px;
    }
    .logo-badge {
      display: inline-block;
      font-weight: 800;
      font-size: 14px;
      letter-spacing: 0.1em;
      color: #182230;
      background: #EEF1F4;
      padding: 6px 14px;
      border-radius: 9999px;
      margin-bottom: 24px;
    }
    h1 {
      font-size: 26px;
      font-weight: 700;
      color: #182230;
      line-height: 1.3;
      margin-top: 0;
      margin-bottom: 12px;
    }
    .tagline {
      font-size: 13px;
      font-weight: 600;
      color: #6FAF91;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 24px;
    }
    p {
      font-size: 15px;
      line-height: 1.6;
      color: #334155;
      margin-bottom: 16px;
    }
    .launch-box {
      background-color: #F7F8FA;
      border: 1px solid #E5E7EB;
      border-radius: 8px;
      padding: 20px;
      margin: 28px 0;
      text-align: center;
    }
    .launch-title {
      font-size: 12px;
      text-transform: uppercase;
      color: #64748B;
      font-weight: 600;
      letter-spacing: 0.05em;
      margin-bottom: 6px;
    }
    .launch-date {
      font-size: 20px;
      font-weight: 700;
      color: #182230;
    }
    .cta-button {
      display: inline-block;
      background-color: #182230;
      color: #FFFFFF !important;
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
      padding: 12px 28px;
      border-radius: 8px;
      margin-top: 8px;
      margin-bottom: 24px;
    }
    .divider {
      height: 1px;
      background-color: #E5E7EB;
      margin: 32px 0 24px 0;
    }
    .footer {
      font-size: 12px;
      color: #94A3B8;
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo-badge">GoReflexa</div>
    <div class="tagline">BREAK YOUR LIMITS. BUILD YOUR LIFE.</div>
    
    <h1>You're on the early-access list, ${escapeHtml(name)}!</h1>
    
    <p>Thank you for registering for early access to <strong>GoReflexa</strong>. We are building the all-in-one personal lifestyle and productivity platform to help you organize your life, build lasting habits, achieve meaningful goals, and master consistency.</p>
    
    <div class="launch-box">
      <div class="launch-title">Official Worldwide Launch</div>
      <div class="launch-date">${siteConfig.launchDateFormatted}</div>
      <div style="font-size: 12px; color: #64748B; margin-top: 4px;">Timezone: Asia/Kolkata</div>
    </div>
    
    <p>As an early-access member, you will receive:</p>
    <ul style="font-size: 14px; color: #334155; line-height: 1.8; padding-left: 20px; margin-bottom: 24px;">
      <li>Priority onboarding invitation ahead of public release</li>
      <li>Exclusive founding-member pricing on premium plans</li>
      <li>Direct channel to share feedback with our product development team</li>
    </ul>

    <p style="text-align: center;">
      <a href="${siteConfig.url}" class="cta-button" target="_blank" rel="noopener noreferrer">Visit Official Website</a>
    </p>

    <div class="divider"></div>
    
    <div class="footer">
      <p style="margin: 0 0 6px 0; font-size: 12px; color: #94A3B8;">
        © 2027 GoReflexa. All rights reserved.
      </p>
      <p style="margin: 0; font-size: 11px; color: #94A3B8;">
        You received this email because you signed up for early access on <a href="${siteConfig.url}" style="color: #64748B;">goreflexa.com</a>.
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendEarlyAccessConfirmationEmail(
  params: SendEarlyAccessEmailParams
): Promise<{ success: boolean; id?: string; mock?: boolean; error?: string }> {
  const fromEmail = process.env.RESEND_FROM_EMAIL || "GoReflexa <onboarding@resend.dev>";
  const subject = "Welcome to GoReflexa – You're on the Early Access List!";

  if (!isResendConfigured || !resend) {
    console.log("[Resend Mock] Email simulated successfully for:", params.email);
    console.log(`[Resend Mock] To: ${params.email} | Subject: ${subject}`);
    return {
      success: true,
      id: `mock-email-${Date.now()}`,
      mock: true,
    };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: params.email,
      subject: subject,
      html: generateEmailHtml(params.name),
    });

    if (error) {
      console.error("[Resend Error]:", error);
      return { success: false, error: error.message };
    }

    return { success: true, id: data?.id };
  } catch (err: unknown) {
    console.error("[Resend Exception]:", err);
    return { success: false, error: (err as Error)?.message || "Failed to send email" };
  }
}

