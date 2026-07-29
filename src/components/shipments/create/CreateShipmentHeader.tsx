"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CreateShipmentHeader() {
  return (
    <div className="hidden md:flex flex-col gap-3 py-4 px-4 md:px-8 bg-transparent border-b border-border/50">
      {/* Back Arrow & Title */}
      <div className="flex items-center gap-3">
        <Link
          href="/shipments"
          className="p-1.5 rounded-[10px] hover:bg-border/50 transition text-heading cursor-pointer"
          aria-label="Back to Shipments"
        >
          <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
        </Link>
        <h1 className="text-[24px] md:text-[28px] font-bold text-slate tracking-tight leading-none">
          Create New Shipment
        </h1>
      </div>

      {/* Breadcrumb Navigation */}
      <nav
        className="flex items-center gap-1.5 text-[13px] text-body ml-9"
        aria-label="Breadcrumb"
      >
        <Link href="/dashboard" className="hover:text-slate transition">
          Dashboard
        </Link>
        <span>/</span>
        <Link href="/shipments" className="hover:text-slate transition">
          Shipments
        </Link>
        <span>/</span>
        <span className="text-slate font-medium">Create New Shipment</span>
      </nav>
    </div>
  );
}
