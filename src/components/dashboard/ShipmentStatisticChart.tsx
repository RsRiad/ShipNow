"use client";

import React, { useState } from "react";
import { ChevronDown, TrendingUp } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface MonthlyData {
  month: string;
  fullLabel: string;
  shipments: number;
  isHighlighted?: boolean;
}

const chartData: MonthlyData[] = [
  { month: "Jan", fullLabel: "Jan 2030", shipments: 1400 },
  { month: "Feb", fullLabel: "Feb 2030", shipments: 2100 },
  { month: "Mar", fullLabel: "Mar 2030", shipments: 1100 },
  { month: "Apr", fullLabel: "Apr 2030", shipments: 1900 },
  { month: "May", fullLabel: "May 2030", shipments: 3124 },
  { month: "Jan", fullLabel: "Jun 2030", shipments: 2600 },
  { month: "Jul", fullLabel: "Jul 2030", shipments: 3500 },
  { month: "Aug", fullLabel: "Aug 2030", shipments: 4100 },
];

interface BarShapeProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  index?: number;
  payload?: MonthlyData;
  activeIndex: number | null;
}

// Custom bar: gradient fill + dark rounded cap line on top.
function BarShape({
  x = 0,
  y = 0,
  width = 0,
  height = 0,
  index = 0,
  activeIndex,
}: BarShapeProps) {
  const isPurple = activeIndex !== null && index === activeIndex;
  const fillId = isPurple ? "url(#barPurple)" : "url(#barGray)";
  const capColor = isPurple ? "#5B3FD9" : "#2E2E33";
  const r = 6;
  const cap = 3.5;
  // Rounded-top rectangle path
  const path = `M${x},${y + r} Q${x},${y} ${x + r},${y} L${x + width - r},${y} Q${x + width},${y} ${x + width},${y + r} L${x + width},${y + height} L${x},${y + height} Z`;

  return (
    <g>
      <path d={path} fill={fillId} />
      <rect
        x={x}
        y={y}
        width={width}
        height={cap}
        rx={cap / 2}
        fill={capColor}
      />
    </g>
  );
}

interface TooltipEntry {
  payload: MonthlyData;
}
interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipEntry[];
}

// Hover tooltip that follows the active bar.
function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (!active || !payload || payload.length === 0) {
    return null;
  }
  const item = payload[0].payload;
  return (
    <div className="bg-[#EAE6FF] text-[#212124] px-3 py-1.5 rounded-[10px] text-center shadow-xs">
      <div className="text-[10px] text-[#757575] font-normal leading-tight">
        {item.fullLabel}
      </div>
      <div className="text-[14px] font-bold text-[#212124] leading-tight mt-0.5">
        {item.shipments.toLocaleString()}
      </div>
    </div>
  );
}

export default function ShipmentStatisticChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full bg-[#FEFEFE] pt-4 px-4 pb-3 rounded-[12px] border border-[#F0F0F2] shadow-2xs flex flex-col h-full">
      {/* Header Row */}
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-semibold text-[16px] leading-[19px] text-[#333333]">
          Shipment Statistic
        </h3>

        {/* Filter Dropdown */}
        <button
          type="button"
          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F5F5F7] hover:bg-[#EAEAEA] rounded-lg text-[13px] font-medium text-[#333333] transition duration-150 cursor-pointer"
        >
          <span>Last Year</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#757575]" />
        </button>
      </div>

      {/* Main Metric & Trend */}
      <div className="flex items-center gap-1 mt-4 mb-2">
        <span className="font-bold text-[24px] leading-[26px] text-[#333333] tracking-tight">
          4,352
        </span>
        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-[10px] bg-[#D9F9E7] text-[#007837] font-normal text-[10px] leading-[13px]">
          <TrendingUp className="w-3 h-3 stroke-[2.5]" />
          <span>+8.7%</span>
        </span>
      </div>

      {/* Recharts Bar Chart Container */}
      <div className="w-full h-[160px] mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 8, right: 4, left: -20, bottom: 0 }}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {/* Gradient Definitions (deep purple at top -> light at bottom) */}
            <defs>
              <linearGradient id="barPurple" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#856DF3" />
                <stop offset="100%" stopColor="#E4DFFA" stopOpacity={0.4} />
              </linearGradient>
              <linearGradient id="barGray" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E7E7EC" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#F0F0F2"
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#757575", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#757575", fontSize: 12 }}
              domain={[0, 4800]}
              ticks={[0, 1200, 2400, 3600, 4800]}
              tickFormatter={(val) => (val === 0 ? "0K" : `${val / 1000}K`)}
            />
            <Tooltip
              cursor={false}
              content={<CustomTooltip />}
              wrapperStyle={{ outline: "none" }}
            />
            <Bar
              dataKey="shipments"
              shape={(props: unknown) => (
                <BarShape
                  {...(props as BarShapeProps)}
                  activeIndex={activeIndex}
                />
              )}
              onMouseEnter={(_, index) => setActiveIndex(index)}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
