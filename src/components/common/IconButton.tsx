"use client";

import React from "react";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  variant?: "outline" | "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  isActive?: boolean;
}

export default function IconButton({
  icon,
  variant = "outline",
  size = "md",
  isActive = false,
  className = "",
  disabled,
  type = "button",
  ...props
}: IconButtonProps) {
  const baseClasses =
    "flex items-center justify-center font-medium transition duration-150 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shrink-0";

  const sizeClasses = {
    sm: "w-7 h-7 rounded-[7px]",
    md: "w-8 h-8 rounded-[8px]",
    lg: "w-10 h-10 rounded-[10px]",
  }[size];

  let variantClasses = "";
  switch (variant) {
    case "primary":
      variantClasses = "bg-heading text-white hover:bg-dark-hover";
      break;
    case "outline":
      variantClasses = isActive
        ? "bg-brand text-white border border-brand shadow-2xs"
        : "bg-white border border-border text-heading hover:bg-surface";
      break;
    case "ghost":
      variantClasses = "bg-transparent text-body hover:text-slate";
      break;
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
}
