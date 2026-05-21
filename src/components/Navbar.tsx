"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "@/components/Magnetic";

const navLinks = [
  { label: "Story", href: "#about", image: "/interior/DSC01037.jpg" },
  { label: "Experience", href: "#experience", image: "/food/DSC00521.jpg" },
  { label: "Menu", href: "#menu", image: "/food/DSC00483.jpg" },
  { label: "Gallery", href: "#gallery", image: "/interior/DSC01064.jpg" },
  { label: "Events", href: "#events", image: "/interior/DSC01057.jpg" },
  { label: "Bookings", href: "#reserve", image: "/interior/DSC01021.jpg" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mumbai clock implementation
  useEffect(() => {
    const updateClock = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setHoveredIndex(null);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Circular expansion variants for the full screen menu
  const menuVariants = {
    initial: {
      clipPath: "circle(0px at calc(100% - 60px) 45px)",
      WebkitClipPath: "circle(0px at calc(100% - 60px) 45px)",
    },
    animate: {
      clipPath: "circle(150% at calc(100% - 60px) 45px)",
      WebkitClipPath: "circle(150% at calc(100% - 60px) 45px)",
      transition: {
        duration: 0.85,
        ease: [0.76, 0, 0.24, 1] as const,
      },
    },
    exit: {
      clipPath: "circle(0px at calc(100% - 60px) 45px)",
      WebkitClipPath: "circle(0px at calc(100% - 60px) 45px)",
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1] as const,
      },
    },
  };

  return (
    <>
      {/* Top Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
        <div
          className={`mx-auto max-w-7xl px-6 py-6 sm:py-8 flex items-center justify-between transition-all duration-500 ${
            scrolled ? "bg-transparent" : ""
          }`}
        >
          {/* Elegant Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 z-50 group cursor-none"
          >
            <Image
              src="/logo.webp"
              alt="The Nest Logo"
              width={240}
              height={72}
              className="h-14 sm:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
          </Link>

          {/* Action Panel */}
          <div className="flex items-center gap-4 z-50">
            {/* Quick Link: Book a table */}
            <Magnetic>
              <button
                onClick={() => handleNavClick("#reserve")}
                className="hidden sm:block btn-gold rounded-full text-[9px] tracking-[0.2em] px-4 py-2 shadow-[0_4px_15px_rgba(81,9,9,0.15)] hover:shadow-[0_8px_25px_rgba(81,9,9,0.25)] transition-all duration-300"
              >
                Reserve Table
              </button>
            </Magnetic>

            {/* Awwwards pill hamburger toggle */}
            <Magnetic>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`px-3.5 py-2 rounded-full flex items-center gap-2 cursor-none transition-all duration-500 shadow-md ${
                  menuOpen
                    ? "bg-nest-black text-nest-cream border border-nest-gold/20"
                    : scrolled
                    ? "bg-white/80 nav-blur text-nest-cream border border-nest-gold/15"
                    : "bg-white/60 text-nest-cream border border-nest-gold/5"
                }`}
              >
                <div className="flex flex-col gap-1 w-4">
                  <motion.span
                    animate={menuOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="block w-full h-[1.5px] bg-current"
                  />
                  <motion.span
                    animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                    className="block w-full h-[1.5px] bg-current"
                  />
                  <motion.span
                    animate={menuOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="block w-full h-[1.5px] bg-current"
                  />
                </div>
                <span
                  className="text-[8px] tracking-[0.25em] uppercase font-semibold"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {menuOpen ? "CLOSE" : "MENU"}
                </span>
              </button>
            </Magnetic>
          </div>
        </div>
      </header>

      {/* Awwwards Full-Screen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onMouseMove={handleMouseMove}
            className="fixed inset-0 z-40 bg-nest-dark text-nest-cream overflow-hidden flex items-center"
          >
            {/* Grid layout for info on left and big menu on right */}
            <div className="max-w-7xl mx-auto w-full px-8 sm:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Environmental Info & Coordinates */}
              <div className="lg:col-span-4 hidden lg:flex flex-col gap-10 border-r border-nest-gold/15 pr-12 py-10 h-full justify-between">
                <div className="space-y-8">
                  {/* Geographic Coordinates */}
                  <div>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-nest-gold font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Sky Coordinates
                    </span>
                    <p className="font-cormorant text-2xl font-light text-nest-cream/80 mt-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      19.1009° N, 72.8887° E
                    </p>
                    <p className="text-[11px] text-nest-cream/40 font-light mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                      6th Floor Rooftop, Sakinaka, Mumbai
                    </p>
                  </div>

                  {/* Operational Hours */}
                  <div>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-nest-gold font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Ambient Clock
                    </span>
                    <p className="font-cormorant text-2xl font-light text-nest-cream/80 mt-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      6:00 PM — 3:00 AM
                    </p>
                    <p className="text-[11px] text-nest-cream/40 font-light mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Daily Hawaiian & Nikkei Experience
                    </p>
                  </div>

                  {/* Mumbai dynamic Live clock */}
                  <div>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-nest-gold font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Local Time (IST)
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <p className="font-cormorant text-3xl font-light tracking-wide text-nest-cream">
                        {time || "00:00:00"}
                      </p>
                      <span className="text-[10px] text-nest-gold tracking-widest font-semibold uppercase">MUMBAI</span>
                    </div>
                  </div>
                </div>

                {/* Social links & Chat desk */}
                <div className="space-y-4">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-nest-gold font-medium block" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Social Desk
                  </span>
                  <div className="flex flex-col gap-2">
                    <a
                      href="https://www.instagram.com/thenestbywaikiki/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-light text-nest-cream/60 hover:text-nest-gold transition-colors duration-300 cursor-none flex items-center gap-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Instagram <span className="text-xs text-nest-gold">@thenestbywaikiki</span>
                    </a>
                    <a
                      href="https://wa.me/918150000345"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-light text-nest-cream/60 hover:text-nest-gold transition-colors duration-300 cursor-none flex items-center gap-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      WhatsApp Desk <span className="text-xs text-[#25D366]">Online</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Massive Navigation Menu */}
              <div className="lg:col-span-8 flex flex-col justify-center h-full">
                <span className="text-[10px] tracking-[0.4em] uppercase text-nest-gold font-semibold mb-6 block lg:hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Navigation
                </span>
                <nav className="flex flex-col gap-4 sm:gap-6">
                  {navLinks.map((link, i) => (
                    <div
                      key={link.label}
                      className="relative overflow-hidden group py-1"
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {/* Interactive Staggered Link Text */}
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="w-full text-left font-cormorant font-light text-[clamp(2.5rem,7vw,5.5rem)] text-nest-cream transition-colors duration-300 flex items-baseline gap-6 cursor-none leading-[1.05]"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        <span className="text-xs sm:text-sm font-inter tracking-[0.2em] text-nest-gold/40 group-hover:text-nest-gold font-medium w-8">
                          0{i + 1}
                        </span>
                        {/* Rolling text hover transition */}
                        <span className="relative overflow-hidden block transform transition-transform duration-500 group-hover:translate-x-4">
                          <span className="block transform transition-transform duration-700 ease-[0.76,0,0.24,1] group-hover:-translate-y-full">
                            {link.label}
                          </span>
                          <span className="block absolute left-0 top-0 transform transition-transform duration-700 ease-[0.76,0,0.24,1] translate-y-full group-hover:translate-y-0 text-nest-gold italic">
                            {link.label}
                          </span>
                        </span>
                      </button>
                    </div>
                  ))}
                </nav>

                {/* Mobile Extra Links */}
                <div className="mt-10 pt-8 border-t border-nest-gold/10 flex flex-wrap gap-6 items-center lg:hidden">
                  <a
                    href="https://www.instagram.com/thenestbywaikiki/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-widest uppercase font-semibold text-nest-gold"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Instagram
                  </a>
                  <a
                    href="https://wa.me/918150000345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-widest uppercase font-semibold text-[#25D366]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    WhatsApp
                  </a>
                  <div className="text-nest-cream/40 text-[10px] tracking-wider ml-auto">
                    {time} Mumbai Time
                  </div>
                </div>
              </div>

            </div>

            {/* Hover Floating Image Preview */}
            <motion.div
              style={{
                left: mousePos.x + 24,
                top: mousePos.y + 24,
                position: "fixed",
                pointerEvents: "none",
                zIndex: 99,
              }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={hoveredIndex !== null ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
              transition={{ type: "spring", stiffness: 150, damping: 18 }}
              className="w-48 h-64 overflow-hidden rounded-2xl border border-nest-gold/25 shadow-2xl hidden lg:block"
            >
              <AnimatePresence mode="wait">
                {hoveredIndex !== null && (
                  <motion.div
                    key={hoveredIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={navLinks[hoveredIndex].image}
                      alt={navLinks[hoveredIndex].label}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
