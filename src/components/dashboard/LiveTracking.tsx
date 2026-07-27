"use client";

import React from "react";
import Image from "next/image";
import { Search, Plus, Minus, Truck } from "lucide-react";

export default function LiveTracking() {
  return (
    <div className="w-full bg-[#FEFEFE] p-3 rounded-[12px] border border-[#F0F0F2] flex flex-col h-full">
      {/* Map Area */}
      <div className="relative w-full flex-1 min-h-[170px] rounded-[8px] bg-[#F0F0F0] overflow-hidden">
        {/* Simulated map lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 445 280"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Road lines */}
          <line x1="0" y1="180" x2="445" y2="100" stroke="#C8C8CC" strokeWidth="2.5" />
          <line x1="0" y1="140" x2="445" y2="140" stroke="#C8C8CC" strokeWidth="1.5" />
          <line x1="100" y1="0" x2="100" y2="280" stroke="#C8C8CC" strokeWidth="1.5" />
          <line x1="280" y1="0" x2="280" y2="280" stroke="#C8C8CC" strokeWidth="1.5" />
          {/* Route line (black) */}
          <line x1="20" y1="175" x2="230" y2="135" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" />
          {/* Route line (purple) */}
          <line x1="230" y1="135" x2="445" y2="95" stroke="#856DF3" strokeWidth="3" strokeLinecap="round" />
        </svg>

        {/* Navigation Arrow Pin */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <Image
            src="/Assets/NavigationArrow.svg"
            alt="Navigation Arrow"
            width={48}
            height={48}
          />
        </div>

        {/* Search Bar */}
        <div className="absolute top-2.5 left-2.5 bg-[#FEFEFE] rounded-[10px] px-1 py-0.5 flex items-center gap-1 shadow-xs">
          <div className="flex items-center gap-2 px-2 py-1.5">
            <span className="font-normal text-[12px] leading-[16px] text-[#757575] whitespace-nowrap">
              Search by Shipping ID…
            </span>
          </div>
          <button type="button" className="w-7 h-7 rounded-[8px] flex items-center justify-center text-[#333333] hover:bg-[#F0F0F0] cursor-pointer">
            <Search className="w-4 h-4" />
          </button>
        </div>

        {/* Zoom Controls */}
        <div className="absolute top-2.5 right-2.5 bg-[#FEFEFE] rounded-[8px] flex flex-col shadow-xs overflow-hidden">
          <button type="button" className="w-7 h-7 flex items-center justify-center text-[#333333] hover:bg-[#F0F0F0] cursor-pointer">
            <Plus className="w-4 h-4" />
          </button>
          <div className="h-px bg-[#E5E5E7]" />
          <button type="button" className="w-7 h-7 flex items-center justify-center text-[#333333] hover:bg-[#F0F0F0] cursor-pointer">
            <Minus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Tracking Info Card */}
      <div className="mt-2.5 bg-[#FEFEFE] rounded-[12px] border border-[#F0F0F2] p-3 flex flex-col gap-3.5">
        {/* Row 1: ID + Status / Courier */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-bold text-[13px] leading-[17px] text-[#333333]">
              #SH8743921
            </span>
            <div className="flex items-center gap-1.5">
              <span className="bg-[#E3DDFF] text-[#856DF3] font-semibold text-[10px] leading-[13px] px-2 py-0.5 rounded-full">
                In Transit
              </span>
              <span className="font-normal text-[10px] leading-[13px] text-[#757575]">
                On Schedule
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-0.5 text-right">
            <span className="font-normal text-[10px] leading-[13px] text-[#757575]">Courier:</span>
            <span className="font-semibold text-[11px] leading-[15px] text-[#333333]">Daniel Cooper</span>
            <span className="font-normal text-[10px] leading-[13px] text-[#757575]">SkyLogix Express</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex flex-col gap-2.5">
          <div className="relative h-1 bg-[#E0E0E0] rounded-full">
            <div className="absolute left-0 top-0 h-full w-[68%] bg-[#856DF3] rounded-full" />
            {/* Origin dot */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#856DF3] border-2 border-white shadow-sm" />
            {/* Truck icon */}
            <div className="absolute left-[68%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-5.5 h-5.5 rounded-full bg-[#856DF3] border-2 border-white shadow-sm flex items-center justify-center">
              <Truck className="w-2.5 h-2.5 text-white" strokeWidth={2} />
            </div>
            {/* Destination dot */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#E0E0E0] border-2 border-white shadow-sm" />
          </div>

          {/* Addresses */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-0.5">
              <span className="font-semibold text-[11px] leading-[15px] text-[#333333]">San Francisco, CA, USA</span>
              <span className="font-normal text-[10px] leading-[13px] text-[#757575]">Mar 19, 2035 – 10:30 AM</span>
            </div>
            <div className="flex flex-col gap-0.5 text-right">
              <span className="font-semibold text-[11px] leading-[15px] text-[#333333]">New York, NY, USA</span>
              <span className="font-normal text-[10px] leading-[13px] text-[#757575]">Mar 23, 2035 – 03:00 PM (estimated)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
