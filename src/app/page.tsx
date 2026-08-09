"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import servicesData from "@/content/services.json";

export default function Home() {
  const clients = ["Global Tech Corp", "Apex Logistics", "Innovate Biotech", "Delta Financial", "Matrix Systems", "Quantum Digital", "Horizon Ventures"];
  
  // 3-Image Background Slide Management
  const heroImages = [
    "/assets/Hero1.png", // Place your high-res corporate team or system image here
    "/assets/Hero2.png", // Second slide asset
    "/assets/Hero3.png"  // Third slide asset
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // 5 Seconds Rotation
    return () => clearInterval(slideInterval);
  }, [heroImages.length]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-brand-teal/20">
      
      {/* 1. HERO SECTION WITH IMAGE SLIDESHOW AND BRAND MESH OVERLAY */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
        
        {/* The Sliding Image Layer */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out`}
            style={{
              backgroundImage: `url(${image})`,
              opacity: currentSlide === index ? 0.35 : 0 // Darkened slightly so typography stays perfectly readable
            }}
          />
        ))}

        {/* Dynamic bright mesh effect background blocks overlaid perfectly on top of images */}
        <div className="absolute top-20 left-1/4 w-[450px] h-[450px] bg-brand-teal/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-brand-green/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-50 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full py-16">
          <div className="text-left space-y-6">

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              We Architect Blueprints That{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-brand-green">
                Scale Worldwide
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              TouchPad Consultancy delivers premium infrastructure engineering, enterprise IT transitions, and secure digital workflows built for market dominance.
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
                <Link href="#services" className="gooey-cta-btn  h-11 px-6 transition-all">
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

      {/* 2. CLIENTS SLIDER */}
      <section className="py-12 bg-white border-y border-slate-200/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <p className="text-center text-xl font-semibold tracking-widest text-slate-400 uppercase"></p>
        </div>
        <div className="relative w-full flex items-center">
          <div className="animate-infinite-scroll gap-26 items-center">
            {[...clients, ...clients].map((client, idx) => (
              <span key={idx} className="text-lg font-bold text-slate-400 tracking-tight hover:text-brand-teal transition-colors duration-200 cursor-default">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

{/* 3. ABOUT US SECTION */}
<section id="about" className="relative py-32 px-6 bg-white overflow-hidden">
  <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-emerald-400/10 blur-[150px] rounded-full pointer-events-none" />
  
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
    
    {/* UPGRADED IMAGE CONTAINER: Replaced placeholder text with high-performance responsive image */}
    <div className="bg-slate-100 rounded-3xl border border-slate-200/80 aspect-[4/3] relative overflow-hidden shadow-md group">
      <img 
        src="/assets/Team.png" 
        alt="TouchPad Consultancy Team in Dhaka" 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        onError={(e) => {
          // If the image file isn't found or is still buffering, it fails gracefully without breaking the layout
          console.log("About image not found in public/assets/ yet");
        }}
      />
    </div>

    <div className="space-y-8">
      {/* ... keeping your existing About text, Mission, and Vision boxes exactly the same ... */}
      <div>
        <span className="text-xs font-bold text-brand-green uppercase tracking-wider block mb-2">Corporate Intelligence</span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Transforming Operations Through Rigorous Infrastructure Execution.</h2>
        <p className="mt-4 text-slate-600 leading-relaxed">TouchPad Consultancy bridges the gap between raw programmatic capacity and market-defining corporate growth. We engineer durable blueprints that keep your transaction speeds high and corporate data secure.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:border-brand-teal/30 transition-all">
          <div className="h-2 w-8 rounded-full bg-brand-teal mb-4" />
          <h4 className="font-bold text-slate-900 text-lg">Our Mission</h4>
          <p className="mt-2 text-xs text-slate-500 leading-relaxed">To arm corporate partners with ultra-scalable software systems that remove data bottlenecks and secure multi-tier platforms.</p>
        </div>
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:border-brand-green/30 transition-all">
          <div className="h-2 w-8 rounded-full bg-brand-green mb-4" />
          <h4 className="font-bold text-slate-900 text-lg">Our Vision</h4>
          <p className="mt-2 text-xs text-slate-500 leading-relaxed">To become the global gold standard for enterprise technical consulting, fostering zero-database architecture for absolute security.</p>
        </div>
      </div>
    </div>

  </div>
</section>

      {/* 4. SERVICE ADVISORY MATRIX: UPGRADED EXPANDING BACKDROP EFFECT */}
      <section id="services" className="relative py-32 px-6 bg-slate-50 border-t border-slate-200/60 overflow-hidden">
        {/* Bright Deep Teal backdrop ray */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-brand-teal/5 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center space-y-4 mb-20 relative z-10">
          <span className="text-xs font-bold text-brand-teal uppercase tracking-wider">Functional Capabilities</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900">Our Advisory Matrix</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm">Select an operations segment to inspect its integration framework rules and deployment pipelines.</p>
        </div>

        {/* 6-Card Grid Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {servicesData.map((service) => (
            <Link 
              key={service.slug} 
              href={`/services/${service.slug}`} 
              className="group p-8 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all duration-500 flex flex-col justify-between relative overflow-hidden h-64 min-h-[16rem]"
            >
              {/* THE LIQUID TRANSITION BACKDROP: Expands from top right corner on hover */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-brand-teal to-teal-700 rounded-bl-full transition-all duration-700 ease-in-out group-hover:w-[150%] group-hover:h-[150%] group-hover:rounded-none z-0" />

              {/* Top Section Content Layer (Z-10 ensures text stays perfectly visible over background) */}
              <div className="relative z-10 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-500 group-hover:text-teal-50/80 transition-colors duration-300 leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              {/* Bottom Arrow Indicator Layer */}
              <div className="relative z-10 mt-6 flex items-center justify-between">
                <span className="text-xs font-bold text-brand-teal group-hover:text-emerald-300 transition-colors duration-300">
                  Inspect Blueprints
                </span>
                {/* Arrow indicator matches your reference video clip shift */}
                <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-white/20 flex items-center justify-center text-brand-teal group-hover:text-white transition-all duration-500 transform group-hover:rotate-45">
                  <span className="text-sm font-bold">&rarr;</span>
                </div>
              </div>

            </Link>
          ))}
        </div>
      </section>

{/* 5. ECOSYSTEM VERTICALS: CLEAN LOGO POP-OUT GRIDS */}
      <section className="relative py-32 px-6 bg-white border-t border-slate-200/60 overflow-hidden">
        {/* Ambient backdrop rays */}
        <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-brand-teal/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-brand-green/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center space-y-4 mb-28 relative z-10">
          <span className="text-xs font-bold text-brand-green uppercase tracking-wider">The TouchPad Ecosystem</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Our Operating Verticals</h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-12 relative z-10 px-4 pt-10">
          
          {/* VERTICAL CARD A: TOUCHPAD SOLUTIONS */}
          <div className="group flex flex-col justify-between items-center w-full h-auto gap-6 p-8 bg-gradient-to-br from-emerald-50/60 via-white to-white rounded-2xl border border-slate-200/80 shadow-xl relative pt-8 transition-all duration-500 hover:shadow-2xl hover:border-brand-green/30">
            
            {/* Logo box with absolute overlay structure */}
            <div className="relative md:absolute md:top-6 flex justify-center items-center w-24 h-24 p-2 bg-gradient-to-r from-brand-green to-brand-teal rounded-2xl shadow-md transition-all duration-700 ease-out md:group-hover:-top-12 md:group-hover:scale-110 md:group-hover:shadow-lg md:group-hover:shadow-brand-green/20 overflow-hidden">
              <img 
                src="/assets/TPS.png" 
                alt="TouchPad Solutions" 
                className="w-full h-full object-cover rounded-xl" 
                onError={(e) => {
                  console.error("Failed to load:", e.currentTarget.src);
                }}
              />
            </div>

            {/* Core Operational Text */}
            <div className="w-full text-center space-y-4 pt-4 md:pt-24 transition-all duration-500">
              <h3 className="text-2xl font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-brand-green">TouchPad Solutions</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                Our multi-tasking IT and digital solutions wing. Specializing in rapid MERN full-stack application builds, customized responsive systems, and deployment lifecycle optimization.
              </p>
            </div>

            {/* Contextual Action Route Link */}
            <div className="pt-4 w-full border-t border-slate-100 flex justify-center">
              <a href="https://main.touchpad-solutions.com/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-wider text-brand-green hover:text-brand-teal transition-colors duration-200">
                Visit Our Solution Service &rarr;
              </a>
            </div>
          </div>

          {/* VERTICAL CARD B: TOUCHPAD LEARNING CENTER */}
          <div className="group flex flex-col justify-between items-center w-full h-auto gap-6 p-8 bg-gradient-to-br from-teal-50/40 via-emerald-50/30 to-white rounded-2xl border border-slate-200/80 shadow-xl relative pt-8 transition-all duration-500 hover:shadow-2xl hover:border-brand-teal/30">
            
            {/* Logo box with absolute overlay structure */}
            <div className="relative md:absolute md:top-6 flex justify-center items-center w-24 h-24 p-2 bg-gradient-to-r from-teal-400 via-emerald-300 to-brand-green rounded-3xl shadow-md transition-all duration-700 ease-out md:group-hover:-top-12 md:group-hover:scale-110 md:group-hover:shadow-lg md:group-hover:shadow-emerald-400/20 overflow-hidden">
              <img 
                src="/assets/TLC.png" 
                alt="TouchPad Learning Center" 
                className="w-full h-full object-cover rounded-xl"
                onError={(e) => {
                  console.error("Failed to load:", e.currentTarget.src);
                }}
              />
            </div>

            {/* Core Operational Text */}
            <div className="w-full text-center space-y-4 pt-4 md:pt-24 transition-all duration-500">
              <h3 className="text-2xl font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-brand-teal">TouchPad Learning Center</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                Our professional engineering learning division. Curating high-performance design pipelines, Canva system design frameworks, and advanced front-end development systems.
              </p>
            </div>

            {/* Contextual Action Route Link */}
            <div className="pt-4 w-full border-t border-slate-100 flex justify-center">
              <a href="https://learning.touchpad-solutions.com/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-wider text-brand-teal hover:text-brand-teal transition-colors duration-200">
                Visit our Learning Center &rarr;
              </a>
            </div>
          </div>

        </div>
      </section>

{/* 6. CAREERS GATEWAY */}
      <section className="py-32 px-6 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto bg-white rounded-[32px] border border-slate-200 p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden shadow-sm">
          {/* Subtle green ambient burst */}
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-brand-green/5 blur-3xl rounded-full pointer-events-none" />
          
          <div className="space-y-6 relative z-10">
            <span className="text-xs font-bold text-brand-green uppercase tracking-widest">Global Talent Ingestion</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-tight">Shape The Future Of Digital Frameworks.</h2>
            <p className="text-slate-600 text-sm leading-relaxed">We are constantly seeking brilliant engineers, UX developers, and analytical minds ready to solve complex infrastructure puzzles across international borders.</p>
            <Link href="/career" className="h-11 px-6 inline-flex items-center bg-gradient-to-r from-brand-teal to-brand-green text-white font-semibold rounded-xl text-sm shadow-md hover:opacity-95 transition-all">
              Apply For Active Openings
            </Link>
          </div>

          {/* UPGRADED IMAGE SLOTS: Swapped placeholder for your custom image */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200/80 aspect-[4/3] relative overflow-hidden group">
            <img 
              src="/assets/Join Us.png" 
              alt="TouchPad Interactive Workspace Architecture" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                console.log("Workspace graphic asset not found in public/assets/ yet");
              }}
            />
          </div>
        </div>
      </section>

    </main>
  );
}
