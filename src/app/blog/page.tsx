"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Link from "next/link";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    slug: "best-rooftop-dining-experience-in-andheri",
    title: "Best Rooftop Dining Experience in Andheri: Why The Nest at Waikiki Stands Out",
    excerpt:
      "Mumbai is a city that never slows down. When it comes to finding the perfect combination of great food, signature cocktails, stunning views, and a lively atmosphere, The Nest at Waikiki delivers an experience that goes far beyond dining.",
    tags: ["Rooftop Dining", "Andheri East", "Cocktails", "Mumbai Nightlife"],
  },
  {
    slug: "restaurants-in-andheri-east",
    title: "Restaurants in Andheri East: The Ultimate Guide to Exceptional Dining Experiences",
    excerpt:
      "When searching for the best restaurants in Andheri East, diners today want more than just great food. The Nest at Waikiki brings together Nikkei cuisine, handcrafted cocktails, and elegant hospitality for every occasion.",
    tags: ["Restaurants", "Andheri East", "Fine Dining", "Nikkei Cuisine", "Cocktails"],
  },
  {
    slug: "best-japanese-restaurant-in-andheri",
    title: "Best Japanese Restaurant in Andheri: Discover the Art of Nikkei Dining at The Nest at Waikiki",
    excerpt:
      "For those searching for the best Japanese restaurant in Andheri, The Nest at Waikiki offers authentic Nikkei cuisine, premium sushi, and handcrafted cocktails in an elegant setting.",
    tags: ["Japanese Cuisine", "Nikkei", "Sushi", "Andheri East", "Cocktails"],
  },
];

export default function BlogPage() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    return () => { gsap.ticker.remove(tick); lenis.destroy(); };
  }, []);

  return (
    <main className="bg-nest-black min-h-screen">
      <CustomCursor />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-44 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-nest-gold/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] rounded-full bg-nest-teal/5 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-nest-gold" />
            <span className="text-nest-gold text-[10px] tracking-[0.4em] uppercase font-light" style={{ fontFamily: "'Inter', sans-serif" }}>The Nest Journal</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-cormorant font-light text-[clamp(3rem,8vw,6.5rem)] text-nest-cream leading-none mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Stories from <br /><span className="text-gold-gradient italic">Above the Skyline</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="text-nest-cream/60 text-sm sm:text-base max-w-xl font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            Guides, stories, and insider reads from Mumbai&rsquo;s premier rooftop bar and restaurant.
          </motion.p>
        </div>
      </section>

      {/* Posts */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto border-x border-nest-gold/10 bg-nest-black">
          <div className="p-6 flex flex-col gap-6">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group glass-card rounded-3xl border border-nest-gold/10 hover:border-nest-gold/30 hover:shadow-[0_20px_40px_rgba(81,9,9,0.06)] transition-all duration-500 overflow-hidden"
              >
                <div className="p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-5">
                      {post.tags.map((tag) => (
                        <span key={tag} className="bg-nest-dark border border-nest-gold/15 text-nest-gold text-[9px] px-3 py-1 rounded-full tracking-widest uppercase font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-cormorant font-light text-2xl sm:text-3xl lg:text-4xl text-nest-cream group-hover:text-nest-gold transition-colors duration-300 mb-4 leading-snug" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {post.title}
                    </h2>
                    <p className="text-nest-cream/55 text-sm leading-relaxed font-light max-w-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 border border-nest-gold/30 hover:border-nest-gold hover:bg-nest-gold hover:text-white text-nest-gold text-[10px] tracking-[0.25em] uppercase font-semibold px-7 py-3.5 rounded-full transition-all duration-300 cursor-none"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Read Article <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* More coming soon */}
          <div className="mx-6 mb-6 p-8 text-center border border-dashed border-nest-gold/15 rounded-2xl">
            <p className="text-nest-cream/35 text-[10px] tracking-[0.4em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
              More stories coming soon
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
