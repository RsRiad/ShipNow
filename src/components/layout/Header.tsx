"use client";

import React, { useState } from "react";
import { Plus, Search } from "lucide-react";

interface HeaderProps {
  userName?: string;
  greeting?: string;
  onAddShipping?: () => void;
  onSearchChange?: (val: string) => void;
}

export default function Header({
  userName = "John",
  greeting = "Good Morning",
  onAddShipping,
  onSearchChange,
}: HeaderProps) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchValue(val);
    if (onSearchChange) {
      onSearchChange(val);
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 pt-5 px-5 bg-transparent">
      {/* Left: Greeting & Title — Figma: gap 3 */}
      <div className="flex flex-col gap-[3px]">
        <span className="font-normal text-[16px] leading-tight text-[#757575]">
          Hello {userName}!
        </span>
        <h1 className="font-bold text-[24px] leading-tight text-[#333333] tracking-tight">
          {greeting}
        </h1>
      </div>

      {/* Right: Search Input & Add New Shipping Button */}
      <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
        {/* Search Field */}
        <div className="relative flex items-center w-full sm:w-[280px] md:w-[320px]">
          <Search className="absolute left-4 w-4 h-4 text-[#333333] pointer-events-none stroke-[2]" />
          <input
            type="text"
            value={searchValue}
            onChange={handleSearch}
            placeholder="Search anything"
            className="w-full h-11 pl-11 pr-4 bg-[#FEFEFE] border border-[#E5E5E7] sm:border-transparent rounded-[12px] text-[14px] text-[#333333] placeholder:text-[#9E9E9E] outline-none shadow-2xs focus:ring-2 focus:ring-[#856DF3]/20 focus:border-[#856DF3] transition duration-150"
          />
        </div>

        {/* Add New Shipping Action Button */}
        <button
          type="button"
          onClick={onAddShipping}
          className="flex items-center justify-center gap-2 h-11 px-5 bg-[#262626] hover:bg-[#1a1a1a] active:bg-black text-white font-medium text-[14px] rounded-[12px] transition duration-150 shadow-2xs shrink-0 cursor-pointer"
        >
          <Plus className="w-4 h-4 stroke-[1.75]" />
          <span>Add New Shipping</span>
        </button>
      </div>
    </div>
  );
}
