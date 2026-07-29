"use client";

import React from "react";
import PhoneInput from "@/components/common/PhoneInput";

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
    <div className="w-full bg-surface rounded-[20px] p-4 md:p-5 mb-3.5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-0">
        {/* Left Column: Sender Info (with Vertical Dividing Line on Tablet/Desktop) */}
        <div className="flex flex-col gap-4 pr-0 sm:pr-5 md:pr-6 border-b sm:border-b-0 sm:border-r border-border pb-6 sm:pb-0">
          <h3 className="text-[18px] sm:text-[20px] font-bold text-slate">Sender Info</h3>

          {/* Company */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-medium text-body">Company</label>
            <input
              type="text"
              value={senderCompany}
              onChange={(e) => setSenderCompany(e.target.value)}
              placeholder="GreenHaven"
              className="w-full bg-white rounded-[12px] px-4 py-3 text-[15px] text-slate outline-none focus:ring-2 focus:ring-brand/20 transition"
            />
          </div>

          {/* Email & Phone */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-medium text-body">Email</label>
            <input
              type="email"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              placeholder="logistics@greenhaven.com"
              className="w-full bg-white rounded-[12px] px-4 py-3 text-[15px] text-slate outline-none focus:ring-2 focus:ring-brand/20 transition"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-medium text-body">Phone Number</label>
            <PhoneInput
              value={senderPhone}
              onChange={setSenderPhone}
              placeholder="408-555-7210"
            />
          </div>

          {/* Pickup Address */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-medium text-body">Pickup Address</label>
            <input
              type="text"
              value={pickupAddress}
              onChange={(e) => setPickupAddress(e.target.value)}
              placeholder="1120 Birch Street, Portland, OR 97205, USA"
              className="w-full bg-white rounded-[12px] px-4 py-3 text-[15px] text-slate outline-none focus:ring-2 focus:ring-brand/20 transition"
            />
          </div>
        </div>


        {/* Right Column: Recipient Info */}
        <div className="flex flex-col gap-4 pl-0 sm:pl-5 md:pl-6">
          <h3 className="text-[18px] sm:text-[20px] font-bold text-slate">Recipient Info</h3>

          {/* Company */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-medium text-body">Company</label>
            <input
              type="text"
              value={recipientCompany}
              onChange={(e) => setRecipientCompany(e.target.value)}
              placeholder="FreshNest"
              className="w-full bg-white rounded-[12px] px-4 py-3 text-[15px] text-slate outline-none focus:ring-2 focus:ring-brand/20 transition"
            />
          </div>

          {/* Email & Phone */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-medium text-body">Email</label>
            <input
              type="email"
              value={recipientEmail}
              onChange={(e) => setRecipientEmail(e.target.value)}
              placeholder="warehouse@freshnest.com"
              className="w-full bg-white rounded-[12px] px-4 py-3 text-[15px] text-slate outline-none focus:ring-2 focus:ring-brand/20 transition"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-medium text-body">Phone Number</label>
            <PhoneInput
              value={recipientPhone}
              onChange={setRecipientPhone}
              placeholder="786-555-4432"
            />
          </div>


          {/* Delivery Address (With Error State matching Figma screenshot) */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-medium text-body">Delivery Address</label>
            <input
              type="text"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              placeholder="Street address, city, state/province, ZIP code"
              className={`w-full rounded-[12px] px-4 py-3 text-[15px] text-slate outline-none transition placeholder:text-slate-light ${
                addressError
                  ? "bg-white border border-brand focus:ring-2 focus:ring-brand/20"
                  : "bg-white focus:ring-2 focus:ring-brand/20"
              }`}
            />
            {addressError && (
              <span className="text-brand text-[13px] font-medium mt-1">
                {addressError}
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
