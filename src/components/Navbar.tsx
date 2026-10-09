"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Magnetic from "@/components/Magnetic";

// The full-screen menu (and framer-motion with it) is only fetched when needed.
const loadOverlay = () => import("@/components/NavOverlay");
const NavOverlay = dynamic(loadOverlay, { ssr: false });

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [overlayMounted, setOverlayMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setOverlayMounted(true);
    setMenuOpen((open) => !open);
  };

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      if (pathname === "/") {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/" + href);
      }
    } else {
      router.push(href);
    }
  };

  return (
    <>
      {/* Top Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
        <div
          className={`mx-auto max-w-7xl px-6 py-6 sm:py-8 flex items-center justify-between transition-all duration-500 ${
            scrolled ? "bg-transparent" : ""
          }`}
        >
          {/* Elegant Logo */}
          <Link
            href="/"
            prefetch={false}
            className="flex items-center gap-3 z-50 group cursor-none"
          >
            <Image
              src="/logo.webp"
              alt="The Nest Logo"
              sizes="64px"
              width={240}
              height={72}
              className="h-14 sm:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
          </Link>

          {/* Action Panel */}
          <div className="flex items-center gap-4 z-50">
            {/* Quick Link: Book a table */}
            <Magnetic>
              <Link
                href="/book"
                prefetch={false}
                onClick={() => setMenuOpen(false)}
                className="hidden sm:flex items-center btn-gold rounded-full text-[9px] tracking-[0.2em] px-4 py-2 min-h-[44px] shadow-[0_4px_15px_rgba(81,9,9,0.15)] hover:shadow-[0_8px_25px_rgba(81,9,9,0.25)] transition-all duration-300"
              >
                Reserve Table
              </Link>
            </Magnetic>

            {/* Awwwards pill hamburger toggle */}
            <Magnetic>
              <button
                type="button"
                onClick={toggleMenu}
                onPointerEnter={() => void loadOverlay()}
                onFocus={() => void loadOverlay()}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className={`px-3.5 py-2 min-h-[44px] rounded-full flex items-center gap-2 cursor-none transition-all duration-500 shadow-md ${
                  menuOpen
                    ? "bg-nest-black text-nest-cream border border-nest-gold/20"
                    : scrolled
                    ? "bg-white/80 nav-blur text-nest-cream border border-nest-gold/15"
                    : "bg-white/60 text-nest-cream border border-nest-gold/5"
                }`}
              >
                <div className="flex flex-col gap-1 w-4">
                  <span
                    className={`block w-full h-[1.5px] bg-current transition-transform duration-300 ${
                      menuOpen ? "rotate-45 translate-y-[5.5px]" : ""
                    }`}
                  />
                  <span
                    className={`block w-full h-[1.5px] bg-current transition-all duration-200 ${
                      menuOpen ? "opacity-0 scale-x-0" : ""
                    }`}
                  />
                  <span
                    className={`block w-full h-[1.5px] bg-current transition-transform duration-300 ${
                      menuOpen ? "-rotate-45 -translate-y-[5.5px]" : ""
                    }`}
                  />
                </div>
                <span
                  className="text-[8px] tracking-[0.25em] uppercase font-semibold"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {menuOpen ? "CLOSE" : "MENU"}
                </span>
              </button>
            </Magnetic>
          </div>
        </div>
      </header>

      {overlayMounted && <NavOverlay open={menuOpen} onNavigate={handleNavClick} />}
    </>
  );
}
