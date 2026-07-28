"use client";

import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

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
      <h3 className="text-[17px] font-bold text-[#1E293B] mb-1">Package Details</h3>

      {/* Item Description */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-[#757575]">Item Description</label>
        <input
          type="text"
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
          placeholder="Premium Garden Tool Set"
          className="w-full bg-[#F4F4F6] rounded-[14px] px-4 py-3 text-[14px] text-[#1E293B] outline-none focus:bg-white focus:ring-2 focus:ring-[#856DF3]/20 transition"
        />
      </div>

      {/* Quantity & Value Row */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-[#757575]">Quantity</label>
          <div className="relative flex items-center">
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full bg-[#F4F4F6] rounded-[14px] pl-4 pr-9 py-3 text-[14px] font-bold text-[#1E293B] outline-none"
            />
            <div className="absolute right-3 flex flex-col gap-0.5 text-[#757575] shrink-0">
              <ChevronUp
                className="w-3.5 h-3.5 cursor-pointer hover:text-[#1E293B]"
                onClick={() => setQuantity(Number(quantity || 0) + 1)}
              />
              <ChevronDown
                className="w-3.5 h-3.5 cursor-pointer hover:text-[#1E293B]"
                onClick={() => setQuantity(Math.max(1, Number(quantity || 0) - 1))}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-[#757575]">Value</label>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="$3,200"
            className="w-full bg-[#F4F4F6] rounded-[14px] px-4 py-3 text-[14px] font-bold text-[#1E293B] outline-none focus:bg-white focus:ring-2 focus:ring-[#856DF3]/20 transition"
          />
        </div>
      </div>

      {/* Weight & Units Row */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-[#757575]">Weight</label>
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="125"
            className="w-full bg-[#F4F4F6] rounded-[14px] px-4 py-3 text-[14px] font-bold text-[#1E293B] outline-none focus:bg-white focus:ring-2 focus:ring-[#856DF3]/20 transition"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-[#757575]">Units</label>
          <div className="relative flex items-center">
            <select
              value={units}
              onChange={(e) => setUnits(e.target.value)}
              className="w-full bg-[#F4F4F6] rounded-[14px] px-4 py-3 text-[14px] font-medium text-[#1E293B] outline-none appearance-none cursor-pointer"
            >
              <option value="Kg">Kg</option>
              <option value="Lbs">Lbs</option>
              <option value="Tons">Tons</option>
            </select>
            <ChevronDown className="w-4 h-4 text-[#757575] absolute right-3 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Dimensions Row */}
      <div className="flex flex-col gap-1.5 mt-1">
        <label className="text-[13px] font-medium text-[#757575]">Dimensions</label>
        <div className="grid grid-cols-3 gap-3">
          {/* Length */}
          <div className="flex flex-col">
            <div className="relative flex items-center">
              <input
                type="text"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                placeholder="80"
                className="w-full bg-[#F4F4F6] rounded-[14px] pl-4 pr-10 py-3 text-[14px] font-bold text-[#1E293B] outline-none"
              />
              <span className="absolute right-3.5 text-[13px] text-[#757575] font-normal pointer-events-none">
                cm
              </span>
            </div>
            <span className="text-[12px] text-[#94A3B8] font-normal mt-1">Length</span>
          </div>

          {/* Width */}
          <div className="flex flex-col">
            <div className="relative flex items-center">
              <input
                type="text"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                placeholder="60"
                className="w-full bg-[#F4F4F6] rounded-[14px] pl-4 pr-10 py-3 text-[14px] font-bold text-[#1E293B] outline-none"
              />
              <span className="absolute right-3.5 text-[13px] text-[#757575] font-normal pointer-events-none">
                cm
              </span>
            </div>
            <span className="text-[12px] text-[#94A3B8] font-normal mt-1">Width</span>
          </div>

          {/* Height */}
          <div className="flex flex-col">
            <div className="relative flex items-center">
              <input
                type="text"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="ex. 20"
                className="w-full bg-[#F4F4F6] rounded-[14px] pl-4 pr-10 py-3 text-[14px] font-normal text-[#1E293B] placeholder:text-[#94A3B8] outline-none"
              />
              <span className="absolute right-3.5 text-[13px] text-[#757575] font-normal pointer-events-none">
                cm
              </span>
            </div>
            <span className="text-[12px] text-[#94A3B8] font-normal mt-1">Height</span>
          </div>
        </div>
      </div>
    </div>
  );
}
