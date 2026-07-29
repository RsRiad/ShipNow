"use client";

import React from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "chip"
  | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isActive?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  isActive = false,
  leftIcon,
  rightIcon,
  children,
  fullWidth = false,
  className = "",
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  // Base classes
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition duration-150 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shrink-0 select-none";

  // Size classes
  const sizeClasses = {
    sm: "h-8 px-3 text-[12px] rounded-[8px] gap-1.5",
    md: "h-9 px-3.5 text-[13px] rounded-[10px] gap-2",
    lg: "h-10 px-4 text-[14px] rounded-[10px] gap-2",
  }[size];

  // Variant classes
  let variantClasses = "";
  switch (variant) {
    case "primary":
      variantClasses =
        "bg-heading hover:bg-dark-hover active:bg-black text-white shadow-2xs";
      break;

    case "secondary":
    case "outline":
      variantClasses =
        "bg-white border border-border text-heading hover:bg-surface active:bg-surface-alt shadow-2xs";
      break;

    case "chip":
      variantClasses = isActive
        ? "bg-heading text-white shadow-2xs"
        : "text-body hover:text-heading hover:bg-surface-alt";
      break;

    case "ghost":
      variantClasses =
        "bg-transparent text-body hover:text-heading hover:bg-surface-alt";
      break;

    default:
      variantClasses = "bg-heading text-white";
  }

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${widthClass} ${className}`}
      {...props}
    >
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {children && <span>{children}</span>}
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
}
