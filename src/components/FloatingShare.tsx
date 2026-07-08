"use client";

import React, { useState } from "react";

export default function FloatingShare() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 font-sans"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="relative flex flex-col items-center">
        
        {/* 1. THE POP-UP TOOLTIP WINDOW */}
        <div 
          className={`absolute bottom-[68px] left-1/2 -translate-x-1/2 bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-2xl transition-all duration-300 ease-out backdrop-blur-md border border-slate-200/50 dark:border-slate-800 flex items-center gap-3 ${
            isOpen 
              ? "opacity-100 scale-100 translate-y-0 visible pointer-events-auto" 
              : "opacity-0 scale-95 translate-y-2 invisible pointer-events-none"
          }`}
        >
          {/* Invisible bridge container to catch the mouse cursor and prevent early closing */}
          <div className="absolute -bottom-4 left-0 right-0 h-4 bg-transparent" />

          {/* Subtle triangular pointer element */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white dark:border-t-slate-900 filter drop-shadow-sm" />


          {/* Twitter / X Node */}
          <a 
            href="https://x.com/TConsultany" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-11 h-11 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-br hover:from-sky-400 hover:to-gray-800 hover:text-gray-900"
            aria-label="Share on X"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* Facebook Node */}
          <a 
            href="https://www.facebook.com/share/1SJXNFGLfn/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-11 h-11 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-br hover:from-blue-300 hover:to-blue-800 hover:text-white"
            aria-label="Share on Facebook"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>

          {/* LinkedIn Node */}
          <a 
            href="https://www.linkedin.com/company/touchpad-consultancy/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-11 h-11 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-br hover:from-teal-600 hover:to-white hover:text-blue-800"
            aria-label="Share on LinkedIn"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>

        {/* 2. THE FLOATING GRADIENT BUTTON CONTEXT */}
        <button 
          className="flex items-center justify-center bg-gradient-to-r from-brand-teal to-brand-green text-white px-6 py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer border border-white/10"
        >
          <span className="text-base font-bold tracking-wide mr-3 select-none group-hover:tracking-wider transition-all duration-300">
            Social
          </span>
          <svg
            className="w-5 h-5 fill-current transform group-hover:rotate-180 transition-transform duration-500 ease-out"
            viewBox="0 0 24 24"
          >
            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
          </svg>
        </button>

      </div>
    </div>
  );
}
