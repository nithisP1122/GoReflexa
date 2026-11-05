import React from "react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import {
  Compass,
  Repeat,
  Zap,
  Award,
  Crosshair,
  Users2,
  CheckCircle2,
} from "lucide-react";

export function WhyGoReflexa() {
  const differentiators = [
    {
      icon: Compass,
      title: "Organize Different Aspects of Personal Life",
      description:
        "Replace 5 disjointed apps with one serene, unified architecture designed specifically for your personal wellbeing, growth, and routines.",
    },
    {
      icon: Repeat,
      title: "Build Consistent Habits",
      description:
        "Employ behavioral psychology frameworks, streak retention, and rest day options that ensure habits integrate naturally into your identity.",
    },
    {
      icon: Zap,
      title: "Improve Daily Productivity",
      description:
        "Eliminate decision fatigue every morning with priority quadrants, automated rollover tasks, and clear 24-hour routine time-blocks.",
    },
    {
      icon: Award,
      title: "Track Personal Achievements",
      description:
        "Turn ephemeral daily work into permanent personal history. Celebrate milestones and observe how every 1% daily gain compounds.",
    },
    {
      icon: Crosshair,
      title: "Work Towards Meaningful Goals",
      description:
        "Prevent grand goals from fading into oblivion. Connect high-level aspirations to weekly checkpoints and daily actions.",
    },
    {
      icon: Users2,
      title: "Connect with a Supportive Community",
      description:
        "Surround yourself with disciplined peers who share your values of relentless growth, authenticity, and mutual elevation.",
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 lg:py-32 bg-white">
      <Container size="wide">
        <SectionHeading
          badge="WHY GOREFLEXA"
          title="Engineered for People Who Demand More From Life"
          subtitle="Most productivity tools are made for corporate managers. GoReflexa is built entirely for your individual life, personal sovereignty, and compounding growth."
        />

        {/* Editorial 2-Column Split: Key Differentiators Grid & The Founder's Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: 6 Value Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {differentiators.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-[#F7F8FA] border border-[#E5E7EB] hover:border-[#CBD5E1] transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] text-[#182230] flex items-center justify-center mb-4 shadow-2xs">
                      <Icon className="w-5 h-5 text-[#6FAF91]" />
                    </div>
                    <h3 className="text-base font-bold text-[#182230] mb-2 leading-snug">
                      {diff.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#EEF1F4] flex items-center gap-1.5 text-[11px] font-semibold text-[#334155]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6FAF91]" />
                    <span>Verified Core Advantage</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Editorial Manifesto Card */}
          <div className="lg:col-span-5 bg-[#182230] text-white rounded-3xl p-8 sm:p-10 lg:p-12 flex flex-col justify-between shadow-lg relative overflow-hidden">
            {/* Ambient subtle green glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#6FAF91]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-mono font-semibold tracking-wider uppercase mb-8 border border-white/10">
                OUR PHILOSOPHY
              </div>

              <blockquote className="text-xl sm:text-2xl font-serif italic text-white/95 leading-relaxed mb-8">
                &ldquo;You do not rise to the level of your goals. You fall to
                the level of your systems. GoReflexa is the system designed
                to carry you forward even when motivation runs dry.&rdquo;
              </blockquote>

              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                Too many ambitious people are overwhelmed by disconnected apps,
                unfocused to-do lists, and broken habit streaks. We built GoReflexa
                to bring clarity, discipline, and calm intentionality
                back to your daily life.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-white tracking-wide">
                  GoReflexa Labs
                </div>
                <div className="text-xs text-[#6FAF91] font-semibold tracking-wider uppercase mt-0.5">
                  Launching January 14, 2027
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-black text-sm text-[#6FAF91]">
                GR
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
