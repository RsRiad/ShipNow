"use client";

import React, { useState } from "react";
import {Search } from "lucide-react";

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
    <div className="hidden md:flex flex-row items-center justify-between gap-4 pt-5 px-5 bg-transparent">
      {/* Left: Greeting & Title*/}
      <div className="flex flex-col gap-[3px]">
        <span className="font-normal text-[16px] leading-tight text-[#757575]">
          Hello {userName}!
        </span>
        <h1 className="font-bold text-[24px] leading-tight text-[#333333] tracking-tight">
          {greeting}
        </h1>
      </div>

      {/* Right: Search Input & New Shipping Button */}
      <div className="flex items-center gap-3">
        {/* Search Field */}
        <div className="relative flex items-center w-[160px] md:w-[200px] lg:w-[320px]">
          <Search className="absolute left-3.5 w-4 h-4 text-[#757575] pointer-events-none" />
          <input
            type="text"
            value={searchValue}
            onChange={handleSearch}
            placeholder="Search anything"
            className="w-full h-10 pl-10 pr-3.5 bg-[#FEFEFE] border border-[#E5E5E7] rounded-[10px] text-[13px] md:text-[14px] text-[#333333] placeholder:text-[#9E9E9E] outline-none shadow-2xs focus:ring-2 focus:ring-[#856DF3]/20 focus:border-[#856DF3] transition duration-150"
          />
        </div>

        {/* New Shipping Action Button */}
        <button
          type="button"
          onClick={onAddShipping}
          className="flex items-center justify-center h-10 px-4 bg-[#232325] hover:bg-[#1a1a1a] active:bg-black text-white font-medium text-[13px] md:text-[14px] rounded-[10px] transition duration-150 shadow-2xs shrink-0 cursor-pointer whitespace-nowrap"
        >
          <span className="lg:hidden">New Shipping</span>
          <span className="hidden lg:inline">Add New Shipping</span>
        </button>
      </div>
    </div>
  );
}
