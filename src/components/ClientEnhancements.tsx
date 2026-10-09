"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });

type IdleWindow = Window & {
  requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
};

function whenIdle(cb: () => void) {
  const w = window as IdleWindow;
  if (w.requestIdleCallback) {
    w.requestIdleCallback(cb, { timeout: 2000 });
  } else {
    setTimeout(cb, 800);
  }
}

/**
 * Non-critical enhancements (smooth scroll + custom cursor) loaded after the
 * page is idle so they never compete with the first paint.
 */
export default function ClientEnhancements() {
  const [showCursor, setShowCursor] = useState(false);

  // Scroll-reveal for server-rendered `.reveal` elements (no React hydration needed)
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in-view"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // "Magnetic" buttons: pull towards the cursor on devices with a real pointer
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const find = (t: EventTarget | null) =>
      (t as HTMLElement | null)?.closest?.<HTMLElement>("[data-magnetic]") ?? null;
    const onMove = (e: PointerEvent) => {
      const el = find(e.target);
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * 0.35;
      const y = (e.clientY - (r.top + r.height / 2)) * 0.35;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    const onOut = (e: PointerEvent) => {
      const el = find(e.target);
      if (el && !el.contains(e.relatedTarget as Node | null)) el.style.transform = "";
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerout", onOut, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onOut);
    };
  }, []);

  useEffect(() => {
    let destroy: (() => void) | undefined;
    let cancelled = false;

    whenIdle(async () => {
      if (cancelled) return;
      setShowCursor(window.matchMedia("(hover: hover) and (pointer: fine)").matches);

      const { default: Lenis } = await import("lenis");
      if (cancelled) return;

      const lenis = new Lenis({
        lerp: 0.08,
        anchors: true,
        smoothWheel: true,
        touchMultiplier: 2,
      });
      let raf = 0;
      const tick = (time: number) => {
        lenis.raf(time);
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);

      destroy = () => {
        cancelAnimationFrame(raf);
        lenis.destroy();
      };
    });

    return () => {
      cancelled = true;
      destroy?.();
    };
  }, []);

  return showCursor ? <CustomCursor /> : null;
}
