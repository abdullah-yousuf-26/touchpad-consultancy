"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FileText, 
  Search, 
  BarChart3, 
  GraduationCap, 
  Database, 
  ShieldAlert, 
  Building2,
  CheckCircle2,
  ArrowRight,
  Layers,
  Send
} from "lucide-react";

import servicesData from "@/content/services.json";

// Define strict type interface for services JSON items
interface ServiceItem {
  slug: string;
  title: string;
  category?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  deliverables?: string[];
}

// =========================================================================
// 1. OPTIMIZED IMAGE WRAPPER
// =========================================================================
function ServiceImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full bg-slate-900 border border-teal-500/20 flex flex-col items-center justify-center p-4 text-center">
        <svg className="w-10 h-10 text-teal-400/60 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
        <span className="text-[10px] uppercase font-bold text-teal-400/80 tracking-wider">Service Asset Placeholder</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover"
      onError={() => setHasError(true)}
    />
  );
}

// Icon dictionary matching service slugs
const iconMap: Record<string, React.ReactNode> = {
  "proposal-writing": <FileText className="w-7 h-7 text-teal-600 drop-shadow-[0_4px_10px_rgba(20,184,166,0.5)]" />,
  "research-evaluations": <Search className="w-7 h-7 text-teal-600 drop-shadow-[0_4px_10px_rgba(20,184,166,0.5)]" />,
  "meal-systems": <BarChart3 className="w-7 h-7 text-teal-600 drop-shadow-[0_4px_10px_rgba(20,184,166,0.5)]" />,
  "capacity-development": <GraduationCap className="w-7 h-7 text-teal-600 drop-shadow-[0_4px_10px_rgba(20,184,166,0.5)]" />,
  "data-services": <Database className="w-7 h-7 text-teal-600 drop-shadow-[0_4px_10px_rgba(20,184,166,0.5)]" />,
  "pseah-safeguarding": <ShieldAlert className="w-7 h-7 text-teal-600 drop-shadow-[0_4px_10px_rgba(20,184,166,0.5)]" />,
  "strategy-policy": <Building2 className="w-7 h-7 text-teal-600 drop-shadow-[0_4px_10px_rgba(20,184,166,0.5)]" />
};

// Default fallback image dictionary
const defaultImageMap: Record<string, string> = {
  "proposal-writing": "/assets/service-proposal.png",
  "research-evaluations": "/assets/service-research.png",
  "meal-systems": "/assets/service-meal.png",
  "capacity-development": "/assets/service-capacity.png",
  "data-services": "/assets/service-data.png",
  "pseah-safeguarding": "/assets/service-pseah.png",
  "strategy-policy": "/assets/service-strategy.png"
};

// Typed services data source
const typedServicesData: ServiceItem[] = servicesData as ServiceItem[];

// =========================================================================
// 2. MAIN SERVICES PAGE COMPONENT
// =========================================================================
export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filterTabs = [
    { id: "all", label: "All Portfolio Services" },
    { id: "proposal-writing", label: "Proposal Writing" },
    { id: "research-evaluations", label: "Research & Reviews" },
    { id: "meal-systems", label: "MEAL Systems" },
    { id: "capacity-development", label: "Capacity Building" },
    { id: "data-services", label: "Data Services" },
    { id: "pseah-safeguarding", label: "PSEAH & Safeguarding" },
    { id: "strategy-policy", label: "Strategy & Policy" }
  ];

  const filteredServices = selectedCategory === "all" 
    ? typedServicesData 
    : typedServicesData.filter((s: ServiceItem) => s.slug === selectedCategory);

  return (
    <main className="w-full min-h-screen font-sans bg-slate-50 text-slate-900 transition-colors duration-300 relative overflow-hidden">
      
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-teal-500/5 via-transparent to-emerald-500/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.08),transparent_60%)] pointer-events-none" />

      {/* =========================================================================
          HERO HEADER
          ========================================================================= */}
      <section className="relative pt-44 pb-28 px-6 overflow-hidden border-b border-slate-200/60 text-white z-10 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ServiceImage
            src="/assets/Hero2.png"
            alt="TouchPad Consultancy Services Operations"
          />
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-900" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs uppercase font-bold tracking-widest text-teal-400 drop-shadow-md">
            Technical Portfolio • Nationwide Scope
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-lg leading-tight">
            Consulting & Technical Advisory Services
          </h1>
          <p className="text-sm md:text-base text-teal-100/70 leading-relaxed max-w-2xl mx-auto drop-shadow">
            Providing evidence-driven research, donor-grade proposals, MEAL frameworks, and capacity strengthening solutions for development partners[cite: 1].
          </p>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE CATEGORY FILTER TABS
          ========================================================================= */}
      <section className="relative w-full py-6 px-6 z-10 bg-white/90 border-b border-slate-200/60 sticky top-0 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <Layers className="w-5 h-5 text-teal-600 shrink-0 mr-2" />
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 shrink-0 border cursor-pointer ${
                selectedCategory === tab.id
                  ? "bg-slate-900 text-white border-teal-500/50 shadow-md scale-105"
                  : "bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* =========================================================================
          ATTRACTIVE 3D GLASSMORPHISM SERVICES CARDS GRID
          ========================================================================= */}
      <section className="relative w-full py-20 px-6 z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Technical Capabilities</span>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">Tailored Advisory Solutions</h2>
            <p className="text-sm text-slate-500">Explore our structured expertise domains designed to generate measurable value for partners[cite: 1].</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((service: ServiceItem) => (
              <div 
                key={service.slug}
                className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between p-8 min-h-[300px]"
              >
                {/* BACKGROUND IMAGE LAYER WITH WHITE MASK */}
                <div className="absolute inset-0 z-0">
                  <ServiceImage
                    src={service.image || defaultImageMap[service.slug] || "/assets/service-proposal.png"}
                    alt={service.title}
                  />
                  <div className="absolute inset-0 bg-white/92 backdrop-blur-[3px] group-hover:bg-white/85 transition-all duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/85 to-teal-50/40" />
                </div>

                {/* CONTENT LAYER */}
                <div className="relative z-10 space-y-6">
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white via-slate-50 to-teal-50/60 border border-teal-500/20 shadow-[0_8px_20px_rgba(20,184,166,0.15)] flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition duration-300">
                      {iconMap[service.slug] || <FileText className="w-7 h-7 text-teal-600" />}
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-700 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full">
                      {service.category || "Consultancy"}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-teal-700 transition leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {service.shortDescription || service.description}
                    </p>
                  </div>

                  {/* Sub-services / Deliverables if provided in JSON */}
                  {service.deliverables && service.deliverables.length > 0 && (
                    <div className="pt-2 border-t border-slate-200/80 space-y-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Key Sub-Services:</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.deliverables.slice(0, 4).map((sub: string, i: number) => (
                          <li key={i} className="flex items-start gap-2 text-xs font-semibold text-slate-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                            <span>{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Card Dynamic Route Link */}
                <div className="relative z-10 pt-6 mt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500">Request TOR Proposal</span>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 hover:text-teal-800 group-hover:translate-x-1 transition duration-300"
                  >
                    Explore Domain Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          DIRECT TOR / PROPOSAL SUBMISSION CTA GATEWAY
          ========================================================================= */}
      <section className="relative w-full py-20 px-6 z-10 bg-white border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-teal-950 p-8 md:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-teal-500/20">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
              Technical Partnership
            </span>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white">
              Ready to Submit a TOR or Proposal Request?
            </h3>
            <p className="text-xs md:text-sm text-slate-300 max-w-xl leading-relaxed">
              Connect directly with our senior consultant network to request technical proposals, cost estimates, or capacity support across Bangladesh[cite: 1].
            </p>
          </div>

          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-black text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition duration-300 shrink-0 text-center flex items-center gap-2"
          >
            Submit Proposal Request <Send className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </main>
  );
}