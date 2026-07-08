import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      title: "Architectural Precision",
      description: "We don't just build; we engineer for performance, absolute security, and cross-border expansion."
    },
    {
      title: "Global Scale",
      description: "Our systems are explicitly designed to handle worldwide operational demand with zero data friction."
    },
    {
      title: "Database-Free Security",
      description: "Maximizing client privacy and speed by leveraging modern static-hybrid edge infrastructure paths."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white py-24 px-6 relative overflow-hidden">
      {/* Brand theme background ambient glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-teal/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-brand-green/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section 1: Hero Intro */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-green mb-3 block">
            Our Corporate Philosophy
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Engineering Trust Through Modern Frameworks.
          </h1>
          <p className="mt-6 text-xl text-slate-400 leading-relaxed">
            TouchPad Consultancy was established to bridge the gap between complex software architecture 
            and scalable corporate execution. We serve as senior tactical partners to enterprises globally, 
            deploying solutions that maximize infrastructure speed and bulletproof technical reliability.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-900 my-20" />

        {/* Section 2: Core Corporate Pillars Grid */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-12">
            The Standards We Mandate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="p-8 rounded-2xl bg-slate-900/40 border border-slate-900 hover:border-brand-teal/20 transition-all duration-300"
              >
                <div className="h-2 w-12 rounded-full bg-gradient-to-r from-brand-teal to-brand-green mb-6" />
                <h3 className="text-xl font-bold mb-3 text-slate-100">{value.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-900 my-20" />

        {/* Section 3: Final Corporate Action Context */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-slate-900/60 to-slate-900/20 border border-slate-900 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold">Ready to analyze your operational blueprint?</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Connect with our advisory board to run a full performance audit on your systems or explore customized scaling options.
            </p>
          </div>
          <Link
            href="/contact"
            className="h-12 inline-flex items-center justify-center rounded-xl bg-brand-teal px-6 font-semibold text-white hover:bg-brand-teal/90 transition flex-shrink-0 shadow-lg shadow-brand-teal/20"
          >
            Initiate Consultation
          </Link>
        </div>

      </div>
    </main>
  );
}
