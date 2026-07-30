import React from "react";
import { ShelfSlot } from "@/data/warehouse";

interface ShelfButtonProps {
  shelf: ShelfSlot;
}

export default function ShelfButton({ shelf }: ShelfButtonProps) {
  const isAvailable = shelf.status === "available";

  return (
    <button
      type="button"
      className="group relative h-[32px] lg:h-[40px] w-full max-w-[36px] md:w-[32px] lg:w-[40px] shrink-0 cursor-pointer select-none rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      aria-label={`Shelf ${shelf.code}, ${shelf.status}`}
      title={`Shelf ${shelf.code} (${shelf.status})`}
    >
      <span
        aria-hidden="true"
        className={`absolute left-0 top-0 h-[32px] lg:h-[40px] w-full rounded-md transition-colors duration-150 ${
          isAvailable
            ? "bg-[#E3DDFF] group-hover:bg-[#D9D0FF]"
            : "bg-[#E2E2E5] group-hover:bg-[#D8D8DC]"
        }`}
      />
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-[6px] lg:top-2 flex h-[20px] w-[20px] lg:h-[24px] lg:w-[24px] -translate-x-1/2 items-center justify-center rounded-sm bg-[#FEFEFE] text-[9px] lg:text-[10px] font-semibold leading-none text-[#292929] shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-transform duration-150 group-hover:-translate-x-1/2 group-hover:-translate-y-0.5 group-active:translate-y-0"
      >
        {shelf.code}
      </span>
    </button>
  );
}
