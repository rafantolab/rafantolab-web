import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rafantolab — Digital Product Studio",
  description: "High-end digital product studio crafting world-class SaaS platforms, web apps, and digital experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
