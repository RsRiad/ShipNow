"use client";

import React from "react";
import { MoreHorizontal } from "lucide-react";

interface CapacityUsageCardProps {
  percentage?: number;
  loadedShelves?: number;
  emptyShelves?: number;
}

export default function CapacityUsageCard({
  percentage = 62.5,
  loadedShelves = 40,
  emptyShelves = 24,
}: CapacityUsageCardProps) {
  // SVG Donut Circle Math
  const radius = 66;
  const strokeWidth = 14;
  const circumference = 2 * Math.PI * radius; // ~376.99
  const filledDash = (percentage / 100) * circumference;

  return (
    <div className="w-full bg-chart-dark rounded-[20px] p-4.5 sm:p-5 md:p-4 lg:p-5 text-white border border-[#3A3A3C]/40 shadow-2xs flex flex-col justify-between gap-4 sm:gap-5 md:gap-3.5 lg:gap-5">
      {/* Header Row */}
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-[18px] md:text-[16px] lg:text-[18px] font-bold text-white tracking-tight">
          Capacity Usage
        </h2>
        <button
          type="button"
          className="p-1 text-white/60 hover:text-white rounded-lg transition cursor-pointer"
          aria-label="More options"
        >
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Donut Chart Display */}
      <div className="relative flex items-center justify-center mt-1.5 -mb-1">
        <svg
          className="w-[175px] h-[175px] md:w-[145px] md:h-[145px] lg:w-[175px] lg:h-[175px] -rotate-90 transform"
          viewBox="0 0 150 150"
        >
          {/* Background Empty Ring (White) */}
          <circle
            cx="75"
            cy="75"
            r={radius}
            stroke="#FFFFFF"
            strokeWidth={strokeWidth}
            fill="transparent"
          />

          {/* Filled Usage Ring (Brand Purple) */}
          <circle
            cx="75"
            cy="75"
            r={radius}
            stroke="var(--color-brand)"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={`${filledDash} ${circumference}`}
            strokeLinecap="round"
            className="transition-all duration-500 ease-out"
          />
        </svg>

        {/* Center Label inside Donut */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-[12px] sm:text-[13px] md:text-[11px] lg:text-[13px] font-medium text-white/70 leading-none">
            Total Usage
          </span>
          <span className="text-[26px] sm:text-[28px] md:text-[22px] lg:text-[28px] font-bold text-white tracking-tight leading-none mt-1">
            {percentage}%
          </span>
        </div>
      </div>

      {/* Bottom Shelves Summary Row */}
      <div className="flex items-center justify-between px-1 pt-2">
        <div className="flex flex-col gap-0.5 items-end text-right">
          <span className="text-[12px] md:text-[11px] lg:text-[12px] font-normal text-white/70">Loaded</span>
          <div className="flex items-baseline gap-1">
            <span className="text-[17px] md:text-[15px] lg:text-[17px] font-bold text-white">
              {loadedShelves}
            </span>
            <span className="text-[13px] md:text-[11px] lg:text-[13px] font-medium text-white/80">
              shelves
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-0.5 items-start text-left">
          <span className="text-[12px] md:text-[11px] lg:text-[12px] font-normal text-white/70">Empty</span>
          <div className="flex items-baseline gap-1">
            <span className="text-[17px] md:text-[15px] lg:text-[17px] font-bold text-white">
              {emptyShelves}
            </span>
            <span className="text-[13px] md:text-[11px] lg:text-[13px] font-medium text-white/80">
              shelves
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
