"use client";

import React from "react";
import AppShell from "@/components/layout/AppShell";
import Header from "@/components/layout/Header";
import SummaryMetrics from "@/components/dashboard/SummaryMetrics";
import ShipmentStatisticChart from "@/components/dashboard/ShipmentStatisticChart";
import ProfitSummaryChart from "@/components/dashboard/ProfitSummaryChart";
import ShipmentTypeChart from "@/components/dashboard/ShipmentTypeChart";
import ProductCategories from "@/components/dashboard/ProductCategories";
import LiveTracking from "@/components/dashboard/LiveTracking";
import ShipmentAlerts from "@/components/dashboard/ShipmentAlerts";
import RecentShipments from "@/components/dashboard/RecentShipments";
import RecentActivity from "@/components/dashboard/RecentActivity";

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

          {/* Middle Row: Product Categories (370) + Live Tracking (469) + Shipment Alerts (299) */}
          <div className="grid grid-cols-1 lg:grid-cols-[370fr_469fr_299fr] gap-5 items-stretch">
            <ProductCategories />
            <LiveTracking />
            <ShipmentAlerts />
          </div>

          {/* Bottom Row: Recent Shipments (858) + Recent Activity (299) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            <div className="lg:col-span-9">
              <RecentShipments />
            </div>
            <div className="lg:col-span-3">
              <RecentActivity />
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
