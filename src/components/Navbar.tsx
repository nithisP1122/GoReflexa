"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { trackAnalytics } from "@/lib/analytics";

export function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = siteConfig.navItems.map((item) =>
        item.href.replace("#", "")
      );
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${href}`);
    }
  };

  const handleEarlyAccessClick = () => {
    trackAnalytics.clickEarlyAccessCTA("navbar");
    setIsOpen(false);
    const element = document.getElementById("early-access");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#early-access");
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
          : "bg-white border-b border-[#E5E7EB]"
      }`}
    >
      <Container size="wide">
        <div className="flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="GoReflexa Home"
          >
            <div className="w-10 h-10 rounded-xl bg-[#182230] text-white flex items-center justify-center font-black text-lg tracking-tighter shadow-xs group-hover:bg-[#334155] transition-colors">
              <span className="text-[#6FAF91] font-bold">G</span>
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

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {siteConfig.navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "text-[#182230] font-semibold bg-[#F7F8FA]"
                      : "text-[#64748B] hover:text-[#182230] hover:bg-[#F7F8FA]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              onClick={handleEarlyAccessClick}
              size="md"
              className="bg-[#182230] text-white hover:bg-[#334155] text-xs uppercase tracking-wider font-semibold px-5"
            >
              Join Early Access
              <ArrowUpRight className="w-3.5 h-3.5 text-[#6FAF91]" />
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#182230] hover:bg-[#F7F8FA] focus:outline-none transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-[#E5E7EB] bg-white px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200 shadow-lg">
          <div className="flex flex-col gap-1 mb-4">
            {siteConfig.navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#F7F8FA] text-[#182230] font-semibold"
                      : "text-[#64748B] hover:bg-[#F7F8FA] hover:text-[#182230]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[#E5E7EB]">
            <Button
              onClick={handleEarlyAccessClick}
              className="w-full justify-center bg-[#182230] text-white text-xs uppercase tracking-wider font-bold py-3.5"
            >
              Join Early Access
              <ArrowUpRight className="w-4 h-4 text-[#6FAF91]" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

