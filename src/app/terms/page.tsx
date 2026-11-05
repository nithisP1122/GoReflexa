import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { ArrowLeft, FileText, CheckCircle2, AlertTriangle, Scale } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | GoReflexa",
  description:
    "Terms and Conditions governing the use of the GoReflexa pre-launch website and early-access program.",
};

export default function TermsPage() {
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
              LEGAL TERMS
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
                USER AGREEMENT
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#182230] mt-4 mb-2">
                Terms and Conditions
              </h1>
              <p className="text-sm text-[#64748B]">
                Last Revised: November 2026 • Pre-Launch Early Access Phase
              </p>
            </div>

            {/* Disclaimer notice */}
            <div className="p-4 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] text-xs text-[#64748B] leading-relaxed">
              <strong className="text-[#182230]">Pre-launch Notice:</strong> These Terms and Conditions govern access to and usage of the GoReflexa promotional website and early-access waitlist. Accessing this site constitutes acceptance of these terms.
            </div>

            {/* Section 1: Pre-launch Scope */}
            <section className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#EEF1F4] flex items-center justify-center text-[#182230]">
                  <FileText className="w-4 h-4 text-[#6FAF91]" />
                </div>
                <h2 className="text-xl font-bold text-[#182230]">
                  1. Scope of the Marketing Website
                </h2>
              </div>
              <p className="text-sm text-[#64748B] leading-relaxed">
                This website is dedicated solely to marketing, product presentation, feature disclosure, and waitlist registration for the upcoming platform <strong>GoReflexa</strong>, currently scheduled for official launch on January 14, 2027.
              </p>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Nothing on this website constitutes a guarantee of immediate software access, nor does registration constitute a binding commercial contract to purchase subscriptions.
              </p>
            </section>

            {/* Section 2: Early Access Program */}
            <section className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#EEF1F4] flex items-center justify-center text-[#182230]">
                  <CheckCircle2 className="w-4 h-4 text-[#6FAF91]" />
                </div>
                <h2 className="text-xl font-bold text-[#182230]">
                  2. Early-Access Waitlist Terms
                </h2>
              </div>
              <p className="text-sm text-[#64748B] leading-relaxed">
                By submitting the Early Access Registration form, you confirm that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-[#334155]">
                <li>You are providing accurate, current, and truthful personal identification.</li>
                <li>You are at least 16 years of age or possess legal guardian authorization.</li>
                <li>You will not submit duplicate entries, automated bot scripts, or spam.</li>
                <li>Invitation to the early-access beta will be rolled out in batches at the sole discretion of GoReflexa.</li>
              </ul>
            </section>

            {/* Section 3: Intellectual Property */}
            <section className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#EEF1F4] flex items-center justify-center text-[#182230]">
                  <Scale className="w-4 h-4 text-[#6FAF91]" />
                </div>
                <h2 className="text-xl font-bold text-[#182230]">
                  3. Intellectual Property Rights
                </h2>
              </div>
              <p className="text-sm text-[#64748B] leading-relaxed">
                The GoReflexa name, logo, &ldquo;BREAK YOUR LIMITS. BUILD YOUR LIFE.&rdquo; trademark, brand assets, UI mockups, illustrations, text, and source code are the exclusive intellectual property of GoReflexa Inc. No portion of this site may be duplicated, modified, or reproduced without express written authorization.
              </p>
            </section>

            {/* Section 4: Limitation of Liability */}
            <section className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#EEF1F4] flex items-center justify-center text-[#182230]">
                  <AlertTriangle className="w-4 h-4 text-[#6FAF91]" />
                </div>
                <h2 className="text-xl font-bold text-[#182230]">
                  4. Disclaimer & Limitation of Liability
                </h2>
              </div>
              <p className="text-sm text-[#64748B] leading-relaxed">
                This marketing website is provided on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis. GoReflexa makes no express or implied warranties regarding continuous uptime or error-free operation. We reserve the right to revise launch dates, roadmap features, and pricing structures prior to official commercial release.
              </p>
            </section>

            {/* Section 5: Contact */}
            <section className="p-6 rounded-2xl bg-[#F7F8FA] border border-[#E5E7EB] space-y-3">
              <h3 className="text-base font-bold text-[#182230]">
                Questions & Legal Inquiries
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                For questions regarding these Terms and Conditions:
              </p>
              <div className="text-xs font-mono font-semibold text-[#182230]">
                {siteConfig.contactEmail}
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

