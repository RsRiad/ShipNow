"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import IconButton from "./IconButton";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
  pageSizeOptions?: number[];
  itemLabel?: string;
}

export default function Pagination({
  currentPage,
  totalItems,
  pageSize,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [6, 9, 12, 24],
  itemLabel = "results",
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / pageSize) || 1;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 py-3 sm:py-4 px-2 bg-transparent text-[13px] text-body">
      {/* Showing entries count & Page size dropdown (Hidden on mobile view) */}
      <div className="hidden sm:flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-1.5 ml-2">
          <span>Show:</span>
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
            className="bg-white border border-border rounded-[8px] px-2 py-1 text-[13px] font-medium text-slate outline-none cursor-pointer focus:ring-2 focus:ring-brand/20 transition"
          >
            {pageSizeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <strong className="text-slate">of {totalItems}</strong>{" "}
          {itemLabel}
        </div>
      </div>

      {/* Page Navigation Buttons (Centered on Mobile view) */}
      <div className="flex items-center justify-center gap-1 w-full sm:w-auto">
        <IconButton
          icon={<ChevronLeft className="w-4 h-4" />}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          aria-label="Previous Page"
          size="md"
        />

        {getPageNumbers().map((page, idx) =>
          typeof page === "number" ? (
            <IconButton
              key={idx}
              icon={<span className="text-[13px]">{page}</span>}
              isActive={currentPage === page}
              onClick={() => onPageChange(page)}
              size="md"
            />
          ) : (
            <span key={idx} className="px-1 text-body">
              {page}
            </span>
          ),
        )}

        <IconButton
          icon={<ChevronRight className="w-4 h-4" />}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Next Page"
          size="md"
        />
      </div>
    </div>
  );
}
