import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingShare from "@/components/FloatingShare";
import FixedWhatsApp from "@/components/FixedWhatsApp";
import "./globals.css";

export const metadata: Metadata = {
  title: "TouchPad Consultancy | Enterprise IT Solutions",
  description: "Production-grade digital transformation advisory for global markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /* scroll-smooth natively manages internal fragment jumps without bouncing page states */
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-white text-slate-950">
        
        {/* Main Header navigation */}
        <Navbar />
        
        {/* Isolated content tracking frame */}
        <div className="flex-grow w-full relative">
          {children}
        </div>
        
        {/* Footer locked beneath the main contents cleanly */}
        <Footer />
        
        {/* Floating overlays */}
        <FloatingShare />
        <FixedWhatsApp /> 

        {/* HIDDEN MATRIX CORE: Processes the liquid gooey connection layers */}
        <svg style={{ display: "block", height: 0, width: 0 }} version="1.1" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="gooey-fluid-filter">
              <feGaussianBlur result="blur" stdDeviation="10" in="SourceGraphic" />
              <feColorMatrix result="goo" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" mode="matrix" in="blur" />
              <feBlend in2="goo" in="SourceGraphic" />
            </filter>
          </defs>
        </svg>
      </body>
    </html>
  );
}
