"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Search, MoreHorizontal, ChevronsUpDown, ArrowUp, ArrowDown } from "lucide-react";

import { shipments, ShipmentStatus, Shipment } from "@/data/data";

const STATUS_STYLES: Record<ShipmentStatus, { bg: string; text: string }> = {
  "In Transit":       { bg: "bg-divider",  text: "text-heading" },
  "Out for Delivery": { bg: "bg-brand-light",  text: "text-brand" },
  "Delivered":        { bg: "bg-success-bg",  text: "text-success" },
  "Processing":       { bg: "bg-info-bg",  text: "text-link" },
};

type SortColumn = "id" | "company" | "carrier" | "route" | "date" | "status";
type SortDirection = "asc" | "desc";

const COLUMNS = [
  { key: "id" as const, label: "Shipping ID" },
  { key: "company" as const, label: "Company" },
  { key: "carrier" as const, label: "Carriers" },
  { key: "route" as const, label: "Route" },
  { key: "date" as const, label: "Shipping Date" },
  { key: "status" as const, label: "Status" },
];

export default function RecentShipments() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [sortCol, setSortCol] = useState<SortColumn>("id");
  const [sortDir, setSortDir] = useState<SortDirection>("desc");

  const handleSort = (col: SortColumn) => {
    if (sortCol === col) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortCol(col);
      setSortDir("asc");
    }
  };

  const getSortValue = (s: Shipment, col: SortColumn): string => {
    switch (col) {
      case "id": return s.id;
      case "company": return s.company;
      case "carrier": return s.carrier;
      case "route": return `${s.origin.city} → ${s.destination.city}`;
      case "date": return s.origin.datetime;
      case "status": return s.status;
    }
  };

  const filtered = useMemo(() => {
    let result = shipments.filter(
      (s) =>
        s.id.toLowerCase().includes(search.toLowerCase()) ||
        s.company.toLowerCase().includes(search.toLowerCase()) ||
        s.productCategory.toLowerCase().includes(search.toLowerCase()) ||
        s.carrier.toLowerCase().includes(search.toLowerCase())
    );

    result.sort((a, b) => {
      const va = getSortValue(a, sortCol);
      const vb = getSortValue(b, sortCol);
      const cmp = va.localeCompare(vb);
      return sortDir === "asc" ? cmp : -cmp;
    });

    return result.slice(0, 5);
  }, [search, sortCol, sortDir]);

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
    <div className="w-full bg-card p-4 rounded-[12px] border border-border-card flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-bold text-[14px] md:text-[16px] leading-[19px] text-heading shrink-0">
          Recent Shipments
        </h3>
        <div className="flex items-center gap-2 md:gap-3 ml-auto">
          {/* Search */}
          <div className="relative flex items-center">
            <Search className="absolute left-2.5 w-3.5 h-3.5 text-body pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search shipment"
              className="h-7 pl-8 pr-2 bg-input rounded-[8px] text-[11px] md:text-[12px] text-heading placeholder:text-body outline-none focus:ring-1 focus:ring-brand/30 w-[130px] sm:w-[160px] md:w-[150px] lg:w-[180px]"
            />
          </div>
          <button
            type="button"
            aria-label="Filter shipments"
            className="w-7 h-7 rounded-[8px] bg-input hover:bg-border flex items-center justify-center cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
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
            className="w-7 h-7 rounded-[8px] bg-input hover:bg-border flex items-center justify-center cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
          >
            <MoreHorizontal className="w-4 h-4 text-heading" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Header Row */}
          <thead>
            <tr className="bg-brand-light rounded-[8px]">
              <th className="w-6 pl-2 pr-0.5 py-2 rounded-l-[8px]">
                <input
                  type="checkbox"
                  checked={
                    selected.size === filtered.length && filtered.length > 0
                  }
                  onChange={toggleAll}
                  className="w-3 h-3 rounded-[3px] accent-brand cursor-pointer"
                />
              </th>
              {COLUMNS.map((col, i) => {
                const isActive = sortCol === col.key;
                return (
                <th
                  key={col.key}
                  className={`py-2 px-1 text-left text-[10px] font-normal leading-[13px] text-heading whitespace-nowrap ${
                    i === COLUMNS.length - 1 ? "rounded-r-[8px] text-left pr-3" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => handleSort(col.key)}
                    className="flex items-center gap-0.5 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand/40 rounded"
                  >
                    {col.label}
                    {isActive ? (
                      sortDir === "asc" ? (
                        <ArrowUp className="w-3 h-3 text-brand shrink-0" />
                      ) : (
                        <ArrowDown className="w-3 h-3 text-brand shrink-0" />
                      )
                    ) : (
                      <ChevronsUpDown className="w-3.5 h-3.5 text-body shrink-0" />
                    )}
                  </button>
                </th>
                );
              })}
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
                  className="border-b border-border-card last:border-0 hover:bg-row-hover"
                >
                  <td className="pl-2 pr-0.5 py-2">
                    <input
                      type="checkbox"
                      checked={selected.has(row.id)}
                      onChange={() => toggle(row.id)}
                      className="w-3 h-3 rounded-[3px] accent-brand cursor-pointer"
                    />
                  </td>
                  <td className="py-2 px-1">
                    <span className="font-semibold text-[10px] md:text-[11px] leading-[16px] text-brand whitespace-nowrap">
                      {row.id}
                    </span>
                  </td>
                  <td className="py-2 px-1">
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="font-normal text-[10px] md:text-[12px] leading-[16px] text-heading truncate">
                        {row.company}
                      </span>
                      <span className="font-normal text-[9px] md:text-[10px] leading-[13px] text-body truncate">
                        {row.productCategory}
                      </span>
                    </div>
                  </td>
                  <td className="py-2 px-1">
                    <span className="font-normal text-[10px] md:text-[12px] leading-[16px] text-heading whitespace-nowrap">
                      {row.carrier}
                    </span>
                  </td>
                  <td className="py-2 px-1">
                    <span className="font-normal text-[10px] md:text-[12px] leading-[16px] text-heading whitespace-nowrap">
                      {routeStr}
                    </span>
                  </td>
                  <td className="py-2 px-1">
                    <span className="font-normal text-[10px] md:text-[12px] leading-[16px] text-heading whitespace-nowrap">
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
