/**
 * Google Analytics 4 event helper with privacy consent awareness
 */

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Log standard or custom event to GA4
 */
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number,
  additionalParams?: Record<string, unknown>
): void {
  if (typeof window === "undefined" || !window.gtag) {
    if (process.env.NODE_ENV === "development") {
      console.log(`[Analytics Event] ${category} -> ${action}:`, { label, value, ...additionalParams });
    }
    return;
  }

  try {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
      ...additionalParams,
    });
  } catch (err) {
    console.warn("[Analytics] Error tracking event:", err);
  }
}

export const trackAnalytics = {
  viewSection: (sectionName: string) => {
    trackEvent("view_section", "engagement", sectionName);
  },
  clickEarlyAccessCTA: (location: string) => {
    trackEvent("click_cta", "conversion", `early_access_cta_${location}`);
  },
  submitWaitlist: (country: string, interestsCount: number) => {
    trackEvent("waitlist_signup_success", "conversion", country, interestsCount);
  },
  clickFeature: (featureName: string) => {
    trackEvent("feature_interaction", "features", featureName);
  },
  clickPricingTier: (tierName: string) => {
    trackEvent("pricing_interaction", "pricing", tierName);
  },
  toggleFAQ: (question: string) => {
    trackEvent("faq_toggle", "engagement", question);
  },
};

