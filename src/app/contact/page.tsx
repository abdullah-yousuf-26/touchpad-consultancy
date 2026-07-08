"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, you will simply point your form action to a database-free handler like Formspree or Resend API!
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white py-24 px-6 relative overflow-hidden flex items-center">
      {/* Subtle brand theme gradient glow */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-teal/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        
        {/* Left Side: Corporate Text Content */}
        <div className="flex flex-col justify-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-green mb-3">
            Global Engagement
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Let's Build Something Securely.
          </h1>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            Ready to optimize your architecture or initiate a comprehensive technical transition? 
            Fill out the operational brief, and our advisory agents will respond within one business day.
          </p>

          <div className="mt-10 space-y-4 text-sm text-slate-500">
            <p className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand-teal" /> 
              Direct secure channels routing globally.
            </p>
            <p className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand-green" /> 
              Zero-database architectural framework for absolute client privacy.
            </p>
          </div>
        </div>

        {/* Right Side: Interactive Brand Form Box */}
        <div className="bg-slate-900/40 border border-slate-900 rounded-2xl p-8 md:p-10 backdrop-blur-md shadow-2xl hover:border-slate-800/60 transition duration-300">
          {submitted ? (
            <div className="text-center py-12">
              <div className="h-12 w-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </div>
              <h2 className="text-2xl font-bold mt-6">Briefing Logged</h2>
              <p className="mt-3 text-slate-400 text-sm">
                Thank you. Your strategic submission has successfully crossed our secure layer.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full h-11 bg-slate-950/60 border border-slate-800 rounded-xl px-4 text-sm text-white focus:outline-none focus:border-brand-teal transition"
                  placeholder="e.g., Alex Carter"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Corporate Email
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full h-11 bg-slate-950/60 border border-slate-800 rounded-xl px-4 text-sm text-white focus:outline-none focus:border-brand-teal transition"
                  placeholder="alex@company.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  className="w-full h-11 bg-slate-950/60 border border-slate-800 rounded-xl px-4 text-sm text-white focus:outline-none focus:border-brand-teal transition"
                  placeholder="TouchPad Solutions"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Operational Requirements
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-brand-teal transition resize-none"
                  placeholder="Describe your technical roadmap timeline..."
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-gradient-to-r from-brand-teal to-brand-green font-semibold text-white hover:opacity-90 transition shadow-lg"
              >
                Transmit Briefing Request
              </button>
            </form>
          )}
        </div>

      </div>
    </main>
  );
}
