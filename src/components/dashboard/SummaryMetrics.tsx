"use client";

import React from "react";
import MetricCard, { MetricCardProps } from "./MetricCard";

export const summaryMetricsData: MetricCardProps[] = [
  {
    title: "Active Shipments",
    value: "1,284",
    unit: "shipments",
    trendValue: "+8.7%",
    trendPeriod: "from last week",
    iconSrc: "/Assets/IconActivShip.svg",
  },
  {
    title: "Delivery Performance",
    value: "94.3%",
    unit: "on-time",
    trendValue: "+1.2%",
    trendPeriod: "from last week",
    iconSrc: "/Assets/IconDeliPerfo.svg",
  },
  {
    title: "Revenue",
    value: "$82,450",
    unit: "",
    trendValue: "+12.4%",
    trendPeriod: "from last month",
    iconSrc: "/Assets/IconRevenue.svg",
  },
];

export default function SummaryMetrics() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
      {summaryMetricsData.map((metric) => (
        <MetricCard
          key={metric.title}
          title={metric.title}
          value={metric.value}
          unit={metric.unit}
          trendValue={metric.trendValue}
          trendPeriod={metric.trendPeriod}
          iconSrc={metric.iconSrc}
        />
      ))}
    </div>
  );
}
