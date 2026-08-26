import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShipDesign - One Trigger. Seven Design Minds.",
  description:
    "ShipDesign is an evidence-led design engineering workflow for AI coding agents.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
