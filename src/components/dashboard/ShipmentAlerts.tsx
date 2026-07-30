"use client";

import React from "react";
import {
  MoreHorizontal,
  FileX,
  MapPinXInside,
  CloudLightning,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { alertSummaryStats, shipmentAlerts } from "@/data/data";

const ICON_MAP: Record<string, LucideIcon> = {
  customs: FileX,
  address: MapPinXInside,
  weather: CloudLightning,
};

export default function ShipmentAlerts() {
  return (
    <div className="w-full bg-card p-4 rounded-[12px] border border-border-card flex flex-col gap-3.5 h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-semibold text-[14px] md:text-[16px] leading-[19px] text-heading">
          Shipment Alerts
        </h3>
        <button
          type="button"
          aria-label="More options"
          className="w-7 h-7 rounded-lg bg-input hover:bg-hover flex items-center justify-center text-heading transition duration-150 cursor-pointer"
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Total Delays */}
      <div className="flex items-baseline gap-2">
        <span className="font-bold text-[20px] md:text-[22px] leading-[24px] text-heading">
          {alertSummaryStats.reduce((acc, curr) => acc + curr.count, 0)}
        </span>
        <span className="font-normal text-[12px] md:text-[13px] leading-[17px] text-body">
          Delays Detected
        </span>
      </div>

      {/* Summary Stat Cards */}
      <div className="flex gap-2">
        {alertSummaryStats.map((stat) => (
          <div
            key={stat.label}
            className="flex-1 bg-brand-light rounded-[8px] pt-2.5 px-2 pb-2 flex flex-col items-center gap-1.5 text-center"
          >
            <span className="font-bold text-[20px] leading-[22px] text-heading">
              {stat.count}
            </span>
            <span className="font-normal text-[11px] leading-[14px] text-heading">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Alerts List */}
      <div className="flex flex-col gap-6 py-1">
        {shipmentAlerts.map((alert, i) => {
          const Icon = ICON_MAP[alert.iconType] ?? FileX;
          return (
            <div key={`${alert.id}-${i}`} className="flex items-center gap-3">
              {/* Icon */}
              <div className="w-[32px] h-[32px] shrink-0 rounded-[8px] bg-input flex items-center justify-center">
                <Icon
                  className="w-[16px] h-[16px] text-heading"
                  strokeWidth={1.75}
                />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                <span className="font-semibold text-[13px] leading-[17px] text-heading truncate">
                  {alert.issue}
                </span>
                <div className="flex items-center gap-1.5 text-[10px] leading-[13px]">
                  <span className="font-bold text-brand">{alert.id}</span>
                  <span className="w-[3px] h-[3px] rounded-full bg-divider" />
                  <span className="font-normal text-body">
                    {alert.freight}
                  </span>
                  <span className="w-[3px] h-[3px] rounded-full bg-divider" />
                  <span className="font-normal text-body">
                    {alert.date}
                  </span>
                </div>
              </div>

              {/* Action */}
              <button
                type="button"
                aria-label="Open alert"
                className="shrink-0 text-body hover:text-heading transition cursor-pointer"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
