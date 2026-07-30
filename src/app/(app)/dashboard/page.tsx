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
        <div className="px-3 md:px-4 lg:px-6 py-4 max-w-[1440px] w-full mx-auto">
          {/* 1. MOBILE LAYOUT (< 768px) */}
          <div className="md:hidden space-y-5">
            <SummaryMetrics />
            <ShipmentStatisticChart />
            <ProfitSummaryChart />
            <ShipmentTypeChart />
            <ProductCategories />
            <LiveTracking />
            <ShipmentAlerts />
            <RecentShipments />
            <RecentActivity />
          </div>

          {/* 2. TABLET LAYOUT (768px - 1023px) */}
          <div className="hidden md:block lg:hidden space-y-5">
            {/* Row 1: Active Shipments, Delivery Performance, Revenue in 1 row */}
            <SummaryMetrics />

            {/* Row 2: Shipment Statistic & Profit Summary */}
            <div className="grid grid-cols-2 gap-5 items-stretch">
              <ShipmentStatisticChart />
              <ProfitSummaryChart />
            </div>

            {/* Row 3: Shipment Type & Product Categories */}
            <div className="grid grid-cols-2 gap-5 items-stretch">
              <ShipmentTypeChart />
              <ProductCategories />
            </div>

            {/* Row 4: Live Tracking (Full Row in Tablet View) */}
            <div className="w-full">
              <LiveTracking />
            </div>

            {/* Row 5: Shipment Alerts & Recent Activity in a single row */}
            <div className="grid grid-cols-2 gap-5 items-stretch">
              <ShipmentAlerts />
              <RecentActivity />
            </div>

            {/* Row 6: Recent Shipments */}
            <div className="w-full">
              <RecentShipments />
            </div>
          </div>

          {/* 2. DESKTOP LAYOUT (>= 1024px / 1440px) */}
          <div className="hidden lg:block space-y-5">
            {/* Main Dashboard Upper Layout: Left + Right (ShipmentTypeChart - 325fr) */}
            <div className="grid grid-cols-[828fr_325fr] gap-5 items-stretch">
              {/* Left Area */}
              <div className="flex flex-col gap-5 min-w-0">
                {/* Row 1: 3 Summary Metric Cards Side-by-Side */}
                <SummaryMetrics />

                {/* Row 2: 2 Charts Side-by-Side (Shipment Statistic & Profit Summary) */}
                <div className="grid grid-cols-[369fr_459fr] gap-5 flex-1 items-stretch min-w-0">
                  <ShipmentStatisticChart />
                  <ProfitSummaryChart />
                </div>
              </div>

              {/* Right Area: Shipment Type Donut Chart Card */}
              <div className="flex min-w-0">
                <ShipmentTypeChart />
              </div>
            </div>

            {/* Middle Row: Product Categories (365) + Live Tracking (463) + Shipment Alerts (325fr) */}
            <div className="grid grid-cols-[365fr_463fr_325fr] gap-5 items-stretch">
              <ProductCategories />
              <LiveTracking />
              <ShipmentAlerts />
            </div>

            {/* Bottom Row: Recent Shipments + Recent Activity (325fr) */}
            <div className="grid grid-cols-[828fr_325fr] gap-5 items-start">
              <div className="min-w-0">
                <RecentShipments />
              </div>
              <div className="min-w-0">
                <RecentActivity />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
