import type { AlertSummaryStat, ShipmentAlert } from "./types";

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
