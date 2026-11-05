import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "./ui/Container";
import { ArrowUpRight } from "lucide-react";

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.4 9.74v-8.37H5.06v8.37z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = 2027; // Official launch year reference

  return (
    <footer className="bg-white border-t border-[#E5E7EB] pt-16 sm:pt-20 pb-12">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#E5E7EB]">
          {/* Brand Info & Vision */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-3 focus:outline-none inline-flex"
            >
              <div className="w-10 h-10 rounded-xl bg-[#182230] text-white flex items-center justify-center font-black text-lg tracking-tighter">
                <span className="text-[#6FAF91]">G</span>
                <span>R</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-wider text-[#182230] leading-none">
                  GoReflexa
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-widest text-[#6FAF91] mt-1">
                  BUILD YOUR LIFE
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-sm">
              An all-in-one personal lifestyle and productivity platform designed to help individuals organize their lives, build positive habits, manage goals, improve productivity, and develop consistency.
            </p>

            <div className="pt-2 text-xs font-semibold text-[#182230]">
              Official Launch:{" "}
              <span className="text-[#6FAF91]">{siteConfig.launchDateFormatted}</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-xs font-bold text-[#182230] uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#64748B]">
              <li>
                <a href="#hero" className="hover:text-[#182230] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#182230] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#182230] transition-colors">
                  Product Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#182230] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#182230] transition-colors">
                  Why GoReflexa
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#182230] transition-colors">
                  Subscription & Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#182230] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-xs font-bold text-[#182230] uppercase tracking-wider mb-4">
              Legal & Policy
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#64748B]">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[#182230] transition-colors flex items-center gap-1"
                >
                  <span>Privacy Policy</span>
                  <ArrowUpRight className="w-3 h-3 text-[#94A3B8]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[#182230] transition-colors flex items-center gap-1"
                >
                  <span>Terms & Conditions</span>
                  <ArrowUpRight className="w-3 h-3 text-[#94A3B8]" />
                </Link>
              </li>
              <li>
                <span className="text-[#94A3B8] text-xs">
                  Cookie Preferences (Privacy First)
                </span>
              </li>
              <li>
                <span className="text-[#94A3B8] text-xs">
                  GDPR & CCPA Compliant
                </span>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-xs font-bold text-[#182230] uppercase tracking-wider mb-4">
              Connect & Support
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#64748B]">
              <li>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="hover:text-[#182230] transition-colors"
                >
                  {siteConfig.contactEmail}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.privacyEmail}`}
                  className="hover:text-[#182230] transition-colors"
                >
                  {siteConfig.privacyEmail}
                </a>
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-2">
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-lg bg-[#F7F8FA] border border-[#E5E7EB] text-[#64748B] hover:text-[#182230] hover:bg-[#EEF1F4] flex items-center justify-center transition-colors"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-[#F7F8FA] border border-[#E5E7EB] text-[#64748B] hover:text-[#182230] hover:bg-[#EEF1F4] flex items-center justify-center transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-[#F7F8FA] border border-[#E5E7EB] text-[#64748B] hover:text-[#182230] hover:bg-[#EEF1F4] flex items-center justify-center transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg bg-[#F7F8FA] border border-[#E5E7EB] text-[#64748B] hover:text-[#182230] hover:bg-[#EEF1F4] flex items-center justify-center transition-colors"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright & Disclaimer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>
            © {currentYear} GoReflexa Inc. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Crafted for intentional lifestyles • Google Stitch Theme 5 Minimal Light
          </p>
        </div>
      </Container>
    </footer>
  );
}
