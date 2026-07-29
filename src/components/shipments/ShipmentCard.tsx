"use client";

import React from "react";
import Image from "next/image";
import { Shipment } from "@/data/data";
import { getCompanyLogoPath, renderModeIcon } from "@/utils/shipmentHelpers";

interface ShipmentCardProps {
  shipment: Shipment;
  onClick?: () => void;
}

export default function ShipmentCard({ shipment, onClick }: ShipmentCardProps) {
  // Status Badge Styling matching design tokens
  const getStatusBadgeStyle = () => {
    switch (shipment.status) {
      case "Delivered":
        return "bg-success-bg text-heading";
      case "In Transit":
        return "bg-brand-light text-heading";
      case "Processing":
        return "bg-warning-bg text-heading";
      case "Out for Delivery":
        return "bg-divider text-heading";
      default:
        return "bg-brand-light text-heading";
    }
  };

  const logoSrc = getCompanyLogoPath(shipment.company, shipment.logo);

  return (
    <div
      onClick={onClick}
      className="w-full bg-white border border-border rounded-[18px] p-4.5 sm:p-5 shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* MOBILE VIEW ONLY: Integrated Header Layout matching design image */}
        <div className="sm:hidden flex items-center justify-between gap-2">
          {/* Left: Mode Icon + (ID & Status Badge) */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-divider rounded-[12px] flex items-center justify-center shrink-0">
              {renderModeIcon(shipment.mode, "w-5 h-5 text-heading")}
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-[16px] leading-none text-slate tracking-tight">
                {shipment.id}
              </h3>
              <div>
                <span
                  className={`inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-[18px] leading-tight ${getStatusBadgeStyle()}`}
                >
                  {shipment.status}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Company Logo + Company & Industry */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-[8px] bg-card-alt border border-border/80 flex items-center justify-center p-1 shrink-0 overflow-hidden relative">
              <Image
                src={logoSrc}
                alt={shipment.company}
                width={36}
                height={36}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-[14px] leading-snug text-slate whitespace-nowrap truncate max-w-[110px]">
                {shipment.company}
              </span>
              <span className="text-[12px] leading-tight text-body font-normal whitespace-nowrap truncate max-w-[110px]">
                {shipment.industry}
              </span>
            </div>
          </div>
        </div>

        {/* TABLET & DESKTOP VIEW ONLY: Original 2-Row Header Section */}
        <div className="hidden sm:block">
          {/* Top Header Section: ID, Status Badge & Freight Mode Icon */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-col gap-1.5">
              <h3 className="font-bold text-[18px] leading-none text-slate tracking-tight">
                {shipment.id}
              </h3>
              <div>
                <span
                  className={`inline-block text-[12px] font-semibold px-3 py-1 rounded-[18px] leading-tight ${getStatusBadgeStyle()}`}
                >
                  {shipment.status}
                </span>
              </div>
            </div>

            {/* Freight Mode Icon Box */}
            <div className="w-10.5 h-10.5 bg-divider rounded-[12px] flex items-center justify-center shrink-0">
              {renderModeIcon(shipment.mode, "w-5 h-5 text-heading")}
            </div>
          </div>

          {/* Divider Line */}
          <div className="border-t border-border my-3.5" />

          {/* Company & Industry Section */}
          <div className="flex items-center gap-3">
            {/* Company Logo Image from Assets */}
            <div className="w-10 h-10 rounded-[10px] bg-card-alt border border-border/80 flex items-center justify-center p-1.5 shrink-0 overflow-hidden relative">
              <Image
                src={logoSrc}
                alt={shipment.company}
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-[15px] leading-snug text-slate">
                {shipment.company}
              </span>
              <span className="text-[13px] leading-tight text-body font-normal">
                {shipment.industry}
              </span>
            </div>
          </div>
        </div>

        {/* Common Divider Line for Mobile View */}
        <div className="sm:hidden border-t border-border my-3" />

        {/* Origin & Destination Route Card Container */}
        <div className="relative bg-card-alt rounded-[14px] p-3.5 sm:p-4 my-3.5 flex flex-col gap-3.5">
          {/* Vertical Connecting Line spanning from Origin dot to Destination pin */}
          <div className="absolute left-[21px] sm:left-[22.5px] top-[24px] bottom-[55px] w-[1.5px] bg-brand-light z-0" />

          {/* Origin Row */}
          <div className="relative flex items-start justify-between gap-2 z-10">
            <div className="flex items-center gap-2.5 pt-0.5">
              <div className="w-3.5 h-3.5 rounded-full bg-brand ring-4 ring-brand/20 shrink-0 z-10" />
              <span className="text-[13px] text-body font-normal">
                Origin
              </span>
            </div>
            <div className="flex flex-col items-end text-right">
              <span className="font-semibold text-[14px] text-slate">
                {shipment.origin.city}
              </span>
              <span className="text-[12px] text-body mt-0.5">
                {shipment.origin.datetime}
              </span>
            </div>
          </div>

          {/* Destination Row */}
          <div className="relative flex items-start justify-between gap-2 z-10">
            <div className="flex items-center gap-2 pt-0.5">
              <div className="w-4 h-4 rounded-full bg-brand-light ring-3 ring-brand/20 flex items-center justify-center shrink-0 z-10">
                <Image
                  src="/Assets/MapPin.svg"
                  alt="Destination Pin"
                  width={12}
                  height={12}
                  className="w-3 h-3 object-contain"
                />
              </div>
              <span className="text-[13px] text-body font-normal">
                Destination
              </span>
            </div>
            <div className="flex flex-col items-end text-right">
              <span className="font-semibold text-[14px] text-slate">
                {shipment.destination.city}
              </span>
              <span className="text-[12px] text-body mt-0.5">
                {shipment.destination.datetime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress & Carrier Footer */}
      <div className="flex flex-col gap-1.5 pt-1">
        <div className="flex items-center justify-between text-[13px]">
          <div className="flex items-center gap-1">
            <span className="text-body">Progres</span>
            <span className="font-bold text-slate">
              {shipment.progress}%
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-body">Carriers</span>
            <span className="font-bold text-slate">{shipment.carrier}</span>
          </div>
        </div>

        {/* Progress Bar Track & Fill */}
        <div className="w-full h-2 bg-divider rounded-full overflow-hidden">
          <div
            className="h-full bg-brand rounded-full transition-all duration-300"
            style={{ width: `${shipment.progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
