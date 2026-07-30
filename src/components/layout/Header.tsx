"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import Button from "@/components/common/Button";

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
    <div className="hidden md:flex flex-row items-center justify-between gap-4 pt-3.5 px-3 md:px-4 lg:px-6 bg-transparent">
      {/* Left: Greeting & Title*/}
      <div className="flex flex-col gap-[3px]">
        <span className="font-normal text-[16px] leading-tight text-body">
          Hello {userName}!
        </span>
        <h1 className="font-bold text-[24px] leading-tight text-heading tracking-tight">
          {greeting}
        </h1>
      </div>

      {/* Right: Search Input & New Shipping Button */}
      <div className="flex items-center gap-3">
        {/* Search Field */}
        <div className="relative flex items-center w-[160px] md:w-[200px] lg:w-[320px]">
          <Search className="absolute left-3.5 w-4 h-4 text-body pointer-events-none" />
          <input
            type="text"
            value={searchValue}
            onChange={handleSearch}
            placeholder="Search anything"
            className="w-full h-10 pl-10 pr-3.5 bg-card border border-border rounded-[10px] text-[13px] md:text-[14px] text-heading placeholder:text-body outline-none shadow-2xs focus:ring-2 focus:ring-brand/20 focus:border-brand transition duration-150"
          />
        </div>

        {/* New Shipping Action Button */}
        <Button variant="primary" size="lg" onClick={onAddShipping}>
          <span className="lg:hidden">New Shipping</span>
          <span className="hidden lg:inline">Add New Shipping</span>
        </Button>
      </div>
    </div>
  );
}
