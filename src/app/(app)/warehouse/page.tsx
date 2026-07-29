"use client";

import React, { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import WarehouseHeader, { FreightTab } from "@/components/warehouse/WarehouseHeader";

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
        <div className="p-4 md:p-8 flex flex-col gap-6">
          <div className="bg-white rounded-[16px] p-6 border border-border/60 shadow-2xs">
            <p className="text-[15px] text-slate-muted">
              Active Freight View:{" "}
              <span className="font-semibold text-slate capitalize">
                {activeFreightTab} Freight
              </span>
            </p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
