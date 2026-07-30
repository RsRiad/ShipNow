"use client";

import React, { useState } from "react";
import { floorDataMap, FloorTab } from "@/data/warehouse";
import ShelfButton from "@/components/warehouse/ShelfButton";

export default function WarehouseMap() {
  const [activeFloor, setActiveFloor] = useState<FloorTab>("Floor 1");

  const floors: FloorTab[] = ["Floor 1", "Floor 2", "Floor 3"];
  const currentZones = floorDataMap[activeFloor];

  return (
    <div className="w-full bg-white rounded-[20px] p-3.5 md:p-2.5 lg:p-5 border border-border/60 shadow-2xs flex flex-col gap-2.5 md:gap-2 lg:gap-4">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
        <h2 className="text-[17px] md:text-[18px] lg:text-[20px] font-bold text-slate tracking-tight">
          Warehouse Map
        </h2>

        {/* Floor Selector Pills */}
        <div className="bg-surface-alt rounded-[12px] p-1 flex items-center gap-1 w-full sm:w-auto">
          {floors.map((floor) => {
            const isActive = activeFloor === floor;
            return (
              <button
                key={floor}
                type="button"
                onClick={() => setActiveFloor(floor)}
                className={`flex-1 sm:flex-none px-3.5 md:px-3 lg:px-4 py-1.5 rounded-[10px] text-[12px] md:text-[12px] lg:text-[13px] font-semibold transition duration-150 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-heading text-white shadow-xs"
                    : "text-body hover:text-heading"
                }`}
              >
                {floor}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Floor Map Display */}
      <div className="bg-surface-alt/80 rounded-[16px] p-2.5 md:p-1.5 lg:p-4 border border-border/40 flex flex-col gap-2.5 md:gap-2 lg:gap-4">
        {/* Unified 12-column grid layout for all 6 warehouse zones */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-2 md:gap-1.5 lg:gap-3.5">
          {currentZones.map((zone) => (
            <div
              key={zone.id}
              className={`${zone.cardColSpanClass} bg-white rounded-[12px] p-2.5 md:px-2 md:py-2 lg:p-4 border border-border/40 shadow-xs flex flex-col justify-between gap-2 md:gap-2 lg:gap-3 min-h-[100px] md:min-h-[105px] lg:min-h-[125px]`}
            >
              {/* Zone Title */}
              <h3
                className="text-[12px] md:text-[11px] lg:text-[13px] font-bold text-slate truncate"
                title={zone.name}
              >
                {zone.name}
              </h3>

              {/* Shelf Chips Row (5/5 buttons in 2 rows on mobile for Apparel) */}
              <div
                className={
                  zone.id === "apparel"
                    ? "grid grid-cols-5 md:flex md:flex-wrap md:items-center gap-1.5 sm:gap-2"
                    : "flex flex-wrap items-center gap-1.5 sm:gap-2"
                }
              >
                {zone.shelves.map((shelf) => (
                  <ShelfButton key={shelf.id} shelf={shelf} />
                ))}
              </div>

              {/* Available Space Footer */}
              <div className="text-[10px] md:text-[10px] lg:text-[12px] font-normal text-body pt-0.5 whitespace-nowrap">
                Available Space{" "}
                <span className="font-bold text-slate">
                  {zone.availableCount}
                </span>
                <span className="font-normal text-body/75">
                  /{zone.totalCount}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Map Status Legend Row */}
        <div className="flex items-center gap-6 pt-1 text-[12px] sm:text-[13px] font-normal text-body">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-[4px] bg-brand-light border border-brand/30 shrink-0" />
            <span>Available</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-[4px] bg-[#E2E2E5] shrink-0" />
            <span>Full</span>
          </div>
        </div>
      </div>
    </div>
  );
}
