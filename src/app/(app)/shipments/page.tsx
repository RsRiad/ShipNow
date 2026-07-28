"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AppShell from "@/components/layout/AppShell";
import ShipmentHeader, { ShipmentViewMode } from "@/components/shipments/ShipmentHeader";
import ShipmentToolbar from "@/components/shipments/ShipmentToolbar";
import ShipmentMetricCards from "@/components/shipments/ShipmentMetricCards";
import ShipmentTableView from "@/components/shipments/ShipmentTableView";
import ShipmentGridView from "@/components/shipments/ShipmentGridView";
import { shipments as mockShipments } from "@/data/data";

function ShipmentsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Toolbar & View state management
  const rawView = searchParams.get("view");
  const currentView: ShipmentViewMode = rawView === "grid" ? "grid" : "table";

  const [activeStatus, setActiveStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  const handleViewChange = (view: ShipmentViewMode) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("view", view);
    router.push(`/shipments?${params.toString()}`, { scroll: false });
  };

  const handleNewShipment = () => {
    router.push("/create-shipment");
  };

  // Filter & Sort shipments dataset
  const filteredShipments = useMemo(() => {
    let result = [...mockShipments];

    // Status filter
    if (activeStatus !== "All") {
      result = result.filter((s) => s.status === activeStatus);
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (s) =>
          s.id.toLowerCase().includes(q) ||
          s.company.toLowerCase().includes(q) ||
          s.industry.toLowerCase().includes(q) ||
          s.origin.city.toLowerCase().includes(q) ||
          s.destination.city.toLowerCase().includes(q) ||
          s.carrier.toLowerCase().includes(q)
      );
    }

    // Sort by
    result.sort((a, b) => {
      if (sortBy === "Highest Value") return b.shipmentValue - a.shipmentValue;
      if (sortBy === "Lowest Value") return a.shipmentValue - b.shipmentValue;
      if (sortBy === "Oldest") return a.id.localeCompare(b.id);
      return b.id.localeCompare(a.id); // "Newest"
    });

    return result;
  }, [activeStatus, searchQuery, sortBy]);

  return (
    <div className="w-full flex flex-col">
      {/* Main Content Area */}
      <div className="max-w-[1440px] w-full mx-auto flex flex-col">
        {/* Shipment Page Header */}
        <ShipmentHeader
          currentView={currentView}
          onViewChange={handleViewChange}
          onNewShipment={handleNewShipment}
        />

        {/* MOBILE VIEW ONLY: 2x2 Metric Cards FIRST above Toolbar */}
        <div className="sm:hidden px-4 pt-3 pb-1">
          <ShipmentMetricCards shipments={filteredShipments} />
        </div>

        {/* Shipment Filter & Search Toolbar (Renders BELOW Metric Cards on Mobile View) */}
        <ShipmentToolbar
          activeStatus={activeStatus}
          onStatusChange={(st) => {
            setActiveStatus(st);
            setCurrentPage(1);
          }}
          searchQuery={searchQuery}
          onSearchChange={(q) => {
            setSearchQuery(q);
            setCurrentPage(1);
          }}
          sortBy={sortBy}
          onSortChange={setSortBy}
          onNewShipment={handleNewShipment}
        />

        {/* View Content Area */}
        <div className="px-5 md:px-8 pt-2 pb-6">
          {currentView === "table" ? (
            <ShipmentTableView
              shipments={filteredShipments}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
              pageSize={pageSize}
              onPageSizeChange={(size) => {
                setPageSize(size);
                setCurrentPage(1);
              }}
            />
          ) : (
            <ShipmentGridView
              shipments={filteredShipments}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
              pageSize={pageSize}
              onPageSizeChange={(size) => {
                setPageSize(size);
                setCurrentPage(1);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default function ShipmentsPage() {
  return (
    <AppShell>
      <Suspense fallback={<div className="p-5 text-gray-500">Loading Shipments...</div>}>
        <ShipmentsContent />
      </Suspense>
    </AppShell>
  );
}
