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
import { getPost, formatPostDate } from "@/lib/posts";

gsap.registerPlugin(ScrollTrigger);

const post = getPost("japanese-food-restaurant-andheri");

const faqs = [
  {
    q: "Where can diners find Japanese food in Andheri?",
    a: "Andheri East has several contemporary dining options serving Japanese-inspired dishes. The Nest at Waikiki offers Japanese-Continental plates in a rooftop setting.",
  },
  {
    q: "Is The Nest at Waikiki a Japanese restaurant in Andheri East?",
    a: "The Nest at Waikiki offers a Japanese + Continental dining concept rather than positioning itself as a strictly traditional Japanese restaurant. Its menu includes Japanese-inspired dishes such as Tebasake, Furikake Prawns and Prawn Tempura.",
  },
  {
    q: "What Japanese dishes are available at The Nest at Waikiki?",
    a: "The current website highlights Tebasake, Treasure Pouch, Furikake Prawns, Prawn Tempura and Creamy Salmon among its Japanese-Continental offerings.",
  },
  {
    q: "Is The Nest at Waikiki suitable for Japanese dinner in Andheri?",
    a: "Yes. The venue operates every evening from 6:00 PM to 1:30 AM, making it suitable for dinner and late-evening plans.",
  },
  {
    q: "Does The Nest at Waikiki offer more than food?",
    a: "Yes. The experience includes modern tiki mixology and DJ nights, guest takeovers and house grooves as part of its nightlife offering.",
  },
  {
    q: "Where is The Nest at Waikiki located?",
    a: "The venue is located on the second floor of the Grand Pavilion at Peninsula Grand Hotel, Andheri East, Mumbai.",
  },
  {
    q: "Can guests book a table at The Nest at Waikiki?",
    a: "Yes. Guests can use the venue’s booking facility to select their preferred date, time, seating area and occasion, with booking confirmation handled through WhatsApp.",
  },
];

export default function BlogPostJapaneseFoodRestaurant() {
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
            <span className="text-nest-gold">Japanese Dining</span>
          </motion.div>

          {/* Tags */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-nest-dark border border-nest-gold/15 text-nest-gold text-[9px] px-3 py-1 rounded-full tracking-widest uppercase font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>{tag}</span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="font-cormorant font-light text-[clamp(2.2rem,6vw,4.5rem)] text-nest-cream leading-tight mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {post.title}
          </motion.h1>

          <motion.time
            dateTime={post.date}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.25 }}
            className="block text-nest-cream/40 text-[10px] tracking-[0.3em] uppercase font-light"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {formatPostDate(post.date)}
          </motion.time>
        </div>
      </section>

      {/* Article */}
      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="prose-nest"
          >
            <p>Japanese food has evolved far beyond being a niche culinary choice. With its emphasis on balance, presentation, texture and ingredient quality, Japanese cuisine has become a global dining favourite&mdash;and Andheri East has emerged as one of Mumbai&rsquo;s most convenient neighbourhoods for discovering sophisticated Japanese-inspired dining.</p>

            <p>For diners searching for a Japanese food restaurant in Andheri, the experience is no longer limited to simply ordering sushi. Today&rsquo;s Japanese dining scene blends culinary precision with contemporary interiors, creative plating, premium beverages and an atmosphere designed for lingering over dinner.</p>

            <p>At The Nest at Waikiki, this approach takes shape through an elevated rooftop setting where Japanese culinary influences meet Continental elegance, tropical design and Mumbai&rsquo;s energetic nightlife. Located at the Peninsula Grand Hotel in Andheri East, the venue brings together dining, drinks and entertainment in one destination.</p>

            <h2>What Makes Japanese Food So Appealing?</h2>
            <p>Japanese cuisine is built around a few principles that make it distinctive: ingredient quality, restraint, balance and visual presentation.</p>
            <p>Rather than overwhelming a dish with excessive seasoning, Japanese cooking often allows individual ingredients to remain recognizable. Seafood, vegetables, rice, sauces and seasonings are carefully combined to create contrast without losing harmony.</p>
            <p>That philosophy is one reason Japanese cuisine works particularly well for modern diners. It can be delicate and refined, yet still offer bold textures and memorable flavours.</p>
            <p>For someone researching the best Japanese food in Andheri, understanding this balance can make choosing a restaurant much easier.</p>

            <h2>Japanese Dining in Andheri East Goes Beyond Sushi</h2>
            <p>Sushi remains one of the most recognizable Japanese specialties, but Japanese dining encompasses a much broader culinary vocabulary. Depending on the restaurant, diners may encounter:</p>
            <ul>
              <li>Tempura-style preparations</li>
              <li>Japanese-inspired seafood dishes</li>
              <li>Grilled preparations</li>
              <li>Rice-based dishes</li>
              <li>Creative small plates</li>
              <li>Japanese sauces and seasonings</li>
              <li>Contemporary fusion interpretations</li>
              <li>Hand-crafted sushi and rolls</li>
            </ul>
            <p>At The Nest at Waikiki, the menu combines Japanese precision with Continental influences. Its current menu highlights dishes such as Tebasake, Treasure Pouch, Furikake Prawns, Prawn Tempura and Creamy Salmon, giving diners an opportunity to explore Japanese-inspired flavours within a contemporary dining experience.</p>
            <p>This makes the experience relevant for guests who may be looking specifically for a Japanese restaurant in Andheri East, while also appealing to groups with broader culinary preferences.</p>

            <h2>Why the Dining Environment Matters</h2>
            <p>Food is only one part of a memorable restaurant experience.</p>
            <p>For contemporary diners, ambience can influence where they choose to spend an evening just as much as the menu. This is particularly true for premium dining occasions, date nights, celebrations and social gatherings.</p>
            <p>A restaurant with an aesthetically considered environment gives guests more than a meal&mdash;it creates a setting worth remembering.</p>
            <p>The Nest at Waikiki is designed around this idea. The rooftop venue combines tropical-inspired aesthetics, an egg-shaped signature bar, cabana-style spaces and panoramic Mumbai skyline views. The experience moves naturally from golden-hour dining into late-night entertainment.</p>
            <p>For people comparing aesthetic restaurants in Andheri, this combination of food, design and open-sky ambience can offer a compelling alternative to conventional indoor dining.</p>

            <h2>Japanese Lunch or Japanese Dinner in Andheri?</h2>
            <p>The ideal Japanese dining experience often depends on the occasion.</p>
            <p>A Japanese lunch restaurant in Andheri can work well for a relaxed meal, business catch-up or casual culinary exploration. Dinner, on the other hand, creates more room for a complete experience involving food, beverages and ambience.</p>
            <p>For evening diners, The Nest at Waikiki operates daily from 6:00 PM to 1:30 AM, making it particularly suited to dinner plans that continue into the night.</p>
            <p>Its evening experience also incorporates modern tiki mixology and DJ-led entertainment, creating a natural transition from dinner into nightlife.</p>

            <h2>A Japanese Restaurant for More Than One Kind of Occasion</h2>
            <p>One advantage of a contemporary Japanese dining destination is versatility. A well-designed venue can work for:</p>
            <ul>
              <li>Date nights</li>
              <li>Birthday celebrations</li>
              <li>Dinner with friends</li>
              <li>Casual social gatherings</li>
              <li>Premium dining occasions</li>
              <li>Pre-party dinners</li>
              <li>Late-night plans</li>
              <li>Food-focused evenings</li>
            </ul>
            <p>This is particularly useful in Andheri East, where diners may want to combine dinner with drinks and entertainment rather than visiting multiple locations in one night.</p>
            <p>The Nest at Waikiki positions itself around exactly this kind of evening. Guests can dine on Japanese-Continental plates, explore its tiki-inspired drinks and enjoy DJ nights and house grooves under the rooftop sky.</p>

            <h2>How to Choose a Japanese Food Restaurant in Andheri</h2>
            <p>Before making a reservation, diners can consider a few practical factors.</p>
            <p><strong>Menu variety.</strong> A good restaurant should offer enough variety to accommodate different preferences.</p>
            <p><strong>Ambience.</strong> For celebrations and date nights, the setting can be as important as the food.</p>
            <p><strong>Location.</strong> Andheri East is particularly convenient for diners travelling from different parts of Mumbai.</p>
            <p><strong>Operating hours.</strong> Late-night availability can be useful when dinner plans extend beyond the usual dining window.</p>
            <p><strong>Overall experience.</strong> The strongest restaurants combine food, hospitality, atmosphere and service rather than treating the meal as a standalone transaction.</p>

            <h2>Why The Nest at Waikiki Stands Out</h2>
            <p>For diners searching for a Japanese food restaurant in Andheri, The Nest at Waikiki offers a more expansive interpretation of the category.</p>
            <p>Its Japanese-Continental culinary approach, rooftop setting, skyline views, modern tiki mixology and nightlife programming create an experience that goes beyond conventional dining.</p>
            <p>Located on the second floor of the Grand Pavilion at Peninsula Grand Hotel, Andheri East, the venue offers an elevated setting for guests who want dinner to become part of a bigger night out.</p>

            <h2>Final Thoughts</h2>
            <p>Japanese cuisine continues to attract diners because it combines culinary discipline with remarkable versatility. In Andheri East, that experience is increasingly being reimagined through contemporary restaurants that pair Japanese-inspired food with premium ambience and entertainment.</p>
            <p>For diners looking for Japanese food in Andheri, the right restaurant is ultimately one that matches the occasion, culinary expectations and desired atmosphere.</p>
            <p>At The Nest at Waikiki, Japanese-Continental dining becomes part of a rooftop experience built around food, cocktails, music and Mumbai&rsquo;s skyline.</p>
            <p>Planning the next dinner in Andheri East? Book a table at The Nest at Waikiki and turn an ordinary evening into a rooftop dining experience.</p>

            <h2>Frequently Asked Questions</h2>
            {faqs.map((item, i) => (
              <div key={item.q}>
                <p><strong>{i + 1}. {item.q}</strong></p>
                <p>{item.a}</p>
              </div>
            ))}
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
              Japanese Flavours <span className="text-gold-gradient italic">Above Andheri</span>
            </h3>
            <p className="text-nest-cream/55 text-sm max-w-md mx-auto mb-8 font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Book a table at The Nest at Waikiki and turn an ordinary evening into a rooftop dining experience.
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
