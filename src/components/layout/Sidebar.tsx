"use client";

import React, { useState } from "react";
import SidebarHeader from "./SidebarHeader";
import UserProfileCard from "./UserProfileCard";
import NavItem from "./NavItem";
import GoProCard from "./GoProCard";

import { usePathname, useRouter } from "next/navigation";

interface SidebarProps {
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export const primaryNavItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    iconSrc: "/Assets/IconDashboard.svg",
  },
  { label: "Analytics", href: "#", iconSrc: "/Assets/IconAnalytics.svg" },
  { label: "Calendar", href: "#", iconSrc: "/Assets/IconCalendar.svg" },
  {
    label: "Shipments",
    href: "/shipments",
    iconSrc: "/Assets/IconShipments.svg",
  },
  { label: "Tracking", href: "#", iconSrc: "/Assets/IconTracking.svg" },
  { label: "Warehouse", href: "/warehouse", iconSrc: "/Assets/IconWarehouse.svg" },
  { label: "Fleets", href: "#", iconSrc: "/Assets/IconFleets.svg" },
  { label: "Drivers", href: "#", iconSrc: "/Assets/IconDrivers.svg" },
  {
    label: "Invoices & Billing",
    href: "#",
    iconSrc: "/Assets/IconInvoice.svg",
  },
];

export const secondaryNavItems = [
  {
    label: "Message",
    href: "#",
    iconSrc: "/Assets/IconMessage.svg",
    badgeCount: 19,
  },
  {
    label: "Notification",
    href: "#",
    iconSrc: "/Assets/IconNotification.svg",
    badgeCount: 5,
  },
  { label: "Settings", href: "#", iconSrc: "/Assets/IconSetting.svg" },
];

export default function Sidebar({
  isMobileOpen = false,
  onCloseMobile,
}: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleSelectNav = (href: string, isMobile: boolean) => {
    if (href && href !== "#") {
      router.push(href);
    }
    if (isMobile && onCloseMobile) {
      onCloseMobile();
    }
  };

  const renderNavContent = (isTablet = false, isMobile = false) => (
    <div className="flex flex-col h-full overflow-y-auto overflow-x-hidden no-scrollbar px-2">
      {/* Header / Logo */}
      <SidebarHeader
        isTabletRail={isTablet}
        isMobileDrawer={isMobile}
        onCloseMobile={onCloseMobile}
      />

      {/* Profile Card */}
      <UserProfileCard isTabletRail={isTablet} />

      {/* Main Nav Items */}
      <nav className="flex flex-col py-1 space-y-0.5">
        {primaryNavItems.map((item) => {
          const isActive =
            item.href !== "#" &&
            (pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href)));
          return (
            <NavItem
              key={item.label}
              href={item.href}
              label={item.label}
              iconSrc={item.iconSrc}
              isActive={isActive}
              isTabletRail={isTablet}
              onClick={() => handleSelectNav(item.href, isMobile)}
            />
          );
        })}
      </nav>

      {/* Divider */}
      <div className="my-3 mx-3 border-t border-border shrink-0" />

      {/* Secondary Nav Items */}
      <nav className="flex flex-col py-1 space-y-0.5">
        {secondaryNavItems.map((item) => {
          const isActive =
            item.href !== "#" &&
            (pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href)));
          return (
            <NavItem
              key={item.label}
              href={item.href}
              label={item.label}
              iconSrc={item.iconSrc}
              badgeCount={item.badgeCount}
              isActive={isActive}
              isTabletRail={isTablet}
              onClick={() => handleSelectNav(item.href, isMobile)}
            />
          );
        })}
      </nav>

      {/* Spacer & Bottom GoPro Card */}
      <div className="flex-1 min-h-[16px]" />
      <GoProCard isTabletRail={isTablet} />
    </div>
  );

  return (
    <>
      {/* 1. DESKTOP & TABLET SIDEBAR (Static Rail / Expanded) */}
      <aside className="hidden md:flex flex-col shrink-0 border-r border-border bg-card h-full z-30 transition-all duration-300 md:w-20 lg:w-[208px]">
        {/* Tablet Rail View (768px - 1023px) */}
        <div className="hidden md:block lg:hidden h-full w-full">
          {renderNavContent(true, false)}
        </div>

        {/* Desktop Expanded View (>= 1024px / 1440px) */}
        <div className="hidden lg:block h-full w-full">
          {renderNavContent(false, false)}
        </div>
      </aside>

      {/* 2. MOBILE DRAWER OVERLAY (375px) */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobile}
            aria-hidden="true"
          />

          {/* Slide-over Drawer Panel */}
          <aside className="relative flex flex-col w-[280px] max-w-[85vw] h-full bg-card shadow-2xl z-10 animate-in slide-in-from-left duration-200">
            {renderNavContent(false, true)}
          </aside>
        </div>
      )}
    </>
  );
}
