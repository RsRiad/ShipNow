"use client";

import React from "react";
import Image from "next/image";
import { Search, Plus, Minus, Truck } from "lucide-react";

export default function LiveTracking() {
  return (
    <div className="relative w-full bg-card p-3 sm:p-3.5 rounded-[12px] border border-border-card flex flex-col h-full overflow-hidden">
      {/* Map Container */}
      <div className="relative w-full h-[260px] sm:min-h-[340px] md:min-h-[360px] lg:min-h-[400px] xl:min-h-[420px] rounded-[10px] bg-surface overflow-hidden flex flex-col shrink-0">
        {/* Static Map Background */}
        <Image
          src="/Assets/static-map.png"
          alt="Live tracking map"
          fill
          className="object-cover"
          priority
        />

        {/* Map SVG Route Lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 600 360"
          preserveAspectRatio="none"
        >
          {/* Route line: dark segment */}
          <line
            x1="-10"
            y1="200"
            x2="300"
            y2="120"
            stroke="#262626"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Route line: active purple segment */}
          <line
            x1="300"
            y1="120"
            x2="610"
            y2="50"
            stroke="#856DF3"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>

        {/* Navigation Arrow Pin on Route (Centered responsively at 50% left, 33% top) */}
        <div className="absolute top-[33%] left-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
          <div className="relative flex items-center justify-center">
            {/* Soft purple aura glow ring */}
            <Image
              src="/Assets/NavigationArrow.svg"
              alt="Navigation Arrow"
              width={40}
              height={40}
              className="relative z-10 drop-shadow-md"
            />
          </div>
        </div>

        {/* Search Input Bar (Top Left) */}
        <div className="absolute top-3.5 left-3.5 right-3.5 sm:right-auto sm:w-[280px] z-10 bg-white rounded-[12px] px-3.5 py-2 flex items-center justify-between border border-border-input live-tracking-shadow">
          <input
            type="text"
            placeholder="Search by Shipping ID..."
            className="w-full bg-transparent text-[13px] text-heading placeholder-text-body outline-none font-normal"
            readOnly
          />
          <Search className="w-4 h-4 text-body shrink-0 ml-2" />
        </div>

        {/* Zoom Controls (+ / -) */}
        <div className="absolute bottom-3.5 right-3.5 sm:bottom-auto sm:top-3.5 z-10 bg-white rounded-[10px] flex flex-col border border-border-input overflow-hidden live-tracking-shadow-sm">
          <button
            type="button"
            aria-label="Zoom in"
            className="w-8 h-8 flex items-center justify-center text-heading hover:bg-surface transition cursor-pointer"
          >
            <Plus className="w-4 h-4" />
          </button>
          <div className="h-px bg-border-input" />
          <button
            type="button"
            aria-label="Zoom out"
            className="w-8 h-8 flex items-center justify-center text-heading hover:bg-surface transition cursor-pointer"
          >
            <Minus className="w-4 h-4" />
          </button>
        </div>

        {/* TABLET & DESKTOP FLOATING CARD (#SH8743921) -> INSIDE MAP CONTAINER */}
        <div className="hidden sm:flex absolute bottom-[18px] left-[18px] md:bottom-[20px] md:left-[20px] w-[355px] md:w-[375px] lg:w-[390px] max-w-[calc(100%-2.5rem)] z-10 bg-white rounded-[14px] px-5 py-4 border border-border-tracking flex-col gap-3 live-tracking-shadow">
          {/* Top Row: ID, Status Badges & Courier Info */}
          <div className="flex items-start justify-between gap-3 w-full">
            <div className="flex flex-col gap-0.5">
              <span className="font-bold text-[14px] leading-tight text-heading tracking-tight">
                #SH8743921
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="bg-brand-light text-heading font-semibold text-[10px] leading-none px-2 py-1 rounded-full whitespace-nowrap">
                  In Transit
                </span>
                <span className="font-normal text-[10px] leading-none text-body whitespace-nowrap">
                  On Schedule
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-0.5 text-right shrink-0">
              <span className="font-normal text-[10px] leading-none text-body">
                Courier:
              </span>
              <span className="font-bold text-[12px] leading-snug text-heading">
                Daniel Cooper
              </span>
              <span className="font-normal text-[10px] leading-none text-body">
                SkyLogix Express
              </span>
            </div>
          </div>

          {/* Progress Bar Row */}
          <div className="flex items-center gap-0 w-full my-0.5">
            <div className="w-3.5 h-3.5 rounded-full border-1 border-brand bg-white flex items-center justify-center shrink-0">
              <span className="w-2 h-2 rounded-full bg-brand" />
            </div>
            <div className="h-[4px] bg-brand flex-1" />
            <div className="w-5 h-5 rounded-full bg-brand flex items-center justify-center shrink-0 text-white shadow-xs">
              <Truck className="w-2.5 h-2.5 text-white" strokeWidth={2.2} />
            </div>
            <div className="h-[3px] bg-border-line flex-1" />
            <div className="w-3.5 h-3.5 rounded-full border-1 border-border-muted bg-white shrink-0" />
          </div>

          {/* Bottom Address Row */}
          <div className="flex items-start justify-between gap-3 w-full">
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="font-bold text-[12px] leading-tight text-heading truncate">
                San Francisco, CA, USA
              </span>
              <span className="font-normal text-[10px] sm:text-[11px] leading-tight text-body whitespace-nowrap">
                Mar 19, 2035 – 10:30 AM
              </span>
            </div>

            <div className="flex flex-col gap-0.5 text-right min-w-0 ml-auto">
              <span className="font-bold text-[12px] leading-tight text-heading truncate">
                New York, NY, USA
              </span>
              <span className="font-normal text-[10px] sm:text-[11px] leading-tight text-body whitespace-nowrap">
                Mar 23, 2035 – 03:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE ONLY TRACKING INFO SECTION (#SH8743921) */}
      <div className="flex sm:hidden flex-col gap-3.5 pt-3.5 px-1 bg-white">
        {/* Top Row */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <span className="font-bold text-[15px] leading-tight text-heading tracking-tight">
              #SH8743921
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="bg-brand-light text-heading font-semibold text-[11px] leading-none px-2.5 py-1 rounded-full">
                In Transit
              </span>
              <span className="font-normal text-[11px] leading-none text-body">
                On Schedule
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-0.5 text-right">
            <span className="font-normal text-[11px] leading-none text-body">
              Courier:
            </span>
            <span className="font-bold text-[13px] leading-snug text-heading">
              Daniel Cooper
            </span>
            <span className="font-normal text-[11px] leading-none text-body">
              SkyLogix Express
            </span>
          </div>
        </div>

        {/* Progress Bar Row */}
        <div className="flex items-center gap-0 w-full my-1">
          <div className="w-4 h-4 rounded-full border-2 border-brand bg-white flex items-center justify-center shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
          </div>
          <div className="h-[3px] bg-brand flex-1" />
          <div className="w-6 h-6 rounded-full bg-brand flex items-center justify-center shrink-0 text-white shadow-xs">
            <Truck className="w-3 h-3 text-white" strokeWidth={2.2} />
          </div>
          <div className="h-[3px] bg-border-line flex-1" />
          <div className="w-4 h-4 rounded-full border-2 border-border-muted bg-white shrink-0" />
        </div>

        {/* Bottom Address Row */}
        <div className="flex items-start justify-between gap-2 w-full">
          <div className="flex flex-col gap-0.5 max-w-[48%]">
            <span className="font-bold text-[11px] leading-tight text-heading">
              San Francisco, CA, USA
            </span>
            <span className="font-normal text-[10px] leading-tight text-body">
              Mar 19, 2035 – 10:30 AM
            </span>
          </div>

          <div className="flex flex-col gap-0.5 text-right max-w-[48%] ml-auto">
            <span className="font-bold text-[11px] leading-tight text-heading">
              New York, NY, USA
            </span>
            <span className="font-normal text-[10px] leading-tight text-body">
              Mar 23, 2035 – 03:00 PM
            </span>
            <span className="font-normal text-[10px] leading-tight text-body">
              (estimated)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
