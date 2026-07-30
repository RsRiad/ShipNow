"use client";

import React from "react";
import { useParams } from "next/navigation";
import Header from "@/components/layout/Header";

const PAGE_LABELS: Record<string, string> = {
  analytics: "Analytics",
  calendar: "Calendar",
  tracking: "Tracking",
  fleets: "Fleets",
  drivers: "Drivers",
  invoices: "Invoices & Billing",
  message: "Message",
  notification: "Notification",
  settings: "Settings",
};

export default function PlaceholderPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const label = (slug && PAGE_LABELS[slug]) || slug || "Page";

  return (
    <div className="w-full flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center py-24 px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-brand-light flex items-center justify-center">
            <span className="text-brand text-[28px] font-bold">?</span>
          </div>
          <h1 className="text-[24px] font-bold text-heading mb-2">{label}</h1>
          <p className="text-body text-[14px] leading-relaxed">
            This page is coming soon. We are working hard to bring you the{" "}
            {label.toLowerCase()} experience.
          </p>
        </div>
      </div>
    </div>
  );
}
