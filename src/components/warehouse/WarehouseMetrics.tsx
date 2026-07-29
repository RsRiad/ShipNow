"use client";

import React from "react";
import { TrendingUp } from "lucide-react";

export interface MetricItem {
  id: string;
  label: string;
  value: string;
  unit?: string;
  change: string;
}

const defaultMetrics: MetricItem[] = [
  {
    id: "sku",
    label: "Total SKU",
    value: "285",
    change: "+2.58%",
  },
  {
    id: "on-hand",
    label: "Quantity on Hand",
    value: "12,450",
    unit: "units",
    change: "+4.37%",
  },
  {
    id: "capacity",
    label: "Capacity Usage",
    value: "62.5%",
    unit: "Full",
    change: "+1.54%",
  },
];

export default function WarehouseMetrics() {
  return (
    <div className="w-full flex flex-row lg:flex-col gap-2 justify-between h-full">
      {defaultMetrics.map((item) => (
        <div
          key={item.id}
          className="w-full bg-white rounded-[14px] p-3 sm:p-3.5 md:p-4 lg:p-4.5 border border-border/60 shadow-2xs flex flex-col gap-3 justify-between flex-1 min-w-0"
        >
          {/* Label */}
          <span className="text-[13px] md:text-[14px] font-medium text-body/80 leading-tight whitespace-normal break-words">
            {item.label}
          </span>

          {/* Value and Growth Badge Stack */}
          <div className="flex flex-col gap-2 mt-auto">
            <span className="text-[20px] md:text-[24px] lg:text-[26px] font-bold text-slate tracking-tight leading-none">
              {item.value}
            </span>

            {/* Growth Badge */}
            <div className="flex items-center gap-1 bg-success-bg text-success px-2 py-0.5 rounded-full text-[10px] md:text-[11px] font-normal shrink-0 w-fit">
              <TrendingUp className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>{item.change}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
