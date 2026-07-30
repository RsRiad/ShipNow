"use client";

import React from "react";
import { Calendar, ChevronDown } from "lucide-react";
import ToggleSwitch from "@/components/common/ToggleSwitch";

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
    <div className="flex flex-col gap-3.5 border-t lg:border-t-0 lg:border-l border-border pt-5 lg:pt-0 lg:pl-8 xl:pl-10">
      <h3 className="text-[18px] sm:text-[20px] font-bold text-slate">
        Shipping Details
      </h3>

      {/* Freight Type Radio Group */}
      <fieldset className="flex flex-col gap-1.5 border-0 p-0 m-0">
        <legend className="text-[14px] font-medium text-body">
          Freight Type
        </legend>
        <div className="grid grid-cols-2 sm:flex sm:items-center sm:gap-6 gap-3.5">
          {freightOptions.map((opt) => {
            const isSelected = freightType === opt.label;
            return (
              <label
                key={opt.id}
                htmlFor={`freight-${opt.id}`}
                className="flex items-center gap-2 cursor-pointer text-[14px] text-label font-medium select-none"
              >
                <span className="relative flex items-center justify-center">
                  <input
                    type="radio"
                    id={`freight-${opt.id}`}
                    name="freight-type"
                    value={opt.label}
                    checked={isSelected}
                    onChange={() => setFreightType(opt.label)}
                    className="sr-only peer"
                  />
                  <span
                    className={`w-4 h-4 rounded-full border flex items-center justify-center transition peer-focus-visible:ring-2 peer-focus-visible:ring-brand/40 ${
                      isSelected
                        ? "border-brand bg-white"
                        : "border-border-muted bg-white"
                    }`}
                  >
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-brand" />
                    )}
                  </span>
                </span>
                <span>{opt.label}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* Carrier, Shipping Method, Shipment ID, Date Controls Row (4 Columns in Tablet & Desktop View) */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3.5 sm:gap-4">
        {/* Carrier */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="carrier" className="text-[14px] font-medium text-body">Carrier</label>
          <div className="relative flex items-center">
            <select
              id="carrier"
              value={carrier}
              onChange={(e) => setCarrier(e.target.value)}
              className="w-full bg-[#F0F0F0] rounded-[12px] px-4 py-3 text-[15px] font-medium text-slate outline-none appearance-none cursor-pointer"
            >
              <option value="FedEx">FedEx</option>
              <option value="DHL Express">DHL Express</option>
              <option value="UPS Freight">UPS Freight</option>
              <option value="Maersk Line">Maersk Line</option>
            </select>
            <ChevronDown className="w-4 h-4 text-body absolute right-3 pointer-events-none" />
          </div>
        </div>

        {/* Shipping Method (With Error State matching Figma screenshot) */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="shipping-method" className="text-[14px] font-medium text-body">
            Shipping Method
          </label>
          <div className="relative flex items-center">
            <select
              id="shipping-method"
              value={shippingMethod}
              onChange={(e) => setShippingMethod(e.target.value)}
              aria-invalid={!!shippingMethodError}
              aria-describedby={shippingMethodError ? "shipping-method-error" : undefined}
              className={`w-full rounded-[12px] px-4 py-3 text-[15px] font-medium text-slate outline-none appearance-none cursor-pointer transition ${
                shippingMethodError
                  ? "bg-[#F0F0F0] border border-brand text-body"
                  : "bg-[#F0F0F0] focus:bg-white focus:ring-2 focus:ring-brand/20"
              }`}
            >
              <option value="">Select Method</option>
              <option value="Express">Express</option>
              <option value="Standard">Standard</option>
              <option value="Economy">Economy</option>
            </select>
            <ChevronDown className="w-4 h-4 text-body absolute right-3 pointer-events-none" />
          </div>
          {shippingMethodError && (
            <span id="shipping-method-error" className="text-brand text-[13px] font-medium mt-1">
              {shippingMethodError}
            </span>
          )}
        </div>

        {/* Shipment ID */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="shipment-id" className="text-[14px] font-medium text-body">
            Shipment ID
          </label>
          <input
            id="shipment-id"
            type="text"
            value={shipmentId}
            disabled
            readOnly
            className="w-full bg-[#EBEBEF] rounded-[12px] px-4 py-3 text-[15px] font-semibold text-slate-muted outline-none cursor-not-allowed"
          />
          <span className="text-[12px] text-slate-light font-normal">
            Auto-generated
          </span>
        </div>

        {/* Shipment Date */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="shipment-date" className="text-[14px] font-medium text-body">
            Shipment Date
          </label>
          <div className="relative flex items-center">
            <input
              id="shipment-date"
              type="text"
              value={shipmentDate}
              onChange={(e) => setShipmentDate(e.target.value)}
              placeholder="March 21, 2035"
              className="w-full bg-[#F0F0F0] rounded-[12px] pl-4 pr-10 py-3 text-[15px] font-medium text-slate outline-none"
            />
            <Calendar className="w-4 h-4 text-body absolute right-3.5 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Notes Textarea */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="notes" className="text-[14px] font-medium text-body">Notes</label>
        <textarea
          id="notes"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add special delivery notes (optional)"
          className="w-full bg-[#F0F0F0] rounded-[12px] px-4 py-3 text-[15px] text-slate placeholder:text-slate-light outline-none focus:bg-white focus:ring-2 focus:ring-brand/20 transition resize-none"
        />
      </div>

      {/* Bottom Section: Additional Services & Tracking Preferences (Enclosed between Top & Bottom Horizontal Lines) */}
      <div className="pt-4 pb-4 border-t border-b border-border grid grid-cols-1 sm:grid-cols-12 gap-6 items-start my-1">
        {/* Additional Services (Left 7 Cols) */}
        <div className="sm:col-span-7 flex flex-col gap-3">
          <label className="text-[14px] font-medium text-body">
            Additional Services
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
            {/* Insurance Coverage */}
            <label className="flex items-center gap-2.5 cursor-pointer text-[14px] text-label font-medium select-none">
              <div
                onClick={() => setInsuranceCoverage(!insuranceCoverage)}
                className={`w-4.5 h-4.5 rounded-[5px] flex items-center justify-center transition cursor-pointer ${
                  insuranceCoverage
                    ? "bg-brand text-white"
                    : "bg-[#F0F0F0] border border-border-muted"
                }`}
              >
                {insuranceCoverage && (
                  <svg
                    className="w-3 h-3 stroke-[3]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span onClick={() => setInsuranceCoverage(!insuranceCoverage)}>
                Insurance Coverage
              </span>
            </label>

            {/* Temperature Control */}
            <label className="flex items-center gap-2.5 cursor-pointer text-[14px] text-label font-medium select-none">
              <div
                onClick={() => setTemperatureControl(!temperatureControl)}
                className={`w-4.5 h-4.5 rounded-[5px] flex items-center justify-center transition cursor-pointer ${
                  temperatureControl
                    ? "bg-brand text-white"
                    : "bg-[#F0F0F0] border border-border-muted"
                }`}
              >
                {temperatureControl && (
                  <svg
                    className="w-3 h-3 stroke-[3]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span onClick={() => setTemperatureControl(!temperatureControl)}>
                Temperature Control
              </span>
            </label>

            {/* Signature on Delivery */}
            <label className="flex items-center gap-2.5 cursor-pointer text-[14px] text-label font-medium select-none">
              <div
                onClick={() => setSignatureOnDelivery(!signatureOnDelivery)}
                className={`w-4.5 h-4.5 rounded-[5px] flex items-center justify-center transition cursor-pointer ${
                  signatureOnDelivery
                    ? "bg-brand text-white"
                    : "bg-[#F0F0F0] border border-border-muted"
                }`}
              >
                {signatureOnDelivery && (
                  <svg
                    className="w-3 h-3 stroke-[3]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span
                onClick={() => setSignatureOnDelivery(!signatureOnDelivery)}
              >
                Signature on Delivery
              </span>
            </label>

            {/* Fragile Item Handling */}
            <label className="flex items-center gap-2.5 cursor-pointer text-[14px] text-label font-medium select-none">
              <div
                onClick={() => setFragileHandling(!fragileHandling)}
                className={`w-4.5 h-4.5 rounded-[5px] flex items-center justify-center transition cursor-pointer ${
                  fragileHandling
                    ? "bg-brand text-white"
                    : "bg-[#F0F0F0] border border-border-muted"
                }`}
              >
                {fragileHandling && (
                  <svg
                    className="w-3 h-3 stroke-[3]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span onClick={() => setFragileHandling(!fragileHandling)}>
                Fragile Item Handling
              </span>
            </label>
          </div>
        </div>

        {/* Tracking & Status Updates Toggle (Right 5 Cols) */}
        <div className="sm:col-span-5 flex flex-col gap-3">
          <label className="text-[14px] font-medium text-body">
            Tracking & Status Updates
          </label>
          <ToggleSwitch
            checked={notifyRecipient}
            onChange={setNotifyRecipient}
            label="Notify Recipient via Email/SMS"
            ariaLabel="Toggle Notify Recipient"
          />
        </div>
      </div>
    </div>
  );
}
