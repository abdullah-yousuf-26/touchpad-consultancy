"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const commitments = [
  "Experienced technical consultants",
  "Practical development sector knowledge",
  "Evidence-based recommendations",
  "Cost-effective consultancy services",
  "High-quality deliverables",
  "Timely completion",
  "Client-focused solutions",
  "Strong quality assurance mechanisms",
];

export default function CommitmentScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth scroll tracking across the 320vh height
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Darkens the background slightly as items pop in
  const bgDim = useTransform(scrollYProgress, [0, 0.25], [0.45, 0.8]);

  return (
    <section ref={containerRef} className="relative h-[320vh] bg-slate-50 py-12 sm:py-16">
      
      {/* Sticky Fullscreen Viewport Wrapper */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center p-4 sm:p-8 lg:p-12 overflow-hidden">
        
        {/* BIG CONTAINED FLOATING CARD CONTAINER */}
        <div className="relative w-full max-w-7xl h-[88vh] max-h-[780px] bg-slate-950 rounded-[32px] sm:rounded-[40px] border border-slate-800/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden flex items-center px-6 sm:px-12 lg:px-16">
          
          {/* 1. Background Image inside Card */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/assets/new_sec.png')` }}
          />

          {/* 2. Dynamic Dark Dim Layer */}
          <motion.div
            style={{ opacity: bgDim }}
            className="absolute inset-0 bg-slate-950/90 pointer-events-none"
          />

          {/* Ambient Glowing Mesh */}
          <div className="absolute -top-20 -left-20 w-[450px] h-[450px] bg-brand-teal/25 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-[450px] h-[450px] bg-emerald-500/20 blur-[140px] rounded-full pointer-events-none" />

          {/* 3. Content Matrix Grid */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
            
            {/* LEFT COLUMN: Fixed Value Proposition */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/15 border border-teal-400/90 text-white text-x font-bold uppercase tracking-widest backdrop-blur-md">
                
                Why TouchPad Consultancy
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight drop-shadow-md">
                Our Institutional Commitments & Delivery Standards.
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed drop-shadow">
                We combine rigorous development-sector methodologies with agile technical execution to ensure your programs meet global donor benchmarks and achieve measurable impact.
              </p>


            </div>

            {/* RIGHT COLUMN: 2-Column Checklist Matrix */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {commitments.map((item, index) => {
                  // Items appear sequentially between 0.05 and 0.85
                  const step = 0.8 / commitments.length;
                  const start = 0.05 + index * step;
                  const end = start + step * 0.9;

                  return (
                    <ScrollGridItem
                      key={index}
                      title={item}
                      index={index}
                      progress={scrollYProgress}
                      start={start}
                      end={end}
                    />
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

function ScrollGridItem({
  title,
  index,
  progress,
  start,
  end,
}: {
  title: string;
  index: number;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) {
  // Animate into view and STAY at full opacity (1) throughout the end of the scroll track
  const opacity = useTransform(progress, [start, end, 1], [0, 1, 1]);
  const y = useTransform(progress, [start, end, 1], [24, 0, 0]);
  const scale = useTransform(progress, [start, end, 1], [0.94, 1, 1]);

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-green-500 border border-white backdrop-blur-md shadow-lg hover:border-teal-400/40 hover:bg-green-400/95 transition-colors duration-200"
    >
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br from-brand-teal to-emerald-500 flex items-center justify-center text-slate-950 font-bold shrink-0 shadow-md shadow-teal-500/20">
        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <div className="flex flex-col">

        <span className="text-xs sm:text-sm font-semibold text-slate-100 leading-snug">
          {title}
        </span>
      </div>
    </motion.div>
  );
}