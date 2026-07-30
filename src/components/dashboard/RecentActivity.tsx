"use client";

import React from "react";
import Image from "next/image";
import { MoreHorizontal } from "lucide-react";

interface ActivityItem {
  iconSrc: string;
  text: string;
  username: string;
  time: string;
}

const activities: ActivityItem[] = [
  {
    iconSrc: "/Assets/ra1.svg",
    text: "submitted a bulk shipment request",
    username: "@TechGuru99",
    time: "12:00 PM",
  },
  {
    iconSrc: "/Assets/ra2.svg",
    text: "added a priority tag to Order ID 77889JKL",
    username: "@SupportKen",
    time: "11:30 AM",
  },
  {
    iconSrc: "/Assets/ra3.svg",
    text: "initiated a return process for Order ID 44556GHI",
    username: "@SallyMae88",
    time: "11:00 AM",
  },
  {
    iconSrc: "/Assets/ra4.svg",
    text: "resolved a delivery issue for Order ID 12345XYZ",
    username: "@AdminLisa",
    time: "10:15 AM",
  },
  {
    iconSrc: "/Assets/ra3.svg",
    text: "updated the shipping address for Order ID 67890ABC",
    username: "@Mickey92",
    time: "09:45 AM",
  },
];

function actorLabel(item: ActivityItem): { prefix: string; suffix: string } {
  const map: Record<string, string> = {
    "@TechGuru99": "User",
    "@SupportKen": "Customer Support",
    "@SallyMae88": "User",
    "@AdminLisa": "Administrator",
    "@Mickey92": "User",
  };
  return { prefix: map[item.username] ?? "", suffix: item.text };
}

export default function RecentActivity() {
  return (
    <div className="w-full bg-card p-4 md:p-5 rounded-[12px] border border-border-card flex flex-col justify-between gap-4 h-full shadow-2xs">
      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-bold text-[14px] md:text-[16px] leading-[19px] text-heading">
          Recent Activity
        </h3>
        <button
          type="button"
          aria-label="More options"
          className="w-7 h-7 rounded-lg bg-input hover:bg-hover flex items-center justify-center text-heading transition duration-150 cursor-pointer"
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Timeline */}
      <div className="flex-1 flex flex-col justify-between py-1">
        {activities.map((item, i) => {
          const { prefix, suffix } = actorLabel(item);
          const isLast = i === activities.length - 1;

          return (
            <div
              key={`${item.username}-${i}`}
              className="flex gap-3 items-stretch"
            >
              {/* Icon + vertical connecting line */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-9 h-9 shrink-0 flex items-center justify-center">
                  <Image
                    src={item.iconSrc}
                    alt="Activity icon"
                    width={36}
                    height={36}
                  />
                </div>
                {!isLast && (
                  <div className="w-[1.5px] flex-1 bg-[#D1D5DB] my-0.5 min-h-[16px]" />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-0.5 min-w-0 flex-1 justify-start pt-0.5 pb-2">
                <p className="font-normal text-[12px] leading-[17px] text-heading">
                  {prefix}{" "}
                  <span className="font-semibold text-link">{item.username}</span>{" "}
                  {suffix}
                </p>
                <span className="font-normal text-[10px] leading-[13px] text-body">
                  {item.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
