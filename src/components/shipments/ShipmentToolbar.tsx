"use client";

import React, { useState } from "react";
import {
  Search,
  Filter,
  SlidersHorizontal,
  ChevronDown,
  X,
  Plus,
} from "lucide-react";
import Button from "@/components/common/Button";
import IconButton from "@/components/common/IconButton";

export type ShipmentStatusFilter =
  | "All"
  | "Delivered"
  | "In Transit"
  | "Processing"
  | "Out for Delivery";

export type SortOption = "Newest" | "Oldest" | "Highest Value" | "Lowest Value";

interface ShipmentToolbarProps {
  activeStatus?: string;
  onStatusChange?: (status: string) => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  sortBy?: string;
  onSortChange?: (sort: string) => void;
  onFilterClick?: () => void;
  onNewShipment?: () => void;
}

const statusOptions: ShipmentStatusFilter[] = [
  "All",
  "Delivered",
  "In Transit",
  "Processing",
  "Out for Delivery",
];

const sortOptions: SortOption[] = [
  "Newest",
  "Oldest",
  "Highest Value",
  "Lowest Value",
];

export default function ShipmentToolbar({
  activeStatus = "All",
  onStatusChange,
  searchQuery = "",
  onSearchChange,
  sortBy = "Newest",
  onSortChange,
  onFilterClick,
  onNewShipment,
}: ShipmentToolbarProps) {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [internalSearch, setInternalSearch] = useState(searchQuery);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInternalSearch(val);
    onSearchChange?.(val);
  };

  const handleClearSearch = () => {
    setInternalSearch("");
    onSearchChange?.("");
    setIsMobileSearchOpen(false);
  };

  return (
    <>
      {/* MOBILE VIEW ONLY: Integrated Search, Sliders Filter & Add Button Bar (sm:hidden) */}
      <div className="sm:hidden flex flex-col gap-2 py-1 px-4 bg-transparent">
        {/* Mobile Top Row: Integrated Search, Sliders Icon & Dark Plus Button */}
        <div className="w-full h-11 bg-surface-alt rounded-[14px] p-1 flex items-center gap-2 border border-border/50 shadow-2xs">
          <Search className="w-4 h-4 text-body ml-2 shrink-0" />
          <input
            type="text"
            value={internalSearch}
            onChange={handleSearch}
            placeholder="Search id, company, etc"
            className="w-full bg-transparent text-[13px] text-heading placeholder:text-body outline-none font-normal"
          />
          {internalSearch && (
            <button
              type="button"
              onClick={handleClearSearch}
              className="p-1 text-body hover:text-heading shrink-0 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            type="button"
            onClick={onFilterClick}
            className="p-1 text-body hover:text-heading shrink-0 cursor-pointer"
            title="Filter Options"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onNewShipment}
            className="w-8.5 h-8.5 bg-heading hover:bg-dark-hover text-white rounded-[10px] flex items-center justify-center shrink-0 shadow-2xs cursor-pointer"
            title="New Shipment"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Mobile Bottom Row: Soft Rounded Status Filter Chips */}
        <div className="w-full bg-surface-alt rounded-[14px] p-0.5 flex items-center gap-1 overflow-x-auto no-scrollbar">
          {statusOptions.map((status) => {
            const isActive = activeStatus === status;
            return (
              <Button
                key={status}
                variant="chip"
                size="sm"
                isActive={isActive}
                onClick={() => onStatusChange?.(status)}
              >
                {status}
              </Button>
            );
          })}
        </div>
      </div>

      {/* TABLET & DESKTOP VIEW: Single-Line Bar (hidden on mobile, visible on sm and above) */}
      <div className="hidden sm:flex w-full flex-row items-center justify-between gap-2 sm:gap-4 py-1.5 px-3 md:px-4 lg:px-6 bg-transparent overflow-x-auto no-scrollbar">
        {/* Left: Status Filter Tabs */}
        <div className="flex items-center gap-1 shrink-0 overflow-x-auto no-scrollbar py-1">
          {statusOptions.map((status) => {
            const isActive = activeStatus === status;
            return (
              <Button
                key={status}
                variant="chip"
                size="sm"
                isActive={isActive}
                onClick={() => onStatusChange?.(status)}
              >
                {status}
              </Button>
            );
          })}
        </div>

        {/* Right: Search, Filter, Sort by */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 justify-end ml-auto">
          {/* Desktop Search Field */}
          <div className="hidden lg:flex relative items-center w-[240px]">
            <Search className="absolute left-3 w-4 h-4 text-body pointer-events-none" />
            <input
              type="text"
              value={internalSearch}
              onChange={handleSearch}
              placeholder="Search Shipment"
              className="w-full h-9 pl-9 pr-8 bg-white border border-border rounded-[10px] text-[13px] text-heading placeholder:text-body outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition duration-150"
            />
            {internalSearch && (
              <button
                type="button"
                onClick={handleClearSearch}
                className="absolute right-2.5 p-0.5 text-body hover:text-heading cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Tablet Search Button & Expandable Field */}
          <div className="lg:hidden relative flex items-center">
            {isMobileSearchOpen ? (
              <div className="relative flex items-center w-[170px] sm:w-[220px]">
                <Search className="absolute left-3 w-4 h-4 text-body pointer-events-none" />
                <input
                  type="text"
                  autoFocus
                  value={internalSearch}
                  onChange={handleSearch}
                  placeholder="Search..."
                  className="w-full h-9 pl-9 pr-8 bg-white border border-border rounded-[10px] text-[13px] text-heading placeholder:text-body outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
                />
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="absolute right-2.5 p-0.5 text-body hover:text-heading"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <IconButton
                icon={<Search className="w-4 h-4 text-heading" />}
                variant="outline"
                size="md"
                onClick={() => setIsMobileSearchOpen(true)}
                aria-label="Search"
              />
            )}
          </div>

          {/* Desktop Filter Button */}
          <div className="hidden lg:block">
            <Button
              variant="outline"
              size="md"
              onClick={onFilterClick}
              leftIcon={<Filter className="w-3.5 h-3.5 text-body" />}
              rightIcon={<ChevronDown className="w-3.5 h-3.5 text-body" />}
            >
              Filter
            </Button>
          </div>

          {/* Tablet Filter Icon Button */}
          <div className="lg:hidden">
            <IconButton
              icon={<SlidersHorizontal className="w-4 h-4 text-heading" />}
              variant="outline"
              size="md"
              onClick={onFilterClick}
              aria-label="Filter Options"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="relative flex items-center">
            <span className="text-body text-[13px] font-normal mr-2 whitespace-nowrap hidden sm:inline">
              Sort by:
            </span>
            <div className="relative">
              <Button
                variant="outline"
                size="md"
                onClick={() => setIsSortOpen(!isSortOpen)}
                rightIcon={
                  <ChevronDown className="w-3.5 h-3.5 text-body" />
                }
              >
                {sortBy}
              </Button>

              {isSortOpen && (
                <>
                  <div
                    className="fixed inset-0 z-20"
                    onClick={() => setIsSortOpen(false)}
                  />
                  <div className="absolute right-0 mt-1 w-40 bg-white border border-border rounded-[10px] shadow-lg py-1 z-30 animate-in fade-in-50 duration-100">
                    {sortOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          onSortChange?.(opt);
                          setIsSortOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2 text-[13px] hover:bg-surface transition cursor-pointer ${
                          sortBy === opt
                            ? "font-semibold text-brand"
                            : "text-heading"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
