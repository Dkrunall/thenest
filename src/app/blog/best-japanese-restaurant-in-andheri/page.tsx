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

const post = getPost("best-japanese-restaurant-in-andheri");

const faqs = [
  {
    q: "Which is the best Japanese restaurant in Andheri?",
    a: "The Nest at Waikiki is one of the best Japanese restaurants in Andheri, offering authentic Nikkei cuisine, premium sushi, handcrafted cocktails, and an exceptional fine dining experience.",
  },
  {
    q: "What is Nikkei cuisine?",
    a: "Nikkei cuisine is a fusion of Japanese culinary techniques and Peruvian flavors, creating innovative dishes that combine freshness, balance, and bold taste profiles.",
  },
  {
    q: "Does The Nest at Waikiki serve authentic Japanese food?",
    a: "Yes. The restaurant offers Japanese-inspired dishes alongside Nikkei specialties, prepared using premium ingredients and authentic culinary techniques.",
  },
  {
    q: "Is The Nest at Waikiki known for sushi?",
    a: "Absolutely. Guests can enjoy a carefully curated selection of fresh sushi, sashimi, and other Japanese specialties crafted with precision and creativity.",
  },
  {
    q: "Does the restaurant serve cocktails?",
    a: "Yes. The Nest at Waikiki features an extensive menu of handcrafted cocktails, premium spirits, wines, and refreshing mocktails.",
  },
  {
    q: "Is The Nest at Waikiki suitable for special occasions?",
    a: "Yes. The restaurant’s elegant ambience and premium dining experience make it an excellent venue for anniversaries, birthdays, business dinners, and celebrations.",
  },
  {
    q: "Why should I choose The Nest at Waikiki for Japanese dining?",
    a: "The Nest at Waikiki offers an elevated Nikkei dining experience with authentic Japanese techniques, premium ingredients, handcrafted cocktails, and exceptional hospitality, making it one of the top destinations for Japanese cuisine in Andheri.",
  },
];

export default function BlogPostBestJapaneseRestaurant() {
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
            {["Japanese Cuisine", "Nikkei", "Sushi", "Andheri East", "Cocktails"].map((tag) => (
              <span key={tag} className="bg-nest-dark border border-nest-gold/15 text-nest-gold text-[9px] px-3 py-1 rounded-full tracking-widest uppercase font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>{tag}</span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="font-cormorant font-light text-[clamp(2.2rem,6vw,4.5rem)] text-nest-cream leading-tight mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Best Japanese Restaurant in Andheri: Discover the Art of Nikkei Dining at The Nest at Waikiki
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
            <p>Japanese cuisine has earned a reputation as one of the world&rsquo;s most refined culinary traditions. Built on precision, fresh ingredients, and centuries of craftsmanship, it offers an experience that goes far beyond sushi and sashimi. In Mumbai, where food lovers are constantly exploring global flavors, the demand for authentic Japanese dining continues to grow. For those searching for the best Japanese restaurant in Andheri, the ideal destination is one that delivers authenticity, creativity, and an unforgettable dining experience.</p>

            <p>While many restaurants offer Japanese-inspired dishes, only a few capture the true philosophy behind the cuisine. Every ingredient, every technique, and every presentation reflects a commitment to balance, quality, and artistry. The Nest at Waikiki embraces this philosophy while introducing guests to the vibrant world of Nikkei cuisine&mdash;a globally celebrated fusion of Japanese precision and Peruvian flavors.</p>

            <p>Whether you&rsquo;re a sushi enthusiast, a first-time explorer of Japanese cuisine, or someone looking for an elevated dining experience, The Nest at Waikiki offers a culinary journey unlike any other in Andheri.</p>

            <h2>What Makes Japanese Cuisine So Special?</h2>
            <p>Japanese cuisine is admired around the world for its simplicity, elegance, and respect for ingredients. Rather than masking flavors with heavy spices or sauces, Japanese chefs focus on enhancing the natural character of every ingredient. Some defining characteristics include:</p>
            <ul>
              <li>Fresh seafood and premium-quality produce</li>
              <li>Minimal yet refined seasoning</li>
              <li>Artistic presentation</li>
              <li>Seasonal ingredients</li>
              <li>Balanced flavors and textures</li>
              <li>Precision in every preparation</li>
            </ul>
            <p>Every dish reflects the philosophy that great cooking begins with exceptional ingredients and meticulous attention to detail.</p>

            <h2>Understanding Nikkei Cuisine</h2>
            <p>One of the most exciting developments in global gastronomy is Nikkei cuisine, a culinary style that combines traditional Japanese techniques with the bold, vibrant flavors of Peru. This fusion was created by Japanese immigrants in Peru and has since become one of the world&rsquo;s most celebrated dining concepts. Nikkei cuisine combines:</p>
            <ul>
              <li>Japanese precision</li>
              <li>Peruvian spices</li>
              <li>Fresh seafood</li>
              <li>Citrus-forward flavors</li>
              <li>Creative presentation</li>
              <li>Contemporary culinary techniques</li>
            </ul>
            <p>Rather than replacing Japanese cuisine, Nikkei dining enhances it by introducing exciting new flavor combinations while preserving its core principles. At The Nest at Waikiki, guests experience this globally acclaimed cuisine through a carefully curated menu that celebrates both cultures.</p>

            <h2>What to Expect at the Best Japanese Restaurant in Andheri</h2>
            <p>Choosing a Japanese restaurant isn&rsquo;t simply about ordering sushi. The finest restaurants create an immersive experience where every detail contributes to the meal.</p>
            <p><strong>Authentic Culinary Craftsmanship.</strong> The best Japanese restaurants emphasize precision, consistency, and respect for ingredients. Every dish is thoughtfully prepared to achieve harmony in flavor and presentation.</p>
            <p><strong>Premium Ingredients.</strong> Fresh seafood, carefully sourced vegetables, imported seasonings, and high-quality proteins are essential to creating an authentic dining experience.</p>
            <p><strong>Elegant Ambience.</strong> Japanese hospitality values comfort, simplicity, and attention to detail. A refined atmosphere enhances the overall dining journey.</p>
            <p><strong>Innovative Beverage Pairings.</strong> Modern Japanese dining often includes handcrafted cocktails and curated beverages designed to complement the cuisine.</p>

            <h2>The Nest at Waikiki: A Modern Interpretation of Japanese Fine Dining</h2>
            <p>For diners searching for the best Japanese restaurant in Andheri, The Nest at Waikiki offers an experience that combines authenticity with innovation.</p>
            <p>The restaurant&rsquo;s menu celebrates Japanese culinary traditions while incorporating the vibrant influences of Peruvian cuisine, resulting in an exciting Nikkei dining experience. Guests can explore a variety of expertly crafted dishes, including:</p>
            <ul>
              <li>Fresh sushi</li>
              <li>Delicate sashimi</li>
              <li>Signature Nikkei creations</li>
              <li>Robata-grilled specialties</li>
              <li>Contemporary Japanese small plates</li>
              <li>Premium seafood dishes</li>
              <li>Vegetarian Japanese-inspired options</li>
            </ul>
            <p>Every plate reflects craftsmanship, creativity, and a dedication to quality.</p>

            <h2>Why Sushi Lovers Appreciate The Nest at Waikiki</h2>
            <p>Sushi represents one of Japan&rsquo;s most iconic culinary traditions. At its finest, sushi showcases the natural flavors of fresh ingredients with remarkable simplicity. At The Nest at Waikiki, sushi is prepared with:</p>
            <ul>
              <li>Fresh, premium ingredients</li>
              <li>Perfectly seasoned rice</li>
              <li>Artistic presentation</li>
              <li>Balanced flavors</li>
              <li>Traditional techniques with contemporary creativity</li>
            </ul>
            <p>This commitment to excellence makes every bite both authentic and memorable.</p>

            <h2>Beyond the Food: A Complete Dining Experience</h2>
            <p>Great restaurants are remembered not only for their cuisine but also for the atmosphere they create. The Nest at Waikiki has been thoughtfully designed to provide an elegant yet welcoming environment, making it an ideal destination for:</p>
            <ul>
              <li>Romantic dinners</li>
              <li>Business meetings</li>
              <li>Family celebrations</li>
              <li>Anniversary dinners</li>
              <li>Birthday gatherings</li>
              <li>Weekend outings</li>
              <li>Client entertainment</li>
            </ul>
            <p>Its sophisticated interiors, attentive hospitality, and refined ambience elevate every occasion.</p>

            <h2>Signature Cocktails Inspired by Creativity</h2>
            <p>The restaurant&rsquo;s handcrafted cocktail program complements its Japanese-Peruvian cuisine beautifully. Guests can enjoy:</p>
            <ul>
              <li>Signature cocktails</li>
              <li>Premium spirits</li>
              <li>Creative mocktails</li>
              <li>Seasonal beverages</li>
              <li>Curated wine selections</li>
            </ul>
            <p>Every drink is designed to enhance the flavors of the cuisine while creating a well-rounded dining experience.</p>

            <h2>Why The Nest at Waikiki Stands Out</h2>
            <p>Among the many restaurants serving Japanese-inspired cuisine, The Nest at Waikiki distinguishes itself through its commitment to authenticity, innovation, and hospitality. Guests value the restaurant for its:</p>
            <ul>
              <li>Authentic Nikkei cuisine</li>
              <li>Fresh sushi and sashimi</li>
              <li>Premium ingredients</li>
              <li>Artistic presentation</li>
              <li>Elegant interiors</li>
              <li>Handcrafted cocktails</li>
              <li>Warm hospitality</li>
              <li>Exceptional dining experience</li>
            </ul>
            <p>Together, these elements have positioned it as one of the leading destinations for Japanese fine dining in Mumbai.</p>

            <h2>Discover the Art of Japanese Dining at The Nest at Waikiki</h2>
            <p>If you&rsquo;re looking to explore authentic Japanese flavors with a contemporary Nikkei twist, The Nest at Waikiki offers an unforgettable culinary journey. Enjoy expertly prepared sushi, premium ingredients, handcrafted cocktails, and an atmosphere designed for every special occasion.</p>
            <p>Book your table today and experience why The Nest at Waikiki is becoming the best Japanese restaurant in Andheri.</p>

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
              Experience Nikkei <span className="text-gold-gradient italic">Dining in Andheri</span>
            </h3>
            <p className="text-nest-cream/55 text-sm max-w-md mx-auto mb-8 font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Book your table at The Nest at Waikiki and discover authentic Japanese craftsmanship with a bold Peruvian twist.
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
