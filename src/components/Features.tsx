"use client";

import React, { useState } from "react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { featuresData, FeatureItem } from "@/config/features";
import {
  CheckSquare,
  Flame,
  Target,
  Calendar,
  BookOpen,
  TrendingUp,
  Users,
  BarChart3,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { trackAnalytics } from "@/lib/analytics";

const iconMap: Record<string, React.ElementType> = {
  CheckSquare,
  Flame,
  Target,
  Calendar,
  BookOpen,
  TrendingUp,
  Users,
  BarChart3,
};

export function Features() {
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem>(
    featuresData[0]
  );

  const handleSelect = (feat: FeatureItem) => {
    setSelectedFeature(feat);
    trackAnalytics.clickFeature(feat.title);
  };

  return (
    <section id="features" className="py-20 sm:py-28 lg:py-32 bg-white">
      <Container size="wide">
        <SectionHeading
          badge="COMPLETE PRODUCT ECOSYSTEM"
          title="Designed for Total Personal Mastery"
          subtitle="Explore the eight integrated engines built to eliminate chaos, cultivate consistency, and accelerate your life goals."
        />

        {/* Feature Cards Grid (8 Features) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featuresData.map((item) => {
            const Icon = iconMap[item.iconName] || CheckSquare;
            const isSelected = selectedFeature.id === item.id;

            return (
              <div
                key={item.id}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                onClick={() => handleSelect(item)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSelect(item);
                  }
                }}
                className={`group cursor-pointer rounded-2xl p-6 border transition-all duration-200 flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#182230]/20 ${
                  isSelected
                    ? "bg-[#F7F8FA] border-[#182230] shadow-sm ring-1 ring-[#182230]/10"
                    : "bg-white border-[#E5E7EB] hover:border-[#CBD5E1] hover:bg-[#F7F8FA]/50"
                }`}
              >
                <div>
                  {/* Top Bar with Number, Badge, and Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#94A3B8]">
                      {item.number}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-[#182230] text-[#6FAF91]"
                          : "bg-[#EEF1F4] text-[#182230] group-hover:bg-[#182230] group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {item.badge && (
                    <div className="mb-2">
                      <span className="inline-block text-[9px] font-bold tracking-widest text-[#6FAF91] bg-[#6FAF91]/10 px-2 py-0.5 rounded border border-[#6FAF91]/30">
                        {item.badge}
                      </span>
                    </div>
                  )}

                  <h3 className="text-lg font-bold text-[#182230] group-hover:text-[#334155] transition-colors mb-1.5">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#64748B] font-medium mb-3">
                    {item.tagline}
                  </p>

                  <p className="text-xs text-[#64748B] leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E5E7EB] flex items-center justify-between text-[11px]">
                  <span
                    className={`font-semibold ${
                      isSelected ? "text-[#182230]" : "text-[#94A3B8]"
                    }`}
                  >
                    {item.bulletPoints.length} core capabilities
                  </span>
                  <span className="text-[#6FAF91] font-bold">
                    {isSelected ? "Active View" : "Click to Inspect"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Feature Deep Dive Showcase Banner */}
        <div className="bg-[#F7F8FA] rounded-2xl border border-[#E5E7EB] p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left detail column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#94A3B8]">
                  FEATURE {selectedFeature.number} IN DEPTH
                </span>
                {selectedFeature.isUpcoming && (
                  <span className="text-[10px] font-bold text-[#6FAF91] bg-[#6FAF91]/10 px-2 py-0.5 rounded border border-[#6FAF91]/30">
                    ROADMAP • UPCOMING
                  </span>
                )}
              </div>

              <h4 className="text-2xl sm:text-3xl font-extrabold text-[#182230]">
                {selectedFeature.title}
              </h4>

              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                {selectedFeature.description}
              </p>

              <div className="p-3 sm:p-4 rounded-xl bg-white border border-[#E5E7EB] text-xs sm:text-sm font-medium text-[#334155] flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#6FAF91] shrink-0" />
                <span>{selectedFeature.highlight}</span>
              </div>
            </div>

            {/* Right bullet points breakdown */}
            <div className="lg:col-span-6 bg-white rounded-xl p-5 sm:p-6 border border-[#E5E7EB]">
              <div className="text-xs font-bold text-[#182230] uppercase tracking-wider mb-4">
                Confirmed Specifications:
              </div>
              <ul className="space-y-2.5">
                {selectedFeature.bulletPoints.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]"
                  >
                    <CheckCircle className="w-4 h-4 text-[#6FAF91] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

