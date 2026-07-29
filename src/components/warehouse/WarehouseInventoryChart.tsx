"use client";

import React from "react";
import { MoreHorizontal } from "lucide-react";

export interface CategoryInventoryItem {
  id: string;
  name: string;
  percentage: number;
  count: string;
  fillType: "solid-purple" | "striped-purple" | "solid-dark" | "striped-dark" | "solid-gray" | "striped-gray";
  heightPercent: number;
}

const categoriesData: CategoryInventoryItem[] = [
  {
    id: "electronics",
    name: "Electronics",
    percentage: 25,
    count: "2,500",
    fillType: "solid-purple",
    heightPercent: 25,
  },
  {
    id: "apparel",
    name: "Apparel",
    percentage: 20,
    count: "2,000",
    fillType: "striped-purple",
    heightPercent: 20,
  },
  {
    id: "home-kitchen",
    name: "Home &\nKitchen",
    percentage: 18,
    count: "1,800",
    fillType: "solid-dark",
    heightPercent: 18,
  },
  {
    id: "beauty-health",
    name: "Beauty &\nHealth",
    percentage: 15,
    count: "1,500",
    fillType: "striped-dark",
    heightPercent: 15,
  },
  {
    id: "automotive",
    name: "Automotive\nParts",
    percentage: 12,
    count: "1,200",
    fillType: "solid-gray",
    heightPercent: 12,
  },
  {
    id: "sports",
    name: "Sports\nEquipment",
    percentage: 10,
    count: "1,000",
    fillType: "striped-gray",
    heightPercent: 10,
  },
];

export default function WarehouseInventoryChart() {
  const getBarStyle = (fillType: CategoryInventoryItem["fillType"]) => {
    switch (fillType) {
      case "solid-purple":
        return { backgroundColor: "var(--color-brand)" };
      case "striped-purple":
        return {
          background:
            "repeating-linear-gradient(-45deg, var(--color-brand), var(--color-brand) 6px, #9D8CF6 6px, #9D8CF6 12px)",
        };
      case "solid-dark":
        return { backgroundColor: "#2A2B2D" };
      case "striped-dark":
        return {
          background:
            "repeating-linear-gradient(-45deg, #2A2B2D, #2A2B2D 6px, #4B4B4E 6px, #4B4B4E 12px)",
        };
      case "solid-gray":
        return { backgroundColor: "#71717A" };
      case "striped-gray":
        return {
          background:
            "repeating-linear-gradient(-45deg, #71717A, #71717A 6px, #8E8E93 6px, #8E8E93 12px)",
        };
      default:
        return { backgroundColor: "var(--color-brand)" };
    }
  };

  // Track height calculation percentages
  const getTrackFillPercentage = (percentage: number) => {
    // Electronics 25% maps to ~36% track height, 10% maps to ~14%
    return Math.max(12, Math.round(percentage * 1.45));
  };

  return (
    <div className="w-full bg-white rounded-[20px] p-4 sm:p-5 border border-border/60 shadow-2xs flex flex-col justify-between gap-4 h-full">
      {/* Header Row */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-[18px] font-bold text-slate tracking-tight">
            Warehouse Inventory
          </h2>
          <button
            type="button"
            className="p-1 text-body hover:text-slate rounded-lg transition cursor-pointer"
            aria-label="More options"
          >
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-baseline gap-1.5">
          <span className="text-[24px] font-bold text-slate tracking-tight leading-none">
            10,000
          </span>
          <span className="text-[12px] font-normal text-body">
            packages
          </span>
        </div>
      </div>

      {/* Mobile List View (Only visible on screens smaller than sm) */}
      <div className="flex flex-col sm:hidden w-full pt-1.5">
        {categoriesData.map((category, idx) => (
          <div
            key={category.id}
            className={`flex items-center justify-between py-3.5 ${
              idx < categoriesData.length - 1
                ? "border-b border-dashed border-border"
                : ""
            }`}
          >
            {/* Left: Horizontal Progress Bar Track */}
            <div className="flex-1 h-12 bg-gradient-to-r from-[#F2F2F5] via-[#F6F6F9] to-[#FAFAFC] rounded-[10px] overflow-hidden p-0.5 border border-border/20">
              <div
                className="h-full rounded-[8px] transition-all duration-500 ease-out"
                style={{
                  width: `${category.percentage}%`,
                  ...getBarStyle(category.fillType),
                }}
              />
            </div>

            {/* Right: Category Info */}
            <div className="flex flex-col gap-0.5 items-end text-right min-w-[130px] shrink-0 ml-4">
              <span className="text-[14px] font-normal text-body">
                {category.name.replace("\n", " ")}
              </span>
              <div className="text-[13px] whitespace-nowrap">
                <span className="font-bold text-slate">
                  {category.percentage}%
                </span>
                <span className="font-normal text-body/60 mx-1">·</span>
                <span className="font-normal text-body/80">
                  {category.count}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Grid of 6 Category Columns (Tablet & Desktop only) */}
      <div className="hidden sm:grid grid-cols-6 gap-0 w-full pt-1">
        {categoriesData.map((category, idx) => (
          <div
            key={category.id}
            className={`flex flex-col items-center justify-between px-1 sm:px-1.5 min-h-[190px] ${
              idx < categoriesData.length - 1
                ? "border-r border-dashed border-border"
                : ""
            }`}
          >
            {/* Category Name */}
            <span className="text-[11px] sm:text-[12px] font-normal text-body text-center min-h-[32px] flex items-center justify-center leading-tight whitespace-pre-line">
              {category.name}
            </span>

            {/* Vertical Bar Container Track */}
            <div className="w-full flex-1 max-w-[44px] md:max-w-[85px] lg:max-w-[50px] h-[120px] mx-auto my-2 bg-gradient-to-b from-[#F2F2F5] via-[#F6F6F9] to-[#FAFAFC] rounded-[12px] flex flex-col justify-end overflow-hidden p-0.5">
              <div
                className="w-full rounded-[8px] transition-all duration-500 ease-out"
                style={{
                  height: `${getTrackFillPercentage(category.percentage)}%`,
                  ...getBarStyle(category.fillType),
                }}
              />
            </div>

            {/* Percentage & Count below bar */}
            <div className="text-[11px] sm:text-[12px] text-center whitespace-nowrap pt-0.5">
              <span className="font-bold text-slate">
                {category.percentage}%
              </span>
              <span className="font-normal text-body ml-1">
                · {category.count}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
