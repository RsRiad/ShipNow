"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, MoreHorizontal, ChevronsUpDown } from "lucide-react";

type StatusKey = "In Transit" | "Out for Delivery" | "Delivered" | "Processing";

interface Shipment {
  id: string;
  company: string;
  category: string;
  carrier: string;
  route: string;
  date: string;
  status: StatusKey;
}

const STATUS_STYLES: Record<StatusKey, { bg: string; text: string }> = {
  "In Transit":       { bg: "bg-[#E0E0E0]",  text: "text-[#333333]" },
  "Out for Delivery": { bg: "bg-[#E3DDFF]",  text: "text-[#856DF3]" },
  "Delivered":        { bg: "bg-[#D9F9E7]",  text: "text-[#007837]" },
  "Processing":       { bg: "bg-[#E3EDFF]",  text: "text-[#2563EB]" },
};

const shipments: Shipment[] = [
  { id: "#SH9283746", company: "TechGear Inc.",   category: "Electronics",      carrier: "FedEx",  route: "Los Angeles, CA → Chicago, IL",  date: "Mar 20, 2035", status: "In Transit" },
  { id: "#SH9182635", company: "StyleHub Co.",    category: "Apparel",          carrier: "DHL",    route: "New York, NY → Atlanta, GA",     date: "Mar 19, 2035", status: "Out for Delivery" },
  { id: "#SH9037821", company: "FreshNest",       category: "Home & Kitchen",   carrier: "UPS",    route: "Dallas, TX → Miami, FL",         date: "Mar 18, 2035", status: "Delivered" },
  { id: "#SH9374652", company: "FitPlus Gear",    category: "Sports & Outdoors",carrier: "USPS",   route: "Seattle, WA → Denver, CO",       date: "Mar 21, 2035", status: "Processing" },
  { id: "#SH9457830", company: "AutoParts Pro",   category: "Automotive",       carrier: "Aramex", route: "Detroit, MI → San Diego, CA",    date: "Mar 20, 2035", status: "In Transit" },
];

function SortIcon() {
  return <ChevronsUpDown className="w-3.5 h-3.5 text-[#757575] shrink-0" />;
}

export default function RecentShipments() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const filtered = shipments.filter(
    (s) =>
      s.id.toLowerCase().includes(search.toLowerCase()) ||
      s.company.toLowerCase().includes(search.toLowerCase())
  );

  const toggleAll = () => {
    if (selected.size === filtered.length) setSelected(new Set());
    else setSelected(new Set(filtered.map((s) => s.id)));
  };

  const toggle = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) { next.delete(id); } else { next.add(id); }
    setSelected(next);
  };

  return (
    <div className="w-full bg-[#FEFEFE] p-4 rounded-[12px] border border-[#F0F0F2] flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-bold text-[16px] leading-[19px] text-[#333333] shrink-0">
          Recent Shipments
        </h3>
        <div className="flex items-center gap-3 ml-auto">
          {/* Search */}
          <div className="relative flex items-center">
            <Search className="absolute left-2.5 w-3.5 h-3.5 text-[#757575] pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search shipment"
              className="h-7 pl-8 pr-3 bg-[#F0F0F0] rounded-[8px] text-[12px] text-[#333333] placeholder:text-[#757575] outline-none focus:ring-1 focus:ring-[#856DF3]/30 w-[180px]"
            />
          </div>
          <button type="button" aria-label="Filter shipments" className="w-7 h-7 rounded-[8px] bg-[#F0F0F0] hover:bg-[#E5E5E7] flex items-center justify-center cursor-pointer">
            <Image src="/Assets/IconFilter.svg" alt="Filter" width={16} height={16} />
          </button>
          <button type="button" className="w-7 h-7 rounded-[8px] bg-[#F0F0F0] hover:bg-[#E5E5E7] flex items-center justify-center cursor-pointer">
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
              <th className="w-8 pl-2.5 pr-1 py-2 rounded-l-[8px]">
                <input
                  type="checkbox"
                  checked={selected.size === filtered.length && filtered.length > 0}
                  onChange={toggleAll}
                  className="w-3 h-3 rounded-[3px] accent-[#856DF3] cursor-pointer"
                />
              </th>
              {(["Shipping ID", "Company", "Carriers", "Route", "Shipping Date", "Status"] as const).map((col, i) => (
                <th
                  key={col}
                  className={`py-2 px-2 text-left text-[10px] font-normal leading-[13px] text-[#333333] whitespace-nowrap ${i === 5 ? "rounded-r-[8px]" : ""}`}
                >
                  <div className="flex items-center gap-1">
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
              return (
                <tr key={row.id} className="border-b border-[#F0F0F2] last:border-0 hover:bg-[#FAFAFA]">
                  <td className="pl-2.5 pr-1 py-2">
                    <input
                      type="checkbox"
                      checked={selected.has(row.id)}
                      onChange={() => toggle(row.id)}
                      className="w-3 h-3 rounded-[3px] accent-[#856DF3] cursor-pointer"
                    />
                  </td>
                  <td className="py-2 px-2">
                    <span className="font-semibold text-[12px] leading-[16px] text-[#856DF3]">{row.id}</span>
                  </td>
                  <td className="py-2 px-2">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-normal text-[12px] leading-[16px] text-[#333333]">{row.company}</span>
                      <span className="font-normal text-[10px] leading-[13px] text-[#757575]">{row.category}</span>
                    </div>
                  </td>
                  <td className="py-2 px-2">
                    <span className="font-normal text-[12px] leading-[16px] text-[#333333]">{row.carrier}</span>
                  </td>
                  <td className="py-2 px-2">
                    <span className="font-normal text-[12px] leading-[16px] text-[#333333] whitespace-nowrap">{row.route}</span>
                  </td>
                  <td className="py-2 px-2">
                    <span className="font-normal text-[12px] leading-[16px] text-[#333333] whitespace-nowrap">{row.date}</span>
                  </td>
                  <td className="py-2 px-2">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-normal leading-[13px] whitespace-nowrap ${style.bg} ${style.text}`}>
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
