import { shipments } from "./shipments";

export const shipmentStatistics = {
  totalShipments: shipments.length,
  delivered: shipments.filter((s) => s.status === "Delivered").length,
  inTransit: shipments.filter((s) => s.status === "In Transit").length,
  processing: shipments.filter((s) => s.status === "Processing").length,
  outForDelivery: shipments.filter((s) => s.status === "Out for Delivery").length,
};
