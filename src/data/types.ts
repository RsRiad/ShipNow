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
