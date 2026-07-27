"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export interface MetricCardProps {
  title: string;
  value: string;
  unit?: string;
  trendValue: string;
  trendPeriod: string;
  iconSrc: string;
}

export default function MetricCard({
  title,
  value,
  unit,
  trendValue,
  trendPeriod,
  iconSrc,
}: MetricCardProps) {
  return (
    <div className="w-full bg-[#FEFEFE] pl-4 pr-6 py-4 rounded-[12px] border border-[#F0F0F2] flex items-center justify-between gap-2 transition-all duration-200 hover:shadow-xs">
      {/* Left Column: Title, Metric Value, and Trend */}
      <div className="flex flex-col gap-2.5 flex-1 min-w-0">
        {/* Title */}
        <span className="font-semibold text-[12px] leading-[16px] text-[#757575]">
          {title}
        </span>

        {/* Metric Main Value Row */}
        <div className="flex items-baseline gap-1">
          <span className="font-bold text-[28px] leading-[31px] text-[#333333] tracking-tight">
            {value}
          </span>
          {unit && (
            <span className="font-normal text-[12px] leading-[16px] text-[#757575]">
              {unit}
            </span>
          )}
        </div>

        {/* Bottom Trend Row */}
        <div className="flex items-center gap-1.5">
          {/* Percentage Badge */}
          <div className="flex items-center gap-1 rounded-[10px]">
            <span className="w-4 h-4 rounded-full bg-[#D9F9E7] text-[#007837] flex items-center justify-center shrink-0">
              <ArrowUpRight className="w-2.5 h-2.5 stroke-[2.5]" />
            </span>
            <span className="font-normal text-[10px] leading-[13px] text-[#007837]">
              {trendValue}
            </span>
          </div>
          {/* Trend Period */}
          <span className="font-normal text-[10px] leading-[13px] text-[#757575]">
            {trendPeriod}
          </span>
        </div>
      </div>

      {/* Right Column: Icon Graphic Asset (SVG includes its own purple 42x42 box) */}
      <div className="w-[42px] h-[42px] shrink-0 flex items-center justify-center">
        <Image
          src={iconSrc}
          alt={title}
          width={42}
          height={42}
          className="w-[42px] h-[42px] object-contain"
        />
      </div>
    </div>
  );
}
