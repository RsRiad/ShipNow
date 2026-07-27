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
            ? "bg-[#E3DDFF] text-[#2A1298]"
            : "text-[#757575] hover:bg-[#F5F5F7] hover:text-[#333333]"
        }`}
      >
        <div
          className={`w-5 h-5 transition-colors duration-150 ${
            isActive ? "bg-[#2A1298]" : "bg-[#757575] group-hover:bg-[#333333]"
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
          <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[18px] h-[18px] px-1 bg-[#856DF3] text-white text-[10px] font-bold rounded-[6px] border border-white">
            {badgeCount}
          </span>
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full flex items-center justify-between px-3 py-2.5 my-0.5 rounded-[4px] transition duration-150 group cursor-pointer text-left ${
        isActive
          ? "bg-[#E3DDFF] text-[#2A1298]"
          : "text-[#757575] hover:bg-[#F5F5F7] hover:text-[#333333]"
      }`}
    >
      <div className="flex items-center gap-3 min-w-0">
        <div
          className={`w-5 h-5 shrink-0 transition-colors duration-150 ${
            isActive ? "bg-[#2A1298]" : "bg-[#757575] group-hover:bg-[#333333]"
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
            isActive ? "text-[#2A1298]" : "text-[#757575] group-hover:text-[#333333]"
          }`}
        >
          {label}
        </span>
      </div>

      {badgeCount !== undefined && badgeCount > 0 && (
        <span className="min-w-[24px] h-[24px] px-1.5 flex items-center justify-center bg-[#856DF3] text-white text-[12px] font-bold rounded-[8px] leading-none shrink-0 ml-2">
          {badgeCount}
        </span>
      )}
    </button>
  );
}
