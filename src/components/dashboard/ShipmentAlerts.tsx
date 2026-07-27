"use client";

import React from "react";
import {
  MoreHorizontal,
  FileX,
  MapPinOff,
  CloudLightning,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SummaryStat {
  count: number;
  label: string;
}

interface AlertItem {
  icon: LucideIcon;
  issue: string;
  id: string;
  freight: string;
  date: string;
}

const summaryStats: SummaryStat[] = [
  { count: 5, label: "Customs Clearance Delay" },
  { count: 4, label: "Incorrect Address Provided" },
  { count: 3, label: "Weather-Related Hold" },
];

const alerts: AlertItem[] = [
  { icon: FileX, issue: "Customs Clearance Delay", id: "#SH8743921", freight: "Ocean Freight", date: "Mar 20" },
  { icon: MapPinOff, issue: "Incorrect Address Provided", id: "#SH8725810", freight: "Road Freight", date: "Mar 20" },
  { icon: CloudLightning, issue: "Weather-Related Hold", id: "#SH8790043", freight: "Air Freight", date: "Mar 19" },
  { icon: FileX, issue: "Incorrect Address Provided", id: "#SH8716654", freight: "Rail Freight", date: "Mar 18" },
];

export default function ShipmentAlerts() {
  return (
    <div className="w-full bg-[#FEFEFE] p-4 rounded-[12px] border border-[#F0F0F2] flex flex-col gap-3.5 h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-semibold text-[16px] leading-[19px] text-[#333333]">
          Shipment Alerts
        </h3>
        <button
          type="button"
          aria-label="More options"
          className="w-7 h-7 rounded-lg bg-[#F0F0F0] hover:bg-[#EAEAEA] flex items-center justify-center text-[#363B3F] transition duration-150 cursor-pointer"
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Total Delays */}
      <div className="flex items-baseline gap-2">
        <span className="font-bold text-[22px] leading-[24px] text-[#333333]">12</span>
        <span className="font-normal text-[13px] leading-[17px] text-[#757575]">Delays Detected</span>
      </div>

      {/* Summary Stat Cards */}
      <div className="flex gap-1">
        {summaryStats.map((stat) => (
          <div
            key={stat.label}
            className="flex-1 bg-[#E3DDFF] rounded-[8px] pt-2.5 px-2 pb-2 flex flex-col items-center gap-1.5 text-center"
          >
            <span className="font-bold text-[20px] leading-[22px] text-[#333333]">
              {stat.count}
            </span>
            <span className="font-normal text-[10px] leading-[13px] text-[#333333]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Alerts List */}
      <div className="flex flex-col gap-2.5 py-1">
        {alerts.map((alert, i) => {
          const Icon = alert.icon;
          return (
            <div key={`${alert.id}-${i}`} className="flex items-center gap-3">
              {/* Icon */}
              <div className="w-[32px] h-[32px] shrink-0 rounded-[8px] bg-[#F0F0F0] flex items-center justify-center">
                <Icon className="w-[16px] h-[16px] text-[#333333]" strokeWidth={1.75} />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                <span className="font-semibold text-[12px] leading-[16px] text-[#333333] truncate">
                  {alert.issue}
                </span>
                <div className="flex items-center gap-1.5 text-[10px] leading-[13px]">
                  <span className="font-bold text-[#856DF3]">{alert.id}</span>
                  <span className="w-[3px] h-[3px] rounded-full bg-[#E0E0E0]" />
                  <span className="font-normal text-[#757575]">{alert.freight}</span>
                  <span className="w-[3px] h-[3px] rounded-full bg-[#E0E0E0]" />
                  <span className="font-normal text-[#757575]">{alert.date}</span>
                </div>
              </div>

              {/* Action */}
              <button
                type="button"
                aria-label="Open alert"
                className="shrink-0 text-[#757575] hover:text-[#333333] transition cursor-pointer"
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
