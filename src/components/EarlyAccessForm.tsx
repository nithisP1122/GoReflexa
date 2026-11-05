"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import {
  CheckCircle2,
  AlertCircle,
  Send,
  ShieldCheck,
  Mail,
  ChevronDown,
  Check,
  X as XIcon,
} from "lucide-react";
import confetti from "canvas-confetti";
import { trackAnalytics } from "@/lib/analytics";

const COUNTRIES = [
  "United States",
  "India",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Singapore",
  "United Arab Emirates",
  "Netherlands",
  "Switzerland",
  "Sweden",
  "Japan",
  "Spain",
  "Italy",
  "Brazil",
  "New Zealand",
  "South Africa",
  "Ireland",
  "Other",
];

const AVAILABLE_INTERESTS = [
  { id: "productivity", label: "Personal Productivity & Tasks" },
  { id: "habits", label: "Habit Tracker & Streaks" },
  { id: "goals", label: "Goal Management & Milestones" },
  { id: "planner", label: "Daily Planner & Routines" },
  { id: "journal", label: "Journal & Reflections" },
  { id: "growth", label: "Personal Development" },
  { id: "community", label: "Social Community & Accountability" },
  { id: "analytics", label: "Progress & Visual Analytics" },
];

export function EarlyAccessForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    country: "",
    customCountry: "",
    interests: ["habits", "productivity"] as string[],
    privacyConsent: false,
    marketingConsent: true,
    honeypot: "", // hidden anti-spam trap
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState("");
  const [isFeatureDropdownOpen, setIsFeatureDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close feature dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsFeatureDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleInterest = (id: string) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(id);
      return {
        ...prev,
        interests: exists
          ? prev.interests.filter((item) => item !== id)
          : [...prev.interests, id],
      };
    });
  };

  const removeInterest = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.filter((item) => item !== id),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic client validation
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      setErrorMessage("Please enter your full name (minimum 2 characters).");
      return;
    }

    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    if (!formData.country) {
      setErrorMessage("Please select your country.");
      return;
    }

    if (formData.country === "Other" && !formData.customCountry.trim()) {
      setErrorMessage("Please specify your country name.");
      return;
    }

    if (!formData.privacyConsent) {
      setErrorMessage("You must accept the Privacy Policy to join early access.");
      return;
    }

    setIsLoading(true);

    const resolvedCountry =
      formData.country === "Other"
        ? formData.customCountry.trim()
        : formData.country;

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: formData.fullName,
          email: formData.email,
          mobile_number: formData.mobileNumber || null,
          country: resolvedCountry,
          interests: formData.interests,
          privacy_consent: formData.privacyConsent,
          marketing_consent: formData.marketingConsent,
          honeypot: formData.honeypot,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setErrorMessage(
          result.error ||
            "Unable to complete registration. Please check your details."
        );
        setIsLoading(false);
        return;
      }

      // Confirmed database success
      setRegisteredEmail(formData.email);
      setIsSuccess(true);
      trackAnalytics.submitWaitlist(resolvedCountry, formData.interests.length);

      // Trigger Celebration Confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#6FAF91", "#182230", "#334155", "#CBD5E1"],
        });
      } catch {
        // Safe fallback if confetti isn't supported
      }
    } catch (err: unknown) {
      console.error("Waitlist submit error:", err);
      setErrorMessage(
        "A network error occurred. Please check your connection and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const selectedInterestLabels = AVAILABLE_INTERESTS.filter((item) =>
    formData.interests.includes(item.id)
  );

  return (
    <section
      id="early-access"
      className="py-20 sm:py-28 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#F7F8FA] rounded-full blur-3xl -z-10 pointer-events-none" />

      <Container size="narrow">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <Badge variant="green" withDot className="mb-4">
            PRIORITY LAUNCH LIST
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#182230] tracking-tight leading-tight">
            Be Among the First to Experience GoReflexa
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Join our early-access community and receive updates about our upcoming launch on January 14, 2027.
          </p>
        </div>

        {/* Card Form Wrapper */}
        <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
          {isSuccess ? (
            /* Success Confirmation State */
            <div className="text-center py-6 sm:py-10 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#6FAF91]/15 text-[#3d705a] mx-auto flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#6FAF91]" />
              </div>

              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#6FAF91] bg-white px-3 py-1 rounded-full border border-[#E5E7EB]">
                REGISTRATION CONFIRMED
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#182230] mt-4 mb-3">
                Thank you for joining GoReflexa!
              </h3>

              <p className="text-base text-[#334155] max-w-lg mx-auto leading-relaxed mb-6 font-medium">
                You&apos;re officially on our early-access list. We&apos;ll keep you updated about our launch.
              </p>

              <div className="p-4 rounded-xl bg-white border border-[#E5E7EB] max-w-md mx-auto mb-8 text-left text-xs sm:text-sm text-[#64748B] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#182230]">Confirmed Email:</span>
                  <span className="font-mono text-[#182230]">{registeredEmail}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#182230]">Target Launch:</span>
                  <span>January 14, 2027</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#182230]">Access Tier:</span>
                  <span className="text-[#6FAF91] font-bold">Priority Founding Member</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-[#64748B]">
                <Mail className="w-4 h-4 text-[#6FAF91]" />
                <span>A confirmation email has been dispatched to your inbox.</span>
              </div>

              <div className="mt-8">
                <Button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      mobileNumber: "",
                      country: "",
                      customCountry: "",
                      interests: ["habits", "productivity"],
                      privacyConsent: false,
                      marketingConsent: true,
                      honeypot: "",
                    });
                  }}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                >
                  Register Another Member
                </Button>
              </div>
            </div>
          ) : (
            /* Registration Form */
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Anti-spam Honeypot field (hidden from human users) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="hp_field">Do not fill this field</label>
                <input
                  id="hp_field"
                  type="text"
                  name="honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={(e) =>
                    setFormData({ ...formData, honeypot: e.target.value })
                  }
                />
              </div>

              {/* Error Alert */}
              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start gap-2.5 animate-in fade-in">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Field 1: Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-bold text-[#182230] uppercase tracking-wider mb-2"
                >
                  Full Name <span className="text-red-500 font-semibold">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  placeholder="e.g. Alex Vance"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full h-12 px-4 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#CBD5E1] text-[#182230] text-sm placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#182230]/15 focus:border-[#182230] transition-colors"
                />
              </div>

              {/* Field 2: Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold text-[#182230] uppercase tracking-wider mb-2"
                >
                  Email Address <span className="text-red-500 font-semibold">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full h-12 px-4 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#CBD5E1] text-[#182230] text-sm placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#182230]/15 focus:border-[#182230] transition-colors"
                />
              </div>

              {/* Two-column layout: Mobile Number & Country Selection Dropdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
                {/* Field 3: Mobile Number */}
                <div>
                  <label
                    htmlFor="mobileNumber"
                    className="block text-xs font-bold text-[#182230] uppercase tracking-wider mb-2"
                  >
                    Mobile Number{" "}
                    <span className="text-[#94A3B8] font-normal lowercase">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="mobileNumber"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.mobileNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, mobileNumber: e.target.value })
                    }
                    className="w-full h-12 px-4 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#CBD5E1] text-[#182230] text-sm placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#182230]/15 focus:border-[#182230] transition-colors"
                  />
                </div>

                {/* Field 4: Country Selection Dropdown */}
                <div>
                  <label
                    htmlFor="country"
                    className="block text-xs font-bold text-[#182230] uppercase tracking-wider mb-2"
                  >
                    Country <span className="text-red-500 font-semibold">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="country"
                      required
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      className={`w-full h-12 pl-4 pr-10 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#CBD5E1] text-sm focus:outline-none focus:ring-2 focus:ring-[#182230]/15 focus:border-[#182230] transition-colors appearance-none cursor-pointer ${
                        formData.country ? "text-[#182230]" : "text-[#94A3B8]"
                      }`}
                    >
                      <option value="" disabled className="text-[#94A3B8]">
                        Select your country
                      </option>
                      {COUNTRIES.map((c) => (
                        <option key={c} value={c} className="text-[#182230]">
                          {c}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Field 4b: Country Text Input (renders smoothly when "Other" is selected) */}
              {formData.country === "Other" && (
                <div className="animate-in fade-in slide-in-from-top-1 duration-200">
                  <label
                    htmlFor="customCountry"
                    className="block text-xs font-bold text-[#182230] uppercase tracking-wider mb-2"
                  >
                    Specify Your Country <span className="text-red-500 font-semibold">*</span>
                  </label>
                  <input
                    id="customCountry"
                    type="text"
                    required
                    placeholder="Enter your country name"
                    value={formData.customCountry}
                    onChange={(e) =>
                      setFormData({ ...formData, customCountry: e.target.value })
                    }
                    className="w-full h-12 px-4 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#CBD5E1] text-[#182230] text-sm placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#182230]/15 focus:border-[#182230] transition-colors"
                  />
                </div>
              )}

              {/* Field 5: Interested Features Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <label
                  htmlFor="features-trigger"
                  className="block text-xs font-bold text-[#182230] uppercase tracking-wider mb-2"
                >
                  Interested Features{" "}
                  <span className="text-[#94A3B8] font-normal lowercase">
                    (select all that apply)
                  </span>
                </label>

                {/* Dropdown Toggle Trigger */}
                <button
                  id="features-trigger"
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded={isFeatureDropdownOpen}
                  onClick={() => setIsFeatureDropdownOpen(!isFeatureDropdownOpen)}
                  className="w-full h-12 px-4 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#CBD5E1] text-[#182230] text-sm text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#182230]/15 focus:border-[#182230] transition-colors cursor-pointer"
                >
                  <span className="truncate">
                    {formData.interests.length === 0 ? (
                      <span className="text-[#94A3B8]">
                        Select interested features...
                      </span>
                    ) : (
                      <span>
                        <span className="font-semibold text-[#182230]">
                          {formData.interests.length} selected:{" "}
                        </span>
                        <span className="text-[#64748B]">
                          {selectedInterestLabels
                            .map((i) => i.label.split("&")[0].trim())
                            .join(", ")}
                        </span>
                      </span>
                    )}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#94A3B8] shrink-0 ml-2 transition-transform duration-200 ${
                      isFeatureDropdownOpen ? "rotate-180 text-[#182230]" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu Popover */}
                {isFeatureDropdownOpen && (
                  <div
                    role="listbox"
                    aria-multiselectable="true"
                    className="absolute z-30 left-0 right-0 mt-2 bg-white border border-[#E5E7EB] rounded-2xl shadow-xl p-2.5 max-h-72 overflow-y-auto space-y-1 animate-in fade-in slide-in-from-top-2 duration-150"
                  >
                    <div className="px-2 py-1.5 text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider border-b border-[#EEF1F4] flex items-center justify-between mb-1">
                      <span>Available Platform Modules</span>
                      <span className="text-[#6FAF91]">
                        {formData.interests.length} checked
                      </span>
                    </div>

                    {AVAILABLE_INTERESTS.map((item) => {
                      const isSelected = formData.interests.includes(item.id);
                      return (
                        <div
                          key={item.id}
                          role="option"
                          aria-selected={isSelected}
                          onClick={() => toggleInterest(item.id)}
                          className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium cursor-pointer transition-colors ${
                            isSelected
                              ? "bg-[#F7F8FA] text-[#182230] font-semibold"
                              : "text-[#64748B] hover:bg-[#F7F8FA] hover:text-[#182230]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                                isSelected
                                  ? "bg-[#182230] border-[#182230] text-white"
                                  : "bg-white border-[#CBD5E1]"
                              }`}
                            >
                              {isSelected && <Check className="w-3 h-3 text-white" />}
                            </div>
                            <span>{item.label}</span>
                          </div>
                          {isSelected && (
                            <span className="text-[10px] text-[#6FAF91] font-semibold uppercase tracking-wider">
                              Selected
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Selected Features Pill Tags */}
                {formData.interests.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {selectedInterestLabels.map((item) => (
                      <span
                        key={item.id}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-[#E5E7EB] text-[11px] font-medium text-[#182230] shadow-2xs"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6FAF91]" />
                        <span>{item.label}</span>
                        <button
                          type="button"
                          onClick={(e) => removeInterest(item.id, e)}
                          aria-label={`Remove ${item.label}`}
                          className="hover:text-red-500 rounded p-0.5 focus:outline-none transition-colors ml-0.5 cursor-pointer"
                        >
                          <XIcon className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Consent Checkboxes */}
              <div className="space-y-3.5 pt-2">
                {/* Field 6: Privacy Policy Consent (Required) */}
                <label className="flex items-start gap-3 cursor-pointer group select-none">
                  <div className="relative flex items-center mt-0.5">
                    <input
                      type="checkbox"
                      required
                      checked={formData.privacyConsent}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          privacyConsent: e.target.checked,
                        })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 rounded-md border border-[#CBD5E1] bg-white transition-all flex items-center justify-center peer-checked:bg-[#182230] peer-checked:border-[#182230] peer-focus-visible:ring-2 peer-focus-visible:ring-[#182230]/20 group-hover:border-[#94A3B8]">
                      {formData.privacyConsent && (
                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-[#64748B] leading-relaxed">
                    I agree to the{" "}
                    <Link
                      href="/privacy"
                      target="_blank"
                      className="text-[#182230] underline underline-offset-2 hover:text-[#334155] font-semibold"
                    >
                      Privacy Policy
                    </Link>{" "}
                    and consent to GoReflexa processing my registration information to administer early access.{" "}
                    <span className="text-red-500 font-semibold">*</span>
                  </span>
                </label>

                {/* Field 7: Marketing Communication Consent (Optional) */}
                <label className="flex items-start gap-3 cursor-pointer group select-none">
                  <div className="relative flex items-center mt-0.5">
                    <input
                      type="checkbox"
                      checked={formData.marketingConsent}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          marketingConsent: e.target.checked,
                        })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 rounded-md border border-[#CBD5E1] bg-white transition-all flex items-center justify-center peer-checked:bg-[#182230] peer-checked:border-[#182230] peer-focus-visible:ring-2 peer-focus-visible:ring-[#182230]/20 group-hover:border-[#94A3B8]">
                      {formData.marketingConsent && (
                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-[#64748B] leading-relaxed">
                    Keep me informed about feature previews, launch milestones, and founding member promotions. (Optional)
                  </span>
                </label>
              </div>

              {/* Field 8: Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  isLoading={isLoading}
                  className="w-full h-12 justify-center bg-[#182230] text-white hover:bg-[#334155] text-xs uppercase tracking-widest font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <Send className="w-4 h-4 text-[#6FAF91]" />
                  JOIN THE WAITLIST
                </Button>
              </div>

              {/* Privacy and Security Subtext */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-[#94A3B8]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#6FAF91]" />
                <span>Zero spam guarantee • Stored securely in Supabase PostgreSQL</span>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
