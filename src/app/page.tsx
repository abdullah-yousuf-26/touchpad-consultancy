"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import servicesData from "@/content/services.json";
import CommitmentScroll from "@/components/CommitmentScroll";

export default function Home() {
  const clients = [
    "Global Tech Corp",
    "Apex Logistics",
    "Innovate Biotech",
    "Delta Financial",
    "Matrix Systems",
    "Quantum Digital",
    "Horizon Ventures",
  ];

  const heroImages = [
    "/assets/Hero1.png",
    "/assets/Hero2.png",
    "/assets/Hero3.png",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [heroImages.length]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-brand-teal/20">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${image})`,
              opacity: currentSlide === index ? 0.35 : 0,
            }}
          />
        ))}

        <div className="absolute top-20 left-1/4 w-[450px] h-[450px] bg-brand-teal/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-brand-green/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-50 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full py-16">
          <div className="text-left space-y-6">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              Your Trusted{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-brand-green">
                Development Partner
              </span>
            </h1>
            <p className="text-lg text-white max-w-xl leading-relaxed">
              TouchPad Consultancy values collaboration, innovation, transparency, and continuous learning in achieving impactful development results.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact" className="gooey-cta-btn h-11 px-6 transition-all">
                Consultation
                <div className="blob-layer">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </Link>
              <Link href="#services" className="gooey-cta-btn h-11 px-6 transition-all">
                Explore Services
                <div className="blob-layer">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US & MISSION/VISION SECTION */}
      <section id="about" className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-emerald-400/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-teal-400/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  Corporate Intelligence
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                Transforming Operations Through Rigorous Execution.
              </h2>
            </div>
            
            <div className="lg:col-span-7 lg:pt-4">
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                TouchPad Consultancy bridges the gap between programmatic capacity and institutional growth. We deliver technically sound, evidence-driven blueprints that ensure high quality, accountability, and measurable impact across every engagement.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="group relative p-8 sm:p-10 rounded-3xl bg-slate-50/80 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-brand-teal/40 transition-all duration-300">
              <div className="h-1.5 w-12 bg-gradient-to-r from-brand-teal to-teal-400 rounded-full mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                To strengthen organizational programming through quality proposal writing, research, technical excellence, capacity development, and strategic advisory services.
              </p>
            </div>

            <div className="group relative p-8 sm:p-10 rounded-3xl bg-slate-50/80 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-brand-green/40 transition-all duration-300">
              <div className="h-1.5 w-12 bg-gradient-to-r from-brand-green to-emerald-400 rounded-full mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                To become a trusted technical partner for organizations worldwide by delivering innovative, evidence-driven, and sustainable consulting solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PINNED STICKY SCROLL SECTION: WHAT WE OFFER */}
      <CommitmentScroll />

{/* 4. SERVICE ADVISORY MATRIX (2-COLUMN BALANCED GRID) */}
      <section id="services" className="relative py-32 px-6 sm:px-8 lg:px-12 bg-slate-50 border-t border-slate-200/60 overflow-hidden">
        {/* Deep Teal ambient backdrop glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-brand-teal/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-4 mb-20 relative z-10">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Our Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Select an operational domain to inspect its technical framework, execution methodology, and core deliverables.
          </p>
        </div>

        {/* 2-COLUMN BALANCED GRID (8 CARDS TOTAL: 4 ROWS x 2 COLS) */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 relative z-10">
          {servicesData.map((service, index) => (
            <Link 
              key={service.slug} 
              href={`/services/${service.slug}`} 
              className="group p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm transition-all duration-500 flex flex-col justify-between relative overflow-hidden min-h-[20rem] hover:shadow-2xl hover:border-brand-teal/40"
            >
              {/* THE EXPANDING LIQUID BACKDROP EFFECT */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-brand-teal to-teal-700 rounded-bl-full transition-all duration-700 ease-in-out group-hover:w-[160%] group-hover:h-[160%] group-hover:rounded-none z-0" />

              {/* TOP CONTENT LAYER */}
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-white transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-sm text-slate-600 group-hover:text-teal-50/90 transition-colors duration-300 leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              {/* BOTTOM CTA & ARROW LAYER */}
              <div className="relative z-10 mt-8 pt-5 border-t border-slate-100 group-hover:border-white/15 flex items-center justify-between transition-colors duration-300">
                <span className="text-xs sm:text-sm font-bold text-brand-teal group-hover:text-emerald-300 transition-colors duration-300">
                  Inspect Framework & Deliverables
                </span>
                <div className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-white/20 flex items-center justify-center text-brand-teal group-hover:text-white transition-all duration-500 transform group-hover:rotate-45 group-hover:scale-110 shadow-sm">
                  <span className="text-base font-bold">&rarr;</span>
                </div>
              </div>

            </Link>
          ))}
        </div>
      </section>

      {/* 5. ECOSYSTEM VERTICALS */}
      <section className="relative py-32 px-6 bg-white border-t border-slate-200/60">
        <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-brand-teal/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-brand-green/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center space-y-4 mb-28 relative z-10">
          <span className="text-xs font-bold text-brand-green uppercase tracking-wider">The TouchPad Ecosystem</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Our Operating Verticals</h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-12 relative z-10 px-4 pt-10">
          {/* Vertical A */}
          <div className="group flex flex-col justify-between items-center w-full h-auto gap-6 p-8 bg-gradient-to-br from-emerald-50/60 via-white to-white rounded-2xl border border-slate-200/80 shadow-xl relative pt-8 transition-all duration-500 hover:shadow-2xl hover:border-brand-green/30">
            <div className="relative md:absolute md:top-6 flex justify-center items-center w-24 h-24 p-2 bg-gradient-to-r from-brand-green to-brand-teal rounded-2xl shadow-md transition-all duration-700 ease-out md:group-hover:-top-12 md:group-hover:scale-110 md:group-hover:shadow-lg md:group-hover:shadow-brand-green/20 overflow-hidden">
              <img 
                src="/assets/TPS.png" 
                alt="TouchPad Solutions" 
                className="w-full h-full object-cover rounded-xl" 
              />
            </div>

            <div className="w-full text-center space-y-4 pt-4 md:pt-24 transition-all duration-500">
              <h3 className="text-2xl font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-brand-green">TouchPad Solutions</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                Our multi-tasking IT and digital solutions wing. Specializing in rapid MERN full-stack application builds, customized responsive systems, and deployment lifecycle optimization.
              </p>
            </div>

            <div className="pt-4 w-full border-t border-slate-100 flex justify-center">
              <a href="https://main.touchpad-solutions.com/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-wider text-brand-green hover:text-brand-teal transition-colors duration-200">
                Visit Our Solution Service &rarr;
              </a>
            </div>
          </div>

          {/* Vertical B */}
          <div className="group flex flex-col justify-between items-center w-full h-auto gap-6 p-8 bg-gradient-to-br from-teal-50/40 via-emerald-50/30 to-white rounded-2xl border border-slate-200/80 shadow-xl relative pt-8 transition-all duration-500 hover:shadow-2xl hover:border-brand-teal/30">
            <div className="relative md:absolute md:top-6 flex justify-center items-center w-24 h-24 p-2 bg-gradient-to-r from-teal-400 via-emerald-300 to-brand-green rounded-3xl shadow-md transition-all duration-700 ease-out md:group-hover:-top-12 md:group-hover:scale-110 md:group-hover:shadow-lg md:group-hover:shadow-emerald-400/20 overflow-hidden">
              <img 
                src="/assets/TLC.png" 
                alt="TouchPad Learning Center" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="w-full text-center space-y-4 pt-4 md:pt-24 transition-all duration-500">
              <h3 className="text-2xl font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-brand-teal">TouchPad Learning Center</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                Our professional engineering learning division. Curating high-performance design pipelines, Canva system design frameworks, and advanced front-end development systems.
              </p>
            </div>

            <div className="pt-4 w-full border-t border-slate-100 flex justify-center">
              <a href="https://learning.touchpad-solutions.com/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-wider text-brand-teal hover:text-brand-teal transition-colors duration-200">
                Visit our Learning Center &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}