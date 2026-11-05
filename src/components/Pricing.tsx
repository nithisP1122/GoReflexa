"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { pricingConfig, PricingPlan } from "@/config/pricing";
import { Check, Info, Sparkles, ArrowRight } from "lucide-react";
import { trackAnalytics } from "@/lib/analytics";

export function Pricing() {
  const router = useRouter();
  const scrollToEarlyAccess = (planName: string) => {
    trackAnalytics.clickPricingTier(planName);
    const element = document.getElementById("early-access");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#early-access");
    }
  };

  return (
    <section
      id="pricing"
      className="py-20 sm:py-28 lg:py-32 bg-[#F7F8FA] border-y border-[#E5E7EB]"
    >
      <Container size="wide">
        <SectionHeading
          badge="TRANSPARENT SUBSCRIPTION TIERS"
          title="Simple Plans for Compounding Growth"
          subtitle="Choose the level of personal mastery that fits your journey. Early access registrants receive special founding-member privileges at launch."
        />

        {/* Pricing Notice Pill */}
        <div className="max-w-md mx-auto mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#182230] shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#6FAF91]" />
            <span>Pre-launch Phase: All features open for Early Access members</span>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          {pricingConfig.plans.map((plan: PricingPlan) => {
            const isRecommended = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-200 relative ${
                  isRecommended
                    ? "bg-white border-2 border-[#182230] shadow-md ring-4 ring-[#182230]/5 lg:-translate-y-2"
                    : "bg-white border border-[#E5E7EB] hover:border-[#CBD5E1] shadow-2xs"
                }`}
              >
                {/* Popular recommendation tag */}
                {isRecommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#182230] text-white text-[11px] font-bold tracking-widest uppercase px-4 py-1 rounded-full shadow-xs">
                      {plan.badge || "RECOMMENDED"}
                    </span>
                  </div>
                )}

                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#94A3B8] tracking-widest">
                      {plan.name}
                    </span>
                    {!isRecommended && plan.badge && (
                      <Badge variant="default">{plan.badge}</Badge>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#64748B] mb-6 leading-relaxed min-h-[40px]">
                    {plan.description}
                  </p>

                  {/* Price Banner Display (Strictly follows "PRICING COMING SOON") */}
                  <div className="py-5 px-6 rounded-2xl bg-[#F7F8FA] border border-[#E5E7EB] mb-8 text-center">
                    <div className="text-base sm:text-lg font-extrabold text-[#182230] tracking-wider uppercase">
                      {pricingConfig.showExactPrices
                        ? plan.priceDisplay
                        : pricingConfig.comingSoonText}
                    </div>
                    <div className="text-[11px] text-[#64748B] font-medium mt-1">
                      {plan.billingPeriod}
                    </div>
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold text-[#182230] uppercase tracking-wider mb-2">
                      Included Capabilities:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#334155]">
                        <Check className="w-4 h-4 text-[#6FAF91] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}

                    {/* Excluded features if present */}
                    {plan.notIncluded && plan.notIncluded.length > 0 && (
                      <div className="pt-2 space-y-2 opacity-50">
                        {plan.notIncluded.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-[#94A3B8]">
                            <span className="w-4 h-4 text-center shrink-0 mt-0.5 font-bold">
                              —
                            </span>
                            <span className="leading-snug line-through">{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-6 border-t border-[#EEF1F4]">
                  <Button
                    onClick={() => scrollToEarlyAccess(plan.name)}
                    variant={isRecommended ? "primary" : "outline"}
                    className={`w-full justify-center text-xs uppercase tracking-wider font-bold py-3.5 ${
                      isRecommended
                        ? "bg-[#182230] text-white hover:bg-[#334155]"
                        : "border-[#E5E7EB] text-[#182230] hover:bg-[#F7F8FA]"
                    }`}
                  >
                    {plan.ctaLabel}
                    <ArrowRight className="w-3.5 h-3.5 text-[#6FAF91]" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Founding Member Guarantee Footer */}
        <div className="mt-14 max-w-2xl mx-auto p-5 rounded-2xl bg-white border border-[#E5E7EB] flex items-start gap-3.5 text-xs text-[#64748B] shadow-2xs">
          <Info className="w-5 h-5 text-[#6FAF91] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#182230]">Founding Member Guarantee:</strong>{" "}
            Subscribing during the pre-launch phase guarantees your rate will remain locked for the lifetime of your continuous membership upon official launch on January 14, 2027.
          </p>
        </div>
      </Container>
    </section>
  );
}

