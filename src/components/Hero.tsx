"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { Countdown } from "./Countdown";
import {
  ArrowRight,
  Sparkles,
  Flame,
  CheckCircle2,
  Calendar,
  Target,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import { trackAnalytics } from "@/lib/analytics";

export function Hero() {
  const router = useRouter();
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-10 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 lg:pb-32 overflow-hidden bg-white"
    >
      {/* Subtle background ambient mesh */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#F7F8FA] rounded-full blur-3xl -z-10 pointer-events-none opacity-80" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#6FAF91]/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial & Conversion Content */}
          <div className="lg:col-span-6 flex flex-col items-start max-w-2xl">
            {/* Launch Announcement Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <Badge variant="green" withDot>
                Official Worldwide Launch • January 14, 2027
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-black tracking-tight text-[#182230] leading-[1.05]">
              GoReflexa
              <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-[38px] text-[#334155] font-bold mt-3 tracking-tight">
                Break Your Limits. Build Your Life.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg sm:text-xl text-[#64748B] leading-relaxed font-normal">
              Take control of your personal life with GoReflexa. Build better habits, organize
              your daily activities, achieve meaningful goals, and track your
              growth — all in one unified platform.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Button
                onClick={() => {
                  trackAnalytics.clickEarlyAccessCTA("hero_primary");
                  scrollTo("early-access");
                }}
                size="lg"
                className="bg-[#182230] text-white hover:bg-[#334155] shadow-md hover:shadow-lg text-sm uppercase tracking-wider font-bold py-4 px-8"
              >
                Join Early Access
                <ArrowRight className="w-4 h-4 text-[#6FAF91]" />
              </Button>

              <Button
                onClick={() => {
                  trackAnalytics.clickFeature("hero_explore_features");
                  scrollTo("features");
                }}
                variant="outline"
                size="lg"
                className="border-[#E5E7EB] text-[#182230] hover:bg-[#F7F8FA] text-sm uppercase tracking-wider font-semibold py-4 px-6"
              >
                Explore Features
              </Button>
            </div>

            {/* Trust Signal / Launch Countdown */}
            <div className="mt-10 sm:mt-12 pt-8 border-t border-[#E5E7EB] w-full">
              <Countdown />
            </div>
          </div>

          {/* Right Column: Premium Realistic Laptop Mockup & Minimal Desk Environment */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            {/* Ambient desk backdrop accessories */}
            <div className="relative w-full max-w-[620px]">
              {/* Minimalist Floating Accent 1: Consistency Streak (Desktop & Tablet) */}
              <div className="hidden sm:flex absolute -top-4 -left-3 sm:-left-6 z-20 bg-white/95 backdrop-blur-md border border-[#E5E7EB] rounded-2xl p-3 sm:p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#6FAF91]/15 text-[#3d705a] flex items-center justify-center font-bold">
                  <Flame className="w-5 h-5 text-[#6FAF91]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#6FAF91] uppercase tracking-wider">
                    28-Day Streak Active
                  </div>
                  <div className="text-xs font-semibold text-[#182230]">
                    Morning Deep Work Routine
                  </div>
                </div>
              </div>

              {/* Minimalist Floating Accent 2: Milestone Achieved (Desktop & Tablet) */}
              <div className="hidden sm:flex absolute -bottom-6 -right-2 sm:-right-4 z-20 bg-white/95 backdrop-blur-md border border-[#E5E7EB] rounded-2xl p-3 sm:p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#182230] text-[#6FAF91] flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5 text-[#6FAF91]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                    Milestone Progress
                  </div>
                  <div className="text-xs font-semibold text-[#182230]">
                    Q1 Fitness & Reading Target: 84%
                  </div>
                </div>
              </div>

              {/* Modern Laptop Mockup Wrapper */}
              <div className="relative mx-auto rounded-t-[24px] sm:rounded-t-[32px] p-2 sm:p-3 pb-0 bg-gradient-to-b from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] shadow-[0_25px_60px_-15px_rgba(24,34,48,0.18)]">
                {/* Laptop Camera dot */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#182230] border border-[#94A3B8]" />

                {/* Laptop Display Bezel */}
                <div className="bg-[#182230] rounded-t-[18px] sm:rounded-t-[24px] p-2 sm:p-2.5 pb-0">
                  {/* Laptop Screen Content: GoReflexa Interface Illustration */}
                  <div className="bg-white rounded-t-[14px] sm:rounded-t-[18px] overflow-hidden border border-[#E5E7EB] text-[#182230] text-[11px] sm:text-xs">
                    {/* App Window Top Bar */}
                    <div className="h-9 sm:h-11 bg-[#F7F8FA] border-b border-[#E5E7EB] px-3 sm:px-4 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]" />
                        <span className="ml-2 font-mono text-[10px] text-[#94A3B8] hidden sm:inline">
                          goreflexa.app/workspace
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-md bg-[#6FAF91]/15 text-[#3d705a] font-semibold text-[10px] flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6FAF91]" />
                          Focus Active
                        </span>
                      </div>
                    </div>

                    {/* App Internal Body Layout */}
                    <div className="grid grid-cols-12 min-h-[340px] sm:min-h-[380px] bg-white">
                      {/* Left Mini Sidebar */}
                      <div className="col-span-3 border-r border-[#E5E7EB] p-2.5 sm:p-3 bg-[#F7F8FA]/70 hidden sm:flex flex-col justify-between">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 px-1">
                            <div className="w-6 h-6 rounded-md bg-[#182230] text-white flex items-center justify-center font-bold text-[10px]">
                              GR
                            </div>
                            <span className="font-bold text-[11px] text-[#182230]">
                              Dashboard
                            </span>
                          </div>

                          <div className="space-y-1">
                            <div className="px-2 py-1.5 rounded-md bg-white border border-[#E5E7EB] font-semibold text-[#182230] text-[10px] flex items-center gap-1.5 shadow-2xs">
                              <Calendar className="w-3 h-3 text-[#6FAF91]" />
                              Today&apos;s Focus
                            </div>
                            <div className="px-2 py-1.5 rounded-md text-[#64748B] text-[10px] flex items-center gap-1.5 hover:text-[#182230]">
                              <Flame className="w-3 h-3 text-[#94A3B8]" />
                              Habits
                            </div>
                            <div className="px-2 py-1.5 rounded-md text-[#64748B] text-[10px] flex items-center gap-1.5 hover:text-[#182230]">
                              <Target className="w-3 h-3 text-[#94A3B8]" />
                              Goals
                            </div>
                            <div className="px-2 py-1.5 rounded-md text-[#64748B] text-[10px] flex items-center gap-1.5 hover:text-[#182230]">
                              <BookOpen className="w-3 h-3 text-[#94A3B8]" />
                              Journal
                            </div>
                            <div className="px-2 py-1.5 rounded-md text-[#64748B] text-[10px] flex items-center gap-1.5 hover:text-[#182230]">
                              <TrendingUp className="w-3 h-3 text-[#94A3B8]" />
                              Analytics
                            </div>
                          </div>
                        </div>

                        {/* User pill */}
                        <div className="pt-2 border-t border-[#E5E7EB] flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-[#182230] text-white flex items-center justify-center text-[10px] font-bold">
                            A
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-[#182230] leading-none">
                              Alex Vance
                            </span>
                            <span className="text-[9px] text-[#6FAF91] font-semibold">
                              Pro Member
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Main Dashboard Canvas */}
                      <div className="col-span-12 sm:col-span-9 p-3 sm:p-4 space-y-3.5 bg-white">
                        {/* Welcome bar */}
                        <div className="flex items-center justify-between pb-2 border-b border-[#E5E7EB]">
                          <div>
                            <div className="text-[10px] text-[#64748B] font-medium">
                              WEDNESDAY • WEEK 42
                            </div>
                            <div className="text-xs sm:text-sm font-bold text-[#182230]">
                              Good morning, Alex
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="px-2 py-1 rounded bg-[#F7F8FA] border border-[#E5E7EB] text-[10px] font-semibold text-[#182230] flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-[#6FAF91]" />
                              <span>Score: 94%</span>
                            </div>
                          </div>
                        </div>

                        {/* Top Widgets Grid */}
                        <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                          {/* Daily Focus Block */}
                          <div className="p-2.5 rounded-lg bg-[#F7F8FA] border border-[#E5E7EB]">
                            <div className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider mb-1.5 flex items-center justify-between">
                              <span>Daily Focus</span>
                              <span className="text-[#6FAF91] font-bold">3/4</span>
                            </div>
                            <div className="space-y-1.5">
                              <div className="flex items-center gap-1.5 text-[10px] text-[#182230]">
                                <span className="w-3 h-3 rounded-sm bg-[#6FAF91] text-white flex items-center justify-center text-[8px] font-bold">
                                  ✓
                                </span>
                                <span className="line-through text-[#94A3B8]">
                                  Deep Work 90m
                                </span>
                              </div>
                              <div className="flex items-center gap-1.5 text-[10px] text-[#182230]">
                                <span className="w-3 h-3 rounded-sm bg-[#6FAF91] text-white flex items-center justify-center text-[8px] font-bold">
                                  ✓
                                </span>
                                <span className="line-through text-[#94A3B8]">
                                  Hydration 2.5L
                                </span>
                              </div>
                              <div className="flex items-center gap-1.5 text-[10px] text-[#182230]">
                                <span className="w-3 h-3 rounded-sm border border-[#CBD5E1]" />
                                <span className="font-medium">
                                  Read 25 Pages
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Habit Grid Widget */}
                          <div className="p-2.5 rounded-lg bg-[#F7F8FA] border border-[#E5E7EB]">
                            <div className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider mb-1.5 flex items-center justify-between">
                              <span>Habit Grid (M-S)</span>
                              <span className="text-[#182230] font-bold">🔥 28d</span>
                            </div>
                            <div className="space-y-1">
                              <div className="text-[9px] text-[#64748B] truncate">
                                Meditation & Breath
                              </div>
                              <div className="grid grid-cols-7 gap-1">
                                {["M", "T", "W", "T", "F", "S", "S"].map(
                                  (day, idx) => (
                                    <div
                                      key={idx}
                                      className={`h-4 rounded flex items-center justify-center text-[8px] font-bold ${
                                        idx <= 3
                                          ? "bg-[#6FAF91] text-white"
                                          : "bg-[#E2E8F0] text-[#64748B]"
                                      }`}
                                    >
                                      {day}
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Goal Progress Banner */}
                        <div className="p-2.5 rounded-lg border border-[#E5E7EB] bg-white shadow-2xs">
                          <div className="flex items-center justify-between text-[10px] mb-1 font-semibold">
                            <span className="text-[#182230]">
                              Q1 Goal: Half Marathon Prep
                            </span>
                            <span className="text-[#6FAF91]">18 / 25 km</span>
                          </div>
                          <div className="w-full h-1.5 bg-[#EEF1F4] rounded-full overflow-hidden">
                            <div className="h-full bg-[#6FAF91] rounded-full w-[72%]" />
                          </div>
                        </div>

                        {/* Recent Reflection Note */}
                        <div className="p-2.5 rounded-lg bg-[#EEF1F4]/60 border border-[#E5E7EB] text-[10px] text-[#334155] italic">
                          &ldquo;Consistency isn&apos;t about intensity; it&apos;s about
                          showing up every single day without excuses.&rdquo;
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop Base Stand / Hinge */}
                <div className="h-3.5 sm:h-4 bg-gradient-to-r from-[#CBD5E1] via-[#E2E8F0] to-[#CBD5E1] rounded-b-[14px] sm:rounded-b-[18px] border-t border-[#94A3B8] shadow-md flex items-center justify-center">
                  <div className="w-16 sm:w-20 h-1 rounded-full bg-[#94A3B8]/60" />
                </div>
              </div>

              {/* Minimal desk environment accessories (Clean Plant & Books) */}
              <div className="mt-4 flex items-center justify-between text-xs text-[#94A3B8] px-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6FAF91]/50 inline-block" />
                  <span className="font-mono text-[10px] tracking-wider uppercase">
                    Minimalist Workspace Environment
                  </span>
                </div>
                <div className="text-[10px] text-[#64748B]">
                  High Performance SaaS UI Preview
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

