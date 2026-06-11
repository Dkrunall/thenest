"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const DineIcon = () => (
  <svg className="w-5 h-5 text-nest-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 2v20" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 15V2a5 5 0 0 0-5 5v8c0 1.1.9 2 2 2h3Zm0 0v5" />
  </svg>
);

const SipIcon = () => (
  <svg className="w-5 h-5 text-nest-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M22 2H2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12 2 2h20Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v10" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 22H5" />
  </svg>
);

const VibeIcon = () => (
  <svg className="w-5 h-5 text-nest-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const pillars = [
  {
    icon: <DineIcon />,
    title: "Dine",
    subtitle: "Japanese + Continental",
    description:
      "A culinary journey fusing Japanese precision with Continental elegance. Every dish is crafted to delight — from delicate Tebasake to silky Creamy Salmon under the open sky.",
    highlights: ["Tebasake", "Treasure Pouch", "Furikake Prawns", "Prawn Tempura", "Creamy Salmon"],
    image: "/food/DSC09517.jpg",
  },
  {
    icon: <SipIcon />,
    title: "Sip",
    subtitle: "Modern Tiki Mixology",
    description:
      "Where classic Polynesian tiki culture meets cutting-edge liquid craft. Our mixologists pour works of art — bold, tropical, and unapologetically unforgettable.",
    highlights: ["Powhiri Picante", "Island Grog", "Spicy Tropical Zombie", "Waikiki Grog 2.0"],
    image: "/food/DSC00887.jpg",
  },
  {
    icon: <VibeIcon />,
    title: "Vibe",
    subtitle: "DJ Nights & Artistry",
    description:
      "As twilight sets, the atmosphere ignites. Resident DJs, guest bar takeovers, and house grooves carry the night from golden hour all the way to afterhours.",
    highlights: ["DJ Nights", "Guest Takeovers", "House Grooves", "Bar Takeovers"],
    image: "/interior/DSC01049.jpg",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative section-padding bg-nest-dark overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-nest-teal/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="section-grid">
          
          {/* Sticky Left Sidebar */}
          <div className="section-sidebar flex flex-col justify-start lg:pt-2">
            <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
              <span className="font-cormorant text-5xl sm:text-6xl font-light text-nest-gold leading-none">02</span>
              <div className="w-12 h-[1px] bg-nest-gold/30 lg:w-[1px] lg:h-12" />
              <span 
                className="text-nest-cream/40 text-[9px] sm:text-[10px] tracking-[0.4em] uppercase whitespace-nowrap lg:transform lg:rotate-90 lg:origin-left lg:translate-x-[6px] lg:translate-y-[20px] font-medium" 
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                THE EXPERIENCE
              </span>
            </div>
          </div>

          {/* Right Main Content */}
          <div>
            {/* Header Description */}
            <div className="max-w-xl mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-cormorant font-light text-[clamp(2rem,5vw,3.75rem)] text-nest-cream mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Three Ways to <br />
                <span className="text-gold-gradient italic font-light">Nest Under the Stars</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-nest-cream/60 text-sm sm:text-base leading-relaxed font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Select your vibe for the evening. Whether you come to savour artisanal Japanese-Continental plates, taste signature tiki mixology, or lose yourself in a DJ night under the open sky.
              </motion.p>
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -10 }}
                  className="group relative flex flex-col justify-between overflow-hidden glass-card rounded-3xl border border-nest-gold/5 hover:border-nest-gold/25 hover:shadow-[0_20px_40px_rgba(81,9,9,0.06)] transition-all duration-500 cursor-none"
                >
                  <div>
                    {/* Top Image Frame - Curved arch */}
                    <div className="relative h-64 overflow-hidden p-4">
                      <div className="relative w-full h-full arch-frame shadow-[inset_0_4px_12px_rgba(0,0,0,0.05)] overflow-hidden">
                        <Image
                          src={pillar.image}
                          alt={pillar.title}
                          fill
                          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,255,255,0.75)] via-transparent to-transparent z-10" />
                        
                        {/* Icon Badge */}
                        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 nav-blur flex items-center justify-center text-xl shadow-sm z-20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                          {pillar.icon}
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="px-8 pt-4 pb-2">
                      <p
                        className="text-nest-gold text-[10px] tracking-[0.25em] uppercase mb-1.5 font-semibold"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {pillar.subtitle}
                      </p>
                      <h3
                        className="font-cormorant text-3xl font-light text-nest-cream mb-4"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {pillar.title}
                      </h3>
                      <p
                        className="text-nest-cream/60 text-xs sm:text-sm leading-relaxed font-light mb-6"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="px-8 pb-8">
                    <div className="h-px bg-nest-gold/10 w-full mb-5" />
                    <ul className="space-y-3">
                      {pillar.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-center gap-3 text-xs text-nest-cream/70 font-light"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          <svg className="w-2.5 h-2.5 text-nest-gold flex-shrink-0 transition-transform duration-500 group-hover:rotate-45" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
                          </svg>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Border Highlight Effect on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-nest-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
