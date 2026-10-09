"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Hero image slideshow. The first slide is server-rendered (and preloaded) as
 * the LCP image; the remaining slides and the auto-advance timer only start
 * after the page has finished loading.
 */
export default function HeroSlides({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(1);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const start = () => {
      setMounted(images.length);
      interval = setInterval(() => setIndex((prev) => (prev + 1) % images.length), 3500);
    };
    const onLoad = () => {
      timer = setTimeout(start, 1000);
    };
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });
    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <>
      {images.slice(0, mounted).map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 scale-105 transition-opacity duration-[900ms] ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <Image
            src={src}
            alt={i === 0 ? alt : `${alt} ${i + 1}`}
            fill
            className="object-cover"
            priority={i === 0}
            fetchPriority={i === 0 ? "high" : "auto"}
            quality={65}
            sizes="(min-width: 480px) 420px, 100vw"
          />
        </div>
      ))}

      {/* Light reflection filter */}
      <div className="absolute inset-0 bg-gradient-to-t from-nest-black/50 via-transparent to-transparent z-10" />

      {/* Dot indicators */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex z-20">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show image ${i + 1}`}
            aria-current={i === index}
            onClick={() => {
              setMounted(images.length);
              setIndex(i);
            }}
            className="w-6 h-6 flex items-center justify-center cursor-none"
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "bg-nest-gold w-4" : "bg-nest-cream/40 w-1.5"
              }`}
            />
          </button>
        ))}
      </div>
    </>
  );
}
