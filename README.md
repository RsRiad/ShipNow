# ShipNow — Logistics & Shipment Management Platform

A high-fidelity, responsive frontend web application for **ShipNow**, a modern logistics and shipment management platform. Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS** based on comprehensive Figma design specifications.

---

## 🚀 Live Demo & Repository

- **Live Deployment**: [Deployed to Vercel](https://shipnow-beta.vercel.app/)
- Email: Any valid email format
- Password: Any more that 8 char
- **GitHub Repository**: [https://github.com/RsRiad/ShipNow](https://github.com/RsRiad/ShipNow)

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Data Handling**: Static local mock data modularized under `src/data/`

---

## 📋 Screen Implementation Status

Below is the screen-by-screen breakdown detailing completed features and implementation scope as specified in the assignment criteria.

| # | Screen / Feature | Status | Key Highlights & Functional Details |
|---|---|---|---|
| 1 | **Login Page** | `Complete` | Split-screen layout, client-side validation (email format, password length), password visibility toggle, simulated session navigation to `/dashboard`. |
| 2 | **Dashboard** | `Complete` | Core application shell (sidebar + footer), summary metric cards with dynamic trend indicators, live tracking panel, customs alerts, recent shipments table, activity timeline. |
| 3 | **Shipments — Table View** | `Complete` | Header with breadcrumbs, 4 summary metric cards, status tabs (`All`, `In Transit`, `Delivered`, `Pending`, `Cancelled`), multi-column table sorting, row selection, pagination controls. |
| 4 | **Shipments — Grid View** | `Complete` | Responsive card grid layout, status filter chips, search input, filter and sort dropdowns, pagination. |
| 5 | **Shipments — View Switcher** | `Complete` | Single `/shipments` route with a native right-aligned toggle control in the breadcrumb row. Seamless state switching between Table and Grid without page reloads, persisting view state via URL query params (`?view=table` / `?view=grid`). |
| 6 | **Create New Shipment** | `Complete` | Multi-section form covering Sender & Recipient Info, Package Details, and Shipping Details. Client-side form validation with error states matching design specs, clearing automatically upon correction. Responsive layout rules for tablet and mobile views. |
| 7 | **Warehouse** | `Complete` | Storage analytics summary, capacity charts, storage table, package status overview, activity log, and an interactive 12-column floor map (`WarehouseMap`) with working floor tabs (`Floor 1`, `Floor 2`, `Floor 3`). |
| 8 | **Invoices & Billing** | `Not Attempted` | Omitted to focus on full fidelity, edge-case handling, and 3-breakpoint responsiveness across the remaining 6 core screens. |

---

## 📐 Responsive Breakpoint Behavior

The application implements three dedicated layout modes following the Figma design system:

- **Desktop (1440px)**: Full expanded sidebar navigation with labels, multi-column grid layouts, 2-row form section structures.
- **Tablet (768px)**: Collapsed narrow icon-only rail sidebar, responsive grid reflows (e.g. 4-column single-row Quantity/Value/Weight/Units controls in package details), compact card padding.
- **Mobile (375px)**: Sticky top app bar with hamburger drawer sidebar, 2-column Freight Type radio options, 5/5 button layout on warehouse map, stacked single-column form cards.

---

## 💻 Getting Started & Local Development

### Prerequisites

Ensure you have **Node.js 18.0.0** or higher installed on your system.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/RsRiad/ShipNow.git
   cd ShipNow
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   pnpm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   pnpm run build
   ```

---

## 🎨 Design Tokens & Customization

All design tokens are defined centrally in `src/app/globals.css`:

- **Primary Brand Color**: `#856DF3` (`text-brand`, `bg-brand`)
- **Page Background**: `#F0F0F0` (`bg-page`, `bg-surface`)
- **Card Background**: `#FEFEFE` (`bg-[#FEFEFE]`)
- **Input Background**: `#F0F0F0` (`bg-[#F0F0F0]`)
- **Status Filter Pill Wrapper**: `#E5E5EA`

---

## ⚙️ Assumptions & Implementation Notes

1. **Live Tracking Map**: As permitted in specification Section 4.2 & 12, the Live Tracking panel on the Dashboard utilizes a high-resolution static route image with custom interactive overlay cards, markers, and route telemetry controls rather than a heavy mapping SDK.
2. **Mock Data Separation**: All data records (shipments, alerts, warehouse zones, statistics) are isolated under `src/data/` with realistic logistics copy (no lorem ipsum or placeholder text).
3. **Invoices Screen Scope**: Per partial submission guidelines (Section 8), the Invoices & Billing screen was left unattempted in order to deliver 100% design accuracy and clean code quality across all other screens.

---

## 📄 License

This project was built for evaluation purposes as part of the ShipNow Frontend Implementation Assignment.
