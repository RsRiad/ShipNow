"use client";

import React from "react";
import Image from "next/image";

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
    <div className="w-full bg-[#FEFEFE] p-4 sm:p-3 lg:p-4 rounded-[16px] sm:rounded-[12px] border border-[#F0F0F2] flex flex-col sm:flex-row justify-between gap-3 sm:gap-2 transition-all duration-200 hover:shadow-xs overflow-hidden">
      {/* --- MOBILE LAYOUT (< sm / < 640px) --- */}
      <div className="flex flex-col gap-2.5 sm:hidden w-full">
        {/* Top Row: Title on Left, Icon on Right */}
        <div className="flex items-center justify-between w-full">
          <span className="font-normal text-[13px] leading-[17px] text-[#757575]">
            {title}
          </span>
          <div className="w-10 h-10 shrink-0 flex items-center justify-center">
            <Image
              src={iconSrc}
              alt={title}
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
          </div>
        </div>

        {/* Bottom Row: Value + Unit on Left, Trend on Right */}
        <div className="flex items-baseline justify-between w-full gap-2 pt-0.5">
          {/* Value + Unit */}
          <div className="flex items-baseline gap-1">
            <span className="font-bold text-[28px] leading-[32px] text-[#333333] tracking-tight">
              {value}
            </span>
            {unit && (
              <span className="font-normal text-[12px] leading-[16px] text-[#757575]">
                {unit}
              </span>
            )}
          </div>

          {/* Trend Badge + Period */}
          <div className="flex items-center gap-1 shrink-0">
            <div className="flex items-center gap-1 rounded-[10px]">
              <span className="w-4 h-4 rounded-full bg-[#D9F9E7] text-[#007837] flex items-center justify-center shrink-0">
                <Image src="/Assets/CaretUp.svg" alt="Caret Up" width={12} height={12} />
              </span>
              <span className="font-medium text-[11px] leading-[14px] text-[#007837]">
                {trendValue}
              </span>
            </div>
            <span className="font-normal text-[11px] leading-[14px] text-[#757575]">
              {trendPeriod}
            </span>
          </div>
        </div>
      </div>

      {/* --- TABLET & DESKTOP LAYOUT (>= sm / >= 640px) --- */}
      <div className="hidden sm:flex items-center justify-between w-full gap-2">
        {/* Left Column: Title, Metric Value, and Trend */}
        <div className="flex flex-col gap-1.5 md:gap-2 flex-1 min-w-0">
          {/* Title */}
          <span className="font-semibold text-[11px] md:text-[11px] lg:text-[12px] leading-[16px] text-[#757575] truncate">
            {title}
          </span>

          {/* Metric Main Value Row */}
          <div className="flex items-baseline gap-1 min-w-0 flex-wrap">
            <span className="font-bold text-[22px] md:text-[20px] lg:text-[26px] xl:text-[28px] leading-[1.1] text-[#333333] tracking-tight whitespace-nowrap">
              {value}
            </span>
            {unit && (
              <span className="font-normal text-[10px] md:text-[10px] lg:text-[12px] leading-[16px] text-[#757575] whitespace-nowrap">
                {unit}
              </span>
            )}
          </div>

          {/* Bottom Trend Row */}
          <div className="flex items-center gap-1 min-w-0">
            {/* Percentage Badge */}
            <div className="flex items-center gap-0.5 rounded-[10px] shrink-0">
              <span className="w-4 h-4 rounded-full bg-[#D9F9E7] text-[#007837] flex items-center justify-center shrink-0">
                <Image src="/Assets/CaretUp.svg" alt="Caret Up" width={12} height={12} />
              </span>
              <span className="font-normal text-[9px] md:text-[10px] leading-[13px] text-[#007837]">
                {trendValue}
              </span>
            </div>
            {/* Trend Period */}
            <span className="font-normal text-[9px] md:text-[10px] leading-[13px] text-[#757575] truncate">
              {trendPeriod}
            </span>
          </div>
        </div>

        {/* Right Column: Icon Graphic Asset */}
        <div className="w-9 h-9 lg:w-[42px] lg:h-[42px] shrink-0 flex items-center justify-center">
          <Image
            src={iconSrc}
            alt={title}
            width={42}
            height={42}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
