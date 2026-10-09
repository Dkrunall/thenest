"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages, fallbackImages } from "@/lib/gallery";

/**
 * Lightbox for the server-rendered gallery grid. Tiles are marked with
 * `data-gallery-index`; clicks/keys are handled here via delegation.
 */
export default function GalleryInteractive() {
  const [selectedImg, setSelectedImg] = useState<number | null>(null);

  // Open lightbox from grid tiles
  useEffect(() => {
    const grid = document.getElementById("gallery");
    if (!grid) return;
    const indexFrom = (target: EventTarget | null) => {
      const el = (target as HTMLElement | null)?.closest<HTMLElement>("[data-gallery-index]");
      return el ? Number(el.dataset.galleryIndex) : null;
    };
    const onClick = (e: MouseEvent) => {
      const i = indexFrom(e.target);
      if (i !== null) setSelectedImg(i);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const i = indexFrom(e.target);
      if (i !== null) {
        e.preventDefault();
        setSelectedImg(i);
      }
    };
    grid.addEventListener("click", onClick);
    grid.addEventListener("keydown", onKey);
    return () => {
      grid.removeEventListener("click", onClick);
      grid.removeEventListener("keydown", onKey);
    };
  }, []);

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
                sizes="100vw"
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
              className="text-center text-nest-cream/70 text-xs tracking-widest mt-6 uppercase font-light"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              {galleryImages[selectedImg].alt}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
