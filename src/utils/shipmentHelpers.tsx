import React from "react";
import { Plane, Truck, Ship, Train } from "lucide-react";

export const getCompanyLogoPath = (company: string, logoKey?: string): string => {
  const key = (logoKey || company).toLowerCase();
  if (key.includes("techgear")) return "/Assets/TechGear.svg";
  if (key.includes("stylehub") || key.includes("modawear"))
    return "/Assets/StyleHub.svg";
  if (key.includes("freshnest")) return "/Assets/FreshNest.svg";
  if (key.includes("autoparts") || key.includes("auto"))
    return "/Assets/AutoParts.svg";
  if (key.includes("ecolights")) return "/Assets/EcoLights.svg";
  if (key.includes("greenhaven")) return "/Assets/GreenHaven.svg";
  if (key.includes("quickparts")) return "/Assets/QuickParts.svg";
  if (key.includes("styledepot")) return "/Assets/StyleDeport.svg";
  if (key.includes("suncore")) return "/Assets/SunCore.svg";
  if (key.includes("vitafresh")) return "/Assets/VItaFresh.svg";
  return "/Assets/TechGear.svg";
};

export const renderModeIcon = (mode: string, className: string = "w-3.5 h-3.5 text-[#757575]") => {
  switch (mode) {
    case "Air Freight":
      return <Plane className={className} />;
    case "Road Freight":
      return <Truck className={className} />;
    case "Ocean Freight":
      return <Ship className={className} />;
    case "Rail Freight":
      return <Train className={className} />;
    default:
      return <Truck className={className} />;
  }
};

export const getStatusStyle = (status: string) => {
  switch (status) {
    case "Completed":
    case "Delivered":
      return {
        badge: "bg-[#E6F4EA] text-[#137333]",
        dot: "bg-[#34A853]",
      };
    case "In Transit":
    case "Delivery":
    case "Out for Delivery":
      return {
        badge: "bg-[#F0ECFE] text-[#6B52ED]",
        dot: "bg-[#856DF3]",
      };
    case "Pending":
    case "Processing":
    default:
      return {
        badge: "bg-[#F1F5F9] text-[#475569]",
        dot: "bg-[#64748B]",
      };
  }
};
