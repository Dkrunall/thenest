import Link from "next/link";
import Image from "next/image";
import { FloatingWidgets } from "@/components/islands";
import NewsletterForm from "@/components/NewsletterForm";

const footerLinks = [
  { label: "Our Story", href: "#about" },
  { label: "The Experience", href: "#experience" },
  { label: "The Menu", href: "#menu" },
  { label: "The Gallery", href: "#gallery" },
  { label: "The Gigs", href: "#events" },
  { label: "Bookings", href: "#reserve" },
];

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/thenestbywaikiki/",
    label: "@thenestbywaikiki",
  },
  {
    name: "WhatsApp Desk",
    href: "https://wa.me/918150000345",
    label: "+91 81500 00345",
  },
];

const FooterLink = ({ label, href }: { label: string; href: string }) => {
  return (
    <a
      href={href}
      className="group block py-3 cursor-none text-nest-cream/70 hover:text-nest-gold transition-colors duration-300 text-xs sm:text-sm font-light tracking-wide"
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      <span className="relative overflow-hidden block">
        <span className="block transform transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover:-translate-y-full">
          {label}
        </span>
        <span aria-hidden="true" className="block absolute left-0 top-0 transform transition-transform duration-500 ease-[0.76,0,0.24,1] translate-y-full group-hover:translate-y-0 text-nest-gold italic font-medium">
          {label}
        </span>
      </span>
    </a>
  );
};

export default function Footer() {
  return (
    <footer className="relative bg-nest-darker border-t border-nest-gold/15 overflow-hidden pt-20 pb-8">
      {/* Background soft lighting */}
      <div className="absolute top-0 left-0 w-[40vw] h-[40vw] rounded-full bg-nest-gold/5 blur-3xl pointer-events-none" />

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Brand Info & coordinates - Spans 4 Columns */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link
              href="/"
              prefetch={false}
              className="flex items-center gap-3 z-10 group cursor-none mb-6"
            >
              <Image
                src="/logo.webp"
                alt="The Nest Logo"
                sizes="64px"
              width={240}
                height={72}
                className="h-14 sm:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>
            <p
              className="text-nest-cream/70 text-xs sm:text-sm leading-relaxed mb-6 font-light max-w-xs"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Step away from the city chaos. Rise above Andheri East and discover a high-fashion garden sanctuary where Hawaiian spirit meets modern design.
            </p>
            <div className="text-[11px] text-nest-cream/70 tracking-wider space-y-1 font-light" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>19.1009° N, 72.8887° E</p>
              <p>2nd Floor, Grand Pavilion, Peninsula Grand</p>
            </div>
          </div>

          {/* Column 2: Navigation Links - Spans 2 Columns */}
          <div className="lg:col-span-2">
            <h3
              className="text-nest-gold text-[10px] tracking-[0.25em] uppercase mb-6 font-semibold"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Navigate
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink label={link.label} href={link.href} />
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Timing - Spans 3 Columns */}
          <div className="lg:col-span-3">
            <h3
              className="text-nest-gold text-[10px] tracking-[0.25em] uppercase mb-6 font-semibold"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Visit Coordinates
            </h3>
            <div className="space-y-6 text-xs sm:text-sm font-light text-nest-cream/70">
              <div>
                <p className="text-nest-cream font-medium mb-1.5 flex items-center gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  <svg className="w-4 h-4 text-nest-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span>Address</span>
                </p>
                <p className="text-xs leading-relaxed" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  Peninsula Grand Hotel, Sakinaka Junction,<br />
                  Andheri East, Mumbai, MH 400072
                </p>
              </div>
              
              <div>
                <p className="text-nest-cream font-medium mb-1.5 flex items-center gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  <svg className="w-4 h-4 text-nest-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span>Ambient Hours</span>
                </p>
                <p className="text-xs" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  Daily: 6:00 PM – 1:30 AM
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter Subscription - Spans 3 Columns */}
          <div className="lg:col-span-3 flex flex-col items-start w-full">
            <h3
              className="text-nest-gold text-[10px] tracking-[0.25em] uppercase mb-6 font-semibold"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Newsletter
            </h3>
            <p
              className="text-nest-cream/70 text-xs leading-relaxed mb-4 font-light"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Join the guestlist. Subscribe for exclusive DJ lineups, events under the stars, and menu alerts.
            </p>
            <NewsletterForm />
            <div className="flex gap-4 mt-6">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-nest-cream/70 hover:text-nest-gold transition-colors duration-300 cursor-none"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Gold horizontal divider */}
      <div className="max-w-7xl mx-auto px-6 mt-16 mb-8 relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-nest-gold/20 to-transparent" />
      </div>

      {/* Bottom Sub-bar */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        <p
          className="text-nest-cream/70 text-[10px] tracking-wider"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          © 2026 The Nest at Waikiki. All rights reserved.
        </p>

        <p
          className="text-nest-cream/70 text-[10px] tracking-wider"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Hotel Rooftop Sanctuary · Sakinaka
        </p>
      </div>

      {/* Giant Awwwards Outline Text Background */}
      <div className="w-full text-center mt-12 overflow-hidden select-none pointer-events-none opacity-20 relative z-0">
        <div aria-hidden="true" 
          className="font-cormorant font-bold text-[clamp(3.5rem,14vw,14rem)] leading-none text-transparent tracking-[0.1em] uppercase"
          style={{ 
            fontFamily: "var(--font-cormorant), serif",
            WebkitTextStroke: "1.2px #241E15",
          }}
        >
          THE NEST
        </div>
      </div>

      <FloatingWidgets />
    </footer>
  );
}
