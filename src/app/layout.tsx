import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFFFFF",
};

export const metadata: Metadata = {
  title: "GoReflexa | Break Your Limits. Build Your Life.",
  description:
    "The all-in-one personal lifestyle and productivity platform. Build habits, manage goals, plan daily routines, and track personal growth. Launching January 14, 2027.",
  keywords: [
    "Personal Productivity Software",
    "Habit Tracker",
    "Goal Management",
    "Personal Development Platform",
    "Daily Planner",
    "Lifestyle Management Software",
    "GoReflexa",
  ],
  authors: [{ name: "GoReflexa Team" }],
  creator: "GoReflexa",
  publisher: "GoReflexa",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://goreflexa.com",
    title: "GoReflexa — Break Your Limits. Build Your Life.",
    description:
      "All-in-one personal productivity and lifestyle management platform. Launching January 14, 2027.",
    siteName: "GoReflexa",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoReflexa — Break Your Limits. Build Your Life.",
    description:
      "All-in-one personal productivity and lifestyle management platform. Launching January 14, 2027.",
    creator: "@goreflexa",
  },
  metadataBase: new URL("https://goreflexa.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-[#182230] font-sans antialiased selection:bg-[#6FAF91]/20 selection:text-[#182230]">
        {children}
      </body>
    </html>
  );
}
