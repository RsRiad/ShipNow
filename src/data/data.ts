export type ShipmentStatus =
  | "Delivered"
  | "In Transit"
  | "Processing"
  | "Out for Delivery";

export type FreightMode =
  | "Air Freight"
  | "Road Freight"
  | "Ocean Freight"
  | "Rail Freight";

export type Priority = "Low" | "Medium" | "High";

export interface Shipment {
  id: string;

  status: ShipmentStatus;
  mode: FreightMode;

  company: string;
  logo: string;
  industry: string;

  carrier: string;

  productCategory: string;
  weight: string;

  origin: {
    city: string;
    datetime: string;
  };

  destination: {
    city: string;
    datetime: string;
  };

  progress: number;

  trackingNumber: string;
  priority: Priority;
  estimatedDays: number;
  shipmentValue: number;

  createdAt: string;
  updatedAt: string;
}

const baseShipments: Shipment[] = [
  {
    id: "#SH9283746",
    status: "In Transit",
    mode: "Air Freight",
    company: "TechGear Inc.",
    logo: "techgear",
    industry: "Electronics",
    carrier: "FedEx",
    productCategory: "Electronics",
    weight: "1,200 kg",
    origin: {
      city: "Los Angeles, CA",
      datetime: "Mar 20, 2035 · 10:00 AM",
    },
    destination: {
      city: "Chicago, IL",
      datetime: "Mar 23, 2035 · 03:00 PM",
    },
    progress: 60,
    trackingNumber: "FDX928374612",
    priority: "High",
    estimatedDays: 3,
    shipmentValue: 24500,
    createdAt: "2035-03-18",
    updatedAt: "2035-03-20",
  },

  {
    id: "#SH9182635",
    status: "Out for Delivery",
    mode: "Road Freight",
    company: "StyleHub Co.",
    logo: "stylehub",
    industry: "Apparel",
    carrier: "DHL",
    productCategory: "Apparel",
    weight: "850 kg",
    origin: {
      city: "New York, NY",
      datetime: "Mar 19, 2035 · 11:30 AM",
    },
    destination: {
      city: "Atlanta, GA",
      datetime: "Mar 22, 2035 · 01:00 PM",
    },
    progress: 75,
    trackingNumber: "DHL918263523",
    priority: "Medium",
    estimatedDays: 3,
    shipmentValue: 16200,
    createdAt: "2035-03-18",
    updatedAt: "2035-03-21",
  },

  {
    id: "#SH9037821",
    status: "Delivered",
    mode: "Ocean Freight",
    company: "FreshNest",
    logo: "freshnest",
    industry: "Home & Kitchen",
    carrier: "UPS",
    productCategory: "Kitchen Appliances",
    weight: "1,450 kg",
    origin: {
      city: "Dallas, TX",
      datetime: "Mar 18, 2035 · 09:00 AM",
    },
    destination: {
      city: "Miami, FL",
      datetime: "Mar 21, 2035 · 06:00 PM",
    },
    progress: 100,
    trackingNumber: "UPS903782198",
    priority: "High",
    estimatedDays: 3,
    shipmentValue: 39400,
    createdAt: "2035-03-17",
    updatedAt: "2035-03-21",
  },

  {
    id: "#SH9374652",
    status: "Processing",
    mode: "Rail Freight",
    company: "FitPlus Gear",
    logo: "fitplus",
    industry: "Sports & Outdoors",
    carrier: "USPS",
    productCategory: "Fitness Equipment",
    weight: "960 kg",
    origin: {
      city: "Seattle, WA",
      datetime: "Mar 21, 2035 · 08:45 AM",
    },
    destination: {
      city: "Denver, CO",
      datetime: "Mar 25, 2035 · 04:30 PM",
    },
    progress: 40,
    trackingNumber: "USP937465276",
    priority: "Medium",
    estimatedDays: 4,
    shipmentValue: 18700,
    createdAt: "2035-03-20",
    updatedAt: "2035-03-21",
  },

  {
    id: "#SH8821349",
    status: "Out for Delivery",
    mode: "Road Freight",
    company: "EcoLights",
    logo: "ecolights",
    industry: "Electronics",
    carrier: "FedEx",
    productCategory: "Lighting",
    weight: "1,100 kg",
    origin: {
      city: "Austin, TX",
      datetime: "Mar 19, 2035 · 12:00 PM",
    },
    destination: {
      city: "Phoenix, AZ",
      datetime: "Mar 21, 2035 · 05:00 PM",
    },
    progress: 90,
    trackingNumber: "FDX882134988",
    priority: "Medium",
    estimatedDays: 2,
    shipmentValue: 17600,
    createdAt: "2035-03-18",
    updatedAt: "2035-03-21",
  },

  {
    id: "#SH9457830",
    status: "Delivered",
    mode: "Air Freight",
    company: "AutoParts Pro",
    logo: "autoparts",
    industry: "Automotive",
    carrier: "Aramex",
    productCategory: "Engine Components",
    weight: "1,680 kg",
    origin: {
      city: "Detroit, MI",
      datetime: "Mar 20, 2035 · 07:15 AM",
    },
    destination: {
      city: "San Diego, CA",
      datetime: "Mar 26, 2035 · 02:00 PM",
    },
    progress: 100,
    trackingNumber: "ARM945783001",
    priority: "High",
    estimatedDays: 6,
    shipmentValue: 45800,
    createdAt: "2035-03-19",
    updatedAt: "2035-03-26",
  },

  {
    id: "#SH8967432",
    status: "In Transit",
    mode: "Road Freight",
    company: "GreenHaven",
    logo: "greenhaven",
    industry: "Home & Garden",
    carrier: "USPS",
    productCategory: "Home Tools",
    weight: "1,250 kg",
    origin: {
      city: "Portland, OR",
      datetime: "Mar 18, 2035 · 02:45 PM",
    },
    destination: {
      city: "Salt Lake City, UT",
      datetime: "Mar 22, 2035 · 11:00 AM",
    },
    progress: 65,
    trackingNumber: "USP896743245",
    priority: "Low",
    estimatedDays: 4,
    shipmentValue: 13300,
    createdAt: "2035-03-17",
    updatedAt: "2035-03-20",
  },

  {
    id: "#SH8893247",
    status: "Out for Delivery",
    mode: "Road Freight",
    company: "ModaWear",
    logo: "modawear",
    industry: "Apparel",
    carrier: "DHL",
    productCategory: "Fashion",
    weight: "920 kg",
    origin: {
      city: "Boston, MA",
      datetime: "Mar 20, 2035 · 01:00 PM",
    },
    destination: {
      city: "Charlotte, NC",
      datetime: "Mar 23, 2035 · 08:00 AM",
    },
    progress: 80,
    trackingNumber: "DHL889324700",
    priority: "Medium",
    estimatedDays: 3,
    shipmentValue: 15100,
    createdAt: "2035-03-19",
    updatedAt: "2035-03-22",
  },

  {
    id: "#SH9018723",
    status: "Processing",
    mode: "Rail Freight",
    company: "SunCore Panels",
    logo: "suncore",
    industry: "Electronics",
    carrier: "UPS",
    productCategory: "Solar Equipment",
    weight: "1,375 kg",
    origin: {
      city: "San Diego, CA",
      datetime: "Mar 21, 2035 · 09:30 AM",
    },
    destination: {
      city: "Reno, NV",
      datetime: "Mar 24, 2035 · 01:30 PM",
    },
    progress: 30,
    trackingNumber: "UPS901872344",
    priority: "High",
    estimatedDays: 3,
    shipmentValue: 52300,
    createdAt: "2035-03-20",
    updatedAt: "2035-03-21",
  },

  {
    id: "#SH9113471",
    status: "In Transit",
    mode: "Road Freight",
    company: "QuickParts",
    logo: "quickparts",
    industry: "Automotive",
    carrier: "Aramex",
    productCategory: "Auto Components",
    weight: "1,540 kg",
    origin: {
      city: "Tampa, FL",
      datetime: "Mar 20, 2035 · 04:00 PM",
    },
    destination: {
      city: "Houston, TX",
      datetime: "Mar 23, 2035 · 12:00 PM",
    },
    progress: 90,
    trackingNumber: "ARM911347133",
    priority: "High",
    estimatedDays: 3,
    shipmentValue: 27400,
    createdAt: "2035-03-19",
    updatedAt: "2035-03-22",
  },

  {
    id: "#SH8881190",
    status: "Out for Delivery",
    mode: "Road Freight",
    company: "VitaFresh",
    logo: "vitafresh",
    industry: "Food & Beverage",
    carrier: "Local Courier",
    productCategory: "Perishables",
    weight: "980 kg",
    origin: {
      city: "Nashville, TN",
      datetime: "Mar 21, 2035 · 06:00 AM",
    },
    destination: {
      city: "Jacksonville, FL",
      datetime: "Mar 22, 2035 · 10:00 AM",
    },
    progress: 85,
    trackingNumber: "LOC888119099",
    priority: "High",
    estimatedDays: 1,
    shipmentValue: 9700,
    createdAt: "2035-03-20",
    updatedAt: "2035-03-22",
  },

  {
    id: "#SH8776103",
    status: "In Transit",
    mode: "Air Freight",
    company: "StyleDepot",
    logo: "styledepot",
    industry: "Fashion",
    carrier: "FedEx",
    productCategory: "Fashion Items",
    weight: "1,020 kg",
    origin: {
      city: "Minneapolis, MN",
      datetime: "Mar 19, 2035 · 10:15 AM",
    },
    destination: {
      city: "Kansas City, MO",
      datetime: "Mar 22, 2035 · 03:30 PM",
    },
    progress: 60,
    trackingNumber: "FDX877610311",
    priority: "Medium",
    estimatedDays: 3,
    shipmentValue: 19400,
    createdAt: "2035-03-18",
    updatedAt: "2035-03-20",
  },
];

export const shipments: Shipment[] = Array.from({ length: 120 }, (_, index) => {
  const shipment = baseShipments[index % baseShipments.length];

  if (index < baseShipments.length) {
    return shipment;
  }

  return {
    ...shipment,
    id: `#SH${9100000 + index * 7319}`,
    trackingNumber: `${shipment.carrier
      .replace(/\s/g, "")
      .substring(0, 3)
      .toUpperCase()}${9100000 + index * 7319}`,
    progress: Math.min(
      100,
      Math.max(15, shipment.progress + ((index % 7) - 3) * 5)
    ),
  };
});

export const shipmentStatistics = {
  totalShipments: shipments.length,
  delivered: shipments.filter((s) => s.status === "Delivered").length,
  inTransit: shipments.filter((s) => s.status === "In Transit").length,
  processing: shipments.filter((s) => s.status === "Processing").length,
  outForDelivery: shipments.filter((s) => s.status === "Out for Delivery").length,
};

export interface AlertSummaryStat {
  count: number;
  label: string;
}

export interface ShipmentAlert {
  id: string;
  issue: string;
  freight: FreightMode;
  date: string;
  iconType: "customs" | "address" | "weather";
}

export const alertSummaryStats: AlertSummaryStat[] = [
  { count: 5, label: "Customs Clearance Delay" },
  { count: 4, label: "Incorrect Address Provided" },
  { count: 3, label: "Weather-Related Hold" },
];

export const shipmentAlerts: ShipmentAlert[] = [
  {
    id: "#SH8743921",
    issue: "Customs Clearance Delay",
    freight: "Ocean Freight",
    date: "Mar 20",
    iconType: "customs",
  },
  {
    id: "#SH8725810",
    issue: "Incorrect Address Provided",
    freight: "Road Freight",
    date: "Mar 20",
    iconType: "address",
  },
  {
    id: "#SH8790043",
    issue: "Weather-Related Hold",
    freight: "Air Freight",
    date: "Mar 19",
    iconType: "weather",
  },
  {
    id: "#SH8716654",
    issue: "Incorrect Address Provided",
    freight: "Rail Freight",
    date: "Mar 18",
    iconType: "address",
  },
];