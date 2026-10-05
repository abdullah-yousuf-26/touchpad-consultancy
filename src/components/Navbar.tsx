"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full bg-transparent transition-all duration-300">
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-3 sm:px-6">
        
        {/* LEFT SIDE: Brand Logo + Responsive Name */}
        <Link href="/" className="flex items-center gap-2 group shrink min-w-0">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shrink-0">
            <Image 
              src="/assets/TPC Logo.png" 
              alt="TouchPad Logo" 
              width={40} 
              height={40} 
              priority
              className="w-full h-full object-contain"
            />
          </div>
          
          <span className="text-base sm:text-lg md:text-2xl font-black tracking-tight truncate">
            <span className="text-brand-green">TouchPad</span>{" "}
            <span className="text-brand-teal">Consultancy</span>
          </span>
        </Link>

        {/* CENTER: Floating Glass Capsule Menu Bar (Desktop only) */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 px-6 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-lg text-[13px] font-bold tracking-wider uppercase text-teal-300">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span className="w-1 h-1 rounded-full bg-white/80" />

          <Link href="/about" className="hover:text-white transition">About Us</Link>
          <span className="w-1 h-1 rounded-full bg-white/80" />
          
          <Link href="/services" className="hover:text-white transition">Services</Link>
        </nav>

        {/* RIGHT SIDE: Controls */}
        <div className="flex items-center gap-2 shrink-0">
          {/* CTA: Hidden on mobile (<640px) to prevent layout break, visible from sm up */}
          <Link 
            href="/contact" 
            className="hidden sm:inline-flex premium-cta-btn h-9 sm:h-10 px-4 sm:px-6 text-xs uppercase tracking-wider transition-all"
          >
            <span>Get In Touch</span>
            <svg viewBox="0 0 66 43" className="w-4 h-4">
              <polygon points="39.58,4.46 44.11,0 66,21.5 44.11,43 39.58,38.54 56.94,21.5"></polygon>
              <polygon points="19.79,4.46 24.32,0 46.21,21.5 24.32,43 19.79,38.54 37.15,21.5"></polygon>
              <polygon points="0,4.46 4.53,0 26.42,21.5 4.53,43 0,38.54 17.36,21.5"></polygon>
            </svg>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex md:hidden items-center justify-center p-2 rounded-lg text-slate-800 bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm hover:text-brand-teal transition"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* MOBILE DROPDOWN DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden mx-3 my-2 p-5 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-2xl transition-all">
          <nav className="flex flex-col gap-4 text-center">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-bold uppercase tracking-wider text-teal-300 hover:text-white transition"
            >
              Home
            </Link>
            <div className="w-full h-px bg-white/10" />
            
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-bold uppercase tracking-wider text-teal-300 hover:text-white transition"
            >
              About Us
            </Link>
            <div className="w-full h-px bg-white/10" />
            
            <Link 
              href="/services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-bold uppercase tracking-wider text-teal-300 hover:text-white transition"
            >
              Services
            </Link>

            <div className="pt-2">
              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="premium-cta-btn w-full h-11 text-xs uppercase tracking-wider"
              >
                <span>Get In Touch</span>
                <svg viewBox="0 0 66 43" className="w-4 h-4">
                  <polygon points="39.58,4.46 44.11,0 66,21.5 44.11,43 39.58,38.54 56.94,21.5"></polygon>
                  <polygon points="19.79,4.46 24.32,0 46.21,21.5 24.32,43 19.79,38.54 37.15,21.5"></polygon>
                  <polygon points="0,4.46 4.53,0 26.42,21.5 4.53,43 0,38.54 17.36,21.5"></polygon>
                </svg>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}