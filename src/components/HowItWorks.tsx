import React from "react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { UserCheck, Target, Flame, LineChart, ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "CREATE YOUR PERSONAL SPACE",
      subtitle: "Establish your private sanctuary",
      icon: UserCheck,
      description:
        "Define your personal baseline, select your core life pillars, and customize your daily focus schedule to match your natural energy rhythm.",
      points: ["Tailor life domains", "Set sleep and focus hours", "Clean baseline dashboard"],
    },
    {
      step: "02",
      title: "SET YOUR GOALS",
      subtitle: "Map your long-term vision",
      icon: Target,
      description:
        "Architect your short-term and long-term milestones. Deconstruct massive dreams into concrete weekly targets with realistic target dates.",
      points: ["Quarterly milestone breakdown", "Measurable KPI targets", "Visual progress meters"],
    },
    {
      step: "03",
      title: "BUILD YOUR HABITS",
      subtitle: "Automate daily execution",
      icon: Flame,
      description:
        "Form lasting daily rituals with Monday-to-Sunday planning, smart recurrence, streak maintenance, and flexible rest days.",
      points: ["M-S weekly calendar", "One-tap completion logging", "Streak shields & recovery"],
    },
    {
      step: "04",
      title: "TRACK YOUR PROGRESS",
      subtitle: "Observe compounded growth",
      icon: LineChart,
      description:
        "Review visual analytics, maintain your reflection journal, celebrate consistency milestones, and iteratively elevate your standards.",
      points: ["Velocity & consistency metrics", "Private reflection archive", "Data-driven self-mastery"],
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 sm:py-28 lg:py-32 bg-[#F7F8FA] border-y border-[#E5E7EB]"
    >
      <Container size="wide">
        <SectionHeading
          badge="FOUR-STEP METHODOLOGY"
          title="A Frictionless Path from Chaos to Mastery"
          subtitle="How GoReflexa guides you through a progressive system designed to cultivate lasting discipline and effortless consistency."
        />

        {/* Step-by-step Grid with clean connecting lines */}
        <div className="relative">
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[1px] bg-[#E5E7EB] -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="bg-white rounded-2xl p-7 sm:p-8 border border-[#E5E7EB] hover:border-[#CBD5E1] transition-all duration-200 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    {/* Step indicator header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#182230] text-white flex items-center justify-center font-bold text-sm shadow-2xs">
                        <Icon className="w-6 h-6 text-[#6FAF91]" />
                      </div>
                      <span className="font-mono text-sm font-extrabold text-[#94A3B8]">
                        STEP {item.step}
                      </span>
                    </div>

                    <div className="text-[10px] font-bold tracking-widest uppercase text-[#6FAF91] mb-1.5">
                      {item.subtitle}
                    </div>

                    <h3 className="text-lg font-bold text-[#182230] leading-snug mb-3">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="pt-4 border-t border-[#EEF1F4] space-y-1.5">
                    {item.points.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-center gap-2 text-xs text-[#334155]"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#6FAF91]" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom philosophy takeaway banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#64748B] bg-white px-5 py-2.5 rounded-full border border-[#E5E7EB] shadow-2xs">
            <span>Progressive onboarding designed to take less than 3 minutes</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#182230]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
