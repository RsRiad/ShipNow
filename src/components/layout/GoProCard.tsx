"use client";

import React from "react";
import { Sparkles } from "lucide-react";

interface GoProCardProps {
  isTabletRail?: boolean;
}

export default function GoProCard({ isTabletRail = false }: GoProCardProps) {
  if (isTabletRail) {
    return null;
  }

  return (
    <div className="mx-3 mt-auto mb-4 p-5 rounded-[12px] bg-heading text-white relative overflow-hidden shrink-0 shadow-sm">
      {/* Top Right Decorative Brand Parallelograms Accent */}
      <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none translate-x-3 -translate-y-2 opacity-60">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M22.6667 17.3333H36L29.3333 38.6667H16L22.6667 17.3333Z"
            fill="#5844A8"
          />
          <path
            d="M10.6667 1.33334H24L17.3333 22.6667H4L10.6667 1.33334Z"
            fill="#433282"
          />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col">
        {/* Title */}
        <h3 className="font-bold text-[20px] leading-[1.18] text-white tracking-tight">
          Loving <br />
          ShipNow <br />
          Free?
        </h3>

        {/* Description */}
        <p className="font-normal text-[11px] leading-[1.4] text-divider mt-2.5">
          Go Pro to access priority support, real-time tracking, and full
          analytics.
        </p>

        {/* Button */}
        <button
          type="button"
          className="mt-4 w-full py-3 px-3 bg-white hover:bg-gray-100 active:bg-gray-200 text-heading font-semibold text-[13px] leading-none rounded-[8px] transition duration-150 cursor-pointer text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2"
        >
          Go Pro Today
        </button>
      </div>
    </div>
  );
}
