"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import servicesData from "@/content/services.json";
import { 
  FileText, 
  Search, 
  BarChart3, 
  GraduationCap, 
  Database, 
  Hand, 
  Building2,
  FileSpreadsheet,
  CheckCircle2,
  ArrowLeft,
  ShieldCheck,
  Send,
  Layers,
  ChevronDown
} from "lucide-react";

export interface ServiceItem {
  slug: string;
  title: string;
  category?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  deliverables?: string[];
  features?: string[];
  overview?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  "proposal-writing": <FileText className="w-8 h-8 text-teal-600" />,
  "research-evaluations": <Search className="w-8 h-8 text-teal-600" />,
  "meal-systems": <BarChart3 className="w-8 h-8 text-teal-600" />,
  "capacity-development": <GraduationCap className="w-8 h-8 text-teal-600" />,
  "data-services": <Database className="w-8 h-8 text-teal-600" />,
  "pseah-safeguarding": <Hand className="w-8 h-8 text-teal-600" />,
  "strategy-policy": <Building2 className="w-8 h-8 text-teal-600" />,
  "donor-reporting-and-documentation": <FileSpreadsheet className="w-8 h-8 text-teal-600" />
};

const shortTitleMap: Record<string, string> = {
  "proposal-writing": "Grant Proposal Writing",
  "research-evaluations": "Research & Evaluations",
  "meal-systems": "MEAL Systems & Frameworks",
  "capacity-development": "Capacity Development",
  "data-services": "Data Services & Digital Systems",
  "pseah-safeguarding": "PSEAH & Safeguarding",
  "strategy-policy": "Strategy & Policy Advisory",
  "donor-reporting-and-documentation": "Donor Reporting & Documentation",
};

function ServiceDetailImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full bg-slate-900 border border-teal-500/20 flex flex-col items-center justify-center p-6 text-center">
        <svg className="w-12 h-12 text-teal-400/60 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
        <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Service Asset Placeholder</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority
      className="object-cover"
      onError={() => setHasError(true)}
    />
  );
}

export default function ServiceDetailClient({ service }: { service: ServiceItem | null }) {
  const [mobileIndexOpen, setMobileIndexOpen] = useState(false);

  if (!service) {
    return (
      <main className="w-full min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-black text-teal-400 mb-2">404 - Service Domain Not Found</h1>
        <p className="text-sm text-slate-400 mb-6">The requested consultancy domain slug does not exist.</p>
        <Link href="/services" className="px-6 py-3 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs uppercase tracking-wider">
          Return to All Services
        </Link>
      </main>
    );
  }

  const coreFeatures = service.features || service.deliverables || [];
  const typedServices = servicesData as ServiceItem[];

  return (
    <main className="w-full min-h-screen font-sans bg-slate-50 text-slate-900 transition-colors duration-300 relative overflow-x-clip">
      
      {/* Background Mesh */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-teal-500/5 via-transparent to-emerald-500/5" />

      {/* HERO HEADER */}
      <section className="relative pt-40 sm:pt-44 pb-24 sm:pb-28 px-4 sm:px-6 overflow-hidden border-b border-slate-200/60 text-white z-10">
<div className="absolute inset-0 z-0">
  <ServiceDetailImage 
    src={service.image || "/assets/Hero2.png"} 
    alt={service.title} 
  />
  
  {/* 1. Very light base tint just to soften raw bright spots */}
  <div className="absolute inset-0 bg-slate-950/20" />

  {/* 2. Left-to-right directional fade: solid dark behind text, completely clear on the right */}
  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-transparent" />

  {/* 3. Soft top/bottom edge feathering for smooth transition to navbar and content */}
  <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/60" />
</div>
        
        <div className="max-w-6xl mx-auto space-y-6 relative z-10">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-xs font-bold text-teal-400 hover:text-teal-300 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Services
          </Link>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              {service.title}
            </h1>
            <p className="text-sm md:text-base text-slate-200 leading-relaxed max-w-3xl">
              {service.shortDescription || service.description}
            </p>
          </div>
        </div>
      </section>

      {/* MOBILE SERVICE JUMP ACCORDION */}
      <div className="lg:hidden max-w-6xl mx-auto px-4 pt-6 relative z-20">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <button
            type="button"
            onClick={() => setMobileIndexOpen(!mobileIndexOpen)}
            className="w-full flex items-center justify-between p-4 text-left transition hover:bg-slate-50"
          >
            <div className="flex items-center gap-2.5">
              <Layers className="w-4 h-4 text-brand-teal" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Consultancy Services
              </span>
            </div>
            <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${mobileIndexOpen ? "rotate-180" : ""}`} />
          </button>

          {mobileIndexOpen && (
            <div className="p-3 pt-0 border-t border-slate-100 flex flex-col gap-2 max-h-80 overflow-y-auto">
              {typedServices.map((item) => {
                const isActive = item.slug === service.slug;
                const displayTitle = shortTitleMap[item.slug] || item.title;

                return (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    onClick={() => setMobileIndexOpen(false)}
                    className={`block w-full px-4 py-3 rounded-xl text-xs font-bold transition-all duration-300 border text-center shadow-xs active:scale-[0.98] ${
                      isActive
                        ? "bg-gradient-to-r from-brand-teal to-brand-green text-white border-transparent shadow-md shadow-brand-teal/20"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-gradient-to-r hover:from-brand-teal hover:to-brand-green hover:text-white hover:border-transparent"
                    }`}
                  >
                    {displayTitle}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* SERVICE DOMAIN BODY */}
      <section className="relative w-full py-12 sm:py-16 px-4 sm:px-6 z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Main Details Column (Left - 8 Cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Technical Scope & Overview Section */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-md space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-teal-500/10 border border-teal-500/20">
                  {iconMap[service.slug] || <FileText className="w-8 h-8 text-teal-600" />}
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">Technical Scope & Overview</h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {service.overview || service.description || service.shortDescription}
              </p>
            </div>

            {/* Core Areas of Expertise */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Core Areas of Expertise</h2>
              
              {coreFeatures.length > 0 ? (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {coreFeatures.map((feature, index) => (
                    <li key={index} className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm flex items-start space-x-3 text-slate-800">
                      <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs font-bold leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-slate-500 italic">No specific deliverables listed for this service domain.</p>
              )}
            </div>

          </div>

          {/* Sidebar Column (Right - 4 Cols Sticky) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            
            {/* CONSULTANCY SERVICES INTERACTIVE GRADIENT BUTTON CARDS */}
            <div className="hidden lg:block bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm">
              <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
                <Layers className="w-4 h-4 text-brand-teal" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Consultancy Services
                </h3>
              </div>

              {/* Individual Gradient Button Cards Grid */}
              <nav className="mt-4 flex flex-col gap-2">
                {typedServices.map((item) => {
                  const isActive = item.slug === service.slug;
                  const displayTitle = shortTitleMap[item.slug] || item.title;

                  return (
                    <Link
                      key={item.slug}
                      href={`/services/${item.slug}`}
                      className={`group relative flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-bold transition-all duration-300 border cursor-pointer select-none active:scale-[0.98] ${
                        isActive
                          ? "bg-gradient-to-r from-brand-teal via-teal-700 to-brand-green text-white border-transparent shadow-md shadow-brand-teal/25 scale-[1.01]"
                          : "bg-slate-50/80 text-slate-700 border-slate-200/80 hover:bg-gradient-to-r hover:from-brand-teal hover:to-brand-green hover:text-white hover:border-transparent hover:shadow-md hover:shadow-brand-teal/20 hover:-translate-y-0.5"
                      }`}
                    >
                      <span className="truncate pr-2">{displayTitle}</span>

                      <span
                        className={`text-sm transition-transform duration-200 ${
                          isActive
                            ? "text-emerald-200 translate-x-0"
                            : "text-slate-400 group-hover:text-white group-hover:translate-x-1"
                        }`}
                      >
                        &rarr;
                      </span>
                    </Link>
                  );
                })}
              </nav>

              {/* View All Portfolio Cards with Services Section Gradient */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <Link
                  href="/services"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-300 via-teal-300 to-teal-500 hover:emerald-500 hover:to-teal-600 text-gray-900 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-teal-700/20 hover:shadow-lg hover:shadow-teal-700/30 active:scale-[0.98]"
                >
                  Back to All Services &rarr;
                </Link>
              </div>
            </div>

            {/* TOR Request Card */}
            <div className="p-6 rounded-3xl bg-slate-950 text-white border border-teal-500/20 shadow-xl space-y-4 relative overflow-hidden">
              <div className="space-y-2">
                <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Submit TOR Request</span>
                <h4 className="text-lg font-black text-white">Initiate an Assignment</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Request a customized technical proposal, budget breakdown, or consultant team lineup for this domain.
                </p>
              </div>

              <Link 
                href="/contact" 
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition"
              >
                Request Proposal <Send className="w-4 h-4" />
              </Link>
            </div>

            {/* Quality Assurance Card */}
            <div className="p-6 bg-white rounded-3xl border border-slate-200/80 shadow-sm space-y-2.5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-600" />
                <h4 className="text-sm font-bold text-slate-900">Quality Assurance</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                All deliverables under this domain undergo rigorous internal peer review and client validation workshops before final submission.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
