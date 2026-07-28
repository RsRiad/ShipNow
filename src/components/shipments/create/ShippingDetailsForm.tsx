"use client";

import React from "react";
import { Calendar } from "lucide-react";

interface ShippingDetailsFormProps {
  freightType: string;
  setFreightType: (v: string) => void;
  carrier: string;
  setCarrier: (v: string) => void;
  shippingMethod: string;
  setShippingMethod: (v: string) => void;
  shipmentId: string;
  shipmentDate: string;
  setShipmentDate: (v: string) => void;
  notes: string;
  setNotes: (v: string) => void;

  insuranceCoverage: boolean;
  setInsuranceCoverage: (v: boolean) => void;
  signatureOnDelivery: boolean;
  setSignatureOnDelivery: (v: boolean) => void;
  temperatureControl: boolean;
  setTemperatureControl: (v: boolean) => void;
  fragileHandling: boolean;
  setFragileHandling: (v: boolean) => void;

  notifyRecipient: boolean;
  setNotifyRecipient: (v: boolean) => void;

  shippingMethodError?: string;
}

export default function ShippingDetailsForm({
  freightType,
  setFreightType,
  carrier,
  setCarrier,
  shippingMethod,
  setShippingMethod,
  shipmentId,
  shipmentDate,
  setShipmentDate,
  notes,
  setNotes,
  insuranceCoverage,
  setInsuranceCoverage,
  signatureOnDelivery,
  setSignatureOnDelivery,
  temperatureControl,
  setTemperatureControl,
  fragileHandling,
  setFragileHandling,
  notifyRecipient,
  setNotifyRecipient,
  shippingMethodError,
}: ShippingDetailsFormProps) {
  const freightOptions = [
    { id: "road", label: "Road Freight" },
    { id: "rail", label: "Rail Freight" },
    { id: "ocean", label: "Ocean Freight" },
    { id: "air", label: "Air Freight" },
  ];

  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-[16px] font-bold text-[#1E293B]">Shipping Details</h3>

      {/* Freight Type Radio Group */}
      <div className="flex flex-col gap-2">
        <label className="text-[13px] font-medium text-[#64748B]">Freight Type</label>
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
          {freightOptions.map((opt) => {
            const isSelected = freightType === opt.label;
            return (
              <label
                key={opt.id}
                className="flex items-center gap-2 cursor-pointer text-[13px] sm:text-[14px] text-[#334155] font-medium select-none"
              >
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center transition ${
                    isSelected
                      ? "border-[#856DF3] bg-white"
                      : "border-[#CBD5E1] bg-white"
                  }`}
                  onClick={() => setFreightType(opt.label)}
                >
                  {isSelected && (
                    <div className="w-2 h-2 rounded-full bg-[#856DF3]" />
                  )}
                </div>
                <span>{opt.label}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Carrier, Shipping Method, Shipment ID, Date Controls Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* Carrier */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-[#64748B]">Carrier</label>
          <select
            value={carrier}
            onChange={(e) => setCarrier(e.target.value)}
            className="w-full bg-[#F8F9FA] sm:bg-[#F4F4F6] border border-[#E5E5E7]/60 rounded-[12px] px-3.5 py-2.5 text-[14px] text-[#1E293B] outline-none focus:bg-white focus:border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20 transition cursor-pointer"
          >
            <option value="FedEx">FedEx</option>
            <option value="DHL Express">DHL Express</option>
            <option value="UPS Freight">UPS Freight</option>
            <option value="Maersk Line">Maersk Line</option>
          </select>
        </div>

        {/* Shipping Method (With Error State matching Figma screenshot) */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-[#64748B]">Shipping Method</label>
          <select
            value={shippingMethod}
            onChange={(e) => setShippingMethod(e.target.value)}
            className={`w-full rounded-[12px] px-3.5 py-2.5 text-[14px] text-[#1E293B] outline-none transition cursor-pointer ${
              shippingMethodError
                ? "bg-[#F8F9FA] sm:bg-[#F4F4F6] border-2 border-[#856DF3]"
                : "bg-[#F8F9FA] sm:bg-[#F4F4F6] border border-[#E5E5E7]/60 focus:bg-white focus:border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20"
            }`}
          >
            <option value="">Select Method</option>
            <option value="Express">Express</option>
            <option value="Standard">Standard</option>
            <option value="Economy">Economy</option>
          </select>
          {shippingMethodError && (
            <span className="text-[#6366F1] text-[12px] font-medium mt-0.5">
              {shippingMethodError}
            </span>
          )}
        </div>

        {/* Shipment ID */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-[#64748B]">Shipment ID</label>
          <input
            type="text"
            value={shipmentId}
            disabled
            readOnly
            className="w-full bg-[#EAEAEA]/80 border border-[#E5E5E7]/60 rounded-[12px] px-3.5 py-2.5 text-[14px] font-semibold text-[#64748B] outline-none cursor-not-allowed"
          />
          <span className="text-[11px] text-[#94A3B8]">Auto-generated</span>
        </div>

        {/* Shipment Date */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-[#64748B]">Shipment Date</label>
          <div className="relative flex items-center">
            <input
              type="text"
              value={shipmentDate}
              onChange={(e) => setShipmentDate(e.target.value)}
              placeholder="March 21, 2035"
              className="w-full bg-[#F8F9FA] sm:bg-[#F4F4F6] border border-[#E5E5E7]/60 rounded-[12px] pl-3.5 pr-10 py-2.5 text-[14px] text-[#1E293B] outline-none focus:bg-white focus:border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20 transition"
            />
            <Calendar className="w-4 h-4 text-[#757575] absolute right-3 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Notes Textarea */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-[#64748B]">Notes</label>
        <textarea
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add special delivery notes (optional)"
          className="w-full bg-[#F8F9FA] sm:bg-[#F4F4F6] border border-[#E5E5E7]/60 rounded-[12px] px-3.5 py-2.5 text-[14px] text-[#1E293B] outline-none focus:bg-white focus:border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20 transition resize-none"
        />
      </div>

      {/* Bottom Section: Additional Services & Tracking Preferences */}
      <div className="pt-2 border-t border-[#E5E5E7]/60 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Additional Services */}
        <div className="flex flex-col gap-3">
          <label className="text-[13px] font-medium text-[#64748B]">Additional Services</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="flex items-center gap-2 cursor-pointer text-[13px] text-[#334155] font-medium select-none">
              <input
                type="checkbox"
                checked={insuranceCoverage}
                onChange={(e) => setInsuranceCoverage(e.target.checked)}
                className="w-4 h-4 rounded text-[#856DF3] border-[#CBD5E1] focus:ring-[#856DF3]/20 cursor-pointer"
              />
              <span>Insurance Coverage</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer text-[13px] text-[#334155] font-medium select-none">
              <input
                type="checkbox"
                checked={temperatureControl}
                onChange={(e) => setTemperatureControl(e.target.checked)}
                className="w-4 h-4 rounded text-[#856DF3] border-[#CBD5E1] focus:ring-[#856DF3]/20 cursor-pointer"
              />
              <span>Temperature Control</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer text-[13px] text-[#334155] font-medium select-none">
              <input
                type="checkbox"
                checked={signatureOnDelivery}
                onChange={(e) => setSignatureOnDelivery(e.target.checked)}
                className="w-4 h-4 rounded text-[#856DF3] border-[#CBD5E1] focus:ring-[#856DF3]/20 cursor-pointer"
              />
              <span>Signature on Delivery</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer text-[13px] text-[#334155] font-medium select-none">
              <input
                type="checkbox"
                checked={fragileHandling}
                onChange={(e) => setFragileHandling(e.target.checked)}
                className="w-4 h-4 rounded text-[#856DF3] border-[#CBD5E1] focus:ring-[#856DF3]/20 cursor-pointer"
              />
              <span>Fragile Item Handling</span>
            </label>
          </div>
        </div>

        {/* Tracking & Status Updates Toggle */}
        <div className="flex flex-col gap-3">
          <label className="text-[13px] font-medium text-[#64748B]">Tracking & Status Updates</label>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setNotifyRecipient(!notifyRecipient)}
              className={`w-11 h-6 rounded-full transition duration-200 relative p-0.5 cursor-pointer ${
                notifyRecipient ? "bg-[#856DF3]" : "bg-[#E2E8F0]"
              }`}
              aria-label="Toggle Notify Recipient"
            >
              <div
                className={`w-5 h-5 rounded-full bg-white shadow-xs transition-transform duration-200 ${
                  notifyRecipient ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
            <span className="text-[13px] font-medium text-[#334155]">
              Notify Recipient via Email/SMS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
