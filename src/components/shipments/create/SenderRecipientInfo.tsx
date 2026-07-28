"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

interface SenderRecipientInfoProps {
  senderCompany: string;
  setSenderCompany: (v: string) => void;
  senderEmail: string;
  setSenderEmail: (v: string) => void;
  senderPhone: string;
  setSenderPhone: (v: string) => void;
  pickupAddress: string;
  setPickupAddress: (v: string) => void;

  recipientCompany: string;
  setRecipientCompany: (v: string) => void;
  recipientEmail: string;
  setRecipientEmail: (v: string) => void;
  recipientPhone: string;
  setRecipientPhone: (v: string) => void;
  deliveryAddress: string;
  setDeliveryAddress: (v: string) => void;

  addressError?: string;
}

export default function SenderRecipientInfo({
  senderCompany,
  setSenderCompany,
  senderEmail,
  setSenderEmail,
  senderPhone,
  setSenderPhone,
  pickupAddress,
  setPickupAddress,
  recipientCompany,
  setRecipientCompany,
  recipientEmail,
  setRecipientEmail,
  recipientPhone,
  setRecipientPhone,
  deliveryAddress,
  setDeliveryAddress,
  addressError,
}: SenderRecipientInfoProps) {
  return (
    <div className="w-full bg-[#F5F5F7] rounded-[20px] p-5 md:p-6 mb-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0">
        {/* Left Column: Sender Info (with Vertical Dividing Line on Desktop) */}
        <div className="flex flex-col gap-4 pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-[#E5E5E7]/80 pb-6 lg:pb-0">
          <h3 className="text-[18px] sm:text-[20px] font-bold text-[#1E293B]">Sender Info</h3>

          {/* Company */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-medium text-[#757575]">Company</label>
            <input
              type="text"
              value={senderCompany}
              onChange={(e) => setSenderCompany(e.target.value)}
              placeholder="GreenHaven"
              className="w-full bg-white rounded-[12px] px-4 py-3 text-[15px] text-[#1E293B] outline-none focus:ring-2 focus:ring-[#856DF3]/20 transition"
            />
          </div>

          {/* Email & Phone Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] font-medium text-[#757575]">Email</label>
              <input
                type="email"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="logistics@greenhaven.com"
                className="w-full bg-white rounded-[12px] px-4 py-3 text-[15px] text-[#1E293B] outline-none focus:ring-2 focus:ring-[#856DF3]/20 transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] font-medium text-[#757575]">Phone Number</label>
              <div className="flex items-center gap-2 bg-white rounded-[12px] px-3 py-2.5 focus-within:ring-2 focus-within:ring-[#856DF3]/20 transition">
                <div className="flex items-center gap-1 text-[14px] font-medium text-[#334155] shrink-0 border-r border-[#E5E5E7] pr-2.5">
                  <span className="text-[16px]">🇺🇸</span>
                  <span>+1</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#94A3B8]" />
                </div>
                <input
                  type="text"
                  value={senderPhone}
                  onChange={(e) => setSenderPhone(e.target.value)}
                  placeholder="408-555-7210"
                  className="w-full bg-transparent text-[15px] text-[#1E293B] outline-none"
                />
              </div>
            </div>
          </div>

          {/* Pickup Address */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-medium text-[#757575]">Pickup Address</label>
            <input
              type="text"
              value={pickupAddress}
              onChange={(e) => setPickupAddress(e.target.value)}
              placeholder="1120 Birch Street, Portland, OR 97205, USA"
              className="w-full bg-white rounded-[12px] px-4 py-3 text-[15px] text-[#1E293B] outline-none focus:ring-2 focus:ring-[#856DF3]/20 transition"
            />
          </div>
        </div>


        {/* Right Column: Recipient Info */}
        <div className="flex flex-col gap-4 pl-0 lg:pl-6">
          <h3 className="text-[18px] sm:text-[20px] font-bold text-[#1E293B]">Recipient Info</h3>

          {/* Company */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-medium text-[#757575]">Company</label>
            <input
              type="text"
              value={recipientCompany}
              onChange={(e) => setRecipientCompany(e.target.value)}
              placeholder="FreshNest"
              className="w-full bg-white rounded-[12px] px-4 py-3 text-[15px] text-[#1E293B] outline-none focus:ring-2 focus:ring-[#856DF3]/20 transition"
            />
          </div>

          {/* Email & Phone Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] font-medium text-[#757575]">Email</label>
              <input
                type="email"
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
                placeholder="warehouse@freshnest.com"
                className="w-full bg-white rounded-[12px] px-4 py-3 text-[15px] text-[#1E293B] outline-none focus:ring-2 focus:ring-[#856DF3]/20 transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] font-medium text-[#757575]">Phone Number</label>
              <div className="flex items-center gap-2 bg-white rounded-[12px] px-3 py-2.5 focus-within:ring-2 focus-within:ring-[#856DF3]/20 transition">
                <div className="flex items-center gap-1 text-[14px] font-medium text-[#334155] shrink-0 border-r border-[#E5E5E7] pr-2.5">
                  <span className="text-[16px]">🇺🇸</span>
                  <span>+1</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#94A3B8]" />
                </div>
                <input
                  type="text"
                  value={recipientPhone}
                  onChange={(e) => setRecipientPhone(e.target.value)}
                  placeholder="786-555-4432"
                  className="w-full bg-transparent text-[15px] text-[#1E293B] outline-none"
                />
              </div>
            </div>
          </div>

          {/* Delivery Address (With Error State matching Figma screenshot) */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-medium text-[#757575]">Delivery Address</label>
            <input
              type="text"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              placeholder="Street address, city, state/province, ZIP code"
              className={`w-full rounded-[12px] px-4 py-3 text-[15px] text-[#1E293B] outline-none transition placeholder:text-[#94A3B8] ${
                addressError
                  ? "bg-white border border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20"
                  : "bg-white focus:ring-2 focus:ring-[#856DF3]/20"
              }`}
            />
            {addressError && (
              <span className="text-[#6366F1] text-[13px] font-medium mt-1">
                {addressError}
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
