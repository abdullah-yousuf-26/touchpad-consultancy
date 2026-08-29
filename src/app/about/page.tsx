"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  Users,
  UserCheck,
  Smartphone,
  MapPin,
  Globe2,
  ShieldCheck,
  CheckCircle2,
  Building2,
} from "lucide-react";

const ColorBends = dynamic(() => import("@/components/ColorBends"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-slate-950" />,
});

// =========================================================================
// 1. OPTIMIZED IMAGE PLACEHOLDER WRAPPER
// =========================================================================
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

function OptimizedImage({
  src,
  alt,
  className = "",
  priority = false,
}: OptimizedImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`w-full h-full bg-slate-900/90 border border-teal-500/20 flex flex-col items-center justify-center p-4 text-center ${className}`}
      >
        <svg
          className="w-10 h-10 text-teal-400/60 mb-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        <span className="text-[10px] uppercase font-bold text-teal-400/80 tracking-wider">
          Activity Asset Placeholder
        </span>
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
// 2. SCROLL-REACTIVE JOURNEY TIMELINE COMPONENT
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
      metrics: "",
    },
    {
      year: "2025 - Q3",
      title: "Consolidating Technical Expertise Domains",
      subtitle: "SERVICE FRAMEWORK EXPANSION",
      desc: "Structured core expertise across 7 specialized domains including Proposal Writing, MEAL, Research, Capacity Development, Data Services, Strategy, and PSEAH.",
      metrics: "Impact Target: 7 Specialized Domains",
    },
    {
      year: "2026",
      title: "Operational & Field Capacity Deployment",
      subtitle: "DIGITAL INFRASTRUCTURE & NETWORK",
      desc: "Established nationwide consultant networks, trained enumerator pools, remote supervision pipelines, and secure cloud data collection frameworks.",
      metrics: "Impact Target: 64 Districts Operational Support",
    },
    {
      year: "PRESENT",
      title: "Trusted Development Partner",
      subtitle: "DONOR-GRADE PORTFOLIO DEVELOPMENT",
      desc: "Building impactful partnerships and delivering evidence-backed recommendations for assignments involving international organizations, UN bodies, and bilateral donors.",
      metrics: "Impact Target: 100% Quality Commitment",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalHeight = rect.height;
      const currentScroll = windowHeight / 2 - rect.top;
      const progress = Math.max(0, Math.min(100, (currentScroll / totalHeight) * 100));
      setScrollProgress(progress);

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
    <section
      ref={sectionRef}
      className="relative w-full py-28 px-6 z-10 bg-green-400 text-white overflow-hidden"
    >
      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-teal-900 uppercase tracking-wider">
            Evolutionary Milestones
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
            Our Organizational Journey
          </h2>
          <p className="text-sm text-slate-900">
            Scroll to trace our growth from inception toward becoming a global technical partner.
          </p>
        </div>

        {/* Timeline Frame */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-16">
          {/* Glowing Scroll Progress Line */}
          <div
            className="absolute left-[-2px] top-0 w-[2px] bg-gradient-to-b from-teal-400 via-emerald-400 to-cyan-400 shadow-[0_0_12px_rgba(20,184,166,0.8)] transition-all duration-150 ease-out"
            style={{ height: `${scrollProgress}%` }}
          />

          {journeyMilestones.map((milestone, idx) => {
            const isActive = activeNode >= idx;
            return (
              <div
                key={idx}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                className="relative pl-8 md:pl-12 transition-all duration-500"
              >
                {/* Timeline Node Marker */}
                <div
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                    isActive
                      ? "bg-teal-400 border-white scale-125 shadow-[0_0_16px_rgba(20,184,166,1)]"
                      : "bg-slate-900 border-slate-700"
                  }`}
                />

                {/* Year Badge */}
                <span
                  className={`md:absolute md:-left-32 md:top-0 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border inline-block mb-2 md:mb-0 transition-all duration-500 ${
                    isActive
                      ? "text-white-900 bg-teal-500/10 border-teal-500/30 shadow-md"
                      : "text-slate-500 bg-slate-900 border-slate-800"
                  }`}
                >
                  {milestone.year}
                </span>

                {/* Milestone Card */}
                <div
                  className={`p-6 md:p-8 rounded-2xl border transition-all duration-500 ${
                    isActive
                      ? "bg-slate-900/90 border-teal-500/40 shadow-[0_10px_30px_rgba(20,184,166,0.12)] -translate-y-1"
                      : "bg-slate-900/30 border-slate-800/80 opacity-60"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                      {milestone.title}
                    </h3>
                    <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest">
                      {milestone.subtitle}
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-5">
                    {milestone.desc}
                  </p>
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const activitySlides = [
    {
      title: "Field Surveys & Digital Data Collection",
      desc: "Deploying experienced enumerator pools equipped with digital data collection tools and real-time validation across Bangladesh.",
      image: "/assets/activity-slide-1.jpg",
    },
    {
      title: "Stakeholder Workshops & Capacity Building",
      desc: "Facilitating interactive learning sessions, training needs assessments, and strategic guidance for local and international partners.",
      image: "/assets/activity-slide-2.jpg",
    },
    {
      title: "MEAL & Baseline Research Studies",
      desc: "Conducting rigorous baseline evaluations, impact assessments, and theory of change designs for development sector programs.",
      image: "/assets/activity-slide-3.jpg",
    },
    {
      title: "Strategic Advisory & Policy Development",
      desc: "Providing evidence-driven consulting, logical framework development, and proposal writing for major donor opportunities.",
      image: "/assets/activity-slide-4.jpg",
    },
  ];

  const operationalCapacities = [
    {
      title: "Wide Consultant Network",
      desc: "Access to multidisciplinary sector specialists across Bangladesh.",
      image: "/assets/capacity-1.png",
      icon: (
        <Users className="w-7 h-7 text-teal-600 drop-shadow-[0_4px_10px_rgba(20,184,166,0.5)]" />
      ),
    },
    {
      title: "Experienced Enumerator Pool",
      desc: "Trained field staff for rapid baseline and endline primary data gathering.",
      image: "/assets/capacity-2.png",
      icon: (
        <UserCheck className="w-7 h-7 text-teal-600 drop-shadow-[0_4px_10px_rgba(20,184,166,0.5)]" />
      ),
    },
    {
      title: "Digital Data Collection Systems",
      desc: "Mobile-enabled questionnaire deployment with live error checking.",
      image: "/assets/capacity-3.png",
      icon: (
        <Smartphone className="w-7 h-7 text-teal-600 drop-shadow-[0_4px_10px_rgba(20,184,166,0.5)]" />
      ),
    },
    {
      title: "Remote Supervision Capability",
      desc: "GPS tracking and quality assurance protocols for remote field monitoring.",
      image: "/assets/capacity-4.png",
      icon: (
        <MapPin className="w-7 h-7 text-teal-600 drop-shadow-[0_4px_10px_rgba(20,184,166,0.5)]" />
      ),
    },
    {
      title: "Online Collaboration Platforms",
      desc: "Seamless interaction, knowledge sharing, and draft review workflows.",
      image: "/assets/capacity-5.png",
      icon: (
        <Globe2 className="w-7 h-7 text-teal-600 drop-shadow-[0_4px_10px_rgba(20,184,166,0.5)]" />
      ),
    },
    {
      title: "Secure Document Management",
      desc: "Strict data privacy, encryption, and anti-fraud operational safeguards.",
      image: "/assets/capacity-6.png",
      icon: (
        <ShieldCheck className="w-7 h-7 text-teal-600 drop-shadow-[0_4px_10px_rgba(20,184,166,0.5)]" />
      ),
    },
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
        .perspective-container {
          perspective: 1200px;
        }
        .team-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        .team-group:hover .team-card-inner {
          transform: rotateY(180deg);
        }
        .team-card-front,
        .team-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1rem;
        }
        .team-card-back {
          transform: rotateY(180deg);
        }
      `}</style>

      {/* =========================================================================
          HERO HEADER WITH THREE.JS COLOR BENDS MOTION LAYER
          ========================================================================= */}
      <section className="relative pt-44 pb-28 px-6 overflow-hidden border-b border-teal-500/20 text-white z-10 flex items-center justify-center bg-slate-950">
        {/* THREE.JS MOTION LAYER */}
        <div className="absolute inset-0 z-0">
          <ColorBends
            colors={["#042f2e", "#0f766e", "#14b8a6", "#10b981", "#022c22"]}
            rotation={60}
            speed={0.2}
            transparent={false}
            autoRotate={0.3}
            scale={1.1}
            frequency={1.2}
            warpStrength={1.2}
            mouseInfluence={0.7}
            parallax={0.5}
            noise={0.1}
            iterations={2}
            intensity={1.4}
            bandWidth={6}
            className="w-full h-full"
          />

          {/* Vignette Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950 pointer-events-none" />
        </div>

        {/* HERO CONTENT */}
        <div className="max-w-4xl mx-auto text-center space-y-5 relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-2xl leading-tight">
            Welcome to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-100">
              TouchPad Consultancy
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            We value integrity, accountability, evidence-based decision making, inclusion,
            innovation, professionalism, and overall client satisfaction.
          </p>
        </div>
      </section>

      {/* =========================================================================
          FEATURED SECTION: ABOUT US & INTERACTIVE ACTIVITIES CAROUSEL
          ========================================================================= */}
      <section className="relative w-full py-24 px-6 z-10 bg-white-300 text-white overflow-hidden border-b border-teal-500/20">
        <div className="max-w-6xl mx-auto space-y-16 relative z-10">
          {/* Section Header */}
          <div className="w-full space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-teal-500 leading-tight">
              About TouchPad Consultancy
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-800 leading-relaxed pt-2">
              <p>
                TouchPad Consultancy, established in 2025, is a Bangladesh-based consulting firm
                determined to provide high-quality proposal writing, donor reporting, research,
                technical advisory, monitoring and evaluation, learning, organizational
                development, website development, and capacity strengthening services to strengthen
                organizations and companies.
              </p>

              <p>
                Its consultants possess extensive professional experience in writing and
                implementing donor-funded projects and reports, conducting research, facilitating
                learning initiatives, designing development programs and websites with IT solutions,
                and supporting evidence-based decision-making across Bangladesh.
              </p>

              <p>
                We commit to provide technically sound, practical, and client-oriented consultancy
                services that generate measurable value for our partners. We value integrity,
                accountability, evidence-based decision making, inclusion, innovation,
                professionalism, and overall client satisfaction.
              </p>
            </div>
          </div>

          {/* Interactive Activity Showcase Slider */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-teal-700 uppercase tracking-widest">
                  Operations & Activity Showcase
                </h3>
                <p className="text-xs text-gray-900">
                  Explore our active field methodologies, research sessions, and advisory
                  engagements.
                </p>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsAutoplay(!isAutoplay)}
                  className={`text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-lg border transition ${
                    isAutoplay
                      ? "bg-teal-white text-green-500 border-green-500"
                      : "bg-slate-800 text-slate-400 border-slate-700"
                  }`}
                >
                  {isAutoplay ? "Autoplay ON" : "Autoplay OFF"}
                </button>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() =>
                      setCurrentSlide((prev) =>
                        prev === 0 ? activitySlides.length - 1 : prev - 1
                      )
                    }
                    className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-teal-500/20 border border-slate-700 hover:border-teal-500/50 flex items-center justify-center text-white transition"
                    aria-label="Previous Slide"
                  >
                    &larr;
                  </button>
                  <button
                    onClick={() =>
                      setCurrentSlide((prev) => (prev + 1) % activitySlides.length)
                    }
                    className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-teal-500/20 border border-slate-700 hover:border-teal-500/50 flex items-center justify-center text-white transition"
                    aria-label="Next Slide"
                  >
                    &rarr;
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
              </div>

              {/* Slide Content Side */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-12">
                  <span>
                    0{currentSlide + 1} / 0{activitySlides.length}
                  </span>
                  <h4 className="text-2xl font-black text-gray-950 leading-snug">
                    {activitySlides[currentSlide].title}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    {activitySlides[currentSlide].desc}
                  </p>
                </div>

                {/* Interactive Slide Selection Dots */}
                <div className="grid grid-cols-4 gap-2 pt-4 border-t border-slate-800">
                  {activitySlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentSlide === idx
                          ? "bg-teal-400 w-full"
                          : "bg-slate-800 hover:bg-slate-700"
                      }`}
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
          <div className="p-8 rounded-3xl bg-green-500 text-white border border-teal-500/20 shadow-2xl space-y-3 relative overflow-hidden group hover:border-green-900 transition duration-300">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl group-hover:bg-teal-500/20 transition duration-500" />
            <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              Our Vision
            </span>
            <h3 className="text-2xl font-extrabold text-white">Trusted Technical Partner</h3>
            <p className="text-sm text-white leading-relaxed">
              To become a trusted technical partner for organizations worldwide by delivering
              innovative, evidence-driven, and sustainable consulting solutions.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-green-500 text-white border border-teal-500/20 shadow-2xl space-y-3 relative overflow-hidden group hover:border-teal-900 transition duration-300">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition duration-500" />
            <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              Our Mission
            </span>
            <h3 className="text-2xl font-extrabold text-white">Strategic Excellence</h3>
            <p className="text-sm text-white leading-relaxed">
              To strengthen organizational programming through quality proposal writing, research,
              technical excellence, capacity development, and strategic advisory services.
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
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">
              Field Infrastructure
            </span>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">
              Operational Capacity Across Bangladesh
            </h2>
            <p className="text-sm text-slate-500">
              Touchpad Consultancy has the operational capacity to manage complex assignments
              nationwide through modern systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {operationalCapacities.map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group min-h-[220px] flex flex-col justify-between p-7"
              >
                {/* BACKGROUND IMAGE LAYER */}
                <div className="absolute inset-0 z-0">
                  <OptimizedImage src={item.image} alt={item.title} />
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] group-hover:bg-white/80 transition-all duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/15 to-teal-50/50" />
                </div>

                {/* CONTENT LAYER */}
                <div className="relative z-10 space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white via-slate-50 to-teal-50/60 border border-teal-500/20 shadow-[0_8px_20px_rgba(20,184,166,0.15)] flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition duration-300">
                    {item.icon}
                  </div>

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
          PARTNERSHIP AND AFFILIATION (ULTRA-SLOW 1:1 SQUARE CARDS & LOGOS)
          ========================================================================= */}
      <section className="relative w-full py-10 bg-slate-950 text-white border-t border-slate-800 overflow-hidden">
        {/* Soft Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-teal-500/5 blur-[160px] rounded-full pointer-events-none" />

        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center space-y-3 mb-16 px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Our Experince
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Trusted by bilateral agencies, experience of proposal writing and Donor report writing.
          </p>
        </div>

        {/* Gradient edge masks */}
        <div className="relative w-full space-y-14">
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-20 pointer-events-none" />

          {/* ==========================================
              ROW 2: IMMEDIATE PAST PARTNERS (RIGHT -> LEFT)
              ========================================== */}
          <div className="marquee-container space-y-4">
            <div className="max-w-6xl mx-auto px-6 flex flex-row-reverse items-center gap-2">
              <div className="h-[1px] flex-1 bg-gradient-to-l from-emerald-500/20 to-transparent" />
            </div>

            <div className="flex overflow-hidden">
              <div className="animate-marquee-rtl flex items-center gap-5 py-2">
                {[
                  { name: "Government of Canada", logo: "/assets/partners/canada.png" },
                  { name: "LG (Life's Good)", logo: "/assets/partners/lg.png" },
                  { name: "Korea Expressway Corp", logo: "/assets/partners/korea-express.png" },
                  { name: "Australian Aid", logo: "/assets/partners/australian-aid.png" },
                  { name: "KOICA", logo: "/assets/partners/koica.png" },
                  { name: "UNICEF", logo: "/assets/partners/unicef.png" },
                  { name: "World Food Programme", logo: "/assets/partners/wfp.png" },
                  { name: "MOFA Japan", logo: "/assets/partners/mofa-japan.png" },
                  { name: "Samsung C&T", logo: "/assets/partners/samsung.png" },
                  { name: "Embassy of Japan", logo: "/assets/partners/embassy-japan.png" },
                  { name: "UNESCO", logo: "/assets/partners/unesco.png" },
                  // Duplicated for loop
                  { name: "Government of Canada", logo: "/assets/partners/canada.png" },
                  { name: "LG (Life's Good)", logo: "/assets/partners/lg.png" },
                  { name: "Korea Expressway Corp", logo: "/assets/partners/korea-express.png" },
                  { name: "Australian Aid", logo: "/assets/partners/australian-aid.png" },
                  { name: "KOICA", logo: "/assets/partners/koica.png" },
                  { name: "UNICEF", logo: "/assets/partners/unicef.png" },
                  { name: "World Food Programme", logo: "/assets/partners/wfp.png" },
                  { name: "MOFA Japan", logo: "/assets/partners/mofa-japan.png" },
                  { name: "Samsung C&T", logo: "/assets/partners/samsung.png" },
                  { name: "Embassy of Japan", logo: "/assets/partners/embassy-japan.png" },
                  { name: "UNESCO", logo: "/assets/partners/unesco.png" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="w-44 sm:w-48 aspect-square p-4 rounded-2xl bg-slate-900/90 border border-emerald-500/25 shadow-lg flex flex-col items-center justify-between text-center group hover:border-emerald-400 hover:scale-105 transition-all duration-300 shrink-0"
                  >
                    {/* 1:1 SQUARE LOGO FRAME */}
                    <div className="relative w-full h-[68%] aspect-square bg-white rounded-xl p-2 flex items-center justify-center overflow-hidden border border-slate-700/50 shadow-inner group-hover:shadow-emerald-500/10">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 160px, 200px"
                        className="object-contain p-1.5 group-hover:grayscale-0 transition-all duration-300"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = "none";
                        }}
                      />
                      <Building2 className="w-8 h-8 text-slate-400 group-hover:text-emerald-600 transition" />
                    </div>

                    <span className="text-[11px] sm:text-xs font-bold text-slate-200 group-hover:text-emerald-300 transition-colors leading-tight line-clamp-2 mt-2">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. WEBSITE DEVELOPMENT & DIGITAL SOLUTIONS (ORBITAL TECH RADAR)
          ========================================================================= */}
      <section className="relative w-full py-24 px-6 z-10 bg-white border-t border-slate-200/80 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-teal-500 leading-tight">
              Website Development & Digital Solutions
            </h2>

            <p className="text-base text-slate-700 leading-relaxed font-normal">
              Web development and digital solutions, including responsive websites, web
              applications, e-commerce platforms, UI/UX, and AI-assisted applications. Our
              technical expertise includes{" "}
              <strong>
                React, Vite, Tailwind CSS, JavaScript, TypeScript, Node.js, Express.js, MongoDB,
              </strong>{" "}
              and <strong>Python</strong>, enabling us to deliver practical and scalable digital
              solutions.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Responsive Websites",
                "Web Applications",
                "E-Commerce",
                "UI/UX Design",
                "AI-Assisted Apps",
                "React / Vite",
                "Tailwind CSS",
                "Node & Express",
                "MongoDB",
                "Python",
              ].map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-green-400 border border-slate-200 text-xs font-bold text-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Concentric Orbit Radar */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[420px] sm:min-h-[480px]">
            <div className="orbit-radar relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full flex items-center justify-center">
              {/* Radial Center Glow */}
              <div className="absolute w-44 h-44 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* CENTER HUB */}
              <div className="relative z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-teal-400/60 shadow-[0_0_25px_rgba(20,184,166,0.35)] flex flex-col items-center justify-center text-center p-2">
                <Image
                  src="/assets/tech/tpc-logo.png"
                  alt="TouchPad"
                  width={54}
                  height={54}
                  className="object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>

              {/* INNER ORBIT RING */}
              <div className="absolute w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-full border border-dashed border-teal-500/30 animate-orbit-slow">
                {/* Tech 1: React (Top) */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 group">
                  <div className="animate-counter-rotate w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center p-2 hover:scale-125 transition-transform">
                    <Image
                      src="/assets/tech/react.png"
                      alt="React"
                      width={24}
                      height={24}
                      className="object-contain"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                  </div>
                </div>

                {/* Tech 2: TypeScript (Right) */}
                <div className="absolute top-1/2 -right-5 -translate-y-1/2 group">
                  <div className="animate-counter-rotate w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center p-2 hover:scale-125 transition-transform">
                    <Image
                      src="/assets/tech/typescript.png"
                      alt="TypeScript"
                      width={24}
                      height={24}
                      className="object-contain"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                  </div>
                </div>

                {/* Tech 3: Node.js (Bottom) */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 group">
                  <div className="animate-counter-rotate w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center p-2 hover:scale-125 transition-transform">
                    <Image
                      src="/assets/tech/nodejs.png"
                      alt="Node.js"
                      width={24}
                      height={24}
                      className="object-contain"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                  </div>
                </div>

                {/* Tech 4: Tailwind CSS (Left) */}
                <div className="absolute top-1/2 -left-5 -translate-y-1/2 group">
                  <div className="animate-counter-rotate w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center p-2 hover:scale-125 transition-transform">
                    <Image
                      src="/assets/tech/tailwind.png"
                      alt="Tailwind"
                      width={24}
                      height={24}
                      className="object-contain"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* OUTER ORBIT RING */}
              <div className="absolute w-[310px] h-[310px] sm:w-[380px] sm:h-[380px] rounded-full border border-dashed border-slate-300 animate-orbit-reverse">
                {/* Tech 5: Python */}
                <div className="absolute top-6 left-10 group">
                  <div className="animate-counter-rotate-reverse w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center p-2.5 hover:scale-125 transition-transform">
                    <Image
                      src="/assets/tech/python.png"
                      alt="Python"
                      width={26}
                      height={26}
                      className="object-contain"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                  </div>
                </div>

                {/* Tech 6: MongoDB */}
                <div className="absolute top-6 right-10 group">
                  <div className="animate-counter-rotate-reverse w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center p-2.5 hover:scale-125 transition-transform">
                    <Image
                      src="/assets/tech/mongodb.png"
                      alt="MongoDB"
                      width={35}
                      height={35}
                      className="object-contain"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                  </div>
                </div>

                {/* Tech 7: JavaScript */}
                <div className="absolute bottom-6 right-10 group">
                  <div className="animate-counter-rotate-reverse w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center p-2.5 hover:scale-125 transition-transform">
                    <Image
                      src="/assets/tech/javascript.png"
                      alt="JavaScript"
                      width={26}
                      height={26}
                      className="object-contain"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                  </div>
                </div>

                {/* Tech 8: Next.js */}
                <div className="absolute bottom-6 left-10 group">
                  <div className="animate-counter-rotate-reverse w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center p-2.5 hover:scale-125 transition-transform">
                    <Image
                      src="/assets/tech/nextjs.png"
                      alt="Next.js"
                      width={26}
                      height={26}
                      className="object-contain"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. ETHICS AND SAFEGUARDING (INDIVIDUAL FLOATING POINTS OVER IMAGE)
          ========================================================================= */}
      <section className="relative w-full py-24 px-6 z-10 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT SIDE: FEATURED IMAGE WITH INDIVIDUAL FLOATING PILL POINTS */}
          <div className="lg:col-span-5 relative w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
            {/* Image Container */}
            <div className="relative w-full h-[540px] sm:h-[580px]">
              <OptimizedImage
                src="/assets/safeguarding.jpeg"
                alt="Ethics and Safeguarding Standards"
                className="object-cover"
              />

              {/* Vignette Gradient for Clean Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/60 to-transparent" />
            </div>

            {/* Individual Items Layer */}
            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-10">
              <div className="flex flex-col gap-2 mt-48">
                {[
                  "PSEAH Zero-Tolerance Compliance",
                  "Gender-Sensitive & Inclusive Approaches",
                  "Child Safeguarding & Do No Harm",
                  "Strict Data Privacy & Confidentiality",
                  "Anti-Fraud & Financial Integrity",
                  "Informed Consent & Research Ethics",
                ].map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 px-4 py-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-teal-500/30 shadow-lg hover:border-teal-400/60 hover:bg-slate-900/95 transition-all duration-300"
                  >
                    <div className="w-6 h-6 rounded-full bg-teal-500/20 border border-teal-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-300" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-100 tracking-wide">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: DETAILED TEXTUAL CONTENT */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-teal-500 leading-tight">
                Ethics and Safeguarding
              </h2>
            </div>

            <p className="text-base text-slate-700 leading-relaxed font-normal">
              TouchPad Consultancy adhere to strict professional standards including Prevention
              of Sexual Exploitation, Abuse and Harassment (PSEAH), Gender-sensitive approaches,
              Child safeguarding, Confidentiality, Anti-fraud policy, Research ethics and Data
              privacy.
            </p>

            {/* In-depth Institutional Details */}
            <div className="space-y-4 pt-2 border-t border-slate-200">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-600 shrink-0" />
                  Protection from Sexual Exploitation & Harassment (PSEAH)
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed pl-4">
                  We enforce mandatory codes of conduct and anonymous whistleblowing mechanisms
                  across all field operational sites to ensure full protection for beneficiaries and
                  staff.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-600 shrink-0" />
                  Research Integrity & Field Participant Dignity
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed pl-4">
                  Every evaluation adheres to strict protocols of informed voluntary consent,
                  localized cultural sensitivity, non-discrimination, and verifiable data
                  integrity.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-600 shrink-0" />
                  Confidentiality, Anti-Fraud & Data Security
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed pl-4">
                  Enterprise-grade encryption for all primary respondent databases, institutional
                  documents, and financial audits guaranteeing transparent bilateral accountability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}