import Link from "next/link";

export default function Footer() {
  return (
    /* Outer wrapper holds your premium logo gradient combined with an atmospheric image background asset */
    <footer className="w-full bg-gradient-to-br from-brand-teal via-teal-950 to-brand-green py-10 px-6 text-white/80 relative overflow-hidden border-t border-teal-500/20">
      
      {/* Background Image Layer blended natively via overlay opacity to capture the exact vibe of image_db1d9c.jpg */}
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-25 pointer-events-none"
        style={{ backgroundImage: "url('/assets/footer-bg.png')" }}
      />
      
      {/* Dark tint mask layer ensures copy links stay completely crisp and readable */}
      <div className="absolute inset-0 bg-slate-950/40 pointer-events-none" />

      {/* FIXED: This grid container wraps all 4 columns cleanly */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-sm relative z-10 mb-16">
        
        {/* Column 1 & 2: Core Identity */}
        <div className="space-y-4 md:col-span-2">
          <h4 className="text-white font-black text-2xl tracking-tight">
            <span className="text-brand-green">TouchPad</span> <span className="text-brand-teal font-medium">Consultancy</span>
          </h4>
          <p className="text-x text-white-100/70 leading-relaxed max-w-sm">
            Providing secure architectural engineering blueprints and scalable enterprise IT transitions globally.
          </p>
          
          {/* Social Platforms Ingestion Array with Added WhatsApp Node */}
          <div className="pt-2">
            <h5 className="text-white font-bold uppercase text-[12px] tracking-wider mb-3">Connect With Us</h5>
            <div className="flex items-center gap-5 text-teal-200">
              
              {/* WhatsApp Icon Node */}
              <a 
                href="https://wa.me/+8801755673862" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-emerald-400 hover:scale-110 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.411 0 11.915 0a11.815 11.815 0 0 1 8.415 3.479 11.751 11.751 0 0 1 3.466 8.419c-.004 6.557-5.354 11.907-11.857 11.907-2.001-.001-3.97-.51-5.713-1.479L0 24zm6.59-4.846c1.656.983 3.283 1.512 4.936 1.515 5.373 0 9.743-4.324 9.745-9.645a9.53 9.53 0 0 0-2.798-6.814 9.59 9.59 0 0 0-6.823-2.81c-5.372 0-9.74 4.33-9.744 9.652-.001 1.737.478 3.428 1.386 4.93L2.16 21.9l4.487-1.746zM17.51 14.86c-.28-.14-1.654-.816-1.91-.908-.255-.093-.442-.14-.627.14-.186.281-.722.908-.885 1.093-.162.186-.326.21-.605.069-.282-.14-1.189-.438-2.264-1.4a8.38 8.38 0 0 1-1.567-1.948c-.163-.28-.018-.431.122-.571.125-.127.28-.326.42-.489.14-.163.186-.28.28-.466.093-.186.046-.35-.023-.49-.069-.14-.627-1.51-.86-2.072-.225-.54-.454-.466-.626-.475-.163-.008-.35-.01-.534-.01s-.488.07-.743.35c-.255.281-.975.955-.975 2.33s1.02 2.705 1.162 2.892c.143.187 2.007 3.065 4.863 4.291.68.293 1.21.469 1.623.6a3.896 3.896 0 0 0 1.767.111c.535-.079 1.654-.675 1.887-1.326.232-.65.232-1.21.163-1.325-.07-.115-.256-.163-.536-.304z" />
                </svg>
              </a>

              {/* Facebook Icon */}
              <a 
                href="https://www.facebook.com/share/1SJXNFGLfn/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-800 hover:scale-110 transition-all duration-200"
                aria-label="Facebook"
              >
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* LinkedIn Icon */}
              <a 
                href="https://www.linkedin.com/company/touchpad-consultancy/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-500 hover:scale-110 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* X Icon */}
              <a 
                href="https://x.com/TConsultany" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-gray-900 hover:scale-110 transition-all duration-200"
                aria-label="X (Twitter)"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

            </div>
          </div>
        </div>

        {/* Column 3: Quick Links Directory */}
        <div className="flex flex-col space-y-2">
          <h5 className="text-white font-bold uppercase text-x tracking-wider mb-2">Quick Links</h5>
          <Link href="/" className="text-x text-teal-100/80 hover:text-white transition">Home</Link>
          <Link href="/services" className="text-x text-teal-100/80 hover:text-white transition">Services</Link>
          <Link href="/about" className="text-x text-teal-100/80 hover:text-white transition">About</Link>
          <Link href="/career" className="text-x text-teal-100/80 hover:text-white transition">Career</Link>
        </div>

        {/* Column 4: Sister Ecosystems */}
        <div className="flex flex-col space-y-2">
          <h5 className="text-white font-bold uppercase text-x tracking-wider mb-2">Ecosystem</h5>
          <a href="https://main.touchpad-solutions.com/" target="_blank" rel="noopener noreferrer" className="text-x text-teal-100/80 hover:text-white transition">TouchPad Solutions</a>
          <a href="https://learning.touchpad-solutions.com/" target="_blank" rel="noopener noreferrer" className="text-x text-teal-100/80 hover:text-white transition">TouchPad Learning Center</a>
        </div>

        {/* Column 5: Contact Intelligence Column with Individual Layout Matrix */}
        <div className="space-y-4 md:col-span-1">
          <h5 className="text-white font-bold uppercase text-x tracking-wider mb-2">
            Contact
          </h5>
          
          <div className="space-y-3.5 text-xs">
            
            {/* Row 1: Operational Base */}
            <div className="flex items-start gap-3 group/item">
              <div className="w-6 h-6 rounded bg-teal-500/10 flex items-center justify-center text-brand-green group-hover/item:text-brand-teal transition-colors shrink-0 mt-0.5">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C7.58 0 4 3.58 4 8c0 5.25 7 14 7 14s7-8.75 7-14c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                </svg>
              </div>
              <div className="space-y-0.5">
                <p className="text-[12px] uppercase font-bold tracking-wider text-teal-400">Address</p>
                <a href="https://maps.app.goo.gl/LNccdhrQn7tkX3Ws5" className="text-teal-100/80 hover:text-white transition duration-200 block break-all">
                Dhaka, Bangladesh
                </a>
              </div>
            </div>

            {/* Row 2: Secure Router */}
            <div className="flex items-start gap-3 group/item">
              <div className="w-6 h-6 rounded bg-teal-500/10 flex items-center justify-center text-brand-green group-hover/item:text-brand-teal transition-colors shrink-0 mt-0.5">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className="space-y-0.5">
                <p className="text-[12px] uppercase font-bold tracking-wider text-teal-400">Email</p>
                <a href="mailto:info@touchpad-solutions.com" className="text-teal-100/80 hover:text-white transition duration-200 block break-all">
                  info@touchpad-solutions.com
                </a>
              </div>
            </div>

            {/* Row 3: Global Node Voice Connection */}
            <div className="flex items-start gap-3 group/item">
              <div className="w-6 h-6 rounded bg-teal-500/10 flex items-center justify-center text-brand-green group-hover/item:text-brand-teal transition-colors shrink-0 mt-0.5">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div className="space-y-0.5">
                <p className="text-[12px] uppercase font-bold tracking-wider text-teal-400">Phone</p>
                <a href="tel:+8801" className="text-teal-100/80 hover:text-white transition duration-200 block">
                  +880 1755-673862
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
      
      {/* FIXED: Opened on Line 17, closed perfectly here to contain the grid */}

      {/* GIANT BACKDROP BACKGROUND TYPOGRAPHY: Captures the exact layout scheme of image_db1d9c.jpg */}
      <div className="w-full text-center relative pointer-events-none select-none overflow-hidden h-24 sm:h-48 mt-12">
        <h3 className="text-[12vw] font-black tracking-tighter text-white/[0.15] leading-none absolute left-1/2 -translate-x-1/2 bottom-0 whitespace-nowrap">
          TouchPad
        </h3>
      </div>
      
      <div className="max-w-6xl mx-auto pt-6 border-t border-teal-400/20 text-center text-xs text-teal-200/60 relative z-10">
        &copy; {new Date().getFullYear()} TouchPad Consultancy. All ecosystem layers deployed securely via Edge Network.
      </div>
    </footer>
  );
}
