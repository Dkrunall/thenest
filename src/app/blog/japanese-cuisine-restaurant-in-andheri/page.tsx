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

const post = getPost("japanese-cuisine-restaurant-in-andheri");

const faqs = [
  {
    q: "What should diners expect from Japanese cuisine?",
    a: "Japanese cuisine emphasizes ingredient quality, balance, texture and presentation. It extends well beyond sushi and can include tempura, seafood, grilled dishes, rice preparations and contemporary interpretations.",
  },
  {
    q: "Is The Nest at Waikiki an authentic Japanese restaurant?",
    a: "The Nest at Waikiki follows a Japanese + Continental culinary concept rather than presenting itself as a strictly traditional Japanese restaurant. Its menu combines Japanese culinary influences with contemporary Continental elements.",
  },
  {
    q: "Does The Nest at Waikiki serve sushi?",
    a: "The venue’s gallery highlights specialty hand-rolled sushi, while its broader menu focuses on Japanese-Continental dining.",
  },
  {
    q: "What Japanese dishes does The Nest at Waikiki offer?",
    a: "The current website lists Tebasake, Treasure Pouch, Furikake Prawns, Prawn Tempura and Creamy Salmon among its Japanese-Continental dishes.",
  },
  {
    q: "Is The Nest suitable for a Japanese dinner restaurant experience in Andheri?",
    a: "The venue is open every night from 6:00 PM to 1:30 AM, making it suitable for dinner, social gatherings and late-evening plans.",
  },
  {
    q: "Does The Nest at Waikiki have a rooftop setting?",
    a: "Yes. The venue is a rooftop destination on the second floor of the Grand Pavilion at Peninsula Grand Hotel, with panoramic Mumbai skyline views.",
  },
  {
    q: "Can guests combine dining with nightlife?",
    a: "Yes. The Nest at Waikiki combines dining with modern tiki mixology and DJ-led entertainment, including DJ nights, guest takeovers and house grooves.",
  },
];

export default function BlogPostJapaneseCuisineRestaurant() {
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
            <p>A great Japanese dining experience is about more than sushi. It is about precision, balance, texture, presentation and the way individual ingredients come together on the plate.</p>

            <p>That is why the search for a Japanese cuisine restaurant in Andheri has become increasingly sophisticated. Today&rsquo;s diners often want a restaurant that delivers quality food while also offering an elevated atmosphere, thoughtful hospitality and a memorable setting.</p>

            <p>In Andheri East, The Nest at Waikiki approaches Japanese-inspired dining through a contemporary Japanese + Continental concept. Its rooftop location at Peninsula Grand Hotel combines artisanal food, tropical-inspired design, skyline views, cocktails and late-night entertainment.</p>

            <h2>What Is Japanese Cuisine?</h2>
            <p>Japanese cuisine, often associated with the term <em>washoku</em>, is known for its respect for ingredients and emphasis on balance.</p>
            <p>Traditional Japanese culinary culture places importance on seasonality, presentation and harmony between flavours and textures. While sushi is globally recognized, Japanese cuisine includes an extensive range of preparations involving seafood, vegetables, rice, noodles, grilled foods, fried dishes and carefully balanced sauces.</p>
            <p>Modern restaurants may interpret these traditions through contemporary techniques and fusion concepts.</p>
            <p>This distinction matters for diners searching for an authentic Japanese restaurant in Andheri. Some venues focus on traditional preparations, while others take Japanese culinary principles and reinterpret them for a contemporary audience.</p>

            <h2>Japanese Cuisine in a Contemporary Andheri Setting</h2>
            <p>Mumbai&rsquo;s dining culture is constantly evolving. Diners increasingly seek restaurants that provide a complete experience rather than a purely functional meal.</p>
            <p>That has created demand for premium dining places in Andheri East where food, ambience and entertainment coexist.</p>
            <p>The Nest at Waikiki is designed around that modern approach. The restaurant describes its cuisine as Japanese precision paired with Continental elegance, with dishes crafted to complement an evening above the Mumbai skyline.</p>
            <p>The result is a dining experience that can appeal to both Japanese-food enthusiasts and groups looking for broader culinary variety.</p>

            <h2>Sushi Is Only One Part of Japanese Dining</h2>
            <p>When people search for a sushi and Japanese restaurant in Andheri, sushi is often the first thing that comes to mind. However, Japanese cuisine offers much more. A broader Japanese-inspired menu may include:</p>
            <ul>
              <li>Tempura</li>
              <li>Grilled seafood</li>
              <li>Japanese-style chicken preparations</li>
              <li>Rice-based dishes</li>
              <li>Seafood starters</li>
              <li>Furikake-seasoned dishes</li>
              <li>Contemporary sushi</li>
              <li>Creative fusion plates</li>
            </ul>
            <p>At The Nest at Waikiki, the menu currently features Japanese-Continental selections including Tebasake, Treasure Pouch, Furikake Prawns, Prawn Tempura and Creamy Salmon.</p>
            <p>This gives diners an opportunity to explore Japanese-inspired flavours without requiring the entire table to commit to one specific cuisine.</p>

            <h2>What Makes Japanese Fine Dining Different?</h2>
            <p>Japanese fine dining is often associated with meticulous presentation and an intentional approach to flavour.</p>
            <p>Even when a restaurant does not operate as a traditional fine-dining establishment, diners can still look for qualities associated with premium Japanese dining:</p>
            <p><strong>Ingredient-led cooking.</strong> Quality ingredients should remain central to the dish.</p>
            <p><strong>Balanced flavours.</strong> Japanese-inspired food often relies on harmony rather than excessive seasoning.</p>
            <p><strong>Attention to texture.</strong> Crisp, tender, creamy and delicate textures can create contrast within a meal.</p>
            <p><strong>Visual presentation.</strong> Plating plays an important role in the overall Japanese culinary aesthetic.</p>
            <p><strong>Thoughtful service.</strong> Hospitality contributes significantly to the dining experience.</p>
            <p>For diners comparing Japanese fine dining in Andheri, these factors can be more useful than simply choosing a restaurant because it uses the word &ldquo;Japanese&rdquo; in its name.</p>

            <h2>Why Ambience Matters When Choosing a Japanese Restaurant</h2>
            <p>A restaurant can serve excellent food and still feel ordinary if the setting does not match the occasion.</p>
            <p>For modern diners, ambience increasingly forms part of the decision-making process. This is particularly relevant for date nights, celebrations and social dinners.</p>
            <p>The Nest at Waikiki offers a high-fashion tropical rooftop environment with a signature egg-shaped bar, cabana-inspired spaces and panoramic views across Mumbai.</p>
            <p>The atmosphere evolves through the evening, moving from golden-hour dining into DJ-led nightlife. The venue operates every night from 6:00 PM until 1:30 AM.</p>
            <p>For anyone comparing aesthetic restaurants in Andheri, this combination of culinary experience and rooftop design provides a distinctive alternative.</p>

            <h2>Japanese Dinner Restaurant Andheri: What Makes an Evening Work?</h2>
            <p>Dinner is often when Japanese-inspired dining becomes a complete experience.</p>
            <p>A relaxed dinner can begin with small plates, move into seafood or other mains and finish with cocktails or additional beverages. When the restaurant also provides music and entertainment, the evening can continue naturally after the meal.</p>
            <p>At The Nest at Waikiki, dining is one of three core experiences, alongside modern tiki mixology and DJ-led entertainment.</p>
            <p>That makes the venue particularly relevant to guests looking for restaurants in Andheri East where dinner and nightlife can happen under one roof.</p>

            <h2>Japanese Dining for Groups and Special Occasions</h2>
            <p>Japanese-inspired restaurants can work well for groups because the cuisine naturally lends itself to sharing and exploring different dishes.</p>
            <p>A group might choose several starters, sample different preparations and combine Japanese-inspired plates with other dishes. This creates a more interactive dining experience than ordering one fixed meal.</p>
            <p>The setting also matters. A sophisticated rooftop environment can make the occasion feel more elevated without requiring a formal fine-dining format.</p>
            <p>Whether the plan involves a date, birthday, dinner with friends or an evening before heading into Andheri&rsquo;s nightlife scene, choosing a restaurant with both culinary and atmospheric appeal can make the occasion more memorable.</p>

            <h2>Why Consider The Nest at Waikiki?</h2>
            <p>For diners searching for a Japanese cuisine restaurant in Andheri, The Nest at Waikiki offers a distinctive interpretation.</p>
            <p>The venue brings together Japanese-Continental food, rooftop dining, tropical aesthetics, modern tiki cocktails and DJ nights. Its location at Peninsula Grand Hotel in Andheri East also makes it convenient for guests seeking a premium evening destination within the neighbourhood.</p>
            <p>Rather than treating Japanese food as an isolated cuisine category, The Nest integrates it into a broader hospitality experience.</p>

            <h2>Final Takeaway</h2>
            <p>Choosing a Japanese restaurant is no longer simply about finding sushi.</p>
            <p>Today&rsquo;s diners are looking for flavour, presentation, atmosphere, convenience and an overall experience that feels worth leaving home for.</p>
            <p>For anyone searching for a Japanese cuisine restaurant in Andheri, Japanese restaurant in Andheri East or a premium dining destination in Andheri, The Nest at Waikiki offers a contemporary Japanese-Continental interpretation in a rooftop setting.</p>
            <p>For the next dinner, date night or celebration, book a table at The Nest at Waikiki and experience Japanese-inspired dining above the Andheri East skyline.</p>

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
              Japanese Dining <span className="text-gold-gradient italic">Above the Skyline</span>
            </h3>
            <p className="text-nest-cream/55 text-sm max-w-md mx-auto mb-8 font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              For the next dinner, date night or celebration, book a table at The Nest at Waikiki.
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
