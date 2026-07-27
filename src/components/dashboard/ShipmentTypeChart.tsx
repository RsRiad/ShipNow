"use client";

import React from "react";
import { MoreHorizontal } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface ShipmentTypeData {
  name: string;
  count: number;
  percentage: number;
  color: string;
  badgeBg: string;
  badgeTextColor: string;
  unitText: string;
}

const data: ShipmentTypeData[] = [
  {
    name: "Road Freight",
    count: 1150,
    percentage: 46,
    color: "#856DF3",
    badgeBg: "#856DF3",
    badgeTextColor: "#FFFFFF",
    unitText: "1,150 shipment",
  },
  {
    name: "Ocean Freight",
    count: 425,
    percentage: 17,
    color: "#757575",
    badgeBg: "#757575",
    badgeTextColor: "#FFFFFF",
    unitText: "425 shipments",
  },
  {
    name: "Air Freight",
    count: 700,
    percentage: 28,
    color: "#262626",
    badgeBg: "#262626",
    badgeTextColor: "#FFFFFF",
    unitText: "700 shipments",
  },
  {
    name: "Rail Freight",
    count: 225,
    percentage: 9,
    color: "#E0E0E0",
    badgeBg: "#E0E0E0",
    badgeTextColor: "#333333",
    unitText: "225 shipments",
  },
];

// Donut render order (clockwise from top): Road → Air → Ocean → Rail
const donutOrder = ["Road Freight", "Air Freight", "Ocean Freight", "Rail Freight"];
const donutData = donutOrder.map((n) => data.find((d) => d.name === n)!);

export default function ShipmentTypeChart() {
  const totalShipments = 2500;

  return (
    <div className="w-full bg-[#FEFEFE] p-4 rounded-[12px] border border-[#F0F0F2] shadow-2xs flex flex-col gap-6 h-full">
      {/* Header Row */}
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-semibold text-[14px] md:text-[16px] leading-[19px] text-[#333333]">
          Shipment Type
        </h3>
        <button
          type="button"
          aria-label="More options"
          className="w-7 h-7 rounded-lg bg-[#F0F0F0] hover:bg-[#EAEAEA] flex items-center justify-center text-[#363B3F] transition duration-150 cursor-pointer"
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Donut Chart with Center Overlay */}
      <div className="relative w-full h-[217px] flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={donutData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={96}
              paddingAngle={0}
              dataKey="percentage"
              startAngle={90}
              endAngle={-270}
              stroke="none"
            >
              {donutData.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Center Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 pointer-events-none">
          <span className="font-normal text-[11px] md:text-[12px] leading-[16px] text-[#757575]">
            Total Shipment
          </span>
          <span className="font-bold text-[22px] md:text-[24px] lg:text-[28px] leading-[31px] text-[#333333] tracking-tight">
            {totalShipments.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Bottom 2x2 Legend Grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2.5">
            {/* Percentage Pill Badge */}
            <div
              className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center font-bold text-[11px] md:text-[12px] leading-none shrink-0"
              style={{
                backgroundColor: item.badgeBg,
                color: item.badgeTextColor,
              }}
            >
              {item.percentage}%
            </div>

            {/* Item Title & Shipment Count */}
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="font-semibold text-[11px] md:text-[12px] leading-[16px] text-[#333333] truncate">
                {item.name}
              </span>
              <span className="font-normal text-[9px] md:text-[10px] leading-[13px] text-[#757575] truncate">
                {item.unitText}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
