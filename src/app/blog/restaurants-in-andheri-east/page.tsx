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

const faqs = [
  {
    q: "Which are the best restaurants in Andheri East?",
    a: "The Nest at Waikiki is among the best restaurants in Andheri East, offering premium Nikkei cuisine, handcrafted cocktails, and an elevated fine dining experience.",
  },
  {
    q: "What cuisine does The Nest at Waikiki serve?",
    a: "The restaurant specializes in Nikkei cuisine, a unique fusion of Japanese culinary techniques and vibrant Peruvian flavors.",
  },
  {
    q: "Is The Nest at Waikiki suitable for business lunches?",
    a: "Yes. Its sophisticated ambience and premium dining experience make it ideal for business meetings, client lunches, and corporate dinners.",
  },
  {
    q: "Does the restaurant serve vegetarian dishes?",
    a: "Yes. The menu includes thoughtfully crafted vegetarian options inspired by Japanese and Peruvian culinary traditions.",
  },
  {
    q: "Is The Nest at Waikiki good for celebrations?",
    a: "Absolutely. It’s a popular choice for birthdays, anniversaries, family dinners, and special occasions.",
  },
  {
    q: "Does The Nest at Waikiki offer handcrafted cocktails?",
    a: "Yes. Guests can enjoy an extensive menu of signature cocktails prepared with premium spirits, fresh ingredients, and creative techniques.",
  },
  {
    q: "Why should I visit The Nest at Waikiki?",
    a: "The Nest at Waikiki offers an exceptional combination of Nikkei cuisine, elegant ambience, premium cocktails, and outstanding hospitality, making it one of the standout restaurants in Andheri East.",
  },
];

export default function BlogPostAndheriEast() {
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
            {["Restaurants", "Andheri East", "Fine Dining", "Nikkei Cuisine", "Cocktails"].map((tag) => (
              <span key={tag} className="bg-nest-dark border border-nest-gold/15 text-nest-gold text-[9px] px-3 py-1 rounded-full tracking-widest uppercase font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>{tag}</span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="font-cormorant font-light text-[clamp(2.2rem,6vw,4.5rem)] text-nest-cream leading-tight mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Restaurants in Andheri East: The Ultimate Guide to Exceptional Dining Experiences
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
            <p>Mumbai has always been celebrated as India&rsquo;s culinary capital, but over the past few years, Andheri East has emerged as one of the city&rsquo;s most dynamic food destinations. Once recognized primarily for its commercial districts and proximity to the airport, the neighborhood is now home to a vibrant collection of restaurants offering everything from global cuisines to immersive fine dining experiences.</p>

            <p>Whether you&rsquo;re planning a business lunch, celebrating a special occasion, catching up with friends after work, or simply exploring new cuisines, the variety of restaurants in Andheri East ensures there&rsquo;s something for every taste and every occasion.</p>

            <p>Among the restaurants shaping this evolving dining landscape is The Nest at Waikiki&mdash;a contemporary destination where Japanese craftsmanship meets Peruvian creativity, offering guests an experience that extends far beyond exceptional food.</p>

            <h2>Why Andheri East Has Become a Dining Destination</h2>
            <p>The transformation of Andheri East has been remarkable. Its strategic location, thriving business ecosystem, luxury hotels, and growing residential communities have attracted some of Mumbai&rsquo;s most exciting hospitality brands.</p>
            <p>Today, visitors choose restaurants in Andheri East because they offer:</p>
            <ul>
              <li>Excellent connectivity from across Mumbai</li>
              <li>Easy access from Mumbai International Airport</li>
              <li>Diverse international cuisines</li>
              <li>Premium dining experiences</li>
              <li>Stylish bars and cocktail lounges</li>
              <li>Elegant venues for celebrations and corporate gatherings</li>
            </ul>
            <p>Rather than travelling across the city, diners now find world-class culinary experiences right in the heart of Andheri East.</p>

            <h2>What Makes a Restaurant Truly Memorable?</h2>
            <p>Choosing a restaurant today is about much more than satisfying hunger. Modern diners seek places that create memorable experiences through food, hospitality, ambience, and attention to detail. Here are the qualities that distinguish the best restaurants in Andheri East.</p>
            <p><strong>Outstanding Cuisine.</strong> Exceptional restaurants begin with exceptional ingredients. Every dish should showcase freshness, balance, creativity, and consistency while reflecting the chef&rsquo;s culinary vision.</p>
            <p><strong>Thoughtful Ambience.</strong> Lighting, interiors, music, and d&eacute;cor all contribute to the dining experience. The right atmosphere transforms a simple meal into an occasion worth remembering.</p>
            <p><strong>Personalized Hospitality.</strong> Attentive service creates comfort, while knowledgeable staff enhance the overall dining journey through thoughtful recommendations and genuine hospitality.</p>
            <p><strong>Creative Beverage Experiences.</strong> Today&rsquo;s guests appreciate restaurants that complement their menus with expertly crafted cocktails, premium wines, and innovative non-alcoholic beverages.</p>

            <h2>The Growing Demand for Experiential Dining</h2>
            <p>Dining trends have evolved significantly over the past decade. People no longer visit restaurants solely for food&mdash;they seek memorable experiences that engage every sense. Experiential dining combines:</p>
            <ul>
              <li>Beautiful interiors</li>
              <li>Signature culinary concepts</li>
              <li>Interactive cocktail programs</li>
              <li>Artistic presentation</li>
              <li>Curated music</li>
              <li>Warm hospitality</li>
              <li>Memorable storytelling</li>
            </ul>
            <p>Restaurants capable of delivering these experiences naturally become destinations rather than simply places to dine.</p>

            <h2>The Nest at Waikiki: A Distinctive Culinary Experience</h2>
            <p>Among the many restaurants in Andheri East, The Nest at Waikiki has established its own identity by introducing guests to the world of Nikkei cuisine&mdash;a globally celebrated fusion of Japanese precision and Peruvian vibrancy.</p>
            <p>Unlike conventional restaurants that focus on a single cuisine, The Nest at Waikiki embraces innovation while respecting authenticity. Guests can enjoy an exciting selection of:</p>
            <ul>
              <li>Fresh sushi and sashimi</li>
              <li>Robata-grilled specialties</li>
              <li>Contemporary Japanese dishes</li>
              <li>Peruvian-inspired small plates</li>
              <li>Signature seafood creations</li>
              <li>Vegetarian delicacies</li>
              <li>Chef-curated tasting experiences</li>
            </ul>
            <p>Every plate reflects craftsmanship, premium ingredients, and artistic presentation, creating a dining experience that&rsquo;s both sophisticated and approachable.</p>

            <h2>More Than Great Food</h2>
            <p>One of the reasons guests return to The Nest at Waikiki is the complete dining experience. The restaurant has been thoughtfully designed to accommodate every occasion, whether it&rsquo;s an intimate dinner or a lively celebration.</p>
            <p>Its refined interiors and welcoming atmosphere make it perfect for:</p>
            <ul>
              <li>Romantic evenings</li>
              <li>Family dinners</li>
              <li>Corporate lunches</li>
              <li>Client meetings</li>
              <li>Birthday celebrations</li>
              <li>Anniversary dinners</li>
              <li>Weekend gatherings</li>
            </ul>
            <p>Every detail contributes to an atmosphere that feels elegant without being intimidating.</p>

            <h2>Handcrafted Cocktails That Elevate Every Meal</h2>
            <p>No premium dining experience is complete without an equally impressive beverage program. At The Nest at Waikiki, handcrafted cocktails are created using premium spirits, fresh ingredients, house-made infusions, and innovative techniques.</p>
            <p>Whether guests prefer refreshing citrus-forward drinks, spirit-forward classics, or tropical creations, the carefully curated cocktail menu complements the restaurant&rsquo;s Japanese-Peruvian cuisine beautifully. Those who prefer non-alcoholic beverages can also enjoy refreshing mocktails crafted with the same level of creativity and attention to detail.</p>

            <h2>A Restaurant for Every Occasion</h2>
            <p>The versatility of The Nest at Waikiki makes it one of the most appealing restaurants in Andheri East. Guests regularly choose the restaurant for:</p>
            <ul>
              <li>Business lunches</li>
              <li>Date nights</li>
              <li>Family celebrations</li>
              <li>Weekend dinners</li>
              <li>Festive gatherings</li>
              <li>Client entertainment</li>
              <li>Group dining experiences</li>
            </ul>
            <p>Its combination of exceptional cuisine, sophisticated ambience, and attentive service ensures every visit feels special.</p>

            <h2>Why Fine Dining Continues to Evolve</h2>
            <p>Modern fine dining is no longer defined by formality&mdash;it is defined by authenticity, creativity, and genuine hospitality. Guests today value restaurants that tell a story through their cuisine while creating spaces where people can connect, celebrate, and create lasting memories.</p>
            <p>This philosophy is evident throughout every aspect of The Nest at Waikiki, from its thoughtfully curated menu to its elegant interiors and guest-first approach.</p>

            <h2>Experience Fine Dining at The Nest at Waikiki</h2>
            <p>Whether you&rsquo;re planning a business lunch, a romantic dinner, or a celebration with family and friends, The Nest at Waikiki offers an elevated dining experience inspired by Japanese craftsmanship and Nikkei cuisine.</p>
            <p>From beautifully crafted dishes to exceptional hospitality and elegant surroundings, every visit is designed to leave a lasting impression. Reserve your table today and discover why The Nest at Waikiki is one of the most sought-after restaurants in Andheri East.</p>

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
              Discover Fine Dining <span className="text-gold-gradient italic">in Andheri East</span>
            </h3>
            <p className="text-nest-cream/55 text-sm max-w-md mx-auto mb-8 font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Reserve your table at The Nest at Waikiki and experience Nikkei cuisine, handcrafted cocktails, and elevated hospitality.
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
