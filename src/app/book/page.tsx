"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Reservations from "@/components/Reservations";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function BookPage() {
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
      <section className="relative pt-44 pb-4 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-nest-gold/5 blur-3xl pointer-events-none" />
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
              Reservations
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-cormorant font-light text-[clamp(3rem,8vw,6.5rem)] text-nest-cream leading-none mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Secure Your <br />
            <span className="text-gold-gradient italic">Table in the Skies</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-nest-cream/60 text-sm sm:text-base max-w-xl font-light leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Plan your evening at The Nest. Choose your seating, submit your details, and our team confirms via WhatsApp.
          </motion.p>
        </div>
      </section>

      {/* Reservations Form */}
      <div className="max-w-7xl mx-auto border-x border-nest-gold/10 bg-nest-black">
        <Reservations />
      </div>

      <Footer />
    </main>
  );
}
