"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";
import Magnetic from "@/components/Magnetic";

const PARTICLES_COUNT = 30;

const HERO_IMAGES = [
  "/interior/DSC01031.jpg",
  "/interior/DSC01049.jpg",
  "/interior/DSC01057.jpg",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [imgIndex, setImgIndex] = useState(0);

  // Auto-advance slideshow every 3.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // Motion values for subtle mouse parallax on the image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    // Particle animation
    if (!particlesRef.current) return;
    const particles = particlesRef.current.querySelectorAll(".particle");
    particles.forEach((p) => {
      const el = p as HTMLElement;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 4;
      const dur = 5 + Math.random() * 5;
      const size = 1 + Math.random() * 2;
      el.style.left = x + "%";
      el.style.top = y + "%";
      el.style.width = size + "px";
      el.style.height = size + "px";
      gsap.to(el, {
        opacity: 0.4 + Math.random() * 0.4,
        y: "-=" + (40 + Math.random() * 50),
        x: (Math.random() - 0.5) * 30,
        duration: dur,
        delay: delay,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { width, height, left, top } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 25;
      const y = (e.clientY - top - height / 2) / 25;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const handleReserve = () => {
    document.querySelector("#reserve")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleExplore = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-nest-black"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-nest-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] rounded-full bg-nest-teal/5 blur-3xl pointer-events-none" />

      {/* Floating Particles */}
      <div ref={particlesRef} className="particles-container z-10">
        {Array.from({ length: PARTICLES_COUNT }).map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      <div ref={containerRef} className="relative z-20 max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Content - Spans 7 columns on large screens */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Subtitle Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-10 h-px bg-nest-gold" />
              <span
                className="text-nest-gold text-[10px] sm:text-xs tracking-[0.4em] uppercase font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Mumbai&rsquo;s Finest Rooftop Destination
              </span>
            </motion.div>

            {/* Giant Title */}
            <div className="mb-6">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="font-cormorant font-light text-[clamp(3.5rem,10vw,7.5rem)] leading-none text-nest-cream tracking-wide"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                THE NEST <br />
                <span className="text-gold-gradient italic font-light">AT WAIKIKI</span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-nest-cream/60 text-sm sm:text-base max-w-xl leading-relaxed mb-10 font-light"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Perched on the 2nd floor, Grand Pavilion, Peninsula Grand Hotel. A high-fashion tropical sanctuary where Hawaiian soul meets Mumbai&rsquo;s electric city skyline under the stars.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-row items-center gap-6"
            >
              <Magnetic>
                <button
                  onClick={handleReserve}
                  className="btn-gold text-[10px] tracking-[0.25em] px-8 py-4 cursor-none"
                  style={{ borderRadius: "100px" }}
                >
                  Reserve Table
                </button>
              </Magnetic>
              <Magnetic>
                <button
                  onClick={handleExplore}
                  className="btn-outline-gold text-[10px] tracking-[0.25em] px-8 py-4 cursor-none"
                  style={{ borderRadius: "100px" }}
                >
                  <span>Explore Vibe</span>
                </button>
              </Magnetic>
            </motion.div>
          </div>

          {/* Right Image Content - Spans 5 columns on large screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-5 relative w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[420px] aspect-[3/4]">
              {/* Outer offset gold border frame */}
              <div className="absolute -inset-4 border border-nest-gold/20 pointer-events-none rounded-[32px] transform translate-x-2 translate-y-2 z-0" />
              
              {/* Main Image Container */}
              <motion.div
                style={{ x: springX, y: springY }}
                className="relative w-full h-full overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(36,30,21,0.06)] z-10"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={imgIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1.05 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={HERO_IMAGES[imgIndex]}
                      alt="The Nest at Waikiki interior"
                      fill
                      className="object-cover"
                      priority={imgIndex === 0}
                      quality={90}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Light reflection filter */}
                <div className="absolute inset-0 bg-gradient-to-t from-nest-black/50 via-transparent to-transparent z-10" />

                {/* Dot indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {HERO_IMAGES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIndex(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-none ${
                        i === imgIndex ? "bg-nest-gold w-4" : "bg-nest-cream/40"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Float Floating hours badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 glass-card px-6 py-4 rounded-2xl z-20 shadow-[0_15px_30px_rgba(81,9,9,0.08)]"
              >
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-nest-teal animate-pulse" />
                  <span
                    className="text-nest-cream text-[10px] tracking-[0.2em] uppercase font-medium"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    6:00 PM – 1:30 AM
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-3 cursor-none"
      >
        <span
          className="text-nest-cream/40 text-[9px] tracking-[0.3em] uppercase font-light"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Scroll Down
        </span>
        <Magnetic>
          <button
            onClick={handleExplore}
            className="w-[26px] h-[42px] rounded-full border border-nest-gold/30 flex items-start justify-center p-1.5 transition-colors duration-300 hover:border-nest-gold cursor-none"
            aria-label="Scroll down"
          >
            <motion.div
              animate={{
                y: [0, 14, 0],
                opacity: [1, 0.4, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-2 rounded-full bg-nest-gold"
            />
          </button>
        </Magnetic>
      </motion.div>
    </section>
  );
}
