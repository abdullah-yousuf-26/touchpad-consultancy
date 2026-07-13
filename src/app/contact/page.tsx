"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Secure sequence initialized with payload:", formData);
  };

  return (
    /* FIXED CANVAS: Forced to a clean white/slate-50 background permanently with rich dark typography */
    <main className="w-full min-h-screen font-sans bg-slate-50 text-slate-900 transition-colors duration-300 relative overflow-hidden">
      
      {/* Subtle theme color background effects (Teal & Green gradients on light layout canvas) */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-teal-500/5 via-transparent to-emerald-500/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.08),transparent_60%)] pointer-events-none" />

{/* 1. HERO HEADER AREA - FULL BACKGROUND IMAGE BACKDROP LAYER */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden border-b border-slate-200/60 text-white z-10 flex items-center justify-center">
        
        {/* THE FULL-BLEED BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/contact-us.png" 
            alt="TouchPad Integration Matrix Background" 
            className="w-full h-full object-cover object-center"
          />
          {/* Dark Overlay Mask to ensure perfect corporate text contrast */}
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/20 to-green-650" />
        </div>
        
        {/* Centered Content Framework */}
        <div className="max-w-4xl mx-auto text-left space-y-4 relative z-10">
          <p className="text-xs uppercase font-bold tracking-widest text-teal-400 drop-shadow-md">
            Secure Node Gateway
          </p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-lg leading-tight">
            Initiate Integration Sequence
          </h1>
          <p className="text-sm md:text-base text-teal-100/70 leading-relaxed max-w-2xl mx-auto drop-shadow">
            Connect directly with our core architecture router to deploy your enterprise assets, optimize supply pipelines, or request custom software engineering blueprints.
          </p>
        </div>

      </section>

      {/* 2. MAIN HUBS COLUMN GRID - Set against the clean light page backdrop */}
      <section className="relative w-full py-20 px-6 z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-25 items-start">
          
          {/* LEFT CONTAINER MATRIX: Direct Channel Panels  */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-5">
              <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Contact Channels</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Get In Touch With Our Team</h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Fill out the data ingestion form or dial straight into our active grid lines. Our engineering department handles response validation within 1-2 business cycles.
              </p>
            </div>

            {/* Grid Array of Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1: Head Office */}
              <div className="p-5 rounded-2xl bg-slate-300 text-white border border-teal-500/10 space-y-2 group hover:border-teal-500/30 transition-all duration-300 shadow-xl">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C7.58 0 4 3.58 4 8c0 5.25 7 14 7 14s7-8.75 7-14c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
                </div>
                <h4 className="text-x uppercase font-bold text-white">Head Office</h4>
                <p className="text-xs font-semibold text-teal-900/90">Dhaka, Bangladesh</p>
              </div>

              {/* Card 2: Voice Channel */}
              <div className="p-5 rounded-2xl bg-slate-300 text-white border border-teal-500/10 space-y-2 group hover:border-teal-500/30 transition-all duration-300 shadow-xl">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                </div>
                <h4 className="text-x uppercase font-bold text-white">Call Center</h4>
                <a href="tel:+8801755673862" className="text-xs font-semibold text-teal-900 block hover:text-green-300 transition duration-250">+880 1755-673862</a>
              </div>

              {/* Card 3: Mail Routing */}
              <div className="p-5 rounded-2xl bg-slate-300 text-white border border-teal-500/10 space-y-2 group hover:border-teal-500/30 transition-all duration-300 shadow-xl">
                <div className="w-8 h-8 rounded-lg bg-green-900/10 flex items-center justify-center text-teal-400">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <h4 className="text-x uppercase font-bold text-white">Email</h4>
                <a href="mailto:contact@touchpadsolutions.com" className="text-xs font-semibold text-teal-900 block hover:text-teal-300 transition duration-250 truncate">contact@touchpadsolutions.com</a>
              </div>

              {/* Card 4: Operations Schedule */}
              <div className="p-5 rounded-2xl bg-slate-300 text-white border border-teal-500/10 space-y-2 group hover:border-teal-500/30 transition-all duration-300 shadow-xl">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
                </div>
                <h4 className="text-x uppercase font-bold text-white">Active Windows</h4>
                <p className="text-xs font-semibold text-teal-900">Sat - Sun: 09am - 09pm</p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTAINER MATRIX: Secure Form System (Maintains gorgeous premium dark frame look from your image) */}
          <div className="lg:col-span-7 bg-slate-300 text-white border border-teal-800 p-8 rounded-3xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-teal-800 uppercase tracking-wider">First Name</label>
                  <input type="text" required placeholder="Enter first name" value={formData.firstName} onChange={(e)=>setFormData({...formData, firstName: e.target.value})}
                    className="w-full bg-slate-500 border border-teal-900 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-teal-500 text-white placeholder-white" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-teal-800 uppercase tracking-wider">Last Name</label>
                  <input type="text" required placeholder="Enter last name" value={formData.lastName} onChange={(e)=>setFormData({...formData, lastName: e.target.value})}
                    className="w-full bg-slate-500 border border-teal-900 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-teal-500 text-white placeholder-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-teal-800 uppercase tracking-wider">Work Email</label>
                  <input type="email" required placeholder="name@company.com" value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-500 border border-teal-900 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-teal-500 text-white placeholder-white" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-teal-800 uppercase tracking-wider">Phone Number</label>
                  <input type="tel" placeholder="+880 1XXX-XXXXXX" value={formData.phone} onChange={(e)=>setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-slate-500 border border-teal-900 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-teal-500 text-white placeholder-white" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-teal-800 uppercase tracking-wider">Company Name (Optional)</label>
                <input type="text" placeholder="Enter business entity" value={formData.company} onChange={(e)=>setFormData({...formData, company: e.target.value})}
                  className="w-full bg-slate-500 border border-teal-900 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-teal-500 text-white placeholder-white" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-teal-800 uppercase tracking-wider">Project Objectives / Message</label>
                <textarea rows={4} required placeholder="Describe system scope or timeline constraints..." value={formData.message} onChange={(e)=>setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-500 border border-teal-900 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-teal-500 text-white placeholder-white resize-none" />
              </div>

              {/* LIQUID GOOEY CALL TO ACTION SUBMIT TRIGGER */}
              <div className="pt-2 filter-gooey-container">
                <button type="submit" className="relative w-full h-12 rounded-xl bg-gradient-to-r from-brand-teal to-brand-green text-white font-bold tracking-wider text-xs uppercase overflow-hidden transition-transform duration-200 active:scale-98 shadow-md border border-white/10 group cursor-pointer">
                  <span className="relative z-10 select-none group-hover:tracking-widest transition-all duration-300">Transmit Secure Payload</span>
                  <div className="absolute top-0 left-0 w-full h-full bg-teal-400/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out fluid-wave-layer" />
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>

{/* 3. SOCIAL CONTEXT HUB - 3D Card Flip Terminal with Glowing Border Effects */}
      <section className="relative w-full border-t border-slate-200/60 bg-slate-100/40 py-24 px-6 z-10 overflow-hidden">
        
        {/* CSS 3D & Animation Blueprint Injections */}
        <style jsx global>{`
          .perspective-container {
            perspective: 1200px;
          }
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
            transform-style: preserve-3d;
          }
          .group:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
          .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 1rem;
          }
          .flip-card-back {
            transform: rotateY(180deg);
          }
        `}</style>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-x font-bold text-teal-600 uppercase tracking-wider">Ecosystem Bridges</span>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 mt-1">Connect to Our Nodes</h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 justify-center perspective-container">
          
          {/* NODE 1: FACEBOOK NODE */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group relative block w-full h-64 rounded-2xl cursor-pointer">

            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 opacity-30 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-500" />
            
            <div className="flip-card-inner">
              {/* FRONT CANVAS: Minimal Brand Presentation */}
              <div className="flip-card-front bg-slate-950 border border-white/5 flex flex-col items-center justify-center p-6 shadow-xl">
                <svg className="w-14 h-14 text-blue-500 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
                <span className="text-xs uppercase font-bold tracking-widest text-slate-400 mt-4">Facebook Matrix</span>
              </div>

              {/* BACK CANVAS: High-Fidelity Rich Blur Content */}
              <div className="flip-card-back bg-gradient-to-br from-blue-700 via-blue-900 to-slate-950 text-white p-6 flex flex-col justify-between items-center shadow-2xl relative overflow-hidden">
                {/* Dynamic blur circle matching your video reference */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute left-2 px-3 py-2 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">Meta Pipeline</div>
                
                <div className="text-center mt-12 relative z-10">
                  <p className="text-x font-medium leading-relaxed text-blue-100/90">Follow us on Facebook for community updates and digital solutions.</p>
                </div>

                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white relative z-10">
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          </a>

          {/* NODE 2: X TERMINAL NODE */}
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="group relative block w-full h-64 rounded-2xl cursor-pointer">
            {/* GLOWING BORDER BACKDROP */}
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-white via-slate-400 to-white-700 opacity-30 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-500" />
            
            <div className="flip-card-inner">
              {/* FRONT CANVAS */}
              <div className="flip-card-front bg-slate-950 border border-white/5 flex flex-col items-center justify-center p-6 shadow-xl">
                <svg className="w-12 h-12 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="text-xs uppercase font-bold tracking-widest text-slate-400 mt-5">X Terminal</span>
              </div>

              {/* BACK CANVAS */}
              <div className="flip-card-back bg-gradient-to-br from-white-800 via-zinc-900 to-black text-white p-6 flex flex-col justify-between items-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-10 left-10 w-32 h-32 bg-slate-400/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute left-2 px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">Signal Broadcast</div>
                
                <div className="text-center mt-12 relative z-10">
                  <p className="text-x font-medium leading-relaxed text-zinc-300">Connected to us with X to catch real-time ecosystem patches and insights.</p>
                </div>

                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white relative z-10">
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          </a>

          {/* NODE 3: LINKEDIN NODE */}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group relative block w-full h-64 rounded-2xl cursor-pointer">
            {/* GLOWING BORDER BACKDROP */}
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-500 to-teal-600 opacity-30 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-500" />
            
            <div className="flip-card-inner">
              {/* FRONT CANVAS */}
              <div className="flip-card-front bg-slate-950 border border-white/5 flex flex-col items-center justify-center p-6 shadow-xl">
                <svg className="w-13 h-13 text-blue-400 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="text-xs uppercase font-bold tracking-widest text-slate-400 mt-4">LinkedIn Node</span>
              </div>

              {/* BACK CANVAS */}
              <div className="flip-card-back bg-gradient-to-br from-indigo-950 via-blue-900 to-white-950 text-white p-6 flex flex-col justify-between items-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute left-2 px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">Corporate Node</div>
                
                <div className="text-center mt-12 relative z-10">
                  <p className="text-x font-medium leading-relaxed text-indigo-100/90">Get in touch with LinkedIn to track enterprise solutions and networks.</p>
                </div>

                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white relative z-10">
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          </a>

        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS TERMINAL */}
      <section className="relative w-full bg-white text-slate-900 py-24 px-6 border-t border-slate-200/60 z-10">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Faq Matrix</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            <div className="p-5 rounded-xl border border-slate-200/60 bg-slate-50">
              <h4 className="text-sm font-bold text-slate-900 mb-2">What is the engineering scope of TouchPad Consultancy?</h4>
              <p className="text-xs text-slate-500 leading-relaxed">We focus on enterprise-grade web applications specializing in full-stack JavaScript architectures, database scaling pipelines, secure systems migration, and technical workflow architecture.</p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200/60 bg-slate-50">
              <h4 className="text-sm font-bold text-slate-900 mb-2">How fast are projects deployed onto the production grid?</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Standard production milestones depend on scope architecture. Typical minimum deployment runs map within a 2-6 week delivery loop utilizing agile sprint patterns.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
