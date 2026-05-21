"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Magnetic from "@/components/Magnetic";

gsap.registerPlugin(ScrollTrigger);

const menuItems = [
  {
    category: "Signature Cocktails",
    items: [
      {
        name: "Waikiki Dream",
        desc: "Dark rum, pineapple, passion fruit, island spices, coconut cream",
        price: "₹850",
        tag: "SIGNATURE",
        tagColor: "bg-nest-gold text-nest-black",
      },
      {
        name: "Maui Sunset",
        desc: "Tequila, hibiscus, mango, chilli salt rim, golden float",
        price: "₹780",
        tag: "CHEF'S PICK",
        tagColor: "bg-nest-teal text-nest-black",
      },
      {
        name: "Pacific Storm",
        desc: "Mezcal, cold brew, dark cacao, Okinawa black sugar, salted foam",
        price: "₹820",
        tag: null,
        tagColor: "",
      },
      {
        name: "Nest Negroni",
        desc: "Aged gin, Campari, sweet vermouth, orange bitters, bamboo smoke",
        price: "₹790",
        tag: null,
        tagColor: "",
      },
    ],
  },
  {
    category: "Island Bites",
    items: [
      {
        name: "Ahi Poke Bowl",
        desc: "Fresh yellowfin tuna, jasmine rice, edamame, pickled radish, sriracha aioli",
        price: "₹680",
        tag: "BESTSELLER",
        tagColor: "bg-nest-gold text-nest-black",
      },
      {
        name: "Loco Moco Nest Style",
        desc: "Wagyu patty, truffle onsen egg, demi-glace, crispy shallots on saffron rice",
        price: "₹980",
        tag: "PREMIUM",
        tagColor: "bg-nest-amber-light text-nest-black",
      },
      {
        name: "Tiradito Crudo",
        desc: "Sea bass, aji amarillo leche de tigre, micro herbs, crispy quinoa",
        price: "₹750",
        tag: null,
        tagColor: "",
      },
      {
        name: "Bali Chicken Satay",
        desc: "Lemongrass marinated thigh, peanut sambal, pickled papaya, kaffir lime",
        price: "₹520",
        tag: null,
        tagColor: "",
      },
    ],
  },
];

const featuredCocktail = {
  name: "Waikiki Dream",
  ingredients: ["Dark Rum", "Pineapple Juice", "Passion Fruit", "Island Spices", "Coconut Cream"],
  story:
    "Our liquid soul. The Waikiki Dream is more than a drink — it is the essence of our island-inspired identity. Rich, aromatic, and deeply refreshing.",
};

export default function Menu() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".menu-item-row", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".menu-lists-container",
          start: "top 80%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="menu"
      className="relative section-padding bg-nest-black overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-nest-gold/5 blur-3xl pointer-events-none" />

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
                <span className="text-gold-gradient italic font-light">Tropical Island Soul</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-nest-cream/60 text-sm sm:text-base leading-relaxed font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Explore a dual-heritage menu that fuses vibrant Japanese culinary technique with robust Peruvian flavors, paired with hand-crafted signature mixology.
              </motion.p>
            </div>

            {/* Featured Cocktail Card */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-20 overflow-hidden rounded-3xl border border-nest-gold/15 glass-card shadow-[0_15px_35px_rgba(36,30,21,0.03)]"
            >
              <div className="grid lg:grid-cols-12 gap-0 items-stretch">
                
                {/* Featured Image */}
                <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-0 overflow-hidden group">
                  <Image
                    src="/food/DSC00483.jpg"
                    alt="Waikiki Dream Featured Cocktail"
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                  {/* Subtle fade */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-nest-black/40 hidden lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-nest-black/40 to-transparent lg:hidden" />
                </div>

                {/* Featured Detail */}
                <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center relative">
                  <div className="absolute top-6 right-6">
                    <span 
                      className="bg-nest-gold/15 text-nest-gold text-[9px] tracking-widest px-3 py-1 uppercase font-medium rounded-full"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Featured Signature
                    </span>
                  </div>

                  <p className="text-nest-gold text-[10px] tracking-[0.25em] uppercase mb-2 font-medium"
                    style={{ fontFamily: "'Inter', sans-serif" }}>
                    House Special
                  </p>
                  <h3 className="font-cormorant text-4xl sm:text-5xl font-light text-nest-cream mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {featuredCocktail.name}
                  </h3>
                  <p className="text-nest-cream/65 leading-relaxed mb-6 font-light text-xs sm:text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}>
                    {featuredCocktail.story}
                  </p>

                  {/* Ingredients capsule list */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredCocktail.ingredients.map((ing) => (
                      <span key={ing}
                        className="bg-nest-dark border border-nest-gold/10 text-nest-cream/70 text-[10px] px-3 py-1 rounded-full tracking-wider"
                        style={{ fontFamily: "'Inter', sans-serif" }}>
                        {ing}
                      </span>
                    ))}
                  </div>

                  <p className="font-cormorant text-3xl text-gold-gradient font-light"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    ₹850
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Menu Sections Grid */}
            <div className="menu-lists-container grid lg:grid-cols-2 gap-12 lg:gap-16">
              {menuItems.map((sec) => (
                <div key={sec.category} className="flex flex-col">
                  <h3
                    className="font-cormorant text-2xl sm:text-3xl font-light text-nest-cream mb-8 pb-3 border-b border-nest-gold/15"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {sec.category}
                  </h3>

                  <div className="flex flex-col gap-6">
                    {sec.items.map((item) => (
                      <div
                        key={item.name}
                        className="menu-item-row flex flex-col group pb-5 border-b border-nest-gold/5 last:border-0 cursor-none"
                      >
                        <div className="flex justify-between items-baseline gap-4 mb-2">
                          <div className="flex items-center gap-3">
                            <h4
                              className="text-nest-cream group-hover:text-nest-gold transition-colors duration-300 text-sm sm:text-base font-medium tracking-wide"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {item.name}
                            </h4>
                            {item.tag && (
                              <span 
                                className={`text-[8px] tracking-[0.15em] px-2.5 py-0.5 uppercase font-semibold rounded-full border border-nest-gold/15 ${item.tagColor}`}
                                style={{ fontFamily: "'Inter', sans-serif" }}
                              >
                                {item.tag}
                              </span>
                            )}
                          </div>
                          
                          {/* Dot leader */}
                          <div className="hidden sm:block flex-1 h-[1px] border-b border-dotted border-nest-gold/25 mx-2 transform translate-y-[-4px]" />

                          <p
                            className="text-nest-gold font-cormorant text-lg sm:text-xl font-light flex-shrink-0"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                          >
                            {item.price}
                          </p>
                        </div>
                        <p
                          className="text-nest-cream/45 text-xs font-light max-w-md"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Booking Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mt-16"
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
