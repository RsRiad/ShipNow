"use client";

import React from "react";
import { Shipment } from "@/data/data";
import ShipmentCard from "./ShipmentCard";
import Pagination from "@/components/common/Pagination";

interface ShipmentGridViewProps {
  shipments: Shipment[];
  currentPage: number;
  onPageChange: (page: number) => void;
  pageSize: number;
  onPageSizeChange: (size: number) => void;
  onSelectShipment?: (shipment: Shipment) => void;
}

export default function ShipmentGridView({
  shipments,
  currentPage,
  onPageChange,
  pageSize,
  onPageSizeChange,
  onSelectShipment,
}: ShipmentGridViewProps) {
  const totalItems = shipments.length;
  const startIndex = (currentPage - 1) * pageSize;
  const currentShipments = shipments.slice(startIndex, startIndex + pageSize);

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Grid Container */}
      {currentShipments.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 items-stretch">
          {currentShipments.map((shipment) => (
            <ShipmentCard
              key={shipment.id}
              shipment={shipment}
              onClick={() => onSelectShipment?.(shipment)}
            />
          ))}
        </div>
      ) : (
        <div className="w-full p-12 bg-white border border-border rounded-[18px] text-center text-body">
          No shipments found matching your filters.
        </div>
      )}

      {/* Reusable Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        pageSize={pageSize}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
        pageSizeOptions={[8, 12, 16, 24]}
        itemLabel="shipments"
      />
    </div>
  );
}
