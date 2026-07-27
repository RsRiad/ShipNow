"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-4 px-6 border-t border-[#E5E5E7] bg-white text-gray-500 text-xs flex flex-col sm:flex-row items-center justify-between gap-2 shrink-0">
      <div className="flex items-center gap-1 font-normal">
        <span>© {new Date().getFullYear()}</span>
        <span className="font-semibold text-gray-800">ShipNow</span>
        <span>— Logistics & Shipment Management Platform.</span>
      </div>

      <div className="flex items-center gap-4 text-gray-500">
        <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gray-900 transition">
          Privacy Policy
        </a>
        <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gray-900 transition">
          Terms of Service
        </a>
        <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gray-900 transition">
          Support
        </a>
      </div>
    </footer>
  );
}
