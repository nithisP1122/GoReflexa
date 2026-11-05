import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  className?: string;
  asChild?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#334155]/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-[#182230] text-white hover:bg-[#334155] shadow-sm hover:shadow",
    secondary:
      "bg-[#EEF1F4] text-[#182230] hover:bg-[#E2E8F0] border border-[#E5E7EB]",
    outline:
      "bg-white text-[#182230] border border-[#E5E7EB] hover:bg-[#F7F8FA] hover:border-[#CBD5E1] shadow-xs",
    ghost:
      "bg-transparent text-[#64748B] hover:text-[#182230] hover:bg-[#F7F8FA]",
  }[variant];

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 h-8 gap-1.5",
    md: "text-sm px-5 py-2.5 h-10 gap-2",
    lg: "text-base px-6 py-3 h-12 gap-2.5 font-semibold",
  }[size];

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}

