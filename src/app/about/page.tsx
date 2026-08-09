"use client";

import React from "react";

export default function AboutPage() {
  return (
    /* MAIN CANVAS: Clean white/slate-50 background permanently with rich dark typography */
    <main className="w-full min-h-screen font-sans bg-slate-50 text-slate-900 transition-colors duration-300 relative overflow-hidden">
      
      {/* Decorative theme background mesh gradients inherited from home layout assets */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-teal-500/5 via-transparent to-emerald-500/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.08),transparent_60%)] pointer-events-none" />

      {/* =========================================================================
          SECTION 1: THE VISIONARY HERO (Full Background Image Overlay)
          ========================================================================= */}
      <section className="relative pt-44 pb-28 px-6 overflow-hidden border-b border-slate-200/60 text-white z-10 flex items-center justify-center">
        {/* IMAGE PLACEHOLDER: Swap /assets/about-hero.png with your background asset */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/about-hero.png" 
            alt="TouchPad Operations Center Backdrop" 
            className="w-full h-full object-cover object-center fallback-bg-image"
            onError={(e) => {
              // Fallback style if asset is missing initially
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* Dark Overlay Mask and gradient mix to ensure text contrast */}
          <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/10 to-slate-950" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs uppercase font-bold tracking-widest text-teal-400 drop-shadow-md">
            Corporate Architecture
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-lg leading-tight">
            Architecting Digital Pipelines
          </h1>
          <p className="text-sm md:text-base text-teal-100/70 leading-relaxed max-w-2xl mx-auto drop-shadow">
            We bridge the gap between complex engineering syntax and seamless enterprise scaling, delivering production-grade digital transformation blueprints for global markets.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CORE COMPETENCIES GRID
          ========================================================================= */}
      <section className="relative w-full py-24 px-6 z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Engine Specialization</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Engineered for Rapid Performance</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              TouchPad Solutions provides premium development capabilities that transform workflows into high-converting, automated corporate assets.
            </p>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-950 text-white border border-teal-500/10 shadow-xl space-y-2">
              <div className="text-teal-400 font-bold text-lg">01 / MERN Stack</div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">Full-Stack Pipelines</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Robust JavaScript backend networks combined with responsive, scalable web frontends.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-950 text-white border border-teal-500/10 shadow-xl space-y-2">
              <div className="text-teal-400 font-bold text-lg">02 / Architecture</div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">Enterprise Solutions</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Custom, insulated business models optimized to deploy high-availability digital tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: THE ARCHITECTURAL PLAYBOOK (Our Workflow Pipeline)
          ========================================================================= */}
      <section className="relative w-full py-20 px-6 z-10 bg-slate-100/50 border-t border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Operational Sequence</span>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">The Blueprint Execution Pipeline</h2>
            <p className="text-sm text-slate-500">How we safely ingest, build, and deploy your engineering infrastructure mapping sprints.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "System auditing and thorough blueprint requirements analysis." },
              { step: "02", title: "Blueprint", desc: "Wireframing architecture lines and choosing secure nodes." },
              { step: "03", title: "Sprint Dev", desc: "Agile, production-grade MERN coding configurations." },
              { step: "04", title: "Staging QA", desc: "Insulated sandbox stress testing and security validation." },
              { step: "05", title: "Deployment", desc: "Live production grid launch on robust hosting channels." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-sm relative space-y-3 group hover:border-teal-500/40 transition-all duration-300">
                <span className="text-2xl font-black text-slate-200 group-hover:text-teal-500/20 transition-colors absolute top-4 right-4">{item.step}</span>
                <h4 className="text-sm font-bold text-slate-900 pt-2">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: THE OPERATIONAL NODE (5-Member Team Matrix Grid)
          ========================================================================= */}
      <section className="relative w-full py-24 px-6 z-10 overflow-hidden">
        {/* CSS 3D Flipping & Perspective Styles Injecetions */}
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

        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Human Capital</span>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">The Core Engineering Matrix</h2>
            <p className="text-sm text-slate-500">Our structured 5-person agency team driving development velocity.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 perspective-container">
            {[
              { id: 1, name: "Abdullah Yousuf", role: "Founder & Lead Dev" },
              { id: 2, name: "Team Node 02", role: "UI/UX Architecture" },
              { id: 3, name: "Team Node 03", role: "Full-Stack Engineer" },
              { id: 4, name: "Team Node 04", role: "Quality Analyst" },
              { id: 5, name: "Team Node 05", role: "Systems Operations" }
            ].map((member) => (
              <div key={member.id} className="team-group relative w-full h-72 rounded-2xl cursor-pointer">
                {/* GLOWING AMBIENT OUTLINE OUTSIDE LAYER */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-400 opacity-20 blur-xs team-group-hover:opacity-100 team-group-hover:blur-sm transition-all duration-500" />
                
                <div className="team-card-inner">
                  {/* FRONT PORTRAIT STATE */}
                  <div className="team-card-front bg-slate-950 border border-white/5 overflow-hidden flex flex-col justify-between p-4 shadow-lg text-white">
                    {/* IMAGE PLACEHOLDER: Swap src path with member professional photo assets */}
                    <div className="w-full h-44 rounded-xl bg-slate-900/80 border border-teal-500/10 overflow-hidden relative group">
                      <img 
                        src={`/assets/team-member${member.id}.png`} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          // Renders abstract wireframe profile graphic if image not found yet
                          e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%2014b8a6' stroke-width='1'><circle cx='12' cy='8' r='4'/><path d='M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2'/></svg>";
                        }}
                      />
                    </div>
                    <div className="pt-2 text-center truncate">
                      <h4 className="text-sm font-bold text-white tracking-tight">{member.name}</h4>
                      <p className="text-[10px] text-teal-400 font-medium uppercase mt-0.5">{member.role}</p>
                    </div>
                  </div>

                  {/* BACK TERMINAL DETAILS STATE */}
                  <div className="team-card-back bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950/40 text-white p-5 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                    <div className="absolute top-10 left-10 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
                    
                    <div className="space-y-2 relative z-10">
                      <span className="text-[9px] uppercase font-black text-teal-400 tracking-widest bg-teal-500/10 px-2 py-0.5 rounded-full">Node Bio</span>
                      <h4 className="text-sm font-bold text-white mt-1">{member.name}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">Specialized in scaling robust software components and validating architectural outputs efficiently.</p>
                    </div>

                    <div className="text-[10px] text-teal-300 font-semibold uppercase tracking-wider border-t border-teal-500/20 pt-2 relative z-10">
                      Active Status: Online
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CORE TRUST PRINCIPLES  */}
      <section className="relative w-full py-24 px-6 z-10 bg-white text-slate-900 border-t border-slate-200/60">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Trust Alignment</span>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">Enterprise Security & Design Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 shadow-sm hover:shadow-md transition duration-300">
              <h4 className="text-base font-bold text-slate-950">Data Integrity & Security</h4>
              <p className="text-xs text-slate-500 leading-relaxed">We insulate variables, enforce environment security patterns, and establish JWT tracking layers across every single software deployment module.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 shadow-sm hover:shadow-md transition duration-300">
              <h4 className="text-base font-bold text-slate-950">Scalability First</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Every database pipeline, indexing tree, and container routing architecture we ship is engineered to sustain heavy transaction metrics seamlessly.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 shadow-sm hover:shadow-md transition duration-300">
              <h4 className="text-base font-bold text-slate-950">Complete Architecture Transparency</h4>
              <p className="text-xs text-slate-500 leading-relaxed">We provide full visibility via active staging environments, continuous Vercel logs, and systematic sprint updates so you remain entirely in control.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
