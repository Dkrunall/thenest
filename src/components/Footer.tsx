"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "@/components/Magnetic";

const footerLinks = [
  { label: "Our Story", href: "#about" },
  { label: "The Experience", href: "#experience" },
  { label: "The Menu", href: "#menu" },
  { label: "The Gallery", href: "#gallery" },
  { label: "The Gigs", href: "#events" },
  { label: "Bookings", href: "#reserve" },
];

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/thenestbywaikiki/",
    label: "@thenestbywaikiki",
  },
  {
    name: "WhatsApp Desk",
    href: "https://wa.me/918150000345",
    label: "+91 81500 00345",
  },
];

const FooterLink = ({ label, href }: { label: string; href: string }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="group block py-1 cursor-none text-nest-cream/60 hover:text-nest-gold transition-colors duration-300 text-xs sm:text-sm font-light tracking-wide"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <span className="relative overflow-hidden block">
        <span className="block transform transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover:-translate-y-full">
          {label}
        </span>
        <span className="block absolute left-0 top-0 transform transition-transform duration-500 ease-[0.76,0,0.24,1] translate-y-full group-hover:translate-y-0 text-nest-gold italic font-medium">
          {label}
        </span>
      </span>
    </a>
  );
};

export default function Footer() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollPercent((window.scrollY / totalScroll) * 100);
      }
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <footer className="relative bg-nest-darker border-t border-nest-gold/15 overflow-hidden pt-20 pb-8">
      {/* Background soft lighting */}
      <div className="absolute top-0 left-0 w-[40vw] h-[40vw] rounded-full bg-nest-gold/5 blur-3xl pointer-events-none" />

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Brand Info & coordinates - Spans 4 Columns */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link
              href="/"
              className="flex items-center gap-3 z-10 group cursor-none mb-6"
            >
              <Image
                src="/logo.webp"
                alt="The Nest Logo"
                width={240}
                height={72}
                className="h-14 sm:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>
            <p
              className="text-nest-cream/55 text-xs sm:text-sm leading-relaxed mb-6 font-light max-w-xs"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Step away from the city chaos. Rise above Andheri East and discover a high-fashion garden sanctuary where Hawaiian spirit meets modern design.
            </p>
            <div className="text-[11px] text-nest-cream/40 tracking-wider space-y-1 font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
              <p>19.1009° N, 72.8887° E</p>
              <p>2nd Floor, Grand Pavilion, Peninsula Grand</p>
            </div>
          </div>

          {/* Column 2: Navigation Links - Spans 2 Columns */}
          <div className="lg:col-span-2">
            <h3
              className="text-nest-gold text-[10px] tracking-[0.25em] uppercase mb-6 font-semibold"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Navigate
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink label={link.label} href={link.href} />
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Timing - Spans 3 Columns */}
          <div className="lg:col-span-3">
            <h3
              className="text-nest-gold text-[10px] tracking-[0.25em] uppercase mb-6 font-semibold"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Visit Coordinates
            </h3>
            <div className="space-y-6 text-xs sm:text-sm font-light text-nest-cream/60">
              <div>
                <p className="text-nest-cream font-medium mb-1.5 flex items-center gap-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <svg className="w-4 h-4 text-nest-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span>Address</span>
                </p>
                <p className="text-xs leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Peninsula Grand Hotel, Sakinaka Junction,<br />
                  Andheri East, Mumbai, MH 400072
                </p>
              </div>
              
              <div>
                <p className="text-nest-cream font-medium mb-1.5 flex items-center gap-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <svg className="w-4 h-4 text-nest-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span>Ambient Hours</span>
                </p>
                <p className="text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Daily: 6:00 PM – 1:30 AM
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter Subscription - Spans 3 Columns */}
          <div className="lg:col-span-3 flex flex-col items-start w-full">
            <h3
              className="text-nest-gold text-[10px] tracking-[0.25em] uppercase mb-6 font-semibold"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Newsletter
            </h3>
            <p
              className="text-nest-cream/55 text-xs leading-relaxed mb-4 font-light"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Join the guestlist. Subscribe for exclusive DJ lineups, events under the stars, and menu alerts.
            </p>
            <form 
              onSubmit={(e) => { 
                e.preventDefault(); 
                alert("Thank you for subscribing to The Nest's newsletter!"); 
              }} 
              className="w-full"
            >
              <div className="relative flex items-center border-b border-nest-gold/30 focus-within:border-nest-gold transition-colors duration-300 py-1">
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-transparent text-xs font-light text-nest-cream placeholder-nest-cream/40 focus:outline-none w-full pr-10 py-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
                <button 
                  type="submit" 
                  className="absolute right-0 text-nest-gold hover:text-nest-gold-light transition-colors cursor-none p-1" 
                  aria-label="Subscribe"
                >
                  <span className="text-lg font-medium">→</span>
                </button>
              </div>
            </form>
            <div className="flex gap-4 mt-6">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-nest-cream/40 hover:text-nest-gold transition-colors duration-300 cursor-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Gold horizontal divider */}
      <div className="max-w-7xl mx-auto px-6 mt-16 mb-8 relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-nest-gold/20 to-transparent" />
      </div>

      {/* Bottom Sub-bar */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        <p
          className="text-nest-cream/35 text-[10px] tracking-wider"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          © 2026 The Nest at Waikiki. All rights reserved.
        </p>

        <p
          className="text-nest-cream/35 text-[10px] tracking-wider"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Hotel Rooftop Sanctuary · Sakinaka
        </p>
      </div>

      {/* Giant Awwwards Outline Text Background */}
      <div className="w-full text-center mt-12 overflow-hidden select-none pointer-events-none opacity-20 relative z-0">
        <h1 
          className="font-cormorant font-bold text-[clamp(3.5rem,14vw,14rem)] leading-none text-transparent tracking-[0.1em] uppercase"
          style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            WebkitTextStroke: "1.2px #241E15",
          }}
        >
          THE NEST
        </h1>
      </div>

      {/* Persistent Floating Action Buttons Stack */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">

        {/* Instagram */}
        <Magnetic>
          <motion.a
            href="https://www.instagram.com/thenestatwaikiki"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            className="group relative w-11 h-11 flex items-center justify-center shadow-lg hover:shadow-xl text-white cursor-none rounded-full"
            style={{
              background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
            }}
            aria-label="Instagram"
          >
            {/* Tooltip */}
            <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-nest-darker text-nest-cream text-[9px] tracking-widest uppercase font-semibold px-2.5 py-1.5 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow pointer-events-none border border-nest-gold/10">
              Instagram
            </span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </motion.a>
        </Magnetic>

        {/* Call */}
        <Magnetic>
          <motion.a
            href="tel:+918150000345"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.05 }}
            className="group relative w-11 h-11 bg-[#510909] flex items-center justify-center shadow-lg hover:shadow-xl text-white cursor-none rounded-full"
            aria-label="Call us"
          >
            {/* Tooltip */}
            <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-nest-darker text-nest-cream text-[9px] tracking-widest uppercase font-semibold px-2.5 py-1.5 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow pointer-events-none border border-nest-gold/10">
              Call Us
            </span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </motion.a>
        </Magnetic>

        {/* WhatsApp */}
        <Magnetic>
          <motion.a
            href="https://wa.me/918150000345?text=Hi%2C%20I'd%20like%20to%20make%20a%20reservation%20at%20The%20Nest%20at%20Waikiki!"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="group relative w-11 h-11 bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl text-white cursor-none rounded-full"
            aria-label="Direct Chat on WhatsApp"
          >
            {/* Tooltip */}
            <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-nest-darker text-nest-cream text-[9px] tracking-widest uppercase font-semibold px-2.5 py-1.5 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow pointer-events-none border border-nest-gold/10">
              WhatsApp
            </span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </motion.a>
        </Magnetic>

      </div>


      {/* Floating Scroll Back to Top widget with circular progress */}
      <AnimatePresence>
        {showScrollTop && (
          <div className="fixed bottom-6 left-6 z-40">
            <Magnetic>
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="w-12 h-12 rounded-full bg-white border border-nest-gold/15 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 relative cursor-none"
                aria-label="Back to top"
              >
                <svg className="absolute w-full h-full rotate-[-90deg] top-0 left-0">
                  <circle
                    cx="24"
                    cy="24"
                    r="21"
                    stroke="rgba(81, 9, 9, 0.1)"
                    strokeWidth="1.5"
                    fill="transparent"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="21"
                    stroke="#510909"
                    strokeWidth="1.5"
                    fill="transparent"
                    strokeDasharray={`${circumference}`}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    className="transition-[stroke-dashoffset] duration-100 ease-out"
                  />
                </svg>
                <span className="text-nest-gold font-bold text-sm relative z-10 transform transition-transform duration-300 hover:-translate-y-0.5">
                  ↑
                </span>
              </motion.button>
            </Magnetic>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
