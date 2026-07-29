"use client";

import React, { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import WarehouseHeader, {
  FreightTab,
} from "@/components/warehouse/WarehouseHeader";
import WarehouseMetrics from "@/components/warehouse/WarehouseMetrics";
import WarehouseInventoryChart from "@/components/warehouse/WarehouseInventoryChart";
import CapacityUsageCard from "@/components/warehouse/CapacityUsageCard";
import PackageStatusCard from "@/components/warehouse/PackageStatusCard";
import WarehouseActivityLog from "@/components/warehouse/WarehouseActivityLog";

import WarehouseStorageTable from "@/components/warehouse/WarehouseStorageTable";
import WarehouseMap from "@/components/warehouse/WarehouseMap";

export default function WarehousePage() {
  const [activeFreightTab, setActiveFreightTab] = useState<FreightTab>("road");

  return (
    <AppShell>
      <div className="flex flex-col w-full min-h-screen bg-table-header">
        {/* Topbar Header matching design pattern */}
        <WarehouseHeader
          activeTab={activeFreightTab}
          onTabChange={setActiveFreightTab}
        />

        {/* Warehouse Main Content Area */}
        <div className="px-3 md:px-4 lg:px-8 py-4 md:py-6 flex flex-col gap-4">
          {/* Main 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-3 items-start">
            {/* Left Main Column (8 cols on desktop) */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
                <div className="lg:col-span-3">
                  <WarehouseMetrics />
                </div>
                <div className="lg:col-span-9">
                  <WarehouseInventoryChart />
                </div>
              </div>

              {/* Capacity Usage & Package Status directly below Inventory on Mobile & Tablet */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-4">
                <CapacityUsageCard />
                <PackageStatusCard />
              </div>

              {/* Warehouse Storage Table Component */}
              <WarehouseStorageTable />

              {/* Warehouse Interactive Floor Map Component */}
              <WarehouseMap />
            </div>

            {/* Right Sidebar Column (4 cols on desktop - matching Figma right column stack) */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="hidden lg:flex flex-col gap-4">
                <CapacityUsageCard />
                <PackageStatusCard />
              </div>
              <WarehouseActivityLog />
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
