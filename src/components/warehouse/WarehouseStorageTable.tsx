"use client";

import React, { useState } from "react";
import {
  Filter,
  ChevronDown,
  ChevronsUpDown,
  ArrowUp,
  ArrowDown,
  MoreHorizontal,
} from "lucide-react";

export interface StorageRecord {
  id: string;
  floor: number;
  section: string;
  category: string;
  percentage: number;
  available: number;
}

const initialStorageData: StorageRecord[] = [
  {
    id: "1",
    floor: 1,
    section: "A1 – A10",
    category: "Electronics",
    percentage: 80,
    available: 20,
  },
  {
    id: "2",
    floor: 2,
    section: "B1 – B10",
    category: "Apparel",
    percentage: 60,
    available: 40,
  },
  {
    id: "3",
    floor: 1,
    section: "C1 – C10",
    category: "Home & Kitchen",
    percentage: 90,
    available: 10,
  },
  {
    id: "4",
    floor: 3,
    section: "D1 – D10",
    category: "Automotive Parts",
    percentage: 50,
    available: 50,
  },
  {
    id: "5",
    floor: 2,
    section: "E1 – E10",
    category: "Beauty & Health",
    percentage: 70,
    available: 30,
  },
];

type SortField = "floor" | "section" | "category" | "percentage" | "available";
type SortOrder = "asc" | "desc";

export default function WarehouseStorageTable() {
  const [data, setData] = useState<StorageRecord[]>(initialStorageData);
  const [sortField, setSortField] = useState<SortField>("section");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const categoriesList = [
    "All",
    "Electronics",
    "Apparel",
    "Home & Kitchen",
    "Automotive Parts",
    "Beauty & Health",
  ];

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const sortedData = [...data]
    .filter(
      (item) =>
        selectedCategory === "All" || item.category === selectedCategory,
    )
    .sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];

      if (typeof aValue === "string" && typeof bValue === "string") {
        const comp = aValue.toLowerCase().localeCompare(bValue.toLowerCase());
        return sortOrder === "asc" ? comp : -comp;
      }

      if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
      if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return (
        <ChevronsUpDown className="w-3.5 h-3.5 text-slate-muted/60 inline-block ml-1" />
      );
    }
    return sortOrder === "asc" ? (
      <ArrowUp className="w-3.5 h-3.5 text-brand inline-block ml-1" />
    ) : (
      <ArrowDown className="w-3.5 h-3.5 text-brand inline-block ml-1" />
    );
  };

  return (
    <div className="w-full bg-white rounded-[20px] p-4.5 sm:p-5 border border-border/60 shadow-2xs flex flex-col gap-4">
      {/* Header & Controls Toolbar */}
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-slate tracking-tight">
          Warehouse Storage
        </h2>

        {/* Right Controls: Filter & Sort (desktop) / Three Dot Menu (mobile) */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-3 self-end sm:self-auto">
            {/* Filter Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsFilterOpen(!isFilterOpen);
                  setIsSortOpen(false);
                }}
                className="bg-surface-alt hover:bg-surface-alt/80 text-slate font-medium text-[13px] sm:text-[14px] px-3.5 py-2 rounded-[12px] flex items-center gap-1.5 border border-border/40 transition cursor-pointer shadow-xs"
              >
                <Filter className="w-4 h-4 text-slate stroke-[1.8]" />
                <span>
                  Filter
                  {selectedCategory !== "All" ? `: ${selectedCategory}` : ""}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-muted ml-0.5" />
              </button>

              {isFilterOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-[14px] shadow-lg border border-border/60 py-1.5 z-20">
                  {categoriesList.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat);
                        setIsFilterOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-[13px] font-medium transition ${
                        selectedCategory === cat
                          ? "bg-brand-light text-brand font-semibold"
                          : "text-slate hover:bg-surface-alt"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sort By Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-body text-[13px] sm:text-[14px] font-normal hidden xs:inline">
                Sort by:
              </span>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setIsSortOpen(!isSortOpen);
                    setIsFilterOpen(false);
                  }}
                  className="bg-surface-alt hover:bg-surface-alt/80 text-slate font-semibold text-[13px] sm:text-[14px] px-3.5 py-2 rounded-[12px] flex items-center gap-1.5 border border-border/40 transition cursor-pointer shadow-xs capitalize"
                >
                  <span>{sortField}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-muted ml-0.5" />
                </button>

                {isSortOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-white rounded-[14px] shadow-lg border border-border/60 py-1.5 z-20">
                    {[
                      { field: "section", label: "Section" },
                      { field: "floor", label: "Floor" },
                      { field: "category", label: "Category" },
                      { field: "percentage", label: "Percentage" },
                      { field: "available", label: "Available Space" },
                    ].map((opt) => (
                      <button
                        key={opt.field}
                        type="button"
                        onClick={() => {
                          handleSort(opt.field as SortField);
                          setIsSortOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-[13px] font-medium transition ${
                          sortField === opt.field
                            ? "bg-brand-light text-brand font-semibold"
                            : "text-slate hover:bg-surface-alt"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Only: Three Dot Menu */}
          <button
            type="button"
            className="flex sm:hidden p-1 text-body hover:text-slate rounded-lg transition cursor-pointer"
            aria-label="More options"
          >
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Storage Table */}
      <div className="w-full overflow-x-auto no-scrollbar">
        <table className="w-full text-left border-collapse min-w-[620px] md:min-w-0">
          <thead>
            <tr className="border-b border-border/60">
              <th
                onClick={() => handleSort("floor")}
                className="py-3 px-2 md:px-1 lg:px-2 text-[11px] sm:text-[13px] md:text-[11px] lg:text-[13px] font-medium text-slate-muted cursor-pointer select-none hover:text-slate transition w-[10%]"
              >
                Floor {getSortIcon("floor")}
              </th>
              <th
                onClick={() => handleSort("section")}
                className="py-3 px-2 md:px-1 lg:px-2 text-[11px] sm:text-[13px] md:text-[11px] lg:text-[13px] font-medium text-slate-muted cursor-pointer select-none hover:text-slate transition w-[18%]"
              >
                Section {getSortIcon("section")}
              </th>
              <th
                onClick={() => handleSort("category")}
                className="py-3 px-2 md:px-1 lg:px-2 text-[11px] sm:text-[13px] md:text-[11px] lg:text-[13px] font-medium text-slate-muted cursor-pointer select-none hover:text-slate transition w-[24%] md:w-[18%] lg:w-[24%]"
              >
                Category {getSortIcon("category")}
              </th>
              <th
                onClick={() => handleSort("percentage")}
                className="py-3 px-2 md:px-1 lg:px-2 text-[11px] sm:text-[13px] md:text-[11px] lg:text-[13px] font-medium text-slate-muted cursor-pointer select-none hover:text-slate transition w-[24%] md:w-[18%] lg:w-[24%]"
              >
                Storage Used {getSortIcon("percentage")}
              </th>
              <th
                onClick={() => handleSort("percentage")}
                className="py-3 px-2 md:px-1 lg:px-2 text-[11px] sm:text-[13px] md:text-[11px] lg:text-[13px] font-medium text-slate-muted cursor-pointer select-none hover:text-slate transition w-[12%]"
              >
                Percentage {getSortIcon("percentage")}
              </th>
              <th
                onClick={() => handleSort("available")}
                className="py-3 px-2 md:px-1 lg:px-2 text-[11px] sm:text-[13px] md:text-[11px] lg:text-[13px] font-medium text-slate-muted cursor-pointer select-none hover:text-slate transition w-[12%]"
              >
                Available Space {getSortIcon("available")}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row) => (
              <tr
                key={row.id}
                className="border-b border-border/40 hover:bg-table-header/50 transition"
              >
                {/* Floor */}
                <td className="py-3 px-2 md:px-1 lg:px-2 text-[12px] sm:text-[14px] md:text-[12px] lg:text-[14px] font-normal text-slate">
                  {row.floor}
                </td>

                {/* Section */}
                <td className="py-3 px-2 md:px-1 lg:px-2 text-[12px] sm:text-[14px] md:text-[12px] lg:text-[14px] font-medium text-slate">
                  {row.section}
                </td>

                {/* Category */}
                <td className="py-3 px-2 md:px-1 lg:px-2 text-[12px] sm:text-[14px] md:text-[12px] lg:text-[14px] font-normal text-body">
                  {row.category}
                </td>

                {/* Storage Used Progress Bar */}
                <td className="py-3 px-2 md:px-1 lg:px-2">
                  <div className="w-[100px] sm:w-[155px] md:w-[85px] lg:w-[155px] bg-[#EAEAEA] rounded-full h-2.5 overflow-hidden p-0">
                    <div
                      className="bg-brand h-full rounded-full transition-all duration-300"
                      style={{ width: `${row.percentage}%` }}
                    />
                  </div>
                </td>

                {/* Percentage */}
                <td className="py-3 px-2 md:px-1 lg:px-2 text-[12px] sm:text-[14px] md:text-[12px] lg:text-[14px] font-bold text-slate">
                  {row.percentage}%
                </td>

                {/* Available Space */}
                <td className="py-3 px-2 md:px-1 lg:px-2 text-[12px] sm:text-[14px] md:text-[12px] lg:text-[14px] leading-tight">
                  <span className="font-bold text-slate">{row.available}</span>
                  <span className="font-normal text-body/75">/100</span>
                </td>
              </tr>
            ))}

            {sortedData.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="py-8 text-center text-[13px] text-body"
                >
                  No storage records found for category &quot;{selectedCategory}
                  &quot;.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
