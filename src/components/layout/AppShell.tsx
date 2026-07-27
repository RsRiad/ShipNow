"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MobileTopBar from "./MobileTopBar";
import Footer from "./Footer";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="h-screen w-full flex bg-[#F5F5F7] text-gray-900 font-sans overflow-hidden">
      {/* Sidebar for Desktop / Tablet / Mobile Drawer */}
      <Sidebar
        isMobileOpen={isMobileOpen}
        onCloseMobile={() => setIsMobileOpen(false)}
      />

      {/* Main Container Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        {/* Mobile Sticky Top App Bar */}
        <MobileTopBar onOpenMobile={() => setIsMobileOpen(true)} />

        {/* Dynamic Page Content */}
        <main className="flex-1 w-full overflow-y-auto flex flex-col">
          <div className="flex-1">
            {children}
          </div>
          {/* Shared Footer */}
          <Footer />
        </main>
      </div>
    </div>
  );
}
