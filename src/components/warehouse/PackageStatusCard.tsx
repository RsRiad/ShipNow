"use client";

import React, { useState } from "react";
import { MoreHorizontal, Package } from "lucide-react";

export type PackageFilterStatus = "All" | "Expected" | "Received" | "Sent";

export interface PackageItem {
  id: string;
  code: string;
  timestamp: string;
  status: "Sent" | "Received" | "Expected";
}

const mockPackages: PackageItem[] = [
  {
    id: "1",
    code: "PKG-HK77420",
    timestamp: "March 20, 2035 – 05:30 PM",
    status: "Sent",
  },
  {
    id: "2",
    code: "PKG-A50812",
    timestamp: "March 21, 2035 – 01:45 PM",
    status: "Received",
  },
  {
    id: "3",
    code: "PKG-E10293",
    timestamp: "March 22, 2035 – 09:00 AM",
    status: "Expected",
  },
];

export default function PackageStatusCard() {
  const [activeFilter, setActiveFilter] = useState<PackageFilterStatus>("All");

  const filterTabs: PackageFilterStatus[] = [
    "All",
    "Expected",
    "Received",
    "Sent",
  ];

  const filteredPackages = mockPackages.filter((pkg) => {
    if (activeFilter === "All") return true;
    return pkg.status === activeFilter;
  });

  const getStatusBadgeClass = (status: PackageItem["status"]) => {
    switch (status) {
      case "Sent":
        return "bg-brand-light text-brand";
      case "Received":
        return "bg-success-bg text-success";
      case "Expected":
        return "bg-surface-alt text-slate-muted";
      default:
        return "bg-surface-alt text-slate-muted";
    }
  };

  return (
    <div className="w-full bg-white rounded-[20px] p-4 sm:p-6 md:p-4 lg:p-6 border border-border/60 shadow-2xs flex flex-col gap-4 sm:gap-5 md:gap-3.5 lg:gap-5">
      {/* Header Row */}
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-[16px] sm:text-[20px] md:text-[16px] lg:text-[20px] font-bold text-slate tracking-tight">
          Package Status
        </h2>
        <button
          type="button"
          className="p-1 text-body hover:text-slate rounded-lg transition cursor-pointer"
          aria-label="More options"
        >
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Filter Tabs Row */}
      <div className="bg-surface-alt rounded-[14px] p-1 flex items-center justify-between w-full gap-1">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveFilter(tab)}
              className={`flex-1 py-1.5 sm:py-2 md:py-1.5 rounded-[12px] text-[11px] sm:text-[13px] md:text-[11px] lg:text-[13px] font-semibold transition duration-150 cursor-pointer text-center whitespace-nowrap ${
                isActive
                  ? "bg-heading text-white shadow-xs"
                  : "text-body hover:text-heading"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Package List Items */}
      <div className="flex flex-col gap-3.5 md:gap-2.5 lg:gap-3.5 pt-1">
        {filteredPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="flex items-center justify-between gap-3 p-1 rounded-[12px] hover:bg-table-header/60 transition"
          >
            {/* Left: Box Icon & Package Details */}
            <div className="flex items-center gap-3.5 md:gap-2.5 lg:gap-3.5 min-w-0">
              <div className="w-11 h-11 md:w-9 md:h-9 rounded-[14px] bg-brand-light flex items-center justify-center text-brand shrink-0">
                <Package className="w-5.5 h-5.5 md:w-4.5 md:h-4.5 stroke-[1.8]" /> 
              </div>
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="font-bold text-[12px] sm:text-[14px] md:text-[12px] lg:text-[14px] leading-tight truncate">
                  {pkg.code}
                </span>
                <span className="text-[10px] sm:text-[12px] md:text-[10px] lg:text-[12px] font-normal text-body truncate">
                  {pkg.timestamp}
                </span>
              </div>
            </div>

            {/* Right: Status Pill Badge */}
            <span
              className={`px-3.5 py-1 md:px-2.5 md:py-0.5 rounded-full text-[10px] sm:text-[12px] md:text-[10px] lg:text-[12px] font-semibold shrink-0 ${getStatusBadgeClass(
                pkg.status
              )}`}
            >
              {pkg.status}
            </span>
          </div>
        ))}

        {filteredPackages.length === 0 && (
          <div className="py-6 text-center text-[13px] text-body">
            No packages found for status &quot;{activeFilter}&quot;.
          </div>
        )}
      </div>
    </div>
  );
}
