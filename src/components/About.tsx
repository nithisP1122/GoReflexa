import React from "react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Compass, Sparkles, Target, Layers, Flame, Trophy } from "lucide-react";

export function About() {
  const foundations = [
    {
      icon: Compass,
      title: "Our Vision",
      text: "Help individuals create a more organized, disciplined, productive, and fulfilling life through thoughtful systems.",
      badge: "ASPIRATION",
    },
    {
      icon: Sparkles,
      title: "Our Mission",
      text: "Provide meaningful, friction-free digital tools that make continuous personal development simpler and more accessible.",
      badge: "PURSUIT",
    },
    {
      icon: Target,
      title: "Our Purpose",
      text: "Empower individuals to break self-imposed limitations and systematically become the best versions of themselves.",
      badge: "CORE DRIVE",
    },
  ];

  const pillars = [
    {
      number: "01",
      title: "Organize Your Life",
      icon: Layers,
      description:
        "Centralize your tasks, routines, notes, and schedules into a calm, unified sanctuary. Eliminate scattered to-do apps and mental clutter.",
      tag: "CLARITY & ORDER",
    },
    {
      number: "02",
      title: "Build Better Habits",
      icon: Flame,
      description:
        "Cultivate compounding routines with Monday-to-Sunday planning, habit streaks, rest day accommodations, and visual completion trackers.",
      tag: "DISCIPLINE & RITUALS",
    },
    {
      number: "03",
      title: "Achieve Your Goals",
      icon: Trophy,
      description:
        "Transform ambitious life aspirations into clear quarterly milestones. Connect your high-level vision directly to your daily actions.",
      tag: "MOMENTUM & RESULTS",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 sm:py-28 lg:py-32 bg-[#F7F8FA] border-y border-[#E5E7EB]"
    >
      <Container>
        {/* Section Header */}
        <SectionHeading
          badge="ABOUT GOREFLEXA"
          title="A BETTER SYSTEM FOR YOUR PERSONAL LIFE."
          subtitle="GoReflexa is an all-in-one personal lifestyle platform designed to help individuals organize their lives, build positive habits, manage goals, improve productivity, and develop consistency."
        />

        {/* Foundation Grid: Vision, Mission, Purpose */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {foundations.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-[#E5E7EB] hover:border-[#CBD5E1] transition-all duration-200 shadow-2xs hover:shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#EEF1F4] text-[#182230] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#182230]" />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#64748B] bg-[#F7F8FA] px-2.5 py-1 rounded-full border border-[#E5E7EB]">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#182230] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#EEF1F4]">
                  <span className="text-xs font-semibold text-[#6FAF91] tracking-wider uppercase">
                    Guiding Principle
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Three Pillars Title */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#64748B]">
            THE FOUNDATIONAL METHODOLOGY
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#182230] mt-1">
            Three Core Pillars of Transformation
          </h3>
        </div>

        {/* The 3 Pillars Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative bg-white rounded-2xl p-8 border border-[#E5E7EB] hover:border-[#182230] transition-all duration-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#94A3B8] tracking-widest">
                      PILLAR {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#182230] text-white flex items-center justify-center group-hover:bg-[#334155] transition-colors">
                      <Icon className="w-5 h-5 text-[#6FAF91]" />
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-[#182230] mb-2 group-hover:text-[#334155] transition-colors">
                    {pillar.title}
                  </h4>

                  <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-semibold">
                  <span className="text-[#334155] uppercase tracking-wider">
                    {pillar.tag}
                  </span>
                  <span className="text-[#6FAF91] font-bold">✓ Structured</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

