import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import Chatbot from "@/components/chatbot/Chatbot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: '#f97316',
};

export const metadata: Metadata = {
  title: {
    default: "Geelong Excavator Hire | Professional Equipment Rental",
    template: "%s | Geelong Excavator Hire"
  },
  description: "Professional excavator and equipment hire services in Geelong and surrounding areas. Wide range of machinery available for construction, landscaping, and earthmoving projects.",
  keywords: [
    "excavator hire",
    "equipment rental",
    "Geelong",
    "construction equipment",
    "earthmoving equipment",
    "machinery hire",
    "excavator rental",
    "construction machinery",
    "Geelong equipment hire"
  ],
  authors: [{ name: "Geelong Excavator Hire" }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://geelongexcavator.com.au"),
  openGraph: {
    title: "Geelong Excavator Hire | Professional Equipment Rental",
    description: "Professional excavator and equipment hire services in Geelong and surrounding areas.",
    url: "https://geelongexcavator.com.au",
    siteName: "Geelong Excavator Hire",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/images/logo1.webp",
        width: 800,
        height: 600,
        alt: "Geelong Excavator Hire Logo",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ServiceWorkerRegistration />
        <Chatbot />
      </body>
    </html>
  );
}
