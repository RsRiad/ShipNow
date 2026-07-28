"use client";

import React from "react";

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
    <div className="w-full bg-[#F4F4F6] border border-[#E5E5E7]/60 rounded-[20px] p-5 md:p-6 mb-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Left Column: Sender Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[16px] font-bold text-[#1E293B]">Sender Info</h3>

          {/* Company */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium text-[#64748B]">Company</label>
            <input
              type="text"
              value={senderCompany}
              onChange={(e) => setSenderCompany(e.target.value)}
              placeholder="Company Name"
              className="w-full bg-white border border-[#E5E5E7] rounded-[12px] px-3.5 py-2.5 text-[14px] text-[#1E293B] outline-none focus:border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20 transition"
            />
          </div>

          {/* Email & Phone Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-medium text-[#64748B]">Email</label>
              <input
                type="email"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full bg-white border border-[#E5E5E7] rounded-[12px] px-3.5 py-2.5 text-[14px] text-[#1E293B] outline-none focus:border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20 transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-medium text-[#64748B]">Phone Number</label>
              <div className="flex items-center gap-1.5 bg-white border border-[#E5E5E7] rounded-[12px] px-2.5 py-2 focus-within:border-[#856DF3] focus-within:ring-2 focus-within:ring-[#856DF3]/20 transition">
                <div className="flex items-center gap-1 text-[13px] font-medium text-[#334155] shrink-0 border-r border-[#E5E5E7] pr-2">
                  <span className="text-[15px]">🇺🇸</span>
                  <span>+1</span>
                  <span className="text-[10px] text-[#94A3B8]">▼</span>
                </div>
                <input
                  type="text"
                  value={senderPhone}
                  onChange={(e) => setSenderPhone(e.target.value)}
                  placeholder="408-555-7210"
                  className="w-full bg-transparent text-[14px] text-[#1E293B] outline-none"
                />
              </div>
            </div>
          </div>

          {/* Pickup Address */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium text-[#64748B]">Pickup Address</label>
            <input
              type="text"
              value={pickupAddress}
              onChange={(e) => setPickupAddress(e.target.value)}
              placeholder="Street address, city, state, ZIP code"
              className="w-full bg-white border border-[#E5E5E7] rounded-[12px] px-3.5 py-2.5 text-[14px] text-[#1E293B] outline-none focus:border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20 transition"
            />
          </div>
        </div>

        {/* Right Column: Recipient Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[16px] font-bold text-[#1E293B]">Recipient Info</h3>

          {/* Company */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium text-[#64748B]">Company</label>
            <input
              type="text"
              value={recipientCompany}
              onChange={(e) => setRecipientCompany(e.target.value)}
              placeholder="Company Name"
              className="w-full bg-white border border-[#E5E5E7] rounded-[12px] px-3.5 py-2.5 text-[14px] text-[#1E293B] outline-none focus:border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20 transition"
            />
          </div>

          {/* Email & Phone Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-medium text-[#64748B]">Email</label>
              <input
                type="email"
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full bg-white border border-[#E5E5E7] rounded-[12px] px-3.5 py-2.5 text-[14px] text-[#1E293B] outline-none focus:border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20 transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-medium text-[#64748B]">Phone Number</label>
              <div className="flex items-center gap-1.5 bg-white border border-[#E5E5E7] rounded-[12px] px-2.5 py-2 focus-within:border-[#856DF3] focus-within:ring-2 focus-within:ring-[#856DF3]/20 transition">
                <div className="flex items-center gap-1 text-[13px] font-medium text-[#334155] shrink-0 border-r border-[#E5E5E7] pr-2">
                  <span className="text-[15px]">🇺🇸</span>
                  <span>+1</span>
                  <span className="text-[10px] text-[#94A3B8]">▼</span>
                </div>
                <input
                  type="text"
                  value={recipientPhone}
                  onChange={(e) => setRecipientPhone(e.target.value)}
                  placeholder="786-555-4432"
                  className="w-full bg-transparent text-[14px] text-[#1E293B] outline-none"
                />
              </div>
            </div>
          </div>

          {/* Delivery Address (With Error State matching Figma screenshot) */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium text-[#64748B]">Delivery Address</label>
            <input
              type="text"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              placeholder="Street address, city, state/province, ZIP code"
              className={`w-full bg-white rounded-[12px] px-3.5 py-2.5 text-[14px] text-[#1E293B] outline-none transition ${
                addressError
                  ? "border-2 border-[#856DF3] shadow-2xs"
                  : "border border-[#E5E5E7] focus:border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20"
              }`}
            />
            {addressError && (
              <span className="text-[#6366F1] text-[12px] font-medium mt-0.5">
                {addressError}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
