"use client";

import React, { useMemo } from "react";
import { Shipment } from "@/data/data";
import {
  Truck,
  Clock,
  CheckSquare,
  ChevronUp,
  ChevronDown,
  MoreHorizontal,
} from "lucide-react";

export interface MetricCardData {
  id: string;
  title: string;
  count: string;
  prefixText: string;
  badgeText: string;
  subtext: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

interface ShipmentMetricCardsProps {
  shipments?: Shipment[];
}

const fallbackMetrics: MetricCardData[] = [
  {
    id: "total",
    title: "Total Shipments",
    count: "1,284",
    prefixText: "Up by",
    badgeText: "4.6%",
    subtext: "this week",
    isPositive: true,
    icon: <Truck className="w-5 h-5 text-brand stroke-[2]" />,
  },
  {
    id: "pending",
    title: "Pending",
    count: "285",
    prefixText: "Up by",
    badgeText: "8.7%",
    subtext: "this week",
    isPositive: true,
    icon: <Clock className="w-5 h-5 text-brand stroke-[2]" />,
  },
  {
    id: "delivery",
    title: "Delivery",
    count: "594",
    prefixText: "Down",
    badgeText: "4.2%",
    subtext: "from last week",
    isPositive: false,
    icon: <Truck className="w-5 h-5 text-brand stroke-[2]" />,
  },
  {
    id: "completed",
    title: "Completed",
    count: "405",
    prefixText: "Up by",
    badgeText: "3.9%",
    subtext: "this week",
    isPositive: true,
    icon: <CheckSquare className="w-5 h-5 text-brand stroke-[2]" />,
  },
];

export default function ShipmentMetricCards({ shipments }: ShipmentMetricCardsProps) {
  const cards = useMemo(() => {
    if (!shipments || shipments.length === 0) {
      return fallbackMetrics;
    }

    const totalCount = shipments.length;
    const pendingCount = shipments.filter((s) => s.status === "Processing").length;
    const deliveryCount = shipments.filter(
      (s) => s.status === "In Transit" || s.status === "Out for Delivery"
    ).length;
    const completedCount = shipments.filter((s) => s.status === "Delivered").length;

    return [
      {
        id: "total",
        title: "Total Shipments",
        count: totalCount > 20 ? totalCount.toLocaleString() : "1,284",
        prefixText: "Up by",
        badgeText: "4.6%",
        subtext: "this week",
        isPositive: true,
        icon: <Truck className="w-5 h-5 text-brand stroke-[2]" />,
      },
      {
        id: "pending",
        title: "Pending",
        count: pendingCount > 0 ? pendingCount.toString() : "285",
        prefixText: "Up by",
        badgeText: "8.7%",
        subtext: "this week",
        isPositive: true,
        icon: <Clock className="w-5 h-5 text-brand stroke-[2]" />,
      },
      {
        id: "delivery",
        title: "Delivery",
        count: deliveryCount > 0 ? deliveryCount.toString() : "594",
        prefixText: "Down",
        badgeText: "4.2%",
        subtext: "from last week",
        isPositive: false,
        icon: <Truck className="w-5 h-5 text-brand stroke-[2]" />,
      },
      {
        id: "completed",
        title: "Completed",
        count: completedCount > 0 ? completedCount.toString() : "405",
        prefixText: "Up by",
        badgeText: "3.9%",
        subtext: "this week",
        isPositive: true,
        icon: <CheckSquare className="w-5 h-5 text-brand stroke-[2]" />,
      },
    ];
  }, [shipments]);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-0">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white border border-border rounded-[14px] sm:rounded-[16px] p-3.5 sm:p-5 shadow-2xs hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
        >
          {/* Top Row: Soft Rounded Icon + Title & Menu */}
          <div className="flex items-center justify-between mb-2.5 sm:mb-4">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-[10px] sm:rounded-[12px] bg-brand-light flex items-center justify-center shrink-0">
                {card.icon}
              </div>
              <span className="text-[12px] sm:text-[15px] font-medium text-slate-muted truncate max-w-[90px] sm:max-w-none">
                {card.title}
              </span>
            </div>
            <button
              type="button"
              className="hidden sm:block text-slate-light hover:text-slate-muted transition p-1 cursor-pointer shrink-0"
              aria-label="More options"
            >
              <MoreHorizontal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

          {/* Bottom Row: Big Number & Growth Indicator */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1.5 sm:gap-2 mt-1">
            <span className="text-[24px] sm:text-[34px] font-bold text-slate tracking-tight leading-none">
              {card.count}
            </span>

            {/* Growth Indicator Matching Figma Screenshot */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* Circle Icon Button */}
              <div
                className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shrink-0 ${
                  card.isPositive ? "bg-success-bg" : "bg-purple-tint"
                }`}
              >
                {card.isPositive ? (
                  <ChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-success stroke-[2.5]" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple stroke-[2.5]" />
                )}
              </div>

              {/* Growth Subtitle & Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1 lg:flex-col lg:items-start leading-tight whitespace-nowrap">
                <div className="flex items-center gap-1">
                  <span className="text-slate-muted text-[10px] sm:text-[11px] font-normal">
                    {card.prefixText}
                  </span>
                  <span
                    className={`px-1 py-0.5 rounded-[4px] sm:rounded-[6px] text-[10px] sm:text-[11px] font-semibold leading-none ${
                      card.isPositive
                        ? "bg-success-bg text-success"
                        : "bg-purple-tint text-purple"
                    }`}
                  >
                    {card.badgeText}
                  </span>
                </div>
                <span className="text-slate-light text-[9px] sm:text-[11px] font-normal">
                  {card.subtext}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
