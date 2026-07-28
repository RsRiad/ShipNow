"use client";

import React from "react";
import Link from "next/link";
import { Plus, LayoutList, LayoutGrid } from "lucide-react";
import Button from "@/components/common/Button";

export type ShipmentViewMode = "table" | "grid";

interface ShipmentHeaderProps {
  currentView?: ShipmentViewMode;
  onViewChange?: (view: ShipmentViewMode) => void;
  onNewShipment?: () => void;
}

export default function ShipmentHeader({
  currentView = "table",
  onViewChange,
  onNewShipment,
}: ShipmentHeaderProps) {
  return (
    <div className="w-full flex flex-col gap-2 sm:gap-2.5 py-1.5 sm:py-3 px-4 md:px-8 bg-transparent border-b border-[#E5E5E7]/50">
      {/* Top Row: Title & Primary Action Button (Hidden on Mobile view) */}
      <div className="hidden sm:flex items-center justify-between gap-4">
        <h1 className="text-[26px] md:text-[30px] font-bold text-[#1E293B] tracking-tight leading-none">
          Shipments
        </h1>

        <Button
          variant="primary"
          size="lg"
          onClick={onNewShipment}
          leftIcon={<Plus className="w-4 h-4 text-white stroke-[2.5]" />}
        >
          New Shipment
        </Button>
      </div>

      {/* Bottom Row: Breadcrumb & View Switcher (Compact under MobileTopBar) */}
      <div className="flex items-center justify-between gap-3 w-full">
        {/* Breadcrumb Navigation */}
        <nav
          className="flex items-center gap-1.5 text-[13px] sm:text-[14px] text-[#757575] shrink-0"
          aria-label="Breadcrumb"
        >
          <Link
            href="/dashboard"
            className="text-[#856DF3] hover:text-[#6B52ED] font-medium transition duration-150"
          >
            Dashboard
          </Link>
          <span className="text-[#A1A1AA] font-normal">/</span>
          <span className="text-[#64748B] font-normal">Shipments</span>
        </nav>

        {/* View Switcher Toggle (Requirement 4.5 - Compact on Mobile) */}
        <div className="flex items-center bg-[#F4F4F6] p-0.5 sm:p-1 rounded-[8px] sm:rounded-[10px] border border-[#E5E5E7] gap-0.5 sm:gap-1 shrink-0">
          <button
            type="button"
            onClick={() => onViewChange?.("table")}
            title="Table View"
            className={`flex items-center justify-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 rounded-[6px] sm:rounded-[7px] text-[12px] sm:text-[13px] font-semibold transition duration-150 cursor-pointer ${
              currentView === "table"
                ? "bg-white text-[#2A1298] shadow-xs"
                : "text-[#757575] hover:text-[#333333]"
            }`}
          >
            <LayoutList className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Table View</span>
          </button>

          <button
            type="button"
            onClick={() => onViewChange?.("grid")}
            title="Grid View"
            className={`flex items-center justify-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 rounded-[6px] sm:rounded-[7px] text-[12px] sm:text-[13px] font-semibold transition duration-150 cursor-pointer ${
              currentView === "grid"
                ? "bg-white text-[#2A1298] shadow-xs"
                : "text-[#757575] hover:text-[#333333]"
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Grid View</span>
          </button>
        </div>
      </div>
    </div>
  );
}
