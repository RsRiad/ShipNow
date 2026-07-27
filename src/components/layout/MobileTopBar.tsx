"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Search, Plus } from "lucide-react";

interface MobileTopBarProps {
  onOpenMobile: () => void;
  onAddShipping?: () => void;
  onSearchChange?: (val: string) => void;
}

const PATH_TITLES: Record<string, string> = {
  "/": "Dashboard",
  "/dashboard": "Dashboard",
  "/shipments": "Shipments",
  "/shipments/create": "Create Shipment",
  "/invoices": "Invoices & Billing",
  "/warehouse": "Warehouse",
  "/analytics": "Analytics",
  "/calendar": "Calendar",
  "/tracking": "Tracking",
  "/fleets": "Fleets",
  "/drivers": "Drivers",
};

export default function MobileTopBar({
  onOpenMobile,
  onAddShipping,
  onSearchChange,
}: MobileTopBarProps) {
  const pathname = usePathname();
  const [searchValue, setSearchValue] = useState("");

  const pageTitle = PATH_TITLES[pathname] || "Dashboard";

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchValue(val);
    if (onSearchChange) {
      onSearchChange(val);
    }
  };

  return (
    <header className="sticky top-0 z-40 flex flex-col md:hidden w-full bg-white border-b border-[#E5E5E7] shadow-2xs">
      {/* Top Row: Left Icon, Center Dynamic Title, Right Menu */}
      <div className="flex items-center justify-between h-14 px-4">
        {/* Left Icon (Brand Icon Mark) */}
        <div className="flex items-center shrink-0">
          <Image
            src="/Assets/Icon.svg"
            alt="ShipNow Icon"
            width={28}
            height={28}
            priority
            className="w-7 h-7 object-contain"
          />
        </div>

        {/* Center Dynamic Title */}
        <h1 className="font-semibold text-[17px] leading-none text-[#333333] text-center truncate px-2">
          {pageTitle}
        </h1>

        {/* Right Hamburger Menu Drawer Button */}
        <button
          type="button"
          onClick={onOpenMobile}
          aria-label="Open sidebar navigation"
          className="p-1.5 rounded-lg text-[#333333] hover:bg-[#F5F5F7] transition cursor-pointer shrink-0"
        >
          <Menu className="w-6 h-6 stroke-[1.75]" />
        </button>
      </div>

      {/* Second Row: Search input + Dark Plus Action Button */}
      <div className="flex items-center gap-2.5 px-4 pb-3 pt-0.5">
        {/* Search Field */}
        <div className="relative flex items-center flex-1 min-w-0 bg-[#F0F0F0] rounded-[10px] px-3.5 py-2">
          <Search className="w-4 h-4 text-[#757575] shrink-0 mr-2" />
          <input
            type="text"
            value={searchValue}
            onChange={handleSearch}
            placeholder="Search anything"
            className="w-full bg-transparent text-[13px] text-[#333333] placeholder:text-[#757575] outline-none font-normal"
          />
        </div>

        {/* Dark Square Plus Action Button */}
        <button
          type="button"
          onClick={onAddShipping}
          aria-label="Add new shipping"
          className="w-9 h-9 bg-[#232325] hover:bg-[#1a1a1a] active:bg-black text-white rounded-[10px] flex items-center justify-center shrink-0 transition duration-150 cursor-pointer shadow-2xs"
        >
          <Plus className="w-5 h-5 stroke-[2]" />
        </button>
      </div>
    </header>
  );
}
