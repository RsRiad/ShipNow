"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AppShell from "@/components/layout/AppShell";
import CreateShipmentHeader from "@/components/shipments/create/CreateShipmentHeader";
import SenderRecipientInfo from "@/components/shipments/create/SenderRecipientInfo";
import PackageDetailsForm from "@/components/shipments/create/PackageDetailsForm";
import ShippingDetailsForm from "@/components/shipments/create/ShippingDetailsForm";

export default function CreateShipmentPage() {
  const router = useRouter();

  // Form State Seeded from Figma Design
  const [senderCompany, setSenderCompany] = useState("GreenHaven");
  const [senderEmail, setSenderEmail] = useState("logistics@greenhaven.com");
  const [senderPhone, setSenderPhone] = useState("+14085557210");
  const [pickupAddress, setPickupAddress] = useState(
    "1120 Birch Street, Portland, OR 97205, USA"
  );

  const [recipientCompany, setRecipientCompany] = useState("FreshNest");
  const [recipientEmail, setRecipientEmail] = useState(
    "warehouse@freshnest.com"
  );
  const [recipientPhone, setRecipientPhone] = useState("+17865554432");
  const [deliveryAddress, setDeliveryAddress] = useState(""); // Empty for error state

  const [itemDescription, setItemDescription] = useState(
    "Premium Garden Tool Set"
  );
  const [quantity, setQuantity] = useState<number | string>(40);
  const [value, setValue] = useState("$3,200");
  const [weight, setWeight] = useState("125");
  const [units, setUnits] = useState("Kg");

  const [length, setLength] = useState("80");
  const [width, setWidth] = useState("60");
  const [height, setHeight] = useState("");

  const [freightType, setFreightType] = useState("Road Freight");
  const [carrier, setCarrier] = useState("FedEx");
  const [shippingMethod, setShippingMethod] = useState(""); // Empty for error state
  const [shipmentId] = useState("#SH9583742");
  const [shipmentDate, setShipmentDate] = useState("March 21, 2035");
  const [notes, setNotes] = useState("");

  const [insuranceCoverage, setInsuranceCoverage] = useState(true);
  const [signatureOnDelivery, setSignatureOnDelivery] = useState(true);
  const [temperatureControl, setTemperatureControl] = useState(true);
  const [fragileHandling, setFragileHandling] = useState(false);
  const [notifyRecipient, setNotifyRecipient] = useState(true);

  // Validation Error State (Initial state presents Figma error state)
  const [addressError, setAddressError] = useState("Address is required.");
  const [shippingMethodError, setShippingMethodError] = useState(
    "Shipping method is required."
  );

  const handleDeliveryAddressChange = (v: string) => {
    setDeliveryAddress(v);
    if (v.trim()) {
      setAddressError("");
    }
  };

  const handleShippingMethodChange = (v: string) => {
    setShippingMethod(v);
    if (v.trim()) {
      setShippingMethodError("");
    }
  };

  const handleDeleteForm = () => {
    setSenderCompany("");
    setSenderEmail("");
    setSenderPhone("");
    setPickupAddress("");

    setRecipientCompany("");
    setRecipientEmail("");
    setRecipientPhone("");
    setDeliveryAddress("");

    setItemDescription("");
    setQuantity("");
    setValue("");
    setWeight("");
    setLength("");
    setWidth("");
    setHeight("");

    setShippingMethod("");
    setNotes("");

    setAddressError("");
    setShippingMethodError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let hasError = false;

    if (!deliveryAddress.trim()) {
      setAddressError("Address is required.");
      hasError = true;
    } else {
      setAddressError("");
    }

    if (!shippingMethod.trim()) {
      setShippingMethodError("Shipping method is required.");
      hasError = true;
    } else {
      setShippingMethodError("");
    }

    if (hasError) return;

    // Successful submission -> Navigate back to shipments
    router.push("/shipments");
  };

  return (
    <AppShell>
      <div className="w-full flex flex-col min-h-screen bg-page">
        {/* Top Header */}
        <CreateShipmentHeader />

        {/* Main Form Content Container */}
        <div className="max-w-[1440px] w-full mx-auto px-4 lg:px-8 py-3 sm:py-4 flex flex-col gap-3.5">
          <h2 className="text-[18px] sm:text-[20px] font-bold text-slate">Shipment Form</h2>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3.5">
            {/* 1. Sender & Recipient Info (Split Card) */}
            <SenderRecipientInfo
              senderCompany={senderCompany}
              setSenderCompany={setSenderCompany}
              senderEmail={senderEmail}
              setSenderEmail={setSenderEmail}
              senderPhone={senderPhone}
              setSenderPhone={setSenderPhone}
              pickupAddress={pickupAddress}
              setPickupAddress={setPickupAddress}
              recipientCompany={recipientCompany}
              setRecipientCompany={setRecipientCompany}
              recipientEmail={recipientEmail}
              setRecipientEmail={setRecipientEmail}
              recipientPhone={recipientPhone}
              setRecipientPhone={setRecipientPhone}
              deliveryAddress={deliveryAddress}
              setDeliveryAddress={handleDeliveryAddressChange}
              addressError={addressError}
            />

            {/* 2. Package Details & Shipping Details (Unified Grid Layout) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-start pt-2">
              {/* Left Column: Package Details (4/12 cols) */}
              <div className="lg:col-span-4 pr-0 lg:pr-6">
                <PackageDetailsForm
                  itemDescription={itemDescription}
                  setItemDescription={setItemDescription}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  value={value}
                  setValue={setValue}
                  weight={weight}
                  setWeight={setWeight}
                  units={units}
                  setUnits={setUnits}
                  length={length}
                  setLength={setLength}
                  width={width}
                  setWidth={setWidth}
                  height={height}
                  setHeight={setHeight}
                />
              </div>

              {/* Right Column: Shipping Details (8/12 cols) */}
              <div className="lg:col-span-8">
                <ShippingDetailsForm
                  freightType={freightType}
                  setFreightType={setFreightType}
                  carrier={carrier}
                  setCarrier={setCarrier}
                  shippingMethod={shippingMethod}
                  setShippingMethod={handleShippingMethodChange}
                  shipmentId={shipmentId}
                  shipmentDate={shipmentDate}
                  setShipmentDate={setShipmentDate}
                  notes={notes}
                  setNotes={setNotes}
                  insuranceCoverage={insuranceCoverage}
                  setInsuranceCoverage={setInsuranceCoverage}
                  signatureOnDelivery={signatureOnDelivery}
                  setSignatureOnDelivery={setSignatureOnDelivery}
                  temperatureControl={temperatureControl}
                  setTemperatureControl={setTemperatureControl}
                  fragileHandling={fragileHandling}
                  setFragileHandling={setFragileHandling}
                  notifyRecipient={notifyRecipient}
                  setNotifyRecipient={setNotifyRecipient}
                  shippingMethodError={shippingMethodError}
                />
              </div>
            </div>

            {/* 3. Bottom Action Buttons Bar */}
            <div className="w-full flex items-center justify-end gap-4 pt-4 border-t border-border/80 mt-2">
              <button
                type="button"
                onClick={handleDeleteForm}
                className="bg-delete-btn hover:bg-hover text-heading px-6 py-2.5 rounded-[12px] font-semibold text-[14px] transition cursor-pointer"
              >
                Delete Form
              </button>
              <button
                type="submit"
                className="bg-slate hover:bg-slate-dark text-white px-6 py-2.5 rounded-[12px] font-semibold text-[14px] transition shadow-2xs cursor-pointer"
              >
                Submit Shipment
              </button>
            </div>
          </form>
        </div>
      </div>
    </AppShell>
  );
}
