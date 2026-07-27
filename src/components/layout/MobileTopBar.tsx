"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

interface MobileTopBarProps {
  onOpenMobile: () => void;
}

export default function MobileTopBar({ onOpenMobile }: MobileTopBarProps) {
  return (
    <header className="sticky top-0 z-40 flex md:hidden items-center justify-between h-14 px-4 bg-white border-b border-[#E5E5E7] shadow-xs">
      <button
        type="button"
        onClick={onOpenMobile}
        aria-label="Open sidebar navigation"
        className="p-2 rounded-xl text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition focus:outline-none"
      >
        <Menu className="w-6 h-6" />
      </button>

      <Link href="/dashboard" className="flex items-center gap-2">
        <Image
          src="/Assets/Icon.svg"
          alt="ShipNow Icon"
          width={28}
          height={28}
          priority
          className="h-7 w-7 object-contain"
        />
        <span className="font-extrabold  text-[20px] leading-none text-[#333333] uppercase italic">
          SHIPNOW
        </span>
      </Link>

      <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-200 shadow-xs">
        <Image
          src="/Assets/Avatar.png"
          alt="John Doe"
          fill
          sizes="32px"
          className="object-cover"
        />
      </div>
    </header>
  );
}
