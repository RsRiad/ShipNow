"use client";

import React from "react";
import {
  MoreHorizontal,
  CheckSquare,
  Layers,
  Truck,
  FileText,
} from "lucide-react";

export interface ActivityLogItem {
  id: string;
  userName: string;
  action: string;
  timestamp: string;
  avatarBg: "dark" | "purple";
  icon: React.ElementType;
}

const activityLogs: ActivityLogItem[] = [
  {
    id: "1",
    userName: "Leo Fernandez",
    action:
      "confirmed receipt of 40 units of Winter Jacket Series in Section B3 (Apparel)",
    timestamp: "01:45 PM",
    avatarBg: "dark",
    icon: CheckSquare,
  },
  {
    id: "2",
    userName: "Ava Martinez",
    action: "added 25 units of Smart Router Kit to Section A1 (Electronics)",
    timestamp: "09:15 AM",
    avatarBg: "purple",
    icon: Layers,
  },
  {
    id: "3",
    userName: "Oscar Liem",
    action:
      "dispatched 18 units of Stainless Steel Cookware Set from Section C5 (Home & Kitchen)",
    timestamp: "05:30 PM",
    avatarBg: "dark",
    icon: Truck,
  },
  {
    id: "4",
    userName: "Dina Choi",
    action:
      "created a shipment entry for Brake Pad Sets in Section D2 (Automotive Parts)",
    timestamp: "04:10 PM",
    avatarBg: "purple",
    icon: FileText,
  },
];

export default function WarehouseActivityLog() {
  return (
    <div className="w-full bg-white rounded-[20px] p-4 sm:p-5 border border-border/60 shadow-2xs flex flex-col gap-4">
      {/* Header Row */}
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-[16px] sm:text-[20px] md:text-[18px] lg:text-[20px] font-bold text-slate tracking-tight">
          Warehouse Activity Log
        </h2>
        <button
          type="button"
          className="p-1 text-body hover:text-slate rounded-lg transition cursor-pointer"
          aria-label="More options"
        >
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Activity Log List */}
      <div className="flex flex-col pt-0.5">
        {activityLogs.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.id} className="flex items-start gap-3.5">
              {/* Circular Avatar Icon */}
              <div
                className={`w-8.5 h-8.5 sm:w-9.5 sm:h-9.5 rounded-full flex items-center justify-center text-white shrink-0 mt-0.5 ${
                  item.avatarBg === "dark" ? "bg-heading" : "bg-brand"
                }`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 stroke-[2]" />
              </div>

              {/* Activity Description & Time (Thin horizontal border after every log) */}
              <div className="flex-1 flex flex-col gap-1 min-w-0 pb-3 mb-3 border-b border-border/50">
                <p className="text-[12px] sm:text-[14px] md:text-[12px] lg:text-[14px] font-normal text-body leading-snug">
                  <span className="font-semibold text-brand hover:underline cursor-pointer">
                    {item.userName}
                  </span>{" "}
                  {item.action}
                </p>
                <span className="text-[10px] sm:text-[12px] md:text-[11px] lg:text-[12px] font-normal text-slate-light mt-0.5">
                  {item.timestamp}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
