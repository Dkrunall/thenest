"use client";

import { useEffect, useState, useCallback } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

type GalleryImage = {
  src: string;
  alt: string;
  category: "space" | "plates";
};

const allImages: GalleryImage[] = [
  { src: "/interior/DSC01064.jpg", alt: "Grand Lounge & Bar View", category: "space" },
  { src: "/interior/DSC01039.jpg", alt: "Exclusive VIP Lounge", category: "space" },
  { src: "/interior/DSC01037.jpg", alt: "Elegantly Crafted Seating", category: "space" },
  { src: "/interior/DSC01049.jpg", alt: "Twilight Atmosphere", category: "space" },
  { src: "/interior/DSC01057.jpg", alt: "Open Sky Terrace", category: "space" },
  { src: "/interior/DSC01031.jpg", alt: "Rooftop Garden Lounge", category: "space" },
  { src: "/interior/DSC01032.jpg", alt: "Ambient Evening Setting", category: "space" },
  { src: "/interior/DSC01041.jpg", alt: "Bar Counter Detail", category: "space" },
  { src: "/interior/DSC01025.jpg", alt: "Signature Egg Bar", category: "space" },
  { src: "/interior/DSC01028.jpg", alt: "Cabana Seating Area", category: "space" },
  { src: "/interior/DSC01021.jpg", alt: "Modern Roof Lounge", category: "space" },
  { src: "/interior/DSC01017.jpg", alt: "Skyline Edge View", category: "space" },
  { src: "/food/DSC09621.jpg", alt: "Curated Beverage Selection", category: "plates" },
  { src: "/food/DSC09602.jpg", alt: "Signature Cocktail Craft", category: "plates" },
  { src: "/food/DSC09541.jpg", alt: "Artfully Plated Entrée", category: "plates" },
  { src: "/food/DSC09517.jpg", alt: "Tropical Tiki Pour", category: "plates" },
  { src: "/food/DSC09353.jpg", alt: "Gourmet Plating", category: "plates" },
  { src: "/food/DSC09339.jpg", alt: "Japanese Fusion Dish", category: "plates" },
  { src: "/food/DSC09290.jpg", alt: "Continental Plate", category: "plates" },
  { src: "/food/DSC09240.jpg", alt: "Seasonal Selection", category: "plates" },
  { src: "/food/DSC00950.jpg", alt: "Artisanal Bites", category: "plates" },
  { src: "/food/DSC00925.jpg", alt: "Gourmet Fusion Culinary", category: "plates" },
  { src: "/food/DSC00887.jpg", alt: "Signature Japanese Plate", category: "plates" },
  { src: "/food/DSC00864.jpg", alt: "Curated Small Plates", category: "plates" },
  { src: "/food/DSC00704.jpg", alt: "Chef Special Entrée", category: "plates" },
  { src: "/food/DSC00521.jpg", alt: "House Specialty Dish", category: "plates" },
  { src: "/food/DSC00483.jpg", alt: "Crafted Signature Cocktail", category: "plates" },
  { src: "/food/DSC00435.jpg", alt: "Bar Artistry in Motion", category: "plates" },
  { src: "/food/DSC00384.jpg", alt: "Mixology Creation", category: "plates" },
  { src: "/food/DSC00176.jpg", alt: "Specialty Selection", category: "plates" },
  { src: "/food/DSC09631-2.jpg", alt: "Premium Cocktail Curation", category: "plates" },
];

const PAGE_SIZE = 12;
type Filter = "all" | "space" | "plates";

export default function GalleryPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [selectedImg, setSelectedImg] = useState<number | null>(null);

  const filtered = filter === "all" ? allImages : allImages.filter((img) => img.category === filter);
  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  const changeFilter = useCallback((f: Filter) => {
    setFilter(f);
    setVisible(PAGE_SIZE);
    setSelectedImg(null);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    return () => { gsap.ticker.remove(tick); lenis.destroy(); };
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedImg === null) return;
      if (e.key === "Escape") setSelectedImg(null);
      if (e.key === "ArrowRight") setSelectedImg((p) => (p! + 1) % filtered.length);
      if (e.key === "ArrowLeft") setSelectedImg((p) => (p! - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImg, filtered.length]);

  const tabs: { label: string; value: Filter }[] = [
    { label: "All", value: "all" },
    { label: "The Space", value: "space" },
    { label: "The Plates", value: "plates" },
  ];

  return (
    <main className="bg-nest-black min-h-screen">
      <CustomCursor />
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-44 pb-12 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-nest-teal/5 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-10 h-px bg-nest-gold" />
            <span className="text-nest-gold text-[10px] tracking-[0.4em] uppercase font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
              Visual Journal
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-cormorant font-light text-[clamp(3rem,8vw,6.5rem)] text-nest-cream leading-none mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Visions of <br />
            <span className="text-gold-gradient italic">Rooftop Glamour</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-nest-cream/60 text-sm sm:text-base max-w-xl font-light leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Step inside the story. Our signature bar, tropical cabanas, handcrafted cocktails, and culinary artistry.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto border-x border-nest-gold/10 bg-nest-black relative z-10">

          {/* Filter Tabs */}
          <div className="flex items-center gap-3 px-6 py-8 border-b border-nest-gold/10">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => changeFilter(tab.value)}
                className={`px-5 py-2 rounded-full text-[10px] tracking-[0.2em] uppercase font-semibold transition-all duration-300 cursor-none ${
                  filter === tab.value
                    ? "bg-nest-gold text-white shadow-sm"
                    : "border border-nest-gold/20 text-nest-cream/60 hover:border-nest-gold/50 hover:text-nest-cream"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {tab.label}
              </button>
            ))}
            <span className="ml-auto text-nest-cream/30 text-[10px] tracking-widest" style={{ fontFamily: "'Inter', sans-serif" }}>
              {filtered.length} images
            </span>
          </div>

          {/* Grid — uniform columns, no layout animations */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-6">
            {shown.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: Math.min(i, 7) * 0.04 }}
                onClick={() => setSelectedImg(filtered.indexOf(img))}
                role="button"
                aria-label={`View ${img.alt}`}
                className="relative overflow-hidden group border border-nest-gold/10 bg-nest-dark/20 cursor-none rounded-2xl aspect-square"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading={i < 8 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nest-cream/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="absolute inset-2 border border-nest-gold/0 group-hover:border-nest-gold/20 transition-all duration-400 pointer-events-none z-20 rounded-xl" />

                {/* Caption */}
                <div className="absolute bottom-3 left-3 right-3 z-20 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="bg-white/85 nav-blur border border-nest-gold/20 px-3 py-1.5 rounded-lg inline-block shadow-sm text-nest-cream text-[9px] tracking-wider uppercase font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {img.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="text-center px-6 pb-8">
              <button
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="btn-outline-gold px-8 py-3 rounded-full cursor-none text-[10px] tracking-[0.25em]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span>Load More — {filtered.length - visible} remaining</span>
              </button>
            </div>
          )}

          {/* Instagram CTA */}
          <div className="text-center px-6 py-10 border-t border-nest-gold/10">
            <a
              href="https://www.instagram.com/thenestbywaikiki/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-nest-cream/60 hover:text-nest-gold transition-colors duration-300 group cursor-none"
            >
              <svg className="w-5 h-5 text-nest-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="text-sm tracking-widest font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                Follow the vibe @thenestbywaikiki
              </span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>

        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-nest-cream/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-5xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[65vh] border border-nest-gold/15 bg-nest-dark overflow-hidden rounded-2xl">
                <Image
                  src={filtered[selectedImg].src}
                  alt={filtered[selectedImg].alt}
                  fill
                  className="object-contain p-2"
                  sizes="90vw"
                  priority
                />
              </div>

              <button onClick={() => setSelectedImg((p) => (p! - 1 + filtered.length) % filtered.length)}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-nest-gold/25 bg-white/80 nav-blur flex items-center justify-center text-nest-gold hover:bg-nest-gold hover:text-white transition-all shadow-sm cursor-none text-sm">←</button>
              <button onClick={() => setSelectedImg((p) => (p! + 1) % filtered.length)}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-nest-gold/25 bg-white/80 nav-blur flex items-center justify-center text-nest-gold hover:bg-nest-gold hover:text-white transition-all shadow-sm cursor-none text-sm">→</button>
              <button onClick={() => setSelectedImg(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full border border-nest-gold/25 bg-white/80 nav-blur flex items-center justify-center text-nest-gold hover:bg-nest-gold hover:text-white transition-all text-base shadow-sm cursor-none">×</button>

              <p className="text-center text-nest-cream/55 text-[10px] tracking-widest mt-4 uppercase font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                {filtered[selectedImg].alt} &nbsp;·&nbsp; {selectedImg + 1} / {filtered.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
