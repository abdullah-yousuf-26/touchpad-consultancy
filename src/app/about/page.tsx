"use client";

import { Users, UserCheck, Smartphone, MapPin, Globe2, ShieldCheck } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

// =========================================================================
// 1. OPTIMIZED IMAGE PLACEHOLDER WRAPPER (Fast Loading & Zero Layout Shift)
// =========================================================================
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

function OptimizedImage({ src, alt, className = "", priority = false }: OptimizedImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`w-full h-full bg-slate-900/90 border border-teal-500/20 flex flex-col items-center justify-center p-4 text-center ${className}`}>
        <svg className="w-10 h-10 text-teal-400/60 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
        <span className="text-[10px] uppercase font-bold text-teal-400/80 tracking-wider">Activity Asset Placeholder</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={`object-cover ${className}`}
      onError={() => setHasError(true)}
    />
  );
}

// =========================================================================
// 2. SCROLL-REACTIVE JOURNEY TIMELINE COMPONENT (Top-Level Scope)
// =========================================================================
function JourneyTimelineSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeNode, setActiveNode] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const journeyMilestones = [
    {
      year: "2025",
      title: "Foundation & Vision Establishment",
      subtitle: "OFFICIAL INSTITUTIONAL LAUNCH",
      desc: "TouchPad Consultancy was formally established in Dhaka, Bangladesh, uniting expert consultants to serve NGOs and international development partners with high-quality advisory services.",
      metrics: "Impact Target: Nationwide Coverage Reach"
    },
    {
      year: "2025 - Q3",
      title: "Consolidating Technical Expertise Domains",
      subtitle: "SERVICE FRAMEWORK EXPANSION",
      desc: "Structured core expertise across 7 specialized domains including Proposal Writing, MEAL, Research, Capacity Development, Data Services, Strategy, and PSEAH.",
      metrics: "Impact Target: 7 Specialized Domains"
    },
    {
      year: "2026",
      title: "Operational & Field Capacity Deployment",
      subtitle: "DIGITAL INFRASTRUCTURE & NETWORK",
      desc: "Established nationwide consultant networks, trained enumerator pools, remote supervision pipelines, and secure cloud data collection frameworks.",
      metrics: "Impact Target: 64 Districts Operational Support"
    },
    {
      year: "PRESENT",
      title: "Trusted Development Partner",
      subtitle: "DONOR-GRADE PORTFOLIO DEVELOPMENT",
      desc: "Building impactful partnerships and delivering evidence-backed recommendations for assignments involving international organizations, UN bodies, and bilateral donors.",
      metrics: "Impact Target: 100% Quality Commitment"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate fill line progress percentage (0 to 100%)
      const totalHeight = rect.height;
      const currentScroll = windowHeight / 2 - rect.top;
      const progress = Math.max(0, Math.min(100, (currentScroll / totalHeight) * 100));
      setScrollProgress(progress);

      // Determine which node is currently nearest to viewport center
      itemRefs.current.forEach((el, index) => {
        if (el) {
          const itemRect = el.getBoundingClientRect();
          if (itemRect.top <= windowHeight * 0.6) {
            setActiveNode(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-28 px-6 z-10 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">Evolutionary Milestones</span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">Our Organizational Journey</h2>
          <p className="text-sm text-slate-400">Scroll to trace our growth from inception toward becoming a global technical partner.</p>
        </div>

        {/* Timeline Frame */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-16">
          
          {/* DYNAMIC GLOWING SCROLL PROGRESS LINE */}
          <div 
            className="absolute left-[-2px] top-0 w-[2px] bg-gradient-to-b from-teal-400 via-emerald-400 to-cyan-400 shadow-[0_0_12px_rgba(20,184,166,0.8)] transition-all duration-150 ease-out"
            style={{ height: `${scrollProgress}%` }}
          />

          {journeyMilestones.map((milestone, idx) => {
            const isActive = activeNode >= idx;
            return (
              <div 
                key={idx} 
                ref={(el) => { itemRefs.current[idx] = el; }}
                className="relative pl-8 md:pl-12 transition-all duration-500"
              >
                {/* TIMELINE NODE MARKER */}
                <div 
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                    isActive 
                      ? "bg-teal-400 border-white scale-125 shadow-[0_0_16px_rgba(20,184,166,1)]" 
                      : "bg-slate-900 border-slate-700"
                  }`} 
                />

                {/* YEAR BADGE */}
                <span 
                  className={`md:absolute md:-left-32 md:top-0 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border inline-block mb-2 md:mb-0 transition-all duration-500 ${
                    isActive 
                      ? "text-teal-400 bg-teal-500/10 border-teal-500/30 shadow-md" 
                      : "text-slate-500 bg-slate-900 border-slate-800"
                  }`}
                >
                  {milestone.year}
                </span>

                {/* MILESTONE CARD */}
                <div 
                  className={`p-6 md:p-8 rounded-2xl border transition-all duration-500 ${
                    isActive 
                      ? "bg-slate-900/90 border-teal-500/40 shadow-[0_10px_30px_rgba(20,184,166,0.12)] -translate-y-1" 
                      : "bg-slate-900/30 border-slate-800/80 opacity-60"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">{milestone.title}</h3>
                    <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest">{milestone.subtitle}</span>
                  </div>
                  
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-5">{milestone.desc}</p>
                  
                  <div className="inline-flex items-center gap-2 text-[11px] font-bold text-teal-400 bg-slate-950 px-3.5 py-1.5 rounded-lg border border-teal-500/20">
                    <span className={`w-2 h-2 rounded-full ${isActive ? "bg-emerald-400 animate-pulse" : "bg-slate-700"}`} />
                    {milestone.metrics}
                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

// =========================================================================
// 3. MAIN ABOUT PAGE COMPONENT
// =========================================================================
export default function AboutPage() {
  // Activity Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const activitySlides = [
    {
      title: "Field Surveys & Digital Data Collection",
      tag: "Field Operations",
      desc: "Deploying experienced enumerator pools equipped with digital data collection tools and real-time validation across Bangladesh.",
      image: "/assets/activity-slide-1.png"
    },
    {
      title: "Stakeholder Workshops & Capacity Building",
      tag: "Capacity Development",
      desc: "Facilitating interactive learning sessions, training needs assessments, and strategic guidance for local and international partners.",
      image: "/assets/activity-slide-2.png"
    },
    {
      title: "MEAL & Baseline Research Studies",
      tag: "Research & MEAL",
      desc: "Conducting rigorous baseline evaluations, impact assessments, and theory of change designs for development sector programs.",
      image: "/assets/activity-slide-3.png"
    },
    {
      title: "Strategic Advisory & Policy Development",
      tag: "Technical Advisory",
      desc: "Providing evidence-driven consulting, logical framework development, and proposal writing for major donor opportunities.",
      image: "/assets/activity-slide-4.png"
    }
  ];

  const whyChooseUs = [
    {
      icon: "M12 6v6m0 0v6m0-6h6m-6 0H6",
      title: "Experienced Technical Consultants",
      desc: "Consultants with extensive hands-on history in designing and implementing donor-funded projects."
    },
    {
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Practical Sector Knowledge",
      desc: "Deep familiarity with local socio-economic dynamics, field constraints, and institutional development frameworks."
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Evidence-Based Recommendations",
      desc: "Data-driven research methodologies ensuring actionable, objective, and realistic policy guidance."
    },
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Cost-Effective Consultancy",
      desc: "Maximizing institutional value and budget efficiency without compromising deliverable quality."
    },
    {
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
      title: "High-Quality Deliverables",
      desc: "Rigorously peer-reviewed technical reports, logical frameworks, and baseline evaluation documents."
    },
    {
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Timely Completion & Client Focus",
      desc: "Strict adherence to project schedules, agile communication, and customized client-oriented solutions."
    }
  ];

  const operationalCapacities = [
    { 
      title: "Wide Consultant Network", 
      desc: "Access to multidisciplinary sector specialists across Bangladesh.", 
      image: "/assets/capacity-1.png",
      icon: <Users className="w-7 h-7 text-teal-600 drop-shadow-[0_4px_10px_rgba(20,184,166,0.5)]" />
    },
    { 
      title: "Experienced Enumerator Pool", 
      desc: "Trained field staff for rapid baseline and endline primary data gathering.", 
      image: "/assets/capacity-2.png",
      icon: <UserCheck className="w-7 h-7 text-teal-600 drop-shadow-[0_4px_10px_rgba(20,184,166,0.5)]" />
    },
    { 
      title: "Digital Data Collection Systems", 
      desc: "Mobile-enabled questionnaire deployment with live error checking.", 
      image: "/assets/capacity-3.png",
      icon: <Smartphone className="w-7 h-7 text-teal-600 drop-shadow-[0_4px_10px_rgba(20,184,166,0.5)]" />
    },
    { 
      title: "Remote Supervision Capability", 
      desc: "GPS tracking and quality assurance protocols for remote field monitoring.", 
      image: "/assets/capacity-4.png",
      icon: <MapPin className="w-7 h-7 text-teal-600 drop-shadow-[0_4px_10px_rgba(20,184,166,0.5)]" />
    },
    { 
      title: "Online Collaboration Platforms", 
      desc: "Seamless interaction, knowledge sharing, and draft review workflows.", 
      image: "/assets/capacity-5.png",
      icon: <Globe2 className="w-7 h-7 text-teal-600 drop-shadow-[0_4px_10px_rgba(20,184,166,0.5)]" />
    },
    { 
      title: "Secure Document Management", 
      desc: "Strict data privacy, encryption, and anti-fraud operational safeguards.", 
      image: "/assets/capacity-6.png",
      icon: <ShieldCheck className="w-7 h-7 text-teal-600 drop-shadow-[0_4px_10px_rgba(20,184,166,0.5)]" />
    }
  ];

  const donorPartners = [
    "UNICEF", "WFP", "FCDO", "IIED", "REDAA", 
    "KOICA", "MOFA Japan", "UNESCO BNCU", "Embassy of Japan"
  ];

  // Autoplay Slider Timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoplay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % activitySlides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoplay, activitySlides.length]);

  return (
    <main className="w-full min-h-screen font-sans bg-slate-50 text-slate-900 transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Mesh */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-teal-500/5 via-transparent to-emerald-500/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.08),transparent_60%)] pointer-events-none" />

      {/* 3D Flip & Timeline Styles */}
      <style jsx global>{`
        .perspective-container { perspective: 1200px; }
        .team-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        .team-group:hover .team-card-inner { transform: rotateY(180deg); }
        .team-card-front, .team-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1rem;
        }
        .team-card-back { transform: rotateY(180deg); }
      `}</style>

      {/* =========================================================================
          HERO HEADER
          ========================================================================= */}
      <section className="relative pt-44 pb-28 px-6 overflow-hidden border-b border-slate-200/60 text-white z-10 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="/assets/Hero3.png"
            alt="TouchPad Consultancy Corporate Operations"
            priority={true}
          />
          <div className="absolute inset-0 bg-slate-550/95 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-900" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">

          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-lg leading-tight">
            Evidence-Driven Development Consulting
          </h1>
          <p className="text-sm md:text-base text-teal-100/70 leading-relaxed max-w-2xl mx-auto drop-shadow">
            Delivering high-quality proposal writing, research, technical advisory, MEAL, and organizational development services across Bangladesh.
          </p>
        </div>
      </section>

      {/* =========================================================================
          FEATURED SECTION: ABOUT US & INTERACTIVE ACTIVITIES CAROUSEL
          ========================================================================= */}
      <section className="relative w-full py-24 px-6 z-10 bg-white-300 text-white overflow-hidden border-b border-teal-500/20">
        <div className="max-w-6xl mx-auto space-y-16 relative z-10">
          
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xl font-bold text-teal-700 uppercase tracking-widest ">
                Institutional Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-teal-400 leading-tight">
                About TouchPad Consultancy
              </h2>
              <p className="text-sm text-gray-950 leading-relaxed max-w-2xl">
                Touchpad Consultancy is a Bangladesh-based consulting firm established to provide high-quality proposal writing, research, technical advisory, monitoring and evaluation, learning, organizational development, and capacity strengthening services to development organizations.
              </p>
            </div>
          </div>

          {/* Interactive Activity Showcase Slider */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-teal-700 uppercase tracking-widest">Operations & Activity Showcase</h3>
                <p className="text-xs text-gray-900">Explore our active field methodologies, research sessions, and advisory engagements.</p>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsAutoplay(!isAutoplay)}
                  className={`text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-lg border transition ${isAutoplay ? "bg-teal-white text-green-500 border-green-500" : "bg-slate-800 text-slate-400 border-slate-700"}`}
                >
                  {isAutoplay ? "Autoplay ON" : "Autoplay OFF"}
                </button>
                
                <div className="flex items-center gap-1.5">
                  <button 
                    onClick={() => setCurrentSlide((prev) => (prev === 0 ? activitySlides.length - 1 : prev - 1))}
                    className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-teal-500/20 border border-slate-700 hover:border-teal-500/50 flex items-center justify-center text-white transition"
                    aria-label="Previous Slide"
                  >
                    ←
                  </button>
                  <button 
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % activitySlides.length)}
                    className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-teal-500/20 border border-slate-700 hover:border-teal-500/50 flex items-center justify-center text-white transition"
                    aria-label="Next Slide"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>

            {/* Main Active Slide Display Frame */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl border-4 border-teal-500/20 p-6 md:p-8 shadow-2xl relative overflow-hidden">
              {/* Slide Image Side */}
              <div className="lg:col-span-7 relative w-full h-72 md:h-96 rounded-2xl overflow-hidden border border-slate-800 group">
                <OptimizedImage
                  src={activitySlides[currentSlide].image}
                  alt={activitySlides[currentSlide].title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-teal-500/90 text-slate-950 text-[10px] font-black uppercase tracking-wider rounded-md backdrop-blur-md">
                  {activitySlides[currentSlide].tag}
                </span>
              </div>

              {/* Slide Content Side */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-12">
                  <span className="">
                    {currentSlide + 1} / 0{activitySlides.length}
                  </span>
                  <h4 className="text-2xl font-black text-gray-950 leading-snug">
                    {activitySlides[currentSlide].title}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    {activitySlides[currentSlide].desc}
                  </p>
                </div>

                {/* Interactive Slide Selection Dots & Thumbnails */}
                <div className="grid grid-cols-4 gap-2 pt-4 border-t border-slate-800">
                  {activitySlides.map((slide, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === idx ? "bg-teal-400 w-full" : "bg-slate-800 hover:bg-slate-700"}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          VISION & MISSION
          ========================================================================= */}
      <section className="relative w-full py-20 px-6 z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-slate-950 text-white border border-teal-500/20 shadow-2xl space-y-3 relative overflow-hidden group hover:border-teal-500/40 transition duration-300">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl group-hover:bg-teal-500/20 transition duration-500" />
            <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">Our Vision</span>
            <h3 className="text-2xl font-extrabold text-white">Trusted Technical Partner</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To become a trusted technical partner for organizations worldwide by delivering innovative, evidence-driven, and sustainable consulting solutions.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-950 text-white border border-teal-500/20 shadow-2xl space-y-3 relative overflow-hidden group hover:border-teal-500/40 transition duration-300">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition duration-500" />
            <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">Our Mission</span>
            <h3 className="text-2xl font-extrabold text-white">Strategic Excellence</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To strengthen organizational programming through quality proposal writing, research, technical excellence, capacity development, and strategic advisory services.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OPERATIONAL CAPACITY SECTION (3D GLASSMORPHISM & LUCIDE ICONS)
          ========================================================================= */}
      <section className="relative w-full py-20 px-6 z-10 bg-slate-100/50 border-t border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Field Infrastructure</span>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">Operational Capacity Across Bangladesh</h2>
            <p className="text-sm text-slate-500">Touchpad Consultancy has the operational capacity to manage complex assignments nationwide through modern systems.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {operationalCapacities.map((item, idx) => (
              <div 
                key={idx} 
                className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group min-h-[220px] flex flex-col justify-between p-7"
              >
                {/* BACKGROUND IMAGE LAYER */}
                <div className="absolute inset-0 z-0">
                  <OptimizedImage
                    src={item.image}
                    alt={item.title}
                  />
                  {/* WHITE SEMI-TRANSPARENT MASK FOR 100% READABILITY */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] group-hover:bg-white/80 transition-all duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/15 to-teal-50/50" />
                </div>

                {/* CONTENT LAYER */}
                <div className="relative z-10 space-y-5">
                  {/* 3D FLOATING ICON CONTAINER */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white via-slate-50 to-teal-50/60 border border-teal-500/20 shadow-[0_8px_20px_rgba(20,184,166,0.15)] flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition duration-300">
                    {item.icon}
                  </div>

                  {/* TEXT DETAILS */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-extrabold text-slate-900 leading-snug group-hover:text-teal-700 transition">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCROLL-REACTIVE JOURNEY TIMELINE
          ========================================================================= */}
      <JourneyTimelineSection />

      {/* =========================================================================
          WHY TOUCHPAD CONSULTANCY
          ========================================================================= */}
      <section className="relative w-full py-24 px-6 z-10 bg-slate-50">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Value Proposition</span>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">Why TouchPad Consultancy</h2>
            <p className="text-sm text-slate-500">We are committed to delivering practical, high-value consulting solutions through rigorous quality assurance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 group">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h4 className="text-base font-bold text-slate-900">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          DONOR EXPERIENCE MATRIX
          ========================================================================= */}
      <section className="relative w-full py-16 px-6 bg-slate-950 text-white z-10 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">Collective Experience</span>
          <h3 className="text-2xl font-extrabold text-white">Assignments Involving Leading Global Partners</h3>
          
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 pt-2">
            {donorPartners.map((donor, idx) => (
              <span key={idx} className="px-5 py-2.5 rounded-full bg-slate-900 border border-teal-500/20 text-xs font-bold text-teal-100 shadow-md hover:border-teal-400/50 hover:bg-slate-800 transition duration-300">
                {donor}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          ETHICS & GOVERNANCE
          ========================================================================= */}
      <section className="relative w-full py-20 px-6 z-10 bg-white border-t border-slate-200/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Ethics & Governance</span>
            <h2 className="text-3xl font-black text-slate-900">Strict Safeguarding & Professional Standards</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              We commit to technically sound, practical, and client-oriented consultancy services that generate measurable value while adhering strictly to ethical guidelines.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-bold text-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500" />
              PSEAH Compliance
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-bold text-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500" />
              Gender-Sensitive
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-bold text-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500" />
              Child Safeguarding
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-bold text-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500" />
              Anti-Fraud & Privacy
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
