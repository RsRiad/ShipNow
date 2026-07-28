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
  itemLabel = "shipments",
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / pageSize) || 1;
  const startIndex = totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const endIndex = Math.min(startIndex + pageSize - 1, totalItems);

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
    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-2 bg-transparent text-[13px] text-[#757575]">
      {/* Showing entries count & Page size dropdown */}
      <div className="flex items-center gap-3 flex-wrap">
        <span>
          Showing <strong className="text-[#1E293B]">{startIndex}</strong> to{" "}
          <strong className="text-[#1E293B]">{endIndex}</strong> of{" "}
          <strong className="text-[#1E293B]">{totalItems}</strong> {itemLabel}
        </span>

        <div className="flex items-center gap-1.5 ml-2">
          <span>Show:</span>
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
            className="bg-white border border-[#E5E5E7] rounded-[8px] px-2 py-1 text-[13px] font-medium text-[#1E293B] outline-none cursor-pointer focus:ring-2 focus:ring-[#856DF3]/20 transition"
          >
            {pageSizeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Page Navigation Buttons */}
      <div className="flex items-center gap-1">
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
            <span key={idx} className="px-1 text-[#9E9E9E]">
              {page}
            </span>
          )
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
