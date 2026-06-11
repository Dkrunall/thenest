"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function Events() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="events"
      className="relative section-padding bg-nest-dark overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-nest-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] rounded-full bg-nest-teal/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="section-grid">

          {/* Sticky Left Sidebar */}
          <div className="section-sidebar flex flex-col justify-start lg:pt-2">
            <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
              <span className="font-cormorant text-5xl sm:text-6xl font-light text-nest-gold leading-none">05</span>
              <div className="w-12 h-[1px] bg-nest-gold/30 lg:w-[1px] lg:h-12" />
              <span
                className="text-nest-cream/40 text-[9px] sm:text-[10px] tracking-[0.4em] uppercase whitespace-nowrap lg:transform lg:rotate-90 lg:origin-left lg:translate-x-[6px] lg:translate-y-[20px] font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                THE GIGS
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
                Nights at <br />
                <span className="text-gold-gradient italic font-light">The Nest</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-nest-cream/60 text-sm sm:text-base leading-relaxed font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Something extraordinary is being crafted. Our curated events calendar is almost ready.
              </motion.p>
            </div>

            {/* Coming Soon Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="relative glass-card rounded-3xl border border-nest-gold/20 overflow-hidden bg-gradient-to-b from-nest-dark/80 to-nest-darker/60 shadow-[0_20px_50px_rgba(81,9,9,0.05)]"
            >
              {/* Inner border ornaments */}
              <div className="absolute inset-4 border border-nest-gold/10 rounded-2xl pointer-events-none" />
              <div className="absolute inset-5 border border-dashed border-nest-gold/8 rounded-2xl pointer-events-none" />

              {/* Corner accents */}
              <div className="absolute top-8 left-8 w-6 h-6 border-t border-l border-nest-gold/40" />
              <div className="absolute top-8 right-8 w-6 h-6 border-t border-r border-nest-gold/40" />
              <div className="absolute bottom-8 left-8 w-6 h-6 border-b border-l border-nest-gold/40" />
              <div className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-nest-gold/40" />

              <div className="relative z-10 flex flex-col items-center text-center px-8 py-20 sm:py-28">
                {/* Animated star icon */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-14 h-14 rounded-full border border-nest-gold/30 flex items-center justify-center mb-8"
                >
                  <svg className="w-5 h-5 text-nest-gold" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
                  </svg>
                </motion.div>

                <p
                  className="text-nest-gold text-[10px] tracking-[0.5em] uppercase mb-5 font-semibold"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Coming Soon
                </p>

                <h3
                  className="font-cormorant text-4xl sm:text-6xl font-light text-nest-cream mb-6 tracking-wide leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  The Calendar <br />
                  <span className="text-gold-gradient italic">is Being Set</span>
                </h3>

                <p
                  className="text-nest-cream/55 text-sm sm:text-base max-w-md mx-auto font-light leading-relaxed mb-10"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  DJ nights, guest bar takeovers, golden hour gatherings, and more — all coming to The Nest soon. Stay tuned.
                </p>

                {/* Decorative pill tags */}
                <div className="flex flex-wrap justify-center gap-3">
                  {["DJ Nights", "Guest Takeovers", "Golden Hour", "Bar Artistry"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-nest-dark border border-nest-gold/15 text-nest-cream/50 text-[10px] px-4 py-1.5 rounded-full tracking-widest uppercase"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
