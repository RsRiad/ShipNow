import React, { useState } from "react";

export type FloorTab = "Floor 1" | "Floor 2" | "Floor 3";

export interface ShelfSlot {
  id: string;
  code: string;
  status: "available" | "full";
}

export interface ZoneCardData {
  id: string;
  name: string;
  shelves: ShelfSlot[];
  availableCount: number;
  totalCount: number;
  colSpan?: string;
}

const floorDataMap: Record<FloorTab, ZoneCardData[]> = {
  "Floor 1": [
    {
      id: "electronics",
      name: "Electronics",
      availableCount: 20,
      totalCount: 100,
      shelves: [
        { id: "A1", code: "A1", status: "available" },
        { id: "A2", code: "A2", status: "full" },
        { id: "A3", code: "A3", status: "available" },
      ],
    },
    {
      id: "home-kitchen",
      name: "Home & Kitchen",
      availableCount: 10,
      totalCount: 100,
      shelves: [
        { id: "C1", code: "C1", status: "available" },
        { id: "C2", code: "C2", status: "full" },
        { id: "C3", code: "C3", status: "full" },
      ],
    },
    {
      id: "automotive",
      name: "Automotive Parts",
      availableCount: 50,
      totalCount: 100,
      shelves: [
        { id: "D1", code: "D1", status: "available" },
        { id: "D2", code: "D2", status: "available" },
        { id: "D3", code: "D3", status: "available" },
      ],
    },
    {
      id: "sports",
      name: "Sports Equipment",
      availableCount: 45,
      totalCount: 100,
      shelves: [
        { id: "F1", code: "F1", status: "available" },
        { id: "F2", code: "F2", status: "available" },
        { id: "F3", code: "F3", status: "full" },
      ],
    },
    {
      id: "apparel",
      name: "Apparel",
      availableCount: 20,
      totalCount: 100,
      colSpan: "lg:col-span-8",
      shelves: [
        { id: "B1", code: "B1", status: "available" },
        { id: "B2", code: "B2", status: "full" },
        { id: "B3", code: "B3", status: "full" },
        { id: "B4", code: "B4", status: "available" },
        { id: "B5", code: "B5", status: "available" },
        { id: "B6", code: "B6", status: "full" },
        { id: "B7", code: "B7", status: "full" },
        { id: "B8", code: "B8", status: "available" },
        { id: "B9", code: "B9", status: "full" },
        { id: "B10", code: "B10", status: "available" },
      ],
    },
    {
      id: "beauty-health",
      name: "Beauty & Health",
      availableCount: 30,
      totalCount: 100,
      colSpan: "lg:col-span-4",
      shelves: [
        { id: "E1", code: "E1", status: "available" },
        { id: "E2", code: "E2", status: "full" },
        { id: "E3", code: "E3", status: "available" },
        { id: "E4", code: "E4", status: "available" },
      ],
    },
  ],
  "Floor 2": [
    {
      id: "electronics",
      name: "Electronics",
      availableCount: 40,
      totalCount: 100,
      shelves: [
        { id: "A1", code: "A1", status: "available" },
        { id: "A2", code: "A2", status: "available" },
        { id: "A3", code: "A3", status: "full" },
      ],
    },
    {
      id: "home-kitchen",
      name: "Home & Kitchen",
      availableCount: 30,
      totalCount: 100,
      shelves: [
        { id: "C1", code: "C1", status: "full" },
        { id: "C2", code: "C2", status: "available" },
        { id: "C3", code: "C3", status: "available" },
      ],
    },
    {
      id: "automotive",
      name: "Automotive Parts",
      availableCount: 60,
      totalCount: 100,
      shelves: [
        { id: "D1", code: "D1", status: "available" },
        { id: "D2", code: "D2", status: "full" },
        { id: "D3", code: "D3", status: "available" },
      ],
    },
    {
      id: "sports",
      name: "Sports Equipment",
      availableCount: 25,
      totalCount: 100,
      shelves: [
        { id: "F1", code: "F1", status: "full" },
        { id: "F2", code: "F2", status: "available" },
        { id: "F3", code: "F3", status: "full" },
      ],
    },
    {
      id: "apparel",
      name: "Apparel",
      availableCount: 50,
      totalCount: 100,
      colSpan: "lg:col-span-8",
      shelves: [
        { id: "B1", code: "B1", status: "available" },
        { id: "B2", code: "B2", status: "available" },
        { id: "B3", code: "B3", status: "full" },
        { id: "B4", code: "B4", status: "available" },
        { id: "B5", code: "B5", status: "full" },
        { id: "B6", code: "B6", status: "available" },
        { id: "B7", code: "B7", status: "available" },
        { id: "B8", code: "B8", status: "full" },
        { id: "B9", code: "B9", status: "available" },
        { id: "B10", code: "B10", status: "full" },
      ],
    },
    {
      id: "beauty-health",
      name: "Beauty & Health",
      availableCount: 45,
      totalCount: 100,
      colSpan: "lg:col-span-4",
      shelves: [
        { id: "E1", code: "E1", status: "available" },
        { id: "E2", code: "E2", status: "available" },
        { id: "E3", code: "E3", status: "full" },
        { id: "E4", code: "E4", status: "available" },
      ],
    },
  ],
  "Floor 3": [
    {
      id: "electronics",
      name: "Electronics",
      availableCount: 70,
      totalCount: 100,
      shelves: [
        { id: "A1", code: "A1", status: "available" },
        { id: "A2", code: "A2", status: "available" },
        { id: "A3", code: "A3", status: "available" },
      ],
    },
    {
      id: "home-kitchen",
      name: "Home & Kitchen",
      availableCount: 80,
      totalCount: 100,
      shelves: [
        { id: "C1", code: "C1", status: "available" },
        { id: "C2", code: "C2", status: "available" },
        { id: "C3", code: "C3", status: "full" },
      ],
    },
    {
      id: "automotive",
      name: "Automotive Parts",
      availableCount: 15,
      totalCount: 100,
      shelves: [
        { id: "D1", code: "D1", status: "full" },
        { id: "D2", code: "D2", status: "full" },
        { id: "D3", code: "D3", status: "available" },
      ],
    },
    {
      id: "sports",
      name: "Sports Equipment",
      availableCount: 90,
      totalCount: 100,
      shelves: [
        { id: "F1", code: "F1", status: "available" },
        { id: "F2", code: "F2", status: "available" },
        { id: "F3", code: "F3", status: "available" },
      ],
    },
    {
      id: "apparel",
      name: "Apparel",
      availableCount: 65,
      totalCount: 100,
      colSpan: "lg:col-span-8",
      shelves: [
        { id: "B1", code: "B1", status: "available" },
        { id: "B2", code: "B2", status: "available" },
        { id: "B3", code: "B3", status: "available" },
        { id: "B4", code: "B4", status: "full" },
        { id: "B5", code: "B5", status: "available" },
        { id: "B6", code: "B6", status: "available" },
        { id: "B7", code: "B7", status: "available" },
        { id: "B8", code: "B8", status: "full" },
        { id: "B9", code: "B9", status: "available" },
        { id: "B10", code: "B10", status: "available" },
      ],
    },
    {
      id: "beauty-health",
      name: "Beauty & Health",
      availableCount: 60,
      totalCount: 100,
      colSpan: "lg:col-span-4",
      shelves: [
        { id: "E1", code: "E1", status: "available" },
        { id: "E2", code: "E2", status: "full" },
        { id: "E3", code: "E3", status: "available" },
        { id: "E4", code: "E4", status: "available" },
      ],
    },
  ],
};

function ShelfButton({
  shelf,
  fluid = false,
}: {
  shelf: ShelfSlot;
  fluid?: boolean;
}) {
  const isAvailable = shelf.status === "available";

  return (
    <button
      type="button"
      className={`group relative h-[32px] lg:h-[48px] shrink-0 cursor-pointer select-none rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
        fluid ? "w-full max-w-[32px] lg:max-w-[40px]" : "w-[32px] lg:w-[40px]"
      }`}
      aria-label={`Shelf ${shelf.code}, ${shelf.status}`}
      title={`Shelf ${shelf.code} (${shelf.status})`}
    >
      <span
        aria-hidden="true"
        className={`absolute left-0 top-0 h-[32px] lg:h-[40px] w-full rounded-md transition-colors duration-150 ${
          isAvailable
            ? "bg-[#E3DDFF] group-hover:bg-[#D9D0FF]"
            : "bg-[#E2E2E5] group-hover:bg-[#D8D8DC]"
        }`}
      />
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-[6px] lg:top-2 flex h-[20px] w-[20px] lg:h-[24px] lg:w-[24px] -translate-x-1/2 items-center justify-center rounded-sm bg-[#FEFEFE] text-[9px] lg:text-[10px] font-semibold leading-none text-[#292929] shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-transform duration-150 group-hover:-translate-x-1/2 group-hover:-translate-y-0.5 group-active:translate-y-0"
      >
        {shelf.code}
      </span>
    </button>
  );
}

export default function WarehouseMap() {
  const [activeFloor, setActiveFloor] = useState<FloorTab>("Floor 1");

  const floors: FloorTab[] = ["Floor 1", "Floor 2", "Floor 3"];
  const currentZones = floorDataMap[activeFloor];

  const topRowZones = currentZones.filter((z) => !z.colSpan);
  const bottomRowZones = currentZones.filter((z) => z.colSpan);

  return (
    <div className="w-full bg-white rounded-[20px] p-4 sm:p-4.5 md:p-3 lg:p-4.5 border border-border/60 shadow-2xs flex flex-col gap-3 md:gap-2.5 lg:gap-4">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
        <h2 className="text-[16px] sm:text-[20px] md:text-[18px] lg:text-[20px] font-bold text-slate tracking-tight">
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
                className={`flex-1 sm:flex-none px-3.5 sm:px-4 md:px-3 lg:px-4 py-1.5 md:py-1 lg:py-1.5 rounded-[10px] text-[12px] sm:text-[13px] md:text-[12px] lg:text-[13px] font-semibold transition duration-150 cursor-pointer whitespace-nowrap ${
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
      <div className="bg-surface-alt/80 rounded-[16px] p-2 sm:p-3.5 md:p-2 lg:p-3.5 border border-border/40 flex flex-col gap-2.5 md:gap-2.5 lg:gap-3.5">
        {/* Top Grid Row (4 equal zone cards) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3.5 md:gap-2.5 lg:gap-3.5">
          {topRowZones.map((zone) => (
            <div
              key={zone.id}
              className="bg-white rounded-[12px] p-2 sm:p-3 md:p-2.5 lg:p-3 border border-border/40 shadow-xs flex flex-col justify-between gap-2 md:gap-2 lg:gap-2.5 min-h-[100px] sm:min-h-[120px] md:min-h-[105px] lg:min-h-[120px]"
            >
              {/* Zone Title */}
              <h3 className="text-[11px] sm:text-[14px] md:text-[12px] lg:text-[14px] font-bold text-slate">
                {zone.name}
              </h3>

              {/* Shelf Chips Row */}
              <div className="flex flex-wrap items-center gap-1 sm:gap-2 md:gap-1.5 lg:gap-2">
                {zone.shelves.map((shelf) => (
                  <ShelfButton key={shelf.id} shelf={shelf} />
                ))}
              </div>

              {/* Available Space Footer */}
              <div className="text-[10px] sm:text-[12px] md:text-[11px] lg:text-[12px] font-normal text-body pt-0.5">
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

        {/* Bottom Grid Row (Apparel 8-col & Beauty & Health 4-col) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-3.5 md:gap-2.5 lg:gap-3.5">
          {bottomRowZones.map((zone) => (
            <div
              key={zone.id}
              className={`${
                zone.colSpan
                  ? zone.colSpan
                      .replace("lg:col-span-", "md:col-span-")
                      .concat(" ", zone.colSpan)
                  : "md:col-span-6 lg:col-span-6"
              } bg-white rounded-[12px] p-2 sm:p-3 md:p-2.5 lg:p-3 border border-border/40 shadow-xs flex flex-col justify-between gap-2 md:gap-2 lg:gap-2.5 min-h-[100px] sm:min-h-[120px] md:min-h-[105px] lg:min-h-[120px]`}
            >
              {/* Zone Title */}
              <h3 className="text-[11px] sm:text-[14px] md:text-[12px] lg:text-[14px] font-bold text-slate">
                {zone.name}
              </h3>

              {/* Shelf Chips Row */}
              <div
                className={
                  zone.id === "apparel"
                    ? "grid grid-cols-5 gap-1 sm:grid-cols-10 sm:gap-1.5 md:gap-1 lg:gap-1.5"
                    : zone.id === "beauty-health"
                      ? "grid grid-cols-4 gap-2 md:gap-1.5 lg:gap-2"
                      : "flex flex-wrap items-center gap-1 sm:gap-2"
                }
              >
                {zone.shelves.map((shelf) => (
                  <ShelfButton
                    key={shelf.id}
                    shelf={shelf}
                    fluid={zone.id === "apparel" || zone.id === "beauty-health"}
                  />
                ))}
              </div>

              {/* Available Space Footer */}
              <div className="text-[10px] sm:text-[12px] md:text-[11px] lg:text-[12px] font-normal text-body pt-0.5">
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
        <div className="flex items-center gap-6 pt-0.5 text-[12px] sm:text-[13px] md:text-[11px] lg:text-[13px] font-normal text-body">
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
