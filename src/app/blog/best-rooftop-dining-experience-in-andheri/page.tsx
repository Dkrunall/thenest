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

export default function BlogPost1() {
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
            <span className="text-nest-gold">Rooftop Dining</span>
          </motion.div>

          {/* Tags */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="flex flex-wrap gap-2 mb-6">
            {["Rooftop Dining", "Andheri East", "Cocktails", "Mumbai Nightlife"].map((tag) => (
              <span key={tag} className="bg-nest-dark border border-nest-gold/15 text-nest-gold text-[9px] px-3 py-1 rounded-full tracking-widest uppercase font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>{tag}</span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="font-cormorant font-light text-[clamp(2.2rem,6vw,4.5rem)] text-nest-cream leading-tight mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Best Rooftop Dining Experience in Andheri: Why The Nest at Waikiki Stands Out
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
            <p>Mumbai is a city that never slows down. From bustling business districts to vibrant nightlife, every corner of the city offers something unique. When it comes to finding the perfect combination of great food, signature cocktails, stunning views, and a lively atmosphere, diners are increasingly searching for the best rooftop restaurants in Mumbai.</p>

            <p>Located in the heart of Andheri East, The Nest at Waikiki offers a refreshing escape from the city&rsquo;s fast pace. With tropical-inspired interiors, handcrafted cocktails, curated Japanese and Pan-Asian cuisine, and breathtaking rooftop views, it has quickly become one of the most sought-after rooftop restaurants in Andheri East.</p>

            <p>Whether you&rsquo;re planning a romantic dinner, a birthday celebration, a corporate gathering, or a night out with friends, The Nest delivers an experience that goes far beyond dining.</p>

            <h2>A Unique Rooftop Dining Experience in Andheri</h2>
            <p>A great rooftop venue is about more than just the view. The Nest at Waikiki has created a complete experience where ambience, food, drinks, music, and hospitality come together seamlessly.</p>
            <p>Guests are welcomed into a tropical-inspired setting that feels worlds away from the busy streets below. The open-air rooftop atmosphere, elegant seating, ambient lighting, and skyline views create the perfect backdrop for memorable evenings.</p>
            <p>For those looking for a premium rooftop dining experience in Andheri or rooftop dining in Andheri Mumbai, The Nest offers the ideal blend of luxury and comfort.</p>

            <h2>Among the Best Rooftop Restaurants in Mumbai</h2>
            <p>Mumbai is home to countless dining destinations, but only a select few successfully combine exceptional cuisine with an immersive atmosphere.</p>
            <p>What makes The Nest one of the best rooftop restaurants in Mumbai?</p>
            <ul>
              <li>Stunning rooftop ambience</li>
              <li>Signature handcrafted cocktails</li>
              <li>Curated Japanese and Pan-Asian cuisine</li>
              <li>Live entertainment and vibrant nightlife in Mumbai</li>
              <li>Convenient location in Andheri East</li>
              <li>Perfect setting for celebrations and private gatherings</li>
            </ul>

            <h2>Discover a Premium Pan Asian Restaurant in Mumbai</h2>
            <p>Food is at the heart of every great dining experience. The Nest has carefully curated a menu inspired by some of Asia&rsquo;s most beloved flavours. As a leading Pan Asian restaurant in Mumbai, the venue offers an exciting selection of dishes crafted using premium ingredients and contemporary techniques.</p>

            <h2>Experience Authentic Japanese Restaurant in Mumbai Flavours</h2>
            <p>For guests searching for a Japanese restaurant in Mumbai, The Nest offers an exceptional culinary journey. Japanese cuisine is known for its precision, freshness, and balance. At The Nest, guests can enjoy a range of Japanese-inspired dishes that showcase these qualities while introducing creative modern twists.</p>

            <h2>Signature Cocktails at One of the Best Cocktail Bars in Mumbai</h2>
            <p>No rooftop experience is complete without great cocktails. The Nest has established itself as one of the best cocktail bars in Mumbai by focusing on creative mixology and premium ingredients. Guests looking for the best cocktail bar in Andheri East Mumbai often choose The Nest for its elevated cocktail program and sophisticated rooftop atmosphere.</p>

            <h2>A Vibrant Rooftop Bar in Andheri East</h2>
            <p>As the sun sets, The Nest transforms into one of the most exciting bars in Andheri East and a premier rooftop bar in Andheri East. The combination of music, cocktails, city views, and energetic ambience creates an ideal destination for after-work gatherings and weekend nights out. For those exploring nightlife in Mumbai, The Nest offers a premium alternative to traditional bars and clubs. The atmosphere also makes it one of the preferred late night bars in Andheri East Mumbai.</p>

            <h2>Perfect for Birthday Party Places in Andheri</h2>
            <p>Finding the right venue can make all the difference when planning a celebration. As one of the most popular birthday party places in Andheri, The Nest provides a unique setting for memorable events. Whether you&rsquo;re planning an intimate gathering or a larger event, the venue can accommodate a variety of occasions. Many guests also choose The Nest when searching for party places in Andheri Mumbai, party place in Andheri, and premium party venues in Andheri.</p>

            <h2>One of the Most Exciting Party Venues in Andheri</h2>
            <p>The Nest has become a preferred choice among party venues in Andheri because it offers more than just space — it delivers an experience. The venue is ideal for:</p>
            <ul>
              <li>Birthday parties</li>
              <li>Corporate events</li>
              <li>Team outings</li>
              <li>Social gatherings</li>
              <li>Anniversary celebrations</li>
              <li>Private parties</li>
            </ul>

            <h2>Music, Entertainment & Nightlife</h2>
            <p>For guests looking for the best clubs in Andheri, best clubs in Andheri East, night clubs in Andheri, and premium pubs in Andheri Mumbai, The Nest offers a sophisticated nightlife experience unlike traditional nightclubs. With curated music, premium beverages, and an energetic crowd, guests can enjoy the excitement of nightlife without sacrificing comfort and elegance.</p>

            <h2>Why Guests Choose The Nest at Waikiki</h2>
            <p>When people search for restaurants in Andheri East, top restaurants in Andheri East, or the best restaurants in Mumbai, they are looking for a venue that offers more than just food. The Nest combines:</p>
            <ul>
              <li>Luxury dining experience Mumbai guests love</li>
              <li>Exceptional cocktails</li>
              <li>Japanese and Pan-Asian cuisine</li>
              <li>Rooftop ambience</li>
              <li>Vibrant nightlife</li>
              <li>Premium hospitality</li>
              <li>Convenient Andheri East location</li>
            </ul>
            <p>It is also recognized as a unique tropical theme restaurant in Mumbai, offering an atmosphere that stands apart from traditional restaurants and bars.</p>

            <h2>Reserve Your Table Today</h2>
            <p>If you&rsquo;re looking for one of the best restaurants in Mumbai, a premium rooftop dining experience in Andheri, a vibrant rooftop bar in Andheri East, or one of the best cocktail bars in Mumbai, The Nest at Waikiki is the perfect destination.</p>
            <p>Whether it&rsquo;s a casual evening, a celebration, or a memorable night out, you&rsquo;ll discover why guests continue to rank The Nest among the top restaurants in Andheri East, leading party places in Andheri Mumbai, and one of the most exciting destinations for nightlife in Mumbai.</p>
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
              Secure Your Table <span className="text-gold-gradient italic">in the Skies</span>
            </h3>
            <p className="text-nest-cream/55 text-sm max-w-md mx-auto mb-8 font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Book your evening at The Nest at Waikiki and experience why we&rsquo;re Mumbai&rsquo;s most talked-about rooftop destination.
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
