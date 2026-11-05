export const siteConfig = {
  name: "GoReflexa",
  tagline: "Break Your Limits. Build Your Life.",
  description:
    "An all-in-one personal lifestyle and productivity platform designed to help individuals organize their lives, build positive habits, manage goals, improve productivity, and develop consistency.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://goreflexa.com",
  launchDate: "2027-01-14T00:00:00+05:30", // January 14, 2027 Asia/Kolkata
  launchDateFormatted: "January 14, 2027",
  timezone: "Asia/Kolkata",
  navItems: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why Us", href: "#why-us" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  socials: {
    twitter: "https://twitter.com/goreflexa",
    linkedin: "https://linkedin.com/company/goreflexa",
    instagram: "https://instagram.com/goreflexa",
    youtube: "https://youtube.com/@goreflexa",
  },
  contactEmail: "hello@goreflexa.com",
  supportEmail: "support@goreflexa.com",
  privacyEmail: "privacy@goreflexa.com",
};
