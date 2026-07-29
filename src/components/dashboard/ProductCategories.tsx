"use client";

import React from "react";
import { MoreHorizontal } from "lucide-react";

interface Category {
  name: string;
  color: string;
  count: number;
  percentage: number;
}

const categories: Category[] = [
  { name: "Electronics", color: "#856DF3", count: 240, percentage: 24 },
  { name: "Home & Kitchen", color: "#E3DDFF", count: 200, percentage: 20 },
  { name: "Apparel", color: "#333333", count: 180, percentage: 18 },
  { name: "Beauty & Health", color: "#757575", count: 140, percentage: 14 },
  { name: "Sports & Outdoors", color: "#E0E0E0", count: 120, percentage: 12 },
  { name: "Automotive", color: "#F0F0F0", count: 120, percentage: 12 },
];

export default function ProductCategories() {
  return (
    <div className="w-full bg-card p-4 md:p-5 rounded-[12px] border border-border-card flex flex-col justify-between gap-4 h-full shadow-2xs">
      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-semibold text-[14px] md:text-[16px] leading-[19px] text-heading">
          Product Categories
        </h3>
        <button
          type="button"
          aria-label="More options"
          className="w-7 h-7 rounded-lg bg-input hover:bg-hover flex items-center justify-center text-heading transition duration-150 cursor-pointer"
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Total Products */}
      <div className="flex items-center justify-between">
        <span className="font-normal text-[12px] md:text-[14px] leading-[18px] text-body">
          Total Products
        </span>
        <span className="font-bold text-[20px] md:text-[22px] leading-[24px] text-heading">
          1,000
        </span>
      </div>

      {/* Horizontal Bar Chart */}
      <div className="flex gap-1 rounded-[8px] overflow-hidden h-[42px] md:h-[46px] shrink-0">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="h-full"
            style={{
              width: `${cat.percentage}%`,
              backgroundColor: cat.color,
              minWidth: 4,
            }}
          />
        ))}
      </div>

      {/* Category List */}
      <div className="flex-1 flex flex-col justify-between gap-2 py-1">
        {categories.map((cat) => (
          <div key={cat.name} className="flex items-center justify-between">
            {/* Dot + Name */}
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: cat.color }}
              />
              <span className="font-semibold text-[12px] md:text-[13px] leading-[16px] text-heading">
                {cat.name}
              </span>
            </div>

            {/* Count + Percentage */}
            <div className="flex items-center gap-2 bg-surface rounded-[6px] px-2 py-1">
              <span className="font-normal text-[11px] leading-[14px] text-body">
                {cat.count} products
              </span>
              <div className="w-px h-3.5 bg-divider" />
              <span className="font-extrabold text-[11px] leading-[14px] text-heading">
                {cat.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
