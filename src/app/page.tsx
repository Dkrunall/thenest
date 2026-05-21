"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Events from "@/components/Events";
import Reservations from "@/components/Reservations";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // Integrate Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const gsapTicker = gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(gsapTicker);
      lenis.destroy();
    };
  }, []);

  return (
    <main>
      <CustomCursor />
      <Navbar />
      <Hero />
      
      {/* Cohesive Content Page Frame */}
      <div className="max-w-7xl mx-auto border-x border-nest-gold/10 bg-nest-black relative">
        <About />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Menu />
        <div className="section-divider" />
        <Gallery />
        <div className="section-divider" />
        <Events />
        <div className="section-divider" />
        <Reservations />
      </div>

      <Footer />
    </main>
  );
}
