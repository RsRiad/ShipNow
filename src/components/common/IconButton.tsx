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
      variantClasses = "bg-[#232325] text-white hover:bg-[#1A1A1A]";
      break;
    case "outline":
      variantClasses = isActive
        ? "bg-[#856DF3] text-white border border-[#856DF3] shadow-2xs"
        : "bg-white border border-[#E5E5E7] text-[#333333] hover:bg-[#F5F5F7]";
      break;
    case "ghost":
      variantClasses = "bg-transparent text-[#757575] hover:text-[#1E293B]";
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
