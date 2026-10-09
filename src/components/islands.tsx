"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";

/**
 * "Islands": interactive pieces whose JavaScript is fetched only after the
 * page has painted and gone idle (or on demand), so they never compete with
 * the critical rendering path. Their static markup is rendered on the server
 * by the parent component.
 */

type IdleWindow = Window & {
  requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
};

function useAfterIdle(delay = 1500) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const start = () => {
      timer = setTimeout(() => setReady(true), delay);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      window.removeEventListener("load", start);
      clearTimeout(timer);
    };
  }, [delay]);
  return ready;
}

function idleIsland<P extends object>(
  load: () => Promise<{ default: ComponentType<P> }>,
  delay?: number
) {
  return function IdleIsland(props: P) {
    const ready = useAfterIdle(delay);
    const [Comp, setComp] = useState<ComponentType<P> | null>(null);
    useEffect(() => {
      if (!ready) return;
      let cancelled = false;
      const run = () =>
        load().then((mod) => {
          if (!cancelled) setComp(() => mod.default);
        });
      const w = window as IdleWindow;
      if (w.requestIdleCallback) w.requestIdleCallback(run, { timeout: 3000 });
      else run();
      return () => {
        cancelled = true;
      };
    }, [ready]);
    return Comp ? <Comp {...props} /> : null;
  };
}

export const FloatingWidgets = idleIsland(() => import("@/components/FloatingWidgets"), 1500);
export const GalleryInteractive = idleIsland(() => import("@/components/GalleryInteractive"), 1000);

/**
 * Booking form: its JavaScript (react-hook-form etc.) is only fetched once the
 * placeholder gets near the viewport. The placeholder reserves the form's
 * space so nothing shifts.
 */
export function ReservationFormLoader() {
  const ref = useRef<HTMLDivElement>(null);
  const [Form, setForm] = useState<ComponentType | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || Form) return;
    let cancelled = false;
    const load = () =>
      import("@/components/ReservationForm").then((mod) => {
        if (!cancelled) setForm(() => mod.default);
      });
    if (!("IntersectionObserver" in window)) {
      load();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          load();
        }
      },
      { rootMargin: "1500px 0px" }
    );
    io.observe(el);
    return () => {
      cancelled = true;
      io.disconnect();
    };
  }, [Form]);

  if (Form) return <Form />;
  return (
    <div
      ref={ref}
      className="min-h-[960px] lg:min-h-[640px] glass-card rounded-3xl border border-nest-gold/15"
      aria-busy="true"
    />
  );
}
