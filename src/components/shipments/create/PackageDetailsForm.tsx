"use client";

import React from "react";

interface PackageDetailsFormProps {
  itemDescription: string;
  setItemDescription: (v: string) => void;
  quantity: number | string;
  setQuantity: (v: number | string) => void;
  value: string;
  setValue: (v: string) => void;
  weight: string;
  setWeight: (v: string) => void;
  units: string;
  setUnits: (v: string) => void;
  length: string;
  setLength: (v: string) => void;
  width: string;
  setWidth: (v: string) => void;
  height: string;
  setHeight: (v: string) => void;
}

export default function PackageDetailsForm({
  itemDescription,
  setItemDescription,
  quantity,
  setQuantity,
  value,
  setValue,
  weight,
  setWeight,
  units,
  setUnits,
  length,
  setLength,
  width,
  setWidth,
  height,
  setHeight,
}: PackageDetailsFormProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[16px] font-bold text-[#1E293B]">Package Details</h3>

      {/* Item Description */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-[#64748B]">Item Description</label>
        <input
          type="text"
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
          placeholder="Item Description"
          className="w-full bg-[#F8F9FA] sm:bg-[#F4F4F6] border border-[#E5E5E7]/60 rounded-[12px] px-3.5 py-2.5 text-[14px] text-[#1E293B] outline-none focus:bg-white focus:border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20 transition"
        />
      </div>

      {/* Quantity & Value Row */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-[#64748B]">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full bg-[#F8F9FA] sm:bg-[#F4F4F6] border border-[#E5E5E7]/60 rounded-[12px] px-3.5 py-2.5 text-[14px] text-[#1E293B] outline-none focus:bg-white focus:border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20 transition"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-[#64748B]">Value</label>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="$3,200"
            className="w-full bg-[#F8F9FA] sm:bg-[#F4F4F6] border border-[#E5E5E7]/60 rounded-[12px] px-3.5 py-2.5 text-[14px] text-[#1E293B] outline-none focus:bg-white focus:border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20 transition"
          />
        </div>
      </div>

      {/* Weight & Units Row */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-[#64748B]">Weight</label>
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="125"
            className="w-full bg-[#F8F9FA] sm:bg-[#F4F4F6] border border-[#E5E5E7]/60 rounded-[12px] px-3.5 py-2.5 text-[14px] text-[#1E293B] outline-none focus:bg-white focus:border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20 transition"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-[#64748B]">Units</label>
          <select
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            className="w-full bg-[#F8F9FA] sm:bg-[#F4F4F6] border border-[#E5E5E7]/60 rounded-[12px] px-3.5 py-2.5 text-[14px] text-[#1E293B] outline-none focus:bg-white focus:border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20 transition cursor-pointer"
          >
            <option value="Kg">Kg</option>
            <option value="Lbs">Lbs</option>
            <option value="Tons">Tons</option>
          </select>
        </div>
      </div>

      {/* Dimensions Row */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-[#64748B]">Dimensions</label>
        <div className="grid grid-cols-3 gap-3">
          {/* Length */}
          <div className="flex flex-col gap-1">
            <div className="relative flex items-center">
              <input
                type="text"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                placeholder="80"
                className="w-full bg-[#F8F9FA] sm:bg-[#F4F4F6] border border-[#E5E5E7]/60 rounded-[12px] pl-3.5 pr-8 py-2.5 text-[14px] text-[#1E293B] outline-none focus:bg-white focus:border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20 transition"
              />
              <span className="absolute right-3 text-[12px] text-[#94A3B8] font-medium pointer-events-none">
                cm
              </span>
            </div>
            <span className="text-[11px] text-[#94A3B8]">Length</span>
          </div>

          {/* Width */}
          <div className="flex flex-col gap-1">
            <div className="relative flex items-center">
              <input
                type="text"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                placeholder="60"
                className="w-full bg-[#F8F9FA] sm:bg-[#F4F4F6] border border-[#E5E5E7]/60 rounded-[12px] pl-3.5 pr-8 py-2.5 text-[14px] text-[#1E293B] outline-none focus:bg-white focus:border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20 transition"
              />
              <span className="absolute right-3 text-[12px] text-[#94A3B8] font-medium pointer-events-none">
                cm
              </span>
            </div>
            <span className="text-[11px] text-[#94A3B8]">Width</span>
          </div>

          {/* Height */}
          <div className="flex flex-col gap-1">
            <div className="relative flex items-center">
              <input
                type="text"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="ex. 20"
                className="w-full bg-[#F8F9FA] sm:bg-[#F4F4F6] border border-[#E5E5E7]/60 rounded-[12px] pl-3.5 pr-8 py-2.5 text-[14px] text-[#1E293B] outline-none focus:bg-white focus:border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20 transition"
              />
              <span className="absolute right-3 text-[12px] text-[#94A3B8] font-medium pointer-events-none">
                cm
              </span>
            </div>
            <span className="text-[11px] text-[#94A3B8]">Height</span>
          </div>
        </div>
      </div>
    </div>
  );
}
