import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M Ashar Enterprises - Logistics & Transportation",
  description: "Delivering Trust Across Pakistan. Professional nationwide logistics and transportation services.",
  keywords: "logistics, transportation, goods transport, Pakistan, cargo, fleet",
  openGraph: {
    title: "M Ashar Enterprises - Logistics & Transportation",
    description: "Delivering Trust Across Pakistan. Professional nationwide logistics and transportation services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
