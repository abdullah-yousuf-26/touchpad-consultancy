"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  FileText, 
  Search, 
  BarChart3, 
  GraduationCap, 
  Database, 
  ShieldAlert, 
  Building2,
  CheckCircle2,
  ArrowLeft,
  ShieldCheck,
  Send
} from "lucide-react";

import servicesData from "@/content/services.json";

interface ServiceItem {
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

// Icon dictionary matching service slugs
const iconMap: Record<string, React.ReactNode> = {
  "proposal-writing": <FileText className="w-8 h-8 text-teal-600" />,
  "research-evaluations": <Search className="w-8 h-8 text-teal-600" />,
  "meal-systems": <BarChart3 className="w-8 h-8 text-teal-600" />,
  "capacity-development": <GraduationCap className="w-8 h-8 text-teal-600" />,
  "data-services": <Database className="w-8 h-8 text-teal-600" />,
  "pseah-safeguarding": <ShieldAlert className="w-8 h-8 text-teal-600" />,
  "strategy-policy": <Building2 className="w-8 h-8 text-teal-600" />
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

export default function IndividualServicePage() {
  const params = useParams();
  const slug = params?.slug as string;

  const typedServicesData = servicesData as ServiceItem[];
  const service = typedServicesData.find((s) => s.slug === slug);

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

  // Safely resolve features/deliverables list with fallback
  const coreFeatures = service.features || service.deliverables || [];

  return (
    <main className="w-full min-h-screen font-sans bg-slate-50 text-slate-900 transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Mesh */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-teal-500/5 via-transparent to-emerald-500/5" />

      {/* =========================================================================
          HERO HEADER
          ========================================================================= */}
      <section className="relative pt-44 pb-28 px-6 overflow-hidden border-b border-slate-200/60 text-white z-10">
        <div className="absolute inset-0 z-0">
          <ServiceDetailImage 
            src={service.image || "/assets/Hero2.png"} 
            alt={service.title} 
          />
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-900" />
        </div>
        
        <div className="max-w-5xl mx-auto space-y-6 relative z-10">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-xs font-bold text-teal-400 hover:text-teal-300 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Services
          </Link>

          <div className="space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-teal-400 bg-teal-500/10 px-3.5 py-1 rounded-full border border-teal-500/20">
              {service.category || "Consultancy Domain"}
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              {service.title}
            </h1>
            <p className="text-sm md:text-base text-teal-100/80 leading-relaxed max-w-3xl">
              {service.shortDescription || service.description}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICE DOMAIN BODY
          ========================================================================= */}
      <section className="relative w-full py-20 px-6 z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Details Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview Section */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-teal-500/10 border border-teal-500/20">
                  {iconMap[service.slug] || <FileText className="w-8 h-8 text-teal-600" />}
                </div>
                <h2 className="text-2xl font-black text-slate-900">Technical Scope & Overview</h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {service.overview || service.description || service.shortDescription}
              </p>
            </div>

            {/* Core Areas of Expertise / Deliverables */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-6 text-slate-900">Core Areas of Expertise</h2>
              
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

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* TOR Request Card */}
            <div className="p-6 rounded-3xl bg-slate-950 text-white border border-teal-500/20 shadow-2xl space-y-4 relative overflow-hidden">
              <div className="space-y-2">
                <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Submit TOR Request</span>
                <h4 className="text-xl font-black text-white">Initiate an Assignment</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Request a customized technical proposal, budget breakdown, or consultant team lineup for this domain.
                </p>
              </div>

              <Link 
                href="/contact"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition"
              >
                Request Proposal <Send className="w-4 h-4" />
              </Link>
            </div>

            {/* Quality Assurance Card */}
            <div className="p-6 bg-white rounded-3xl border border-slate-200/80 shadow-sm space-y-3">
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