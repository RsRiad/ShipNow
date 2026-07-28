"use client";

import React, { useState, useMemo } from "react";
import { Shipment } from "@/data/data";
import ShipmentMetricCards from "./ShipmentMetricCards";
import ShipmentTableHeader, { SortField } from "./ShipmentTableHeader";
import ShipmentTableRow from "./ShipmentTableRow";
import Pagination from "@/components/common/Pagination";

interface ShipmentTableViewProps {
  shipments: Shipment[];
  currentPage: number;
  onPageChange: (page: number) => void;
  pageSize: number;
  onPageSizeChange: (size: number) => void;
}

export default function ShipmentTableView({
  shipments,
  currentPage,
  onPageChange,
  pageSize,
  onPageSizeChange,
}: ShipmentTableViewProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [sortField, setSortField] = useState<SortField | null>(null);
  const [sortAsc, setSortAsc] = useState<boolean>(true);

  // Sorting logic
  const sortedShipments = useMemo(() => {
    if (!sortField) return shipments;
    return [...shipments].sort((a, b) => {
      let valA: string | number = "";
      let valB: string | number = "";

      if (sortField === "origin") {
        valA = a.origin.city;
        valB = b.origin.city;
      } else {
        const rawA = a[sortField];
        const rawB = b[sortField];
        if (typeof rawA === "string" || typeof rawA === "number") {
          valA = rawA;
        }
        if (typeof rawB === "string" || typeof rawB === "number") {
          valB = rawB;
        }
      }

      if (typeof valA === "string" && typeof valB === "string") {
        return sortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }
      if (typeof valA === "number" && typeof valB === "number") {
        return sortAsc ? valA - valB : valB - valA;
      }
      return 0;
    });
  }, [shipments, sortField, sortAsc]);

  // Pagination logic
  const totalItems = sortedShipments.length;
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedShipments = sortedShipments.slice(
    startIndex,
    startIndex + pageSize
  );

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedIds(paginatedShipments.map((s) => s.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const isAllSelected =
    paginatedShipments.length > 0 &&
    paginatedShipments.every((s) => selectedIds.includes(s.id));

  return (
    <div className="w-full flex flex-col gap-3.5">
      {/* 1. Dynamic Metric Summary Cards (Desktop & Tablet View) */}
      <div className="hidden sm:block">
        <ShipmentMetricCards shipments={shipments} />
      </div>

      {/* 2. Decomposed Modular Data Table */}
      <div className="w-full bg-white border border-[#E5E5E7] rounded-[18px] shadow-2xs overflow-hidden">
        <div className="overflow-x-auto lg:overflow-x-visible no-scrollbar">
          <table className="w-full text-left border-collapse min-w-[850px] lg:min-w-0">
            <ShipmentTableHeader
              onSelectAll={handleSelectAll}
              isAllSelected={isAllSelected}
              onSort={handleSort}
            />
            <tbody className="divide-y divide-[#E2E8F0]/80 text-[12px] xl:text-[13px] text-[#334155]">
              {paginatedShipments.map((shipment) => (
                <ShipmentTableRow
                  key={shipment.id}
                  shipment={shipment}
                  isSelected={selectedIds.includes(shipment.id)}
                  onSelect={handleSelectOne}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Reusable Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        pageSize={pageSize}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </div>
  );
}
