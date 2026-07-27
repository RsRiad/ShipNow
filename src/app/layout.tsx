import type { Metadata } from "next";
import { nunitoSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShipNow - Logistics & Shipment Management",
  description: "ShipNow is a logistics and shipment management platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${nunitoSans.variable} h-full antialiased`}
    >
      <body className="h-full overflow-hidden flex flex-col font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
