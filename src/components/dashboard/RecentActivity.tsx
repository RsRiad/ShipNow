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
];

function actorLabel(item: ActivityItem): { prefix: string; suffix: string } {
  const map: Record<string, string> = {
    "@TechGuru99": "User",
    "@SupportKen": "Customer Support",
    "@SallyMae88": "User",
    "@AdminLisa": "Administrator",
  };
  return { prefix: map[item.username] ?? "", suffix: item.text };
}

export default function RecentActivity() {
  return (
    <div className="w-full bg-[#FEFEFE] p-4 rounded-[12px] border border-[#F0F0F2] flex flex-col gap-4 h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-bold text-[16px] leading-[19px] text-[#333333]">
          Recent Activity
        </h3>
        <button
          type="button"
          aria-label="More options"
          className="w-7 h-7 rounded-lg bg-[#F0F0F0] hover:bg-[#EAEAEA] flex items-center justify-center text-[#363B3F] transition duration-150 cursor-pointer"
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Timeline */}
      <div className="flex flex-col gap-0">
        {activities.map((item, i) => {
          const { prefix, suffix } = actorLabel(item);
          const isLast = i === activities.length - 1;

          return (
            <div key={`${item.username}-${i}`} className="flex gap-3">
              {/* Icon + vertical line */}
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 shrink-0 flex items-center justify-center">
                  <Image
                    src={item.iconSrc}
                    alt="Activity icon"
                    width={36}
                    height={36}
                  />
                </div>
                {!isLast && (
                  <div className="w-px flex-1 bg-[#E5E5E7] my-1 min-h-[20px]" />
                )}
              </div>

              {/* Content */}
              <div className={`flex flex-col gap-0.5 pb-4 min-w-0 ${isLast ? "" : ""}`}>
                <p className="font-normal text-[12px] leading-[18px] text-[#333333]">
                  {prefix}{" "}
                  <span className="font-semibold text-[#856DF3]">{item.username}</span>{" "}
                  {suffix}
                </p>
                <span className="font-normal text-[10px] leading-[13px] text-[#757575]">
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
