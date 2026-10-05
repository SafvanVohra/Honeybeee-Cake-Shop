import type { Metadata } from "next";
import { Outfit, Great_Vibes } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { AnimatedLoader } from "@/components/AnimatedLoader";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
});

import { ClientLayoutWrapper } from "@/components/ClientLayoutWrapper";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

export const metadata: Metadata = {
  title: "Honeybeee Cake Shop | Best Online Delivery Cake Shop In Vadodara",
  description: "Honeybeee Cake Shop - Best Online Delivery Cake Shop In Vadodara (4.5 ★, 639 Reviews). Shop No 1, Popular Mansion, Warasiya, Vadodara. Call 085112 20077 for fresh cakes, pastries & custom orders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${greatVibes.variable} antialiased`} suppressHydrationWarning>
      <body className="selection:bg-ref-accent/30">
        <AnimatedLoader />
        <CustomCursor />
        <SmoothScroll>
          <ClientLayoutWrapper>
            {children}
          </ClientLayoutWrapper>
          <WhatsAppWidget />
        </SmoothScroll>
      </body>
    </html>
  );
}
