"use client";

import React from "react";

interface NavItemProps {
  href?: string;
  label: string;
  iconSrc: string;
  badgeCount?: number;
  isActive?: boolean;
  isTabletRail?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export default function NavItem({
  label,
  iconSrc,
  badgeCount,
  isActive = false,
  isTabletRail = false,
  onClick,
}: NavItemProps) {
  if (isTabletRail) {
    return (
      <button
        type="button"
        onClick={onClick}
        title={label}
        className={`relative flex items-center justify-center w-10 h-10 mx-auto my-1 rounded-[4px] transition duration-150 group cursor-pointer ${
          isActive
            ? "bg-brand-light text-brand-dark"
            : "text-body hover:bg-surface hover:text-heading"
        }`}
      >
        <div className="relative">
          <div
            className={`w-5 h-5 transition-colors duration-150 ${
              isActive ? "bg-brand-dark" : "bg-body group-hover:bg-heading"
            }`}
            style={{
              maskImage: `url(${iconSrc})`,
              WebkitMaskImage: `url(${iconSrc})`,
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskPosition: "center",
              maskSize: "contain",
              WebkitMaskSize: "contain",
            }}
            aria-hidden="true"
          />

          {badgeCount !== undefined && badgeCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-brand rounded-full ring-2 ring-white" />
          )}
        </div>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full flex items-center justify-between px-3 py-2.5 my-0.5 rounded-[4px] transition duration-150 group cursor-pointer text-left ${
        isActive
          ? "bg-brand-light text-brand-dark"
          : "text-body hover:bg-surface hover:text-heading"
      }`}
    >
      <div className="flex items-center gap-3 min-w-0">
        <div
          className={`w-5 h-5 shrink-0 transition-colors duration-150 ${
            isActive ? "bg-brand-dark" : "bg-body group-hover:bg-heading"
          }`}
          style={{
            maskImage: `url(${iconSrc})`,
            WebkitMaskImage: `url(${iconSrc})`,
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
            maskSize: "contain",
            WebkitMaskSize: "contain",
          }}
          aria-hidden="true"
        />
        <span
          className={`text-[14px] font-semibold leading-none truncate ${
            isActive ? "text-brand-dark" : "text-body group-hover:text-heading"
          }`}
        >
          {label}
        </span>
      </div>

      {badgeCount !== undefined && badgeCount > 0 && (
        <span className="min-w-[24px] h-[24px] px-1.5 flex items-center justify-center bg-brand text-white text-[12px] font-bold rounded-[8px] leading-none shrink-0 ml-2">
          {badgeCount}
        </span>
      )}
    </button>
  );
}
