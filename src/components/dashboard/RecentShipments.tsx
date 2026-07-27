"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, MoreHorizontal, ChevronsUpDown } from "lucide-react";

import { shipments, ShipmentStatus } from "@/data/data";

const STATUS_STYLES: Record<ShipmentStatus, { bg: string; text: string }> = {
  "In Transit":       { bg: "bg-[#E0E0E0]",  text: "text-[#333333]" },
  "Out for Delivery": { bg: "bg-[#E3DDFF]",  text: "text-[#856DF3]" },
  "Delivered":        { bg: "bg-[#D9F9E7]",  text: "text-[#007837]" },
  "Processing":       { bg: "bg-[#E3EDFF]",  text: "text-[#2563EB]" },
};

function SortIcon() {
  return <ChevronsUpDown className="w-3.5 h-3.5 text-[#757575] shrink-0" />;
}

export default function RecentShipments() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const filtered = shipments
    .filter(
      (s) =>
        s.id.toLowerCase().includes(search.toLowerCase()) ||
        s.company.toLowerCase().includes(search.toLowerCase()) ||
        s.productCategory.toLowerCase().includes(search.toLowerCase()) ||
        s.carrier.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 5);

  const toggleAll = () => {
    if (selected.size === filtered.length) setSelected(new Set());
    else setSelected(new Set(filtered.map((s) => s.id)));
  };

  const toggle = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setSelected(next);
  };

  return (
    <div className="w-full bg-[#FEFEFE] p-4 rounded-[12px] border border-[#F0F0F2] flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-bold text-[14px] md:text-[16px] leading-[19px] text-[#333333] shrink-0">
          Recent Shipments
        </h3>
        <div className="flex items-center gap-2 md:gap-3 ml-auto">
          {/* Search */}
          <div className="relative flex items-center">
            <Search className="absolute left-2.5 w-3.5 h-3.5 text-[#757575] pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search shipment"
              className="h-7 pl-8 pr-2 bg-[#F0F0F0] rounded-[8px] text-[11px] md:text-[12px] text-[#333333] placeholder:text-[#757575] outline-none focus:ring-1 focus:ring-[#856DF3]/30 w-[130px] sm:w-[160px] md:w-[150px] lg:w-[180px]"
            />
          </div>
          <button
            type="button"
            aria-label="Filter shipments"
            className="w-7 h-7 rounded-[8px] bg-[#F0F0F0] hover:bg-[#E5E5E7] flex items-center justify-center cursor-pointer shrink-0"
          >
            <Image
              src="/Assets/IconFilter.svg"
              alt="Filter"
              width={16}
              height={16}
            />
          </button>
          <button
            type="button"
            className="w-7 h-7 rounded-[8px] bg-[#F0F0F0] hover:bg-[#E5E5E7] flex items-center justify-center cursor-pointer shrink-0"
          >
            <MoreHorizontal className="w-4 h-4 text-[#363B3F]" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Header Row */}
          <thead>
            <tr className="bg-[#E3DDFF] rounded-[8px]">
              <th className="w-6 pl-2 pr-0.5 py-2 rounded-l-[8px]">
                <input
                  type="checkbox"
                  checked={
                    selected.size === filtered.length && filtered.length > 0
                  }
                  onChange={toggleAll}
                  className="w-3 h-3 rounded-[3px] accent-[#856DF3] cursor-pointer"
                />
              </th>
              {(
                [
                  "Shipping ID",
                  "Company",
                  "Carriers",
                  "Route",
                  "Shipping Date",
                  "Status",
                ] as const
              ).map((col, i) => (
                <th
                  key={col}
                  className={`py-2 px-1 text-left text-[10px] font-normal leading-[13px] text-[#333333] whitespace-nowrap ${
                    i === 5 ? "rounded-r-[8px] text-left pr-3" : ""
                  }`}
                >
                  <div
                    className={`flex items-center gap-0.5 ${
                      i === 5 ? "justify-left" : ""
                    }`}
                  >
                    {col}
                    <SortIcon />
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Data Rows */}
          <tbody>
            {filtered.map((row) => {
              const style = STATUS_STYLES[row.status];
              const dateStr = row.origin.datetime.split(" · ")[0];
              const routeStr = `${row.origin.city} → ${row.destination.city}`;

              return (
                <tr
                  key={row.id}
                  className="border-b border-[#F0F0F2] last:border-0 hover:bg-[#FAFAFA]"
                >
                  <td className="pl-2 pr-0.5 py-2">
                    <input
                      type="checkbox"
                      checked={selected.has(row.id)}
                      onChange={() => toggle(row.id)}
                      className="w-3 h-3 rounded-[3px] accent-[#856DF3] cursor-pointer"
                    />
                  </td>
                  <td className="py-2 px-1">
                    <span className="font-semibold text-[10px] md:text-[11px] leading-[16px] text-[#856DF3] whitespace-nowrap">
                      {row.id}
                    </span>
                  </td>
                  <td className="py-2 px-1">
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="font-normal text-[10px] md:text-[12px] leading-[16px] text-[#333333] truncate">
                        {row.company}
                      </span>
                      <span className="font-normal text-[9px] md:text-[10px] leading-[13px] text-[#757575] truncate">
                        {row.productCategory}
                      </span>
                    </div>
                  </td>
                  <td className="py-2 px-1">
                    <span className="font-normal text-[10px] md:text-[12px] leading-[16px] text-[#333333] whitespace-nowrap">
                      {row.carrier}
                    </span>
                  </td>
                  <td className="py-2 px-1">
                    <span className="font-normal text-[10px] md:text-[12px] leading-[16px] text-[#333333] whitespace-nowrap">
                      {routeStr}
                    </span>
                  </td>
                  <td className="py-2 px-1">
                    <span className="font-normal text-[10px] md:text-[12px] leading-[16px] text-[#333333] whitespace-nowrap">
                      {dateStr}
                    </span>
                  </td>
                  <td className="py-2 px-1 pr-3 text-left">
                    <span
                      className={`inline-flex items-center px-1.5 md:px-2 py-0.5 rounded-full text-[9px] md:text-[10px] font-semibold leading-[13px] whitespace-nowrap ${style.bg} ${style.text}`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
