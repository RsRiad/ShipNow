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
        isSelected ? "bg-[#F1F5F9]/60" : "hover:bg-[#F8FAFC]"
      }`}
    >
      {/* Checkbox */}
      <td className="py-2.5 pl-3 pr-1">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelect(shipment.id)}
          className="w-3.5 h-3.5 rounded text-[#856DF3] border-[#CBD5E1] focus:ring-[#856DF3]/20 cursor-pointer"
        />
      </td>

      {/* Shipping ID & Mode Subtitle */}
      <td className="py-2.5 px-2">
        <div className="flex flex-col">
          <span className="font-bold text-[13px] xl:text-[14px] text-[#856DF3] hover:underline cursor-pointer">
            {shipment.id}
          </span>
          <div className="flex items-center gap-1 text-[11px] xl:text-[12px] text-[#64748B] font-normal mt-0.5 whitespace-nowrap">
            {renderModeIcon(shipment.mode, "w-3 h-3 text-[#757575]")}
            <span>{shipment.mode}</span>
          </div>
        </div>
      </td>

      {/* Company */}
      <td className="py-2.5 px-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-[7px] bg-[#F8F8FA] border border-[#E5E5E7] p-0.5 shrink-0 overflow-hidden relative">
            <Image
              src={logoSrc}
              alt={shipment.company}
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-bold text-[13px] xl:text-[14px] text-[#0F172A] truncate max-w-[110px] xl:max-w-[130px]">
              {shipment.company}
            </span>
            <span className="text-[11px] xl:text-[12px] text-[#64748B] font-normal truncate max-w-[110px]">
              {shipment.industry}
            </span>
          </div>
        </div>
      </td>

      {/* Carriers (Includes Category & Weight on Mobile/Tablet view) */}
      <td className="py-2.5 px-2 whitespace-nowrap">
        <div className="flex flex-col gap-0.5">
          <span className="font-bold text-[13px] xl:text-[14px] text-[#0F172A]">
            {shipment.carrier}
          </span>
          <span className="lg:hidden text-[11px] text-[#64748B] font-normal">
            {shipment.productCategory}
          </span>
          <span className="lg:hidden text-[11px] text-[#64748B] font-normal">
            {shipment.weight}
          </span>
        </div>
      </td>

      {/* Product Category (Desktop only) */}
      <td className="hidden lg:table-cell py-2.5 px-2 font-medium text-[#334155] whitespace-nowrap">
        {shipment.productCategory}
      </td>

      {/* Weight (Desktop only) */}
      <td className="hidden lg:table-cell py-2.5 px-2 font-bold text-[#0F172A] whitespace-nowrap">
        {shipment.weight}
      </td>

      {/* Route */}
      <td className="py-2.5 px-2 whitespace-nowrap">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-[#0F172A] text-[12px]">
              {shipment.origin.city}
            </span>
            <span className="text-[10px] text-[#94A3B8] font-normal">
              (Origin)
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-semibold text-[#856DF3] text-[12px]">
              {shipment.destination.city}
            </span>
            <span className="text-[10px] text-[#94A3B8] font-normal">
              (Destination)
            </span>
          </div>
        </div>
      </td>

      {/* Date */}
      <td className="py-2.5 px-2 whitespace-nowrap">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1 text-[11px] xl:text-[12px] text-[#334155]">
            <span className="font-medium">
              {shipment.origin.datetime.replace(" · ", " – ")}
            </span>
            <span className="text-[10px] text-[#94A3B8]">(ATD)</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] xl:text-[12px] text-[#334155]">
            <span className="font-medium">
              {shipment.destination.datetime.replace(" · ", " – ")}
            </span>
            <span className="text-[10px] text-[#94A3B8]">(ETA)</span>
          </div>
        </div>
      </td>

      {/* Progress */}
      <td className="py-2.5 px-1.5 whitespace-nowrap">
        <div className="flex items-center gap-1.5">
          <div className="w-10 xl:w-12 h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden">
            <div
              className="bg-[#856DF3] h-full rounded-full transition-all duration-300"
              style={{ width: `${shipment.progress}%` }}
            />
          </div>
          <span className="font-bold text-[11px] xl:text-[12px] text-[#0F172A]">
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
