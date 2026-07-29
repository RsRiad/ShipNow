"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface GroupedProfitData {
  month: string;
  revenue: number;
  cost: number;
}

const profitData: GroupedProfitData[] = [
  { month: "Jan", revenue: 44000, cost: 30000 },
  { month: "Feb", revenue: 36000, cost: 26000 },
  { month: "Mar", revenue: 52000, cost: 42000 },
  { month: "Apr", revenue: 73000, cost: 37000 },
  { month: "May", revenue: 87524, cost: 45680 },
  { month: "Jan", revenue: 68000, cost: 46000 },
  { month: "Jul", revenue: 59000, cost: 51000 },
  { month: "Aug", revenue: 70000, cost: 34000 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ payload: GroupedProfitData }>;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-tooltip-gray text-heading px-3.5 py-2 rounded-[12px] shadow-sm pointer-events-none text-[12px] font-semibold space-y-1 mb-2 select-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-xs bg-brand" />
          <span className="text-body font-normal">Revenue</span>
          <span className="text-heading font-bold ml-auto">
            ${data.revenue.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-xs bg-chart-dark" />
          <span className="text-body font-normal">Cost</span>
          <span className="text-heading font-bold ml-auto">
            ${data.cost.toLocaleString()}
          </span>
        </div>
      </div>
    );
  }
  return null;
};

export default function ProfitSummaryChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full bg-card pt-4 px-4 pb-3 rounded-[12px] border border-border-card shadow-2xs flex flex-col justify-between h-full">
      {/* Top Header Row */}
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-semibold text-[14px] md:text-[16px] leading-[19px] text-heading">
          Profit Summary
        </h3>

        {/* Filter Dropdown */}
        <button
          type="button"
          className="flex items-center gap-1.5 px-2.5 py-1 md:px-3 md:py-1.5 bg-surface hover:bg-hover rounded-lg text-[11px] md:text-[13px] font-medium text-heading transition duration-150 cursor-pointer"
        >
          <span className="font-bold">Last 8 Months</span>
          <ChevronDown className="w-3.5 h-3.5 text-body" />
        </button>
      </div>

      {/* Metric & Legend Row */}
      <div className="flex items-center justify-between gap-2 mt-3 mb-2 min-w-0">
        {/* Metric Value & Trend */}
        <div className="flex items-center gap-1 shrink-0">
          <span className="font-bold text-[18px] sm:text-[20px] md:text-[20px] lg:text-[24px] leading-[26px] text-heading tracking-tight whitespace-nowrap">
            $624,550
          </span>
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-[10px] bg-success-bg text-success font-normal text-[9px] md:text-[10px] leading-[13px] shrink-0">
            <Image src="/Assets/Icon (17).svg" alt="Trend up" width={12} height={12} />
            <span>5.62%</span>
          </span>
        </div>

        {/* Chart Legend */}
        <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-[11px] lg:text-[12px] font-medium text-body shrink-0">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-xs bg-brand" />
            <span>Revenue</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-xs bg-chart-dark" />
            <span>Cost</span>
          </div>
        </div>
      </div>

      {/* Recharts Grouped Bar Chart Container */}
      <div className="w-full h-[160px] mt-2 relative">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={profitData}
            margin={{ top: 8, right: 4, left: -15, bottom: 0 }}
            barGap={3}
            onMouseMove={(state) => {
              if (state && typeof state.activeTooltipIndex === "number") {
                setActiveIndex(state.activeTooltipIndex);
              }
            }}
            onMouseLeave={() => setActiveIndex(null)}
          >
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
              domain={[0, 100000]}
              ticks={[0, 25000, 50000, 75000, 100000]}
              tickFormatter={(val) => (val === 0 ? "$0" : `$${val / 1000}K`)}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              content={<CustomTooltip />}
              wrapperStyle={{ pointerEvents: "none", outline: "none" }}
            />

            {/* Revenue Bar */}
            <Bar dataKey="revenue" radius={[6, 6, 0, 0]}>
              {profitData.map((_, index) => (
                <Cell
                  key={`rev-${index}`}
                  fill={activeIndex === index ? "#856DF3" : "#E4DFFA"}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="cursor-pointer transition-colors duration-150"
                />
              ))}
            </Bar>

            {/* Cost Bar */}
            <Bar dataKey="cost" radius={[6, 6, 0, 0]}>
              {profitData.map((_, index) => (
                <Cell
                  key={`cost-${index}`}
                  fill={activeIndex === index ? "#262626" : "#EBEBEF"}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="cursor-pointer transition-colors duration-150"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
