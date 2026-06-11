"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Magnetic from "@/components/Magnetic";

const platforms = [
  {
    name: "Zomato",
    description: "Browse our full menu, reviews & order online",
    href: "https://www.zomato.com",
    color: "bg-[#E23744]",
    textColor: "text-white",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.191 0H9.809C4.389 0 0 4.389 0 9.809v4.382C0 19.611 4.389 24 9.809 24h4.382C19.611 24 24 19.611 24 14.191V9.809C24 4.389 19.611 0 14.191 0zm-1.02 17.78H6.53v-1.404h5.19L6.53 9.122V7.72h6.641v1.404H7.933l5.238 7.254v1.402zm4.29 0h-1.61V7.72h1.61v10.06z"/>
      </svg>
    ),
  },
  {
    name: "Swiggy",
    description: "Order now with fast delivery to your door",
    href: "https://www.swiggy.com",
    color: "bg-[#FC8019]",
    textColor: "text-white",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.8c3.975 0 7.2 3.225 7.2 7.2s-3.225 7.2-7.2 7.2S4.8 15.975 4.8 12 8.025 4.8 12 4.8zm0 2.4a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6z"/>
      </svg>
    ),
  },
  {
    name: "Google",
    description: "View ratings, photos & explore our menu",
    href: "https://www.google.com/maps/search/The+Nest+at+Waikiki",
    color: "bg-white",
    textColor: "text-nest-cream",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
  },
];

const inspirations = [
  {
    label: "Japanese Craft",
    description: "Precision-driven technique, umami-forward flavours, and a reverence for the finest ingredients.",
    image: "/food/DSC09339.jpg",
  },
  {
    label: "Continental Soul",
    description: "Rich, layered, and comforting — Continental classics reimagined for an elevated rooftop setting.",
    image: "/food/DSC00887.jpg",
  },
  {
    label: "Tiki Mixology",
    description: "Bold tropical pours crafted with aged spirits, house-made syrups, and island flair at the bar.",
    image: "/food/DSC09602.jpg",
  },
];

export default function Menu() {
  return (
    <section
      id="menu"
      className="relative section-padding bg-nest-black overflow-hidden"
    >
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-nest-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] rounded-full bg-nest-teal/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="section-grid">

          {/* Sticky Left Sidebar */}
          <div className="section-sidebar flex flex-col justify-start lg:pt-2">
            <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
              <span className="font-cormorant text-5xl sm:text-6xl font-light text-nest-gold leading-none">03</span>
              <div className="w-12 h-[1px] bg-nest-gold/30 lg:w-[1px] lg:h-12" />
              <span
                className="text-nest-cream/40 text-[9px] sm:text-[10px] tracking-[0.4em] uppercase whitespace-nowrap lg:transform lg:rotate-90 lg:origin-left lg:translate-x-[6px] lg:translate-y-[20px] font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                THE MENU
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
                Crafted with <br />
                <span className="text-gold-gradient italic font-light">Intention & Soul</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-nest-cream/60 text-sm sm:text-base leading-relaxed font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Our kitchen draws from two rich culinary worlds — the disciplined artistry of Japanese cooking and the hearty elegance of Continental cuisine — united by a shared belief that every bite should be memorable. Each dish is seasonal, considered, and made to complement an evening above the skyline.
              </motion.p>
            </div>

            {/* Inspiration Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              {inspirations.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-3xl border border-nest-gold/10 hover:border-nest-gold/25 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nest-black/80 via-nest-black/20 to-transparent z-10" />
                    <div className="absolute bottom-4 left-5 z-20">
                      <span
                        className="text-nest-gold text-[9px] tracking-[0.3em] uppercase font-semibold"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {item.label}
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="glass-card px-6 py-5">
                    <p
                      className="text-nest-cream/65 text-xs sm:text-sm leading-relaxed font-light"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nest-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>

            {/* View Full Menu Divider */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="h-px flex-1 bg-nest-gold/10" />
              <span
                className="text-nest-cream/40 text-[9px] tracking-[0.4em] uppercase font-medium whitespace-nowrap"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                View the Full Menu
              </span>
              <div className="h-px flex-1 bg-nest-gold/10" />
            </motion.div>

            {/* Platform Links */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="grid sm:grid-cols-3 gap-4 mb-16"
            >
              {platforms.map((p, i) => (
                <motion.a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group flex items-center gap-4 glass-card rounded-2xl px-6 py-5 border border-nest-gold/10 hover:border-nest-gold/30 hover:shadow-[0_12px_30px_rgba(81,9,9,0.06)] transition-all duration-300 cursor-none"
                >
                  <div className={`w-10 h-10 rounded-full ${p.color} flex items-center justify-center flex-shrink-0 shadow-sm ${p.textColor}`}>
                    {p.icon}
                  </div>
                  <div>
                    <p
                      className="text-nest-cream text-sm font-semibold mb-0.5 group-hover:text-nest-gold transition-colors duration-300"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {p.name}
                    </p>
                    <p
                      className="text-nest-cream/45 text-[10px] leading-snug font-light"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {p.description}
                    </p>
                  </div>
                  <span className="ml-auto text-nest-gold/40 group-hover:text-nest-gold group-hover:translate-x-1 transition-all duration-300 text-sm">→</span>
                </motion.a>
              ))}
            </motion.div>

            {/* Book a Table CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Magnetic>
                <button
                  onClick={() => document.querySelector("#reserve")?.scrollIntoView({ behavior: "smooth" })}
                  className="btn-outline-gold px-8 py-4 cursor-none"
                  style={{ borderRadius: "100px" }}
                >
                  <span>Book a Table</span>
                </button>
              </Magnetic>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
