import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { ArrowLeft, Shield, Lock, Eye, Trash2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | GoReflexa",
  description:
    "Learn how GoReflexa collects, protects, stores, and handles early-access registration data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen text-[#182230]">
      {/* Header Bar */}
      <header className="border-b border-[#E5E7EB] bg-white sticky top-0 z-20">
        <Container size="narrow">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-2 text-xs font-semibold text-[#64748B] hover:text-[#182230] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#6FAF91]" />
              <span>Back to GoReflexa</span>
            </Link>
            <div className="text-xs font-mono font-bold text-[#94A3B8]">
              LEGAL NOTICE
            </div>
          </div>
        </Container>
      </header>

      <main className="py-12 sm:py-20">
        <Container size="narrow">
          <div className="max-w-3xl mx-auto space-y-10">
            {/* Title Block */}
            <div className="border-b border-[#E5E7EB] pb-8">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#6FAF91] bg-[#6FAF91]/10 px-3 py-1 rounded-full border border-[#6FAF91]/30">
                PRIVACY DISCLOSURE
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#182230] mt-4 mb-2">
                Privacy Policy
              </h1>
              <p className="text-sm text-[#64748B]">
                Effective Date: November 2026 • Pre-launch Release for January 14, 2027 Launch
              </p>
            </div>

            {/* Disclaimer notice */}
            <div className="p-4 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] text-xs text-[#64748B] leading-relaxed">
              <strong className="text-[#182230]">Important Notice:</strong> This Privacy Policy outlines how GoReflexa (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) manages information submitted via our pre-launch marketing website and early-access registration program. This document does not constitute formal legal counsel and will be updated upon commercial availability.
            </div>

            {/* Section 1: Information Collected */}
            <section className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#EEF1F4] flex items-center justify-center text-[#182230]">
                  <Eye className="w-4 h-4 text-[#6FAF91]" />
                </div>
                <h2 className="text-xl font-bold text-[#182230]">
                  1. Information We Collect
                </h2>
              </div>
              <p className="text-sm text-[#64748B] leading-relaxed">
                When you register for early access to GoReflexa, we collect the following personal and preference information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-[#334155]">
                <li>
                  <strong>Full Name:</strong> To personalize communications and verify early-access ticket reservation.
                </li>
                <li>
                  <strong>Email Address:</strong> To deliver waitlist confirmation, launch milestone notifications, and priority onboarding invitations.
                </li>
                <li>
                  <strong>Mobile Number (Optional):</strong> For optional SMS launch reminders if explicitly consented to.
                </li>
                <li>
                  <strong>Country of Residence:</strong> To evaluate international server deployment geography and regional compliance.
                </li>
                <li>
                  <strong>Feature Interests:</strong> Self-selected platform modules to understand community demand and prioritize feature development.
                </li>
                <li>
                  <strong>Technical Metadata:</strong> Timestamp of submission, IP address for anti-abuse and rate-limiting, and registration source.
                </li>
              </ul>
            </section>

            {/* Section 2: Why We Collect Information */}
            <section className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#EEF1F4] flex items-center justify-center text-[#182230]">
                  <Shield className="w-4 h-4 text-[#6FAF91]" />
                </div>
                <h2 className="text-xl font-bold text-[#182230]">
                  2. Purpose of Collection & Use
                </h2>
              </div>
              <p className="text-sm text-[#64748B] leading-relaxed">
                We strictly use your information for legitimate pre-launch business purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-[#334155]">
                <li>Administering the early-access waitlist and reserving founding-member privileges.</li>
                <li>Delivering transactional verification emails via our email delivery provider (Resend).</li>
                <li>Sending periodic launch updates if optional marketing consent is provided.</li>
                <li>Preventing bot attacks, duplicate registrations, and fraudulent automated submissions.</li>
              </ul>
              <p className="text-sm text-[#64748B] leading-relaxed">
                We <strong>never sell, rent, or trade</strong> your personal information to third-party data brokers or advertisers.
              </p>
            </section>

            {/* Section 3: Data Storage & Security */}
            <section className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#EEF1F4] flex items-center justify-center text-[#182230]">
                  <Lock className="w-4 h-4 text-[#6FAF91]" />
                </div>
                <h2 className="text-xl font-bold text-[#182230]">
                  3. Storage, Encryption & Security
                </h2>
              </div>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Your registration records are stored in managed Supabase PostgreSQL instances with AES-256 encryption at rest and TLS 1.3 in transit. Row Level Security (RLS) policies restrict table access so that only backend server processes equipped with signed service-role credentials can write or read registrant records. Database credentials and API tokens are never exposed to browser client code.
              </p>
            </section>

            {/* Section 4: Data Retention & Deletion */}
            <section className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#EEF1F4] flex items-center justify-center text-[#182230]">
                  <Trash2 className="w-4 h-4 text-[#6FAF91]" />
                </div>
                <h2 className="text-xl font-bold text-[#182230]">
                  4. Your Rights & Data Deletion
                </h2>
              </div>
              <p className="text-sm text-[#64748B] leading-relaxed">
                You retain complete ownership and control over your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-[#334155]">
                <li>
                  <strong>Request Deletion:</strong> You may request complete erasure of your waitlist record at any time by emailing{" "}
                  <a
                    href={`mailto:${siteConfig.privacyEmail}`}
                    className="text-[#182230] font-semibold underline underline-offset-2"
                  >
                    {siteConfig.privacyEmail}
                  </a>{" "}
                  with the subject line &ldquo;Data Deletion Request&rdquo;.
                </li>
                <li>
                  <strong>Opt-Out of Marketing:</strong> Every non-transactional email contains a one-click unsubscribe link.
                </li>
                <li>
                  <strong>Data Access:</strong> You may request a copy of the specific data stored regarding your email record.
                </li>
              </ul>
            </section>

            {/* Section 5: Contact */}
            <section className="p-6 rounded-2xl bg-[#F7F8FA] border border-[#E5E7EB] space-y-3">
              <h3 className="text-base font-bold text-[#182230]">
                Contact Privacy Officer
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                For questions concerning this Privacy Policy, personal data handling, or GDPR/CCPA inquiries, contact:
              </p>
              <div className="text-xs font-mono font-semibold text-[#182230]">
                {siteConfig.privacyEmail}
              </div>
            </section>
          </div>
        </Container>
      </main>

      <footer className="border-t border-[#E5E7EB] py-8 text-center text-xs text-[#94A3B8]">
        © 2027 GoReflexa. All rights reserved.
      </footer>
    </div>
  );
}
