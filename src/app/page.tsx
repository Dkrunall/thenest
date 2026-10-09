import dynamic from "next/dynamic";

import ClientEnhancements from "@/components/ClientEnhancements";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const About = dynamic(() => import("@/components/About"));
const Experience = dynamic(() => import("@/components/Experience"));
const Menu = dynamic(() => import("@/components/Menu"));
const Gallery = dynamic(() => import("@/components/Gallery"));
const Events = dynamic(() => import("@/components/Events"));
const Reservations = dynamic(() => import("@/components/Reservations"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main>
      <ClientEnhancements />
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
