"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CreateShipmentHeader() {
  return (
    <div className="w-full flex flex-col gap-1.5 sm:gap-2 py-2.5 sm:py-3.5 px-3 md:px-4 lg:px-6 bg-transparent border-b border-border/50">
      {/* Back Arrow & Title */}
      <div className="flex items-center gap-2 sm:gap-3">
        <Link
          href="/shipments"
          className="p-1 rounded-[8px] hover:bg-border/50 transition text-slate cursor-pointer"
          aria-label="Back to Shipments"
        >
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
        </Link>
        <h1 className="text-[24px] sm:text-[28px] md:text-[30px] font-bold text-slate tracking-tight leading-none">
          Create New Shipment
        </h1>
      </div>

      {/* Breadcrumb Navigation */}
      <nav
        className="flex items-center gap-1.5 text-[13px] sm:text-[14px] text-body shrink-0"
        aria-label="Breadcrumb"
      >
        <Link
          href="/dashboard"
          className="text-brand hover:text-brand font-medium transition duration-150"
        >
          Dashboard
        </Link>
        <span className="text-body font-normal">/</span>
        <Link
          href="/shipments"
          className="text-brand hover:text-brand font-medium transition duration-150"
        >
          Shipments
        </Link>
        <span className="text-body font-normal">/</span>
        <span className="text-body font-normal">Create New Shipment</span>
      </nav>
    </div>
  );
}
