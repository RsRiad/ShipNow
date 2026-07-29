"use client";

import React from "react";
import Image from "next/image";
import { Shipment } from "@/data/data";
import {
  getCompanyLogoPath,
  renderModeIcon,
  getStatusStyle,
} from "@/utils/shipmentHelpers";

interface ShipmentTableRowProps {
  shipment: Shipment;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export default function ShipmentTableRow({
  shipment,
  isSelected,
  onSelect,
}: ShipmentTableRowProps) {
  const logoSrc = getCompanyLogoPath(shipment.company, shipment.logo);
  const statusInfo = getStatusStyle(shipment.status);

  return (
    <tr
      className={`transition duration-150 ${
        isSelected ? "bg-row-hover/60" : "hover:bg-table-header"
      }`}
    >
      {/* Checkbox */}
      <td className="py-2.5 pl-3 pr-1">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelect(shipment.id)}
          className="w-3.5 h-3.5 rounded text-brand border-border-muted focus:ring-brand/20 cursor-pointer"
        />
      </td>

      {/* Shipping ID & Mode Subtitle */}
      <td className="py-2.5 px-2">
        <div className="flex flex-col">
          <span className="font-bold text-[13px] xl:text-[14px] text-brand hover:underline cursor-pointer">
            {shipment.id}
          </span>
          <div className="flex items-center gap-1 text-[11px] xl:text-[12px] text-slate-muted font-normal mt-0.5 whitespace-nowrap">
            {renderModeIcon(shipment.mode, "w-3 h-3 text-body")}
            <span>{shipment.mode}</span>
          </div>
        </div>
      </td>

      {/* Company */}
      <td className="py-2.5 px-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-[7px] bg-card-alt border border-border p-0.5 shrink-0 overflow-hidden relative">
            <Image
              src={logoSrc}
              alt={shipment.company}
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-bold text-[13px] xl:text-[14px] text-slate-dark truncate max-w-[110px] xl:max-w-[130px]">
              {shipment.company}
            </span>
            <span className="text-[11px] xl:text-[12px] text-slate-muted font-normal truncate max-w-[110px]">
              {shipment.industry}
            </span>
          </div>
        </div>
      </td>

      {/* Carriers (Includes Category & Weight on Mobile/Tablet view) */}
      <td className="py-2.5 px-2 whitespace-nowrap">
        <div className="flex flex-col gap-0.5">
          <span className="font-bold text-[13px] xl:text-[14px] text-slate-dark">
            {shipment.carrier}
          </span>
          <span className="lg:hidden text-[11px] text-slate-muted font-normal">
            {shipment.productCategory}
          </span>
          <span className="lg:hidden text-[11px] text-slate-muted font-normal">
            {shipment.weight}
          </span>
        </div>
      </td>

      {/* Product Category (Desktop only) */}
      <td className="hidden lg:table-cell py-2.5 px-2 font-medium text-label whitespace-nowrap">
        {shipment.productCategory}
      </td>

      {/* Weight (Desktop only) */}
      <td className="hidden lg:table-cell py-2.5 px-2 font-bold text-slate-dark whitespace-nowrap">
        {shipment.weight}
      </td>

      {/* Route */}
      <td className="py-2.5 px-2 whitespace-nowrap">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-slate-dark text-[12px]">
              {shipment.origin.city}
            </span>
            <span className="text-[10px] text-slate-light font-normal">
              (Origin)
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-semibold text-brand text-[12px]">
              {shipment.destination.city}
            </span>
            <span className="text-[10px] text-slate-light font-normal">
              (Destination)
            </span>
          </div>
        </div>
      </td>

      {/* Date */}
      <td className="py-2.5 px-2 whitespace-nowrap">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1 text-[11px] xl:text-[12px] text-label">
            <span className="font-medium">
              {shipment.origin.datetime.replace(" · ", " – ")}
            </span>
            <span className="text-[10px] text-slate-light">(ATD)</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] xl:text-[12px] text-label">
            <span className="font-medium">
              {shipment.destination.datetime.replace(" · ", " – ")}
            </span>
            <span className="text-[10px] text-slate-light">(ETA)</span>
          </div>
        </div>
      </td>

      {/* Progress */}
      <td className="py-2.5 px-1.5 whitespace-nowrap">
        <div className="flex items-center gap-1.5">
          <div className="w-10 xl:w-12 h-1.5 bg-toggle-off rounded-full overflow-hidden">
            <div
              className="bg-brand h-full rounded-full transition-all duration-300"
              style={{ width: `${shipment.progress}%` }}
            />
          </div>
          <span className="font-bold text-[11px] xl:text-[12px] text-slate-dark">
            {shipment.progress}%
          </span>
        </div>
      </td>

      {/* Status */}
      <td className="py-2.5 pl-2 pr-3 whitespace-nowrap">
        <div
          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] xl:text-[12px] font-semibold ${statusInfo.badge}`}
        >
          <div className={`w-1.5 h-1.5 rounded-full ${statusInfo.dot}`} />
          <span>{shipment.status}</span>
        </div>
      </td>
    </tr>
  );
}
