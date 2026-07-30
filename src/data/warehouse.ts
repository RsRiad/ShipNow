export type FloorTab = "Floor 1" | "Floor 2" | "Floor 3";

export interface ShelfSlot {
  id: string;
  code: string;
  status: "available" | "full";
}

export interface ZoneCardData {
  id: string;
  name: string;
  shelves: ShelfSlot[];
  availableCount: number;
  totalCount: number;
  gridColsClass: string;
  cardColSpanClass: string;
}

export const floorDataMap: Record<FloorTab, ZoneCardData[]> = {
  "Floor 1": [
    {
      id: "electronics",
      name: "Electronics",
      availableCount: 20,
      totalCount: 100,
      gridColsClass: "grid-cols-3",
      cardColSpanClass: "col-span-1 md:col-span-3",
      shelves: [
        { id: "A1", code: "A1", status: "available" },
        { id: "A2", code: "A2", status: "full" },
        { id: "A3", code: "A3", status: "available" },
      ],
    },
    {
      id: "home-kitchen",
      name: "Home & Kitchen",
      availableCount: 10,
      totalCount: 100,
      gridColsClass: "grid-cols-3",
      cardColSpanClass: "col-span-1 md:col-span-3",
      shelves: [
        { id: "C1", code: "C1", status: "available" },
        { id: "C2", code: "C2", status: "full" },
        { id: "C3", code: "C3", status: "full" },
      ],
    },
    {
      id: "automotive",
      name: "Automotive Parts",
      availableCount: 50,
      totalCount: 100,
      gridColsClass: "grid-cols-3",
      cardColSpanClass: "col-span-1 md:col-span-3",
      shelves: [
        { id: "D1", code: "D1", status: "available" },
        { id: "D2", code: "D2", status: "available" },
        { id: "D3", code: "D3", status: "available" },
      ],
    },
    {
      id: "sports",
      name: "Sports Equipment",
      availableCount: 45,
      totalCount: 100,
      gridColsClass: "grid-cols-3",
      cardColSpanClass: "col-span-1 md:col-span-3",
      shelves: [
        { id: "F1", code: "F1", status: "available" },
        { id: "F2", code: "F2", status: "available" },
        { id: "F3", code: "F3", status: "full" },
      ],
    },
    {
      id: "apparel",
      name: "Apparel",
      availableCount: 20,
      totalCount: 100,
      gridColsClass: "grid-cols-5 sm:grid-cols-10",
      cardColSpanClass: "col-span-2 md:col-span-8",
      shelves: [
        { id: "B1", code: "B1", status: "available" },
        { id: "B2", code: "B2", status: "full" },
        { id: "B3", code: "B3", status: "full" },
        { id: "B4", code: "B4", status: "available" },
        { id: "B5", code: "B5", status: "available" },
        { id: "B6", code: "B6", status: "full" },
        { id: "B7", code: "B7", status: "full" },
        { id: "B8", code: "B8", status: "available" },
        { id: "B9", code: "B9", status: "full" },
        { id: "B10", code: "B10", status: "available" },
      ],
    },
    {
      id: "beauty-health",
      name: "Beauty & Health",
      availableCount: 30,
      totalCount: 100,
      gridColsClass: "grid-cols-4",
      cardColSpanClass: "col-span-2 md:col-span-4",
      shelves: [
        { id: "E1", code: "E1", status: "available" },
        { id: "E2", code: "E2", status: "full" },
        { id: "E3", code: "E3", status: "available" },
        { id: "E4", code: "E4", status: "available" },
      ],
    },
  ],
  "Floor 2": [
    {
      id: "electronics",
      name: "Electronics",
      availableCount: 40,
      totalCount: 100,
      gridColsClass: "grid-cols-3",
      cardColSpanClass: "col-span-1 md:col-span-3",
      shelves: [
        { id: "A1", code: "A1", status: "available" },
        { id: "A2", code: "A2", status: "available" },
        { id: "A3", code: "A3", status: "full" },
      ],
    },
    {
      id: "home-kitchen",
      name: "Home & Kitchen",
      availableCount: 30,
      totalCount: 100,
      gridColsClass: "grid-cols-3",
      cardColSpanClass: "col-span-1 md:col-span-3",
      shelves: [
        { id: "C1", code: "C1", status: "full" },
        { id: "C2", code: "C2", status: "available" },
        { id: "C3", code: "C3", status: "available" },
      ],
    },
    {
      id: "automotive",
      name: "Automotive Parts",
      availableCount: 60,
      totalCount: 100,
      gridColsClass: "grid-cols-3",
      cardColSpanClass: "col-span-1 md:col-span-3",
      shelves: [
        { id: "D1", code: "D1", status: "available" },
        { id: "D2", code: "D2", status: "full" },
        { id: "D3", code: "D3", status: "available" },
      ],
    },
    {
      id: "sports",
      name: "Sports Equipment",
      availableCount: 25,
      totalCount: 100,
      gridColsClass: "grid-cols-3",
      cardColSpanClass: "col-span-1 md:col-span-3",
      shelves: [
        { id: "F1", code: "F1", status: "full" },
        { id: "F2", code: "F2", status: "available" },
        { id: "F3", code: "F3", status: "full" },
      ],
    },
    {
      id: "apparel",
      name: "Apparel",
      availableCount: 50,
      totalCount: 100,
      gridColsClass: "grid-cols-5 sm:grid-cols-10",
      cardColSpanClass: "col-span-2 md:col-span-8",
      shelves: [
        { id: "B1", code: "B1", status: "available" },
        { id: "B2", code: "B2", status: "available" },
        { id: "B3", code: "B3", status: "full" },
        { id: "B4", code: "B4", status: "available" },
        { id: "B5", code: "B5", status: "full" },
        { id: "B6", code: "B6", status: "available" },
        { id: "B7", code: "B7", status: "available" },
        { id: "B8", code: "B8", status: "full" },
        { id: "B9", code: "B9", status: "available" },
        { id: "B10", code: "B10", status: "full" },
      ],
    },
    {
      id: "beauty-health",
      name: "Beauty & Health",
      availableCount: 45,
      totalCount: 100,
      gridColsClass: "grid-cols-4",
      cardColSpanClass: "col-span-2 md:col-span-4",
      shelves: [
        { id: "E1", code: "E1", status: "available" },
        { id: "E2", code: "E2", status: "available" },
        { id: "E3", code: "E3", status: "full" },
        { id: "E4", code: "E4", status: "available" },
      ],
    },
  ],
  "Floor 3": [
    {
      id: "electronics",
      name: "Electronics",
      availableCount: 70,
      totalCount: 100,
      gridColsClass: "grid-cols-3",
      cardColSpanClass: "col-span-1 md:col-span-3",
      shelves: [
        { id: "A1", code: "A1", status: "available" },
        { id: "A2", code: "A2", status: "available" },
        { id: "A3", code: "A3", status: "available" },
      ],
    },
    {
      id: "home-kitchen",
      name: "Home & Kitchen",
      availableCount: 80,
      totalCount: 100,
      gridColsClass: "grid-cols-3",
      cardColSpanClass: "col-span-1 md:col-span-3",
      shelves: [
        { id: "C1", code: "C1", status: "available" },
        { id: "C2", code: "C2", status: "available" },
        { id: "C3", code: "C3", status: "full" },
      ],
    },
    {
      id: "automotive",
      name: "Automotive Parts",
      availableCount: 15,
      totalCount: 100,
      gridColsClass: "grid-cols-3",
      cardColSpanClass: "col-span-1 md:col-span-3",
      shelves: [
        { id: "D1", code: "D1", status: "full" },
        { id: "D2", code: "D2", status: "full" },
        { id: "D3", code: "D3", status: "available" },
      ],
    },
    {
      id: "sports",
      name: "Sports Equipment",
      availableCount: 90,
      totalCount: 100,
      gridColsClass: "grid-cols-3",
      cardColSpanClass: "col-span-1 md:col-span-3",
      shelves: [
        { id: "F1", code: "F1", status: "available" },
        { id: "F2", code: "F2", status: "available" },
        { id: "F3", code: "F3", status: "available" },
      ],
    },
    {
      id: "apparel",
      name: "Apparel",
      availableCount: 65,
      totalCount: 100,
      gridColsClass: "grid-cols-5 sm:grid-cols-10",
      cardColSpanClass: "col-span-2 md:col-span-8",
      shelves: [
        { id: "B1", code: "B1", status: "available" },
        { id: "B2", code: "B2", status: "available" },
        { id: "B3", code: "B3", status: "available" },
        { id: "B4", code: "B4", status: "full" },
        { id: "B5", code: "B5", status: "available" },
        { id: "B6", code: "B6", status: "available" },
        { id: "B7", code: "B7", status: "available" },
        { id: "B8", code: "B8", status: "full" },
        { id: "B9", code: "B9", status: "available" },
        { id: "B10", code: "B10", status: "available" },
      ],
    },
    {
      id: "beauty-health",
      name: "Beauty & Health",
      availableCount: 60,
      totalCount: 100,
      gridColsClass: "grid-cols-4",
      cardColSpanClass: "col-span-2 md:col-span-4",
      shelves: [
        { id: "E1", code: "E1", status: "available" },
        { id: "E2", code: "E2", status: "full" },
        { id: "E3", code: "E3", status: "available" },
        { id: "E4", code: "E4", status: "available" },
      ],
    },
  ],
};
