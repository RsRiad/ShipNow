"use client";

import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface UserProfileCardProps {
  isTabletRail?: boolean;
}

export default function UserProfileCard({
  isTabletRail = false,
}: UserProfileCardProps) {
  if (isTabletRail) {
    return (
      <div className="flex items-center justify-center p-2 my-2">
        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200 shadow-sm shrink-0">
          <Image
            src="/Assets/Avatar.png"
            alt="John Doe"
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="px-3 my-2">
      <button
        type="button"
        className="w-full flex items-center justify-between p-2.5 rounded-xl bg-surface hover:bg-pale-gray transition duration-150 group cursor-pointer"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-gray-200 shadow-xs shrink-0">
            <Image
              src="/Assets/Avatar.png"
              alt="John Doe"
              fill
              sizes="36px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col text-left truncate">
            <span className="font-bold text-[13px] leading-tight text-heading group-hover:text-black truncate">
              John Doe
            </span>
            <span className="font-normal text-[11px] leading-tight text-body truncate">
              Admin
            </span>
          </div>
        </div>
        <ChevronDown className="w-4 h-4 text-body group-hover:text-heading transition shrink-0 ml-1" />
      </button>
    </div>
  );
}
