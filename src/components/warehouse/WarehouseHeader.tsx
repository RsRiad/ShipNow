"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Truck, TrainFront, Ship, Plane } from "lucide-react";

export type FreightTab = "road" | "rail" | "ocean" | "air";

interface WarehouseHeaderProps {
  activeTab?: FreightTab;
  onTabChange?: (tab: FreightTab) => void;
}

export default function WarehouseHeader({
  activeTab: externalActiveTab,
  onTabChange,
}: WarehouseHeaderProps) {
  const [internalActiveTab, setInternalActiveTab] = useState<FreightTab>("road");
  const activeTab = externalActiveTab ?? internalActiveTab;

  const handleTabClick = (tab: FreightTab) => {
    setInternalActiveTab(tab);
    onTabChange?.(tab);
  };

  const tabs = [
    { id: "road" as FreightTab, label: "Road Freight", icon: Truck },
    { id: "rail" as FreightTab, label: "Rail Freight", icon: TrainFront },
    { id: "ocean" as FreightTab, label: "Ocean Freight", icon: Ship },
    { id: "air" as FreightTab, label: "Air Freight", icon: Plane },
  ];

  return (
    <div className="w-full flex flex-col bg-transparent">
      {/* DESKTOP VIEW ONLY (hidden on mobile md:flex) */}
      <div className="hidden md:flex flex-row items-center justify-between gap-4 py-4 px-8 border-b border-border/50">
        {/* Left: Title & Breadcrumb Navigation */}
        <div className="flex flex-col gap-1.5">
          <h1 className="text-[28px] lg:text-[30px] font-bold text-slate tracking-tight leading-none">
            Warehouse
          </h1>
          <nav
            className="flex items-center gap-1.5 text-[14px] text-body"
            aria-label="Breadcrumb"
          >
            <Link
              href="/dashboard"
              className="text-brand hover:text-brand font-medium transition duration-150"
            >
              Dashboard
            </Link>
            <span className="text-muted font-normal">/</span>
            <span className="text-slate-muted font-normal">Warehouse</span>
          </nav>
        </div>

        {/* Right: Desktop Freight Mode Selector Tabs */}
        <div className="flex items-center gap-2 py-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-[14px] font-semibold transition duration-150 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-heading text-white shadow-xs"
                    : "text-slate-muted hover:text-slate hover:bg-black/5"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-muted"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>


      {/* MOBILE VIEW ONLY (block on mobile md:hidden - matching reference image) */}
      <div className="block md:hidden px-4 pt-3 pb-2 w-full">
        {/* Mobile Freight Selector Bar (Grey rounded container) */}
        <div className="bg-surface-alt rounded-[16px] p-1.5 flex items-center justify-between gap-1 w-full">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            if (isActive) {
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabClick(tab.id)}
                  className="bg-heading text-white rounded-[12px] px-3.5 py-2.5 flex items-center gap-2 text-[13px] font-semibold transition duration-150 cursor-pointer shadow-xs whitespace-nowrap shrink-0"
                >
                  <Icon className="w-4 h-4 text-white stroke-[2]" />
                  <span>{tab.label}</span>
                </button>
              );
            }

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabClick(tab.id)}
                title={tab.label}
                className="text-slate-muted hover:text-slate hover:bg-black/5 p-2.5 rounded-[12px] flex items-center justify-center transition duration-150 cursor-pointer flex-1"
              >
                <Icon className="w-5 h-5 stroke-[1.75]" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
