"use client";

import React from "react";
import { ArrowUpDown } from "lucide-react";

export type SortField =
  | "id"
  | "company"
  | "carrier"
  | "productCategory"
  | "weight"
  | "origin"
  | "createdAt"
  | "progress"
  | "status";

interface ShipmentTableHeaderProps {
  onSelectAll: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isAllSelected: boolean;
  onSort: (field: SortField) => void;
}

export default function ShipmentTableHeader({
  onSelectAll,
  isAllSelected,
  onSort,
}: ShipmentTableHeaderProps) {
  return (
    <thead>
      <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[11px] xl:text-[12px] font-semibold text-[#64748B]">
        {/* Select All Checkbox */}
        <th className="py-3 pl-3 pr-1 w-8">
          <input
            type="checkbox"
            onChange={onSelectAll}
            checked={isAllSelected}
            className="w-3.5 h-3.5 rounded text-[#856DF3] border-[#CBD5E1] focus:ring-[#856DF3]/20 cursor-pointer"
          />
        </th>

        {/* Shipping ID Column */}
        <th
          onClick={() => onSort("id")}
          className="py-3 px-2 cursor-pointer hover:text-[#0F172A] transition"
        >
          <div className="flex items-center gap-1 whitespace-nowrap">
            <span>Shipping ID</span>
            <ArrowUpDown className="w-3 h-3 text-[#94A3B8]" />
          </div>
        </th>

        {/* Company Column */}
        <th
          onClick={() => onSort("company")}
          className="py-3 px-2 cursor-pointer hover:text-[#0F172A] transition"
        >
          <div className="flex items-center gap-1 whitespace-nowrap">
            <span>Company</span>
            <ArrowUpDown className="w-3 h-3 text-[#94A3B8]" />
          </div>
        </th>

        {/* Carriers Column */}
        <th
          onClick={() => onSort("carrier")}
          className="py-3 px-2 cursor-pointer hover:text-[#0F172A] transition"
        >
          <div className="flex items-center gap-1 whitespace-nowrap">
            <span>Carriers</span>
            <ArrowUpDown className="w-3 h-3 text-[#94A3B8]" />
          </div>
        </th>

        {/* Product Category Column (Desktop only) */}
        <th
          onClick={() => onSort("productCategory")}
          className="hidden lg:table-cell py-3 px-2 cursor-pointer hover:text-[#0F172A] transition"
        >
          <div className="flex items-center gap-1 whitespace-nowrap">
            <span>Category</span>
            <ArrowUpDown className="w-3 h-3 text-[#94A3B8]" />
          </div>
        </th>

        {/* Weight Column (Desktop only) */}
        <th
          onClick={() => onSort("weight")}
          className="hidden lg:table-cell py-3 px-2 cursor-pointer hover:text-[#0F172A] transition"
        >
          <div className="flex items-center gap-1 whitespace-nowrap">
            <span>Weight</span>
            <ArrowUpDown className="w-3 h-3 text-[#94A3B8]" />
          </div>
        </th>

        {/* Route Column */}
        <th
          onClick={() => onSort("origin")}
          className="py-3 px-2 cursor-pointer hover:text-[#0F172A] transition"
        >
          <div className="flex items-center gap-1 whitespace-nowrap">
            <span>Route</span>
            <ArrowUpDown className="w-3 h-3 text-[#94A3B8]" />
          </div>
        </th>

        {/* Date Column */}
        <th
          onClick={() => onSort("createdAt")}
          className="py-3 px-2 cursor-pointer hover:text-[#0F172A] transition"
        >
          <div className="flex items-center gap-1 whitespace-nowrap">
            <span>Date</span>
            <ArrowUpDown className="w-3 h-3 text-[#94A3B8]" />
          </div>
        </th>

        {/* Progress Column */}
        <th
          onClick={() => onSort("progress")}
          className="py-3 px-2 cursor-pointer hover:text-[#0F172A] transition"
        >
          <div className="flex items-center gap-1 whitespace-nowrap">
            <span>Progress</span>
            <ArrowUpDown className="w-3 h-3 text-[#94A3B8]" />
          </div>
        </th>

        {/* Status Column */}
        <th
          onClick={() => onSort("status")}
          className="py-3 pl-2 pr-3 cursor-pointer hover:text-[#0F172A] transition"
        >
          <div className="flex items-center gap-1 whitespace-nowrap">
            <span>Status</span>
            <ArrowUpDown className="w-3 h-3 text-[#94A3B8]" />
          </div>
        </th>
      </tr>
    </thead>
  );
}
