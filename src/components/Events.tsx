"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Magnetic from "@/components/Magnetic";

const CocktailIcon = () => (
  <svg className="w-8 h-8 text-nest-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M22 2H2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12 2 2h20Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v10" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 22H5" />
  </svg>
);

const HeadphonesIcon = () => (
  <svg className="w-8 h-8 text-nest-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-8 h-8 text-nest-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20" />
  </svg>
);

const BeakerIcon = () => (
  <svg className="w-8 h-8 text-nest-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 2v7.31L3.39 19A1 1 0 0 0 4 20.5h16a1 1 0 0 0 .61-1.5L14 9.3V2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 2h6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.6 16h12.8" />
  </svg>
);

const events = [
  {
    day: "Every Friday",
    title: "Waikiki Shake-Offs",
    subtitle: "Flair Bartending & Liquid Alchemy",
    description:
      "Watch our award-winning mixologists push the limits of liquid craft. High-energy shake-offs, fiery pours, and exclusive tiki tastings.",
    time: "9:00 PM – 11:00 PM",
    icon: <CocktailIcon />,
    tag: "Weekly Ritual",
  },
  {
    day: "Every Saturday",
    title: "Acoustic Sunset & DJ Sets",
    subtitle: "Live Under the Stars",
    description:
      "From neo-soul acoustic sets during the golden hour to elevated lounge beats late into the night. Curated sounds to lift the spirit.",
    time: "8:00 PM – 1:00 AM",
    icon: <HeadphonesIcon />,
    tag: "Weekly Ritual",
  },
  {
    day: "Monthly Takeovers",
    title: "Global Guest Bars",
    subtitle: "Renowned Mixologist Takeovers",
    description:
      "We open our signature egg bar to celebrated guest mixologists from across the globe. Limited seats, one-of-a-kind menu.",
    time: "7:00 PM Onwards",
    icon: <GlobeIcon />,
    tag: "Curated Event",
  },
  {
    day: "Masterclasses",
    title: "Tiki Cocktails Craft",
    subtitle: "Hands-on Mixology Workshop",
    description:
      "Go behind the bar. Learn the balance of tropical syrups, aging spirits, and standard garnishes from our lead bartender.",
    time: "6:00 PM – 8:00 PM",
    icon: <BeakerIcon />,
    tag: "Tiki Class",
  },
];

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
                From weekly acoustic grooves and flair takeovers to exclusive masterclasses, there is always a reason to gather on our rooftop garden.
              </motion.p>
            </div>

            {/* Timeline List */}
            <div className="relative pl-6 sm:pl-8 flex flex-col gap-10">
              {/* Vertical timeline gradient line */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-nest-gold/10 via-nest-gold/45 to-nest-gold/10 pointer-events-none" />

              {/* Event Cards */}
              {events.map((event, i) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative group cursor-none"
                >
                  {/* Timeline Circle Node */}
                  <div className="absolute -left-[30px] sm:-left-[38px] top-2.5 w-3.5 h-3.5 rounded-full border-2 border-nest-gold bg-nest-dark transition-all duration-300 group-hover:bg-nest-gold group-hover:scale-125 z-10" />

                  {/* Card row layout */}
                  <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border border-nest-gold/5 hover:shadow-[0_20px_40px_rgba(81,9,9,0.06)] hover:border-nest-gold/30 transition-all duration-300">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span 
                          className="bg-nest-gold text-nest-black text-[9px] tracking-[0.15em] px-3 py-1 uppercase font-semibold rounded-full"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {event.day}
                        </span>
                        <span 
                          className="text-nest-cream/40 text-[9px] tracking-[0.2em] uppercase font-light"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {event.tag}
                        </span>
                      </div>
                      
                      <h3 
                        className="font-cormorant text-2xl sm:text-3xl font-light text-nest-cream group-hover:text-nest-gold transition-colors duration-300 mb-1.5"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {event.title}
                      </h3>
                      <p 
                        className="text-nest-teal text-xs tracking-wider uppercase font-semibold mb-3.5"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {event.subtitle}
                      </p>
                      <p 
                        className="text-nest-cream/60 text-xs sm:text-sm font-light leading-relaxed max-w-2xl"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {event.description}
                      </p>
                    </div>

                    <div className="flex flex-row lg:flex-col lg:items-end justify-between items-center border-t border-nest-gold/10 lg:border-t-0 pt-4 lg:pt-0 gap-3">
                      <div className="flex items-center gap-3">
                        <span className="flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                          {event.icon}
                        </span>
                        <p 
                          className="text-nest-cream text-xs font-semibold tracking-wide lg:text-right"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {event.time}
                        </p>
                      </div>

                      <button
                        onClick={() => document.querySelector("#reserve")?.scrollIntoView({ behavior: "smooth" })}
                        className="text-nest-gold hover:text-nest-gold-light text-xs font-semibold tracking-widest uppercase flex items-center gap-1.5 mt-2 transform group-hover:translate-x-1.5 transition-all duration-300 cursor-none"
                      >
                        Book Table →
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Private Events Banner Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-16 text-center glass-card p-10 sm:p-16 rounded-3xl border border-nest-gold/20 relative overflow-hidden bg-gradient-to-b from-nest-dark/80 to-nest-darker/60 shadow-[0_20px_50px_rgba(81,9,9,0.05)] cursor-none"
            >
              {/* High-end invitation double border corner ornaments */}
              <div className="absolute inset-4 border border-nest-gold/15 rounded-2xl pointer-events-none" />
              <div className="absolute inset-5 border border-dashed border-nest-gold/10 rounded-2xl pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center">
                {/* Gold Star Icon */}
                <div className="w-8 h-8 rounded-full border border-nest-gold/30 flex items-center justify-center mb-6">
                  <svg className="w-3.5 h-3.5 text-nest-gold animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
                  </svg>
                </div>

                <p 
                  className="text-nest-gold text-[10px] tracking-[0.45em] uppercase mb-4 font-bold"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Private Gatherings
                </p>
                
                <h3
                  className="font-cormorant text-3xl sm:text-5xl font-light text-nest-cream mb-6 tracking-wide"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Celebrate Above the Skyline
                </h3>
                
                <p 
                  className="text-nest-cream/65 text-xs sm:text-sm max-w-xl mx-auto mb-10 font-light leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  From intimate cocktail birthdays and bridal showers to exclusive brand launches under our tropical garden canopy. Let us tailor a bespoke experience with a custom menu, private mixologist, and dedicated sounds.
                </p>

                <Magnetic>
                  <button
                    onClick={() => document.querySelector("#reserve")?.scrollIntoView({ behavior: "smooth" })}
                    className="btn-gold rounded-full px-10 py-4 cursor-none text-[10px] tracking-[0.25em]"
                  >
                    Plan Your Event
                  </button>
                </Magnetic>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
