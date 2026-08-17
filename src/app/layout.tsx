import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingShare from "@/components/FloatingShare";
import FixedWhatsApp from "@/components/FixedWhatsApp";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.touchpadconsultancy.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "TouchPad Consultancy | Research, MEAL & Advisory Services",
    template: "%s | TouchPad Consultancy",
  },
  description:
    "Evidence-based research, donor-grade proposals, MEAL systems, and institutional capacity strengthening in Bangladesh.",
  keywords: [
    "Development Consultancy Bangladesh",
    "MEAL Systems Dhaka",
    "Grant Proposal Writing",
    "Baseline Studies Bangladesh",
    "PSEAH Policy Development",
    "Data Quality Assurance",
    "Technical Advisory Services",
  ],
  openGraph: {
    title: "TouchPad Consultancy | Research, MEAL & Advisory Services",
    description:
      "Evidence-based research, donor-grade proposals, MEAL systems, and institutional capacity strengthening in Bangladesh.",
    url: "https://www.touchpadconsultancy.com",
    siteName: "TouchPad Consultancy",
    images: [
      {
        url: "/assets/Hero2.png",
        width: 1200,
        height: 630,
        alt: "TouchPad Consultancy Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TouchPad Consultancy | Research, MEAL & Advisory Services",
    description:
      "Evidence-based research, donor-grade proposals, and MEAL systems in Bangladesh.",
    images: ["/assets/Hero2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // SCHEMA.ORG STRUCTURED DATA
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "TouchPad Consultancy",
    url: "https://www.touchpadconsultancy.com",
    logo: "https://www.touchpadconsultancy.com/assets/TPC%20Logo.png",
    image: "https://www.touchpadconsultancy.com/assets/Hero2.png",
    description:
      "Specialized technical advisory firm delivering evidence-based research, donor proposals, MEAL systems, and capacity development in Bangladesh.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    areaServed: {
      "@type": "Country",
      name: "Bangladesh",
    },
    serviceType: [
      "Grant Proposal Writing",
      "Research and Baseline Evaluations",
      "MEAL Systems & Frameworks",
      "Capacity Development",
      "Data Collection & Analytics",
      "PSEAH & Safeguarding",
      "Strategic Planning",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-white text-slate-950">
        {/* Main Header navigation */}
        <Navbar />
        
        {/* Isolated content tracking frame */}
        <main className="flex-grow w-full relative">
          {children}
        </main>
        
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
