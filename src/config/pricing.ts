export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  description: string;
  priceDisplay: string; // "PRICING COMING SOON"
  billingPeriod?: string;
  isPopular?: boolean;
  features: string[];
  notIncluded?: string[];
  ctaLabel: string;
}

export interface PricingConfig {
  showExactPrices: boolean; // Set to false initially as requested
  comingSoonText: string;
  plans: PricingPlan[];
}

export const pricingConfig: PricingConfig = {
  showExactPrices: false, // Strictly configured: "Initially display: PRICING COMING SOON"
  comingSoonText: "PRICING COMING SOON",
  plans: [
    {
      id: "free",
      name: "FREE PLAN",
      description: "Essential personal management tools to start taking control of your daily routines.",
      priceDisplay: "PRICING COMING SOON",
      billingPeriod: "Free forever",
      isPopular: false,
      ctaLabel: "Join Free Waitlist",
      features: [
        "Personal task management & daily to-do lists",
        "Up to 5 active habit schedules",
        "Monday-to-Sunday weekly view",
        "Basic goal tracking (up to 3 active goals)",
        "Daily reflection journal with standard text",
        "7-day progress history & streak counter",
        "Desktop and mobile responsive web access",
      ],
      notIncluded: [
        "Unlimited habit recurrence schedules",
        "Advanced milestone breakdown",
        "Long-term visual analytics & exports",
        "Social community access",
      ],
    },
    {
      id: "premium",
      name: "PREMIUM PLAN",
      badge: "MOST POPULAR",
      description: "The complete personal lifestyle operating system for individuals committed to continuous growth.",
      priceDisplay: "PRICING COMING SOON",
      billingPeriod: "Billed annually or monthly",
      isPopular: true,
      ctaLabel: "Get Early Access Priority",
      features: [
        "Unlimited habits & custom recurrence schedules",
        "Full daily planner with routine templates & time-blocking",
        "Comprehensive goal management with milestone dependencies",
        "Rich media personal journal with daily prompts",
        "365-day visual performance analytics & streak backups",
        "Personal development consistency scoring",
        "Priority sync across all personal devices",
        "Exclusive early-access member perks & discount at launch",
      ],
      notIncluded: [
        "1-on-1 lifestyle onboarding session",
      ],
    },
    {
      id: "pro",
      name: "PRO PLAN",
      badge: "POWER USERS",
      description: "Advanced productivity analytics, deep personal development workflows, and community collaboration.",
      priceDisplay: "PRICING COMING SOON",
      billingPeriod: "Billed annually or monthly",
      isPopular: false,
      ctaLabel: "Reserve Pro Access",
      features: [
        "Everything included in Premium Plan",
        "Unlimited goals, habits, planner entries, and journal archives",
        "Lifetime progress analytics & correlation insights",
        "Custom life pillars & category dashboards",
        "Early access to the upcoming Social Community network",
        "Shareable milestone achievements & public accountability cards",
        "Data export (JSON, CSV, PDF reports)",
        "VIP support channel directly with the core product team",
      ],
    },
  ],
};

