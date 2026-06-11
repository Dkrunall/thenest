"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function BlogPage() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-nest-black min-h-screen">
      <CustomCursor />
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-44 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-nest-gold/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] rounded-full bg-nest-teal/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-10 h-px bg-nest-gold" />
            <span
              className="text-nest-gold text-[10px] tracking-[0.4em] uppercase font-light"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              The Nest Journal
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-cormorant font-light text-[clamp(3rem,8vw,6.5rem)] text-nest-cream leading-none mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Stories from <br />
            <span className="text-gold-gradient italic">Above the Skyline</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-nest-cream/60 text-sm sm:text-base max-w-xl font-light leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Cocktail recipes, behind-the-bar stories, seasonal menus, and curated reads — all from The Nest.
          </motion.p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto border-x border-nest-gold/10 bg-nest-black">

          {/* Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="relative glass-card rounded-3xl border border-nest-gold/20 overflow-hidden mx-6 mt-4"
          >
            <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-nest-gold/40" />
            <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-nest-gold/40" />
            <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-nest-gold/40" />
            <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-nest-gold/40" />
            <div className="absolute inset-5 border border-dashed border-nest-gold/8 rounded-2xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-[35vw] h-[35vw] rounded-full bg-nest-gold/5 blur-3xl pointer-events-none" />

            <div className="flex flex-col items-center text-center px-8 py-24 sm:py-32 relative z-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 rounded-full border border-nest-gold/30 flex items-center justify-center mb-8"
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

              <h2
                className="font-cormorant text-4xl sm:text-6xl font-light text-nest-cream mb-6 tracking-wide leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                The Journal <br />
                <span className="text-gold-gradient italic">is Being Written</span>
              </h2>

              <p
                className="text-nest-cream/55 text-sm sm:text-base max-w-lg mx-auto font-light leading-relaxed mb-12"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                We&rsquo;re preparing cocktail recipes, behind-the-bar features, event recaps, and seasonal reads.
                The first edition drops soon — stay close.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-14">
                {["Cocktail Recipes", "Bar Stories", "Seasonal Menus", "Guest Features", "Event Recaps"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-nest-dark border border-nest-gold/15 text-nest-cream/50 text-[10px] px-4 py-1.5 rounded-full tracking-widest uppercase"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Newsletter inline */}
              <div className="w-full max-w-sm">
                <p
                  className="text-nest-cream/40 text-[10px] tracking-[0.3em] uppercase mb-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Notify me when it&rsquo;s live
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("You're on the list. We'll notify you when The Journal launches!");
                  }}
                  className="relative flex items-center border-b border-nest-gold/30 focus-within:border-nest-gold transition-colors duration-300 py-1"
                >
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-transparent text-sm font-light text-nest-cream placeholder-nest-cream/35 focus:outline-none w-full pr-10 py-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                  <button
                    type="submit"
                    className="absolute right-0 text-nest-gold hover:text-nest-gold-light transition-colors cursor-none p-1"
                    aria-label="Subscribe"
                  >
                    <span className="text-lg font-medium">→</span>
                  </button>
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
