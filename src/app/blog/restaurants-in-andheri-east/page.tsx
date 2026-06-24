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

export default function BlogPost2() {
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
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 mb-8 text-[10px] tracking-widest uppercase font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Link href="/" className="text-nest-cream/40 hover:text-nest-gold transition-colors cursor-none">Home</Link>
            <span className="text-nest-cream/25">·</span>
            <Link href="/blog" className="text-nest-cream/40 hover:text-nest-gold transition-colors cursor-none">Journal</Link>
            <span className="text-nest-cream/25">·</span>
            <span className="text-nest-gold">Andheri East</span>
          </motion.div>

          {/* Tags */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="flex flex-wrap gap-2 mb-6">
            {["Restaurants", "Andheri East", "Nightlife", "Pan Asian", "Japanese"].map((tag) => (
              <span key={tag} className="bg-nest-dark border border-nest-gold/15 text-nest-gold text-[9px] px-3 py-1 rounded-full tracking-widest uppercase font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>{tag}</span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="font-cormorant font-light text-[clamp(2.2rem,6vw,4.5rem)] text-nest-cream leading-tight mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Restaurants in Andheri East: Why The Nest at Waikiki is Redefining Dining & Nightlife
          </motion.h1>
        </div>
      </section>

      {/* Article */}
      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="prose-nest"
          >
            <p>Andheri East has always been one of Mumbai&rsquo;s most dynamic neighborhoods — a place where business, culture, and entertainment converge. When searching for the best restaurants in Andheri East, diners today want more than just great food. They seek experiences that engage all the senses: stunning views, creative cocktails, excellent cuisine, and a vibrant atmosphere.</p>

            <p>The Nest at Waikiki brings together premium dining, innovative cocktails, tropical-inspired interiors, and energetic entertainment — all from a rooftop perch in the heart of Andheri East.</p>

            <h2>Among the Top Restaurants in Andheri East</h2>
            <p>When it comes to top restaurants in Andheri East, The Nest at Waikiki stands apart. Rather than offering just another dining venue, The Nest has created a world where every detail — from the carefully curated menu to the ambient lighting and curated music — contributes to an unforgettable evening.</p>
            <p>Whether you&rsquo;re searching for rooftop restaurants in Andheri East, the best cocktail bar in Andheri East Mumbai, or a tropical theme restaurant in Mumbai, The Nest delivers across all these dimensions simultaneously.</p>

            <h2>Experience One of the Best Restaurants in Mumbai</h2>
            <p>Mumbai is a city of extremes. Extraordinary food, incredible nightlife, and a constant search for something new and exciting. For those looking for the best restaurants in Mumbai, the standard is high — and The Nest at Waikiki rises to meet it.</p>
            <p>The venue offers:</p>
            <ul>
              <li>A stunning rooftop setting with panoramic city views</li>
              <li>Premium Japanese and Pan-Asian cuisine</li>
              <li>Signature handcrafted cocktails from expert mixologists</li>
              <li>A vibrant entertainment programme featuring DJ nights and guest takeovers</li>
              <li>Impeccable hospitality and attention to detail</li>
              <li>An atmosphere that works equally well for a quiet dinner or an energetic night out</li>
            </ul>

            <h2>A Premier Pan Asian Restaurant in Mumbai</h2>
            <p>Asian cuisine has always occupied a special place in Mumbai&rsquo;s food culture. As a leading Pan Asian restaurant in Mumbai, The Nest has developed a culinary identity that draws from the rich traditions of Japanese cooking while incorporating flavours from across the continent.</p>
            <p>The result is a menu that feels both familiar and exciting — offering guests a culinary journey that respects its roots while embracing innovation.</p>

            <h2>Authentic Flavours from the Best Japanese Restaurant in Mumbai</h2>
            <p>Japanese cuisine has become one of the most beloved cuisines in Mumbai, and for good reason. Its emphasis on seasonal ingredients, precise technique, and elegant presentation aligns perfectly with Mumbai diners&rsquo; growing appreciation for quality and authenticity.</p>
            <p>As one of the best Japanese restaurants in Mumbai, The Nest at Waikiki brings this sensibility to life. Guests can explore Japanese-inspired dishes that demonstrate the full range of Japanese culinary philosophy — from delicate, clean flavours to rich, umami-forward preparations.</p>

            <h2>The Best Cocktail Bar in Andheri East Mumbai</h2>
            <p>For those searching for the best cocktail bar in Andheri East Mumbai, The Nest has crafted a drinks programme that rivals the finest bars in the city. The cocktail menu at The Nest is a journey of its own. Inspired by the cocktail traditions of the Pacific and infused with premium spirits and fresh botanicals, each drink tells a story.</p>
            <p>The Nest consistently ranks among the best cocktail bars in Mumbai because of its commitment to quality, creativity, and consistency.</p>

            <h2>Mumbai&rsquo;s Premier Rooftop Bar in Andheri East</h2>
            <p>The rooftop bar experience at The Nest is one of the venue&rsquo;s most distinctive features. As a premier rooftop bar in Andheri East, the venue offers sweeping views of the Mumbai skyline, creating a backdrop that transforms every evening into something special.</p>
            <p>The combination of cocktails, cuisine, views, and music makes it one of the most distinctive bars in Andheri East — a destination guests return to again and again.</p>

            <h2>Vibrant Nightlife in Mumbai</h2>
            <p>Mumbai&rsquo;s nightlife is legendary, and The Nest at Waikiki is one of the best clubs in Andheri East contributing to that reputation. For guests looking for night clubs in Andheri, or the best clubs in Andheri, The Nest offers a sophisticated alternative to traditional club environments.</p>
            <p>The entertainment programme at The Nest includes resident DJ nights, guest DJ takeovers, and special themed evenings that keep the energy high and the programming fresh. As one of the leading late night bars in Andheri East Mumbai, The Nest is the place where the evening really comes alive after dark. The venue&rsquo;s reputation extends beyond dining into Mumbai&rsquo;s broader nightlife scene — making it a destination for pubs in Andheri Mumbai who want a premium after-dark experience.</p>

            <h2>Memorable Birthday Party Places in Andheri</h2>
            <p>Choosing the right venue for a birthday can make all the difference between a forgettable event and a truly memorable one. The Nest is consistently cited as one of the best birthday party places in Andheri — offering the perfect combination of ambience, food, cocktails, and entertainment.</p>
            <p>The venue is also a popular choice for those searching for party places in Andheri Mumbai and party place in Andheri — offering versatile spaces and customisable packages for groups of all sizes.</p>

            <h2>Premier Party Venues in Andheri for Every Occasion</h2>
            <p>The Nest at Waikiki has established itself as one of the most sought-after party venues in Andheri. Whether you&rsquo;re hosting a corporate event, a team outing, an anniversary dinner, or a private gathering, the venue offers the flexibility and features to make any occasion exceptional. Among premium party venues in Andheri, The Nest stands out for its combination of:</p>
            <ul>
              <li>Unique tropical-inspired setting</li>
              <li>Premium cuisine and cocktails</li>
              <li>Professional event support</li>
              <li>Stunning rooftop views</li>
              <li>Versatile space options</li>
            </ul>

            <h2>A Luxury Dining Experience in Mumbai</h2>
            <p>In a city where dining options are almost limitless, The Nest at Waikiki has carved out a unique position as a destination for a luxury dining experience in Mumbai. From the moment guests arrive, every detail has been considered to ensure an evening that exceeds expectations.</p>
            <p>The venue is also recognised as a premier tropical theme restaurant in Mumbai — a unique distinction that sets it apart from conventional fine dining establishments and rooftop bars.</p>

            <h2>Discover Andheri East&rsquo;s Most Exciting Dining Destination</h2>
            <p>The Nest at Waikiki is more than a restaurant — it&rsquo;s a destination. For those exploring restaurants in Andheri East, top restaurants in Andheri East, or the best restaurants in Mumbai, The Nest represents a new standard in premium rooftop dining and nightlife.</p>
            <p>Whether you come for the food, the cocktails, the views, or the energy, you&rsquo;ll leave with memories that last long after the evening is over.</p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="mt-14 p-10 sm:p-14 glass-card rounded-3xl border border-nest-gold/20 text-center relative overflow-hidden"
          >
            <div className="absolute top-5 left-5 w-5 h-5 border-t border-l border-nest-gold/40" />
            <div className="absolute top-5 right-5 w-5 h-5 border-t border-r border-nest-gold/40" />
            <div className="absolute bottom-5 left-5 w-5 h-5 border-b border-l border-nest-gold/40" />
            <div className="absolute bottom-5 right-5 w-5 h-5 border-b border-r border-nest-gold/40" />
            <p className="text-nest-gold text-[10px] tracking-[0.4em] uppercase mb-4 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>Reserve Now</p>
            <h3 className="font-cormorant text-3xl sm:text-4xl font-light text-nest-cream mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Visit Andheri East&rsquo;s <span className="text-gold-gradient italic">Premier Rooftop</span>
            </h3>
            <p className="text-nest-cream/55 text-sm max-w-md mx-auto mb-8 font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Reserve your table at The Nest at Waikiki and experience the best rooftop dining, cocktails, and nightlife in Andheri East.
            </p>
            <Link
              href="/book"
              className="inline-block btn-gold rounded-full px-10 py-4 text-[10px] tracking-[0.25em] cursor-none"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Book a Table
            </Link>
          </motion.div>

          {/* Back link */}
          <div className="mt-10 text-center">
            <Link href="/blog" className="text-nest-cream/40 hover:text-nest-gold text-xs tracking-widest uppercase transition-colors cursor-none" style={{ fontFamily: "'Inter', sans-serif" }}>
              ← Back to Journal
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
