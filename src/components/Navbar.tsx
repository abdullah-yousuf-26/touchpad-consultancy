"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full bg-transparent transition-all duration-300">
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-6">
        
{/* LEFT SIDE: Brand Logo Slot + Name */}
<Link href="/" className="flex items-center gap-3 group">
  {/* Rounded full creates a perfect circle layout, hiding any awkward square corners */}
  <div className="relative w-12 h-12 rounded-full bg-white flex items-center justify-center border border-slate-200/60 shadow-sm overflow-hidden group-hover:border-brand-teal transition duration-300">
    <Image 
      src="/assets/TouchPad Consultancy logo.png" 
      alt="TouchPad Logo" 
      width={40} 
      height={40}
      className="w-full h-full object-cover scale-105"
      onError={(e) => {
        e.currentTarget.style.display = 'none';
      }}
    />
  </div>
  
  <span className="text-2xl font-black tracking-tight text-white md:text-slate-900 transition-colors">
    <span className="text-brand-green">TouchPad</span> <span className="text-brand-teal font-medium">Consultancy</span>
  </span>
</Link>

        {/* CENTER: Upgraded Floating Glass Capsule Menu Bar with Careers */}
        <nav className="hidden md:flex items-center gap-5 px-6 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-lg text-[11px] font-bold tracking-wider uppercase text-white/90">
          <Link href="/" className="hover:text-brand-teal transition">Home</Link>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          
          <Link href="/services" className="hover:text-teal-300 transition">Services</Link>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          
          <Link href="/about" className="hover:text-teal-300 transition">About</Link>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          
          {/* RESTORED: Careers Navigation Link */}
          <Link href="/career" className="hover:text-teal-300 transition">Careers</Link>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          
          <Link href="/contact" className="hover:text-teal-300 transition">Contact</Link>
        </nav>

{/* RIGHT SIDE: Vibrant Brand Upgraded CTA Trigger */}
        <div>
          <Link 
            href="/contact" 
            className="premium-cta-btn h-10 px-6 text-xs uppercase tracking-wider transition-all"
          >
            <span>Get In Touch</span>
            {/* The multi-polygon vector layout mapped for infinite shifting arrow effects */}
            <svg viewBox="0 0 66 43" className="w-4 h-4">
              <polygon points="39.58,4.46 44.11,0 66,21.5 44.11,43 39.58,38.54 56.94,21.5"></polygon>
              <polygon points="19.79,4.46 24.32,0 46.21,21.5 24.32,43 19.79,38.54 37.15,21.5"></polygon>
              <polygon points="0,4.46 4.53,0 26.42,21.5 4.53,43 0,38.54 17.36,21.5"></polygon>
            </svg>
          </Link>
        </div>

      </div>
    </header>
  );
}