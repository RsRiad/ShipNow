"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

interface SidebarHeaderProps {
  isTabletRail?: boolean;
  isMobileDrawer?: boolean;
  onCloseMobile?: () => void;
}

export default function SidebarHeader({
  isTabletRail = false,
  isMobileDrawer = false,
  onCloseMobile,
}: SidebarHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3.5 shrink-0 border-b border-transparent">
      <Link href="/dashboard" className="flex items-center gap-2.5 group">
        <Image
          src="/Assets/Icon.svg"
          alt="ShipNow Icon"
          width={32}
          height={32}
          className="h-8 w-8 object-contain shrink-0"
        />

        {!isTabletRail && (
          <span className="font-extrabold tracking-tight text-[20px] leading-none text-heading uppercase italic">
            SHIPNOW
          </span>
        )}
      </Link>

      {isMobileDrawer && (
        <button
          type="button"
          onClick={onCloseMobile}
          aria-label="Close menu"
          className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
