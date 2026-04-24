import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
    title: "RafantoLab - Digital Product Studio",
    description:
        "RafantoLab is a high-end digital product studio crafting world-class SaaS platforms, web apps, and digital experiences.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap');
            </style>
            <body>
                {children}
                <Toaster
                    position="top-right"
                    richColors
                />
            </body>
        </html>
    );
}
