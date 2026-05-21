"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  {
    src: "/interior/DSC01064.jpg",
    alt: "The Nest at Waikiki – Grand Lounge & Bar View",
    span: "lg:col-span-2 lg:row-span-2",
    frame: "rounded-2xl",
  },
  {
    src: "/food/DSC00483.jpg",
    alt: "The Nest at Waikiki – Crafted Signature Cocktail",
    span: "",
    frame: "arch-frame",
  },
  {
    src: "/interior/DSC01037.jpg",
    alt: "The Nest at Waikiki – Elegantly Crafted Seating",
    span: "",
    frame: "rounded-2xl",
  },
  {
    src: "/food/DSC00925.jpg",
    alt: "The Nest at Waikiki – Gourmet Fusion Culinary Selection",
    span: "",
    frame: "rounded-2xl",
  },
  {
    src: "/food/DSC00176.jpg",
    alt: "The Nest at Waikiki – Specialty Hand-Rolled Sushi & Entrees",
    span: "",
    frame: "arch-frame",
  },
  {
    src: "/interior/DSC01021.jpg",
    alt: "The Nest at Waikiki – Modern Roof Lounge Seating",
    span: "lg:col-span-2",
    frame: "rounded-2xl",
  },
  {
    src: "/interior/DSC01031.jpg",
    alt: "The Nest – Twilight Atmosphere and Decor",
    span: "",
    frame: "rounded-2xl",
  },
  {
    src: "/food/DSC09621.jpg",
    alt: "The Nest – Curated Wine & Beverage Curation",
    span: "",
    frame: "rounded-2xl",
  },
  {
    src: "/interior/DSC01039.jpg",
    alt: "The Nest – Exclusive VIP Lounge & Social Space",
    span: "lg:col-span-2",
    frame: "arch-frame",
  },
  {
    src: "/food/DSC09541.jpg",
    alt: "The Nest – Artfully Plated Entrees and Dining Experience",
    span: "lg:col-span-2",
    frame: "rounded-2xl",
  },
];

const fallbackImages = [
  "/interior/DSC01064.jpg",
  "/food/DSC00483.jpg",
  "/interior/DSC01037.jpg",
  "/food/DSC00925.jpg",
  "/interior/DSC01021.jpg",
  "/food/DSC00176.jpg",
  "/interior/DSC01031.jpg",
  "/food/DSC09621.jpg",
  "/interior/DSC01039.jpg",
  "/food/DSC09541.jpg",
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImg(null);
      if (e.key === "ArrowRight" && selectedImg !== null)
        setSelectedImg((prev) => (prev! + 1) % galleryImages.length);
      if (e.key === "ArrowLeft" && selectedImg !== null)
        setSelectedImg((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImg]);

  return (
    <section 
      ref={sectionRef} 
      id="gallery" 
      className="relative section-padding bg-nest-black overflow-hidden"
    >
      {/* Background soft ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] rounded-full bg-nest-teal/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="section-grid">
          
          {/* Sticky Left Sidebar */}
          <div className="section-sidebar flex flex-col justify-start lg:pt-2">
            <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
              <span className="font-cormorant text-5xl sm:text-6xl font-light text-nest-gold leading-none">04</span>
              <div className="w-12 h-[1px] bg-nest-gold/30 lg:w-[1px] lg:h-12" />
              <span 
                className="text-nest-cream/40 text-[9px] sm:text-[10px] tracking-[0.4em] uppercase whitespace-nowrap lg:transform lg:rotate-90 lg:origin-left lg:translate-x-[6px] lg:translate-y-[20px] font-medium" 
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                THE GALLERY
              </span>
            </div>
          </div>

          {/* Right Main Content */}
          <div>
            {/* Header */}
            <div className="max-w-xl mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-cormorant font-light text-[clamp(2rem,5vw,3.75rem)] text-nest-cream mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Visions of <br />
                <span className="text-gold-gradient italic font-light">Rooftop Glamour</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-nest-cream/60 text-sm sm:text-base leading-relaxed font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Step inside the story. Browse through snapshot highlights of our signature egg-shaped bar, tropical cabanas, handcrafted cocktails, and weekly sunset performances.
              </motion.p>
            </div>

            {/* Masonry Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[220px]">
              {galleryImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.8, delay: i * 0.05 }}
                  onClick={() => setSelectedImg(i)}
                  role="button"
                  className={`relative overflow-hidden group border border-nest-gold/10 bg-nest-dark/20 ${img.frame} ${img.span}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    onError={(e) => {
                      const nextIndex = (i + 1) % fallbackImages.length;
                      (e.target as HTMLImageElement).src = fallbackImages[nextIndex];
                    }}
                  />

                  {/* Hover overlay and tag */}
                  <div className="absolute inset-0 bg-nest-cream/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  
                  {/* Fine Line Highlight Border */}
                  <div className="absolute inset-3 border border-nest-gold/0 group-hover:border-nest-gold/20 transition-all duration-500 pointer-events-none z-20" />

                  {/* Caption tag */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-white/85 nav-blur border border-nest-gold/20 px-4 py-2 rounded-lg inline-block shadow-sm">
                      <p 
                        className="text-nest-cream text-[10px] tracking-wider uppercase font-medium"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        View Space
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Instagram Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mt-16 border-t border-nest-gold/10 pt-10"
            >
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
            </motion.div>

          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-nest-black/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-5xl w-full max-h-[80vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Frame */}
              <div className="relative w-full h-[70vh] border border-nest-gold/15 bg-nest-dark overflow-hidden rounded-2xl">
                <Image
                  src={galleryImages[selectedImg].src}
                  alt={galleryImages[selectedImg].alt}
                  fill
                  className="object-contain p-2"
                  onError={(e) => {
                    const nextIndex = (selectedImg + 1) % fallbackImages.length;
                    (e.target as HTMLImageElement).src = fallbackImages[nextIndex];
                  }}
                />
              </div>

              {/* Navigation Actions */}
              <button
                onClick={() => setSelectedImg((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border border-nest-gold/25 bg-white/80 nav-blur flex items-center justify-center text-nest-gold hover:bg-nest-gold hover:text-white transition-all shadow-sm cursor-none"
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                onClick={() => setSelectedImg((prev) => (prev! + 1) % galleryImages.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border border-nest-gold/25 bg-white/80 nav-blur flex items-center justify-center text-nest-gold hover:bg-nest-gold hover:text-white transition-all shadow-sm cursor-none"
                aria-label="Next image"
              >
                →
              </button>

              {/* Close Button */}
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full border border-nest-gold/25 bg-white/80 nav-blur flex items-center justify-center text-nest-gold hover:bg-nest-gold hover:text-white transition-all text-lg shadow-sm cursor-none"
                aria-label="Close"
              >
                ×
              </button>

              {/* Description */}
              <p 
                className="text-center text-nest-cream/60 text-xs tracking-widest mt-6 uppercase font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {galleryImages[selectedImg].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
