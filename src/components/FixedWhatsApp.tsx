"use client";

import React from "react";

export default function FixedWhatsApp() {
  return (
    /* Detached from the screen wall with right-4 and made fully floating */
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 group font-sans animate-bounce-slow">
      <a
        href="https://wa.me/+8801755673862" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white h-12 w-12 group-hover:w-40 rounded-full shadow-xl transition-all duration-500 ease-out hover:from-emerald-600 hover:to-teal-600 border border-white/20 overflow-hidden"
        aria-label="Chat on WhatsApp"
      >
        <div className="flex items-center justify-center w-full px-3.5">
          {/* Sliding text banner - opens up cleanly only on hover */}
          <span className="text-xs font-bold uppercase tracking-wider max-w-0 overflow-hidden opacity-0 whitespace-nowrap transition-all duration-500 ease-out group-hover:max-w-[120px] group-hover:opacity-100 group-hover:mr-3 select-none">
            Chat With Us
          </span>

          {/* WhatsApp Branding Vector */}
          <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.411 0 11.915 0a11.815 11.815 0 0 1 8.415 3.479 11.751 11.751 0 0 1 3.466 8.419c-.004 6.557-5.354 11.907-11.857 11.907-2.001-.001-3.97-.51-5.713-1.479L0 24zm6.59-4.846c1.656.983 3.283 1.512 4.936 1.515 5.373 0 9.743-4.324 9.745-9.645a9.53 9.53 0 0 0-2.798-6.814 9.59 9.59 0 0 0-6.823-2.81c-5.372 0-9.74 4.33-9.744 9.652-.001 1.737.478 3.428 1.386 4.93L2.16 21.9l4.487-1.746zM17.51 14.86c-.28-.14-1.654-.816-1.91-.908-.255-.093-.442-.14-.627.14-.186.281-.722.908-.885 1.093-.162.186-.326.21-.605.069-.282-.14-1.189-.438-2.264-1.4a8.38 8.38 0 0 1-1.567-1.948c-.163-.28-.018-.431.122-.571.125-.127.28-.326.42-.489.14-.163.186-.28.28-.466.093-.186.046-.35-.023-.49-.069-.14-.627-1.51-.86-2.072-.225-.54-.454-.466-.626-.475-.163-.008-.35-.01-.534-.01s-.488.07-.743.35c-.255.281-.975.955-.975 2.33s1.02 2.705 1.162 2.892c.143.187 2.007 3.065 4.863 4.291.68.293 1.21.469 1.623.6a3.896 3.896 0 0 0 1.767.111c.535-.079 1.654-.675 1.887-1.326.232-.65.232-1.21.163-1.325-.07-.115-.256-.163-.536-.304z" />
          </svg>
        </div>
      </a>
    </div>
  );
}
