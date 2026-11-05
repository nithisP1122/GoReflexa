"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import { siteConfig } from "@/config/site";
import { Clock } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
}

const emptySubscribe = () => () => {};

export function Countdown({
  className = "",
  variant = "hero",
}: {
  className?: string;
  variant?: "hero" | "banner" | "compact";
}) {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLive: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      // Target: January 14, 2027 00:00:00 Asia/Kolkata
      const target = new Date(siteConfig.launchDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isLive: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isLive: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) {
    // SSR skeleton placeholder to prevent layout shifts
    return (
      <div className={`flex items-center gap-2 sm:gap-4 ${className}`}>
        {["DAYS", "HOURS", "MINS", "SECS"].map((label) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] min-w-[68px] sm:min-w-[80px]"
          >
            <div className="h-7 w-8 bg-[#EEF1F4] rounded-md animate-pulse mb-1" />
            <div className="h-3 w-10 bg-[#EEF1F4] rounded-sm" />
          </div>
        ))}
      </div>
    );
  }

  if (timeLeft.isLive) {
    return (
      <div
        className={`inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-[#182230] text-white border border-[#334155] shadow-sm ${className}`}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#6FAF91] animate-ping" />
        <span className="text-base sm:text-lg font-bold tracking-wider">
          GoReflexa is Now Live!
        </span>
      </div>
    );
  }

  const units = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-2 text-xs font-mono font-medium ${className}`}>
        <Clock className="w-3.5 h-3.5 text-[#6FAF91]" />
        <span>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </span>
      </div>
    );
  }

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] uppercase tracking-widest text-[#64748B] font-semibold mb-2.5">
        <Clock className="w-3.5 h-3.5 text-[#6FAF91]" />
        <span>Official Launch Countdown • Jan 14, 2027</span>
      </div>
      <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-md">
        {units.map((unit) => (
          <div
            key={unit.label}
            className="flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] hover:border-[#CBD5E1] transition-all duration-150"
          >
            <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#182230] font-mono tracking-tight leading-none">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold text-[#64748B] tracking-wider uppercase mt-1">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
