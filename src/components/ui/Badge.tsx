import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "green" | "charcoal" | "outline";
  className?: string;
  withDot?: boolean;
}

export function Badge({
  children,
  variant = "default",
  className = "",
  withDot = false,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-[#EEF1F4] text-[#334155] border-[#E5E7EB]",
    green: "bg-[#6FAF91]/10 text-[#3d705a] border-[#6FAF91]/30",
    charcoal: "bg-[#182230] text-white border-transparent",
    outline: "bg-transparent text-[#64748B] border-[#E5E7EB]",
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border transition-colors ${variantStyles} ${className}`}
      {...props}
    >
      {withDot && (
        <span className="w-1.5 h-1.5 rounded-full bg-[#6FAF91] animate-pulse" />
      )}
      {children}
    </span>
  );
}

