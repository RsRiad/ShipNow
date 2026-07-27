"use client";

import React from "react";
import AppShell from "@/components/layout/AppShell";
import Header from "@/components/layout/Header";
import SummaryMetrics from "@/components/dashboard/SummaryMetrics";
import ShipmentStatisticChart from "@/components/dashboard/ShipmentStatisticChart";
import ProfitSummaryChart from "@/components/dashboard/ProfitSummaryChart";
import ShipmentTypeChart from "@/components/dashboard/ShipmentTypeChart";

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="w-full flex flex-col">
        {/* Top Bar Header */}
        <Header />

        {/* Dashboard Content Container — Figma: pad 20, gap 20 */}
        <div className="p-5 max-w-[1440px] w-full mx-auto space-y-5">
          {/* Main Dashboard Upper Layout: Left (858) + Right (299) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Left Area */}
            <div className="lg:col-span-9 flex flex-col gap-5">
              {/* Row 1: 3 Summary Metric Cards Side-by-Side */}
              <SummaryMetrics />

              {/* Row 2: 2 Charts Side-by-Side (Shipment Statistic & Profit Summary) */}
              <div className="grid grid-cols-1 md:grid-cols-[369fr_469fr] gap-5 flex-1 items-stretch">
                <ShipmentStatisticChart />
                <ProfitSummaryChart />
              </div>
            </div>

            {/* Right Area: Shipment Type Donut Chart Card */}
            <div className="lg:col-span-3 flex">
              <ShipmentTypeChart />
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
