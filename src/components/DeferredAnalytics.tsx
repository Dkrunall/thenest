"use client";

import { useEffect } from "react";

const GTM_ID = "GTM-MJ4HL9VX";
const GA_ID = "G-9S726CD22M";

type AnalyticsWindow = Window & { dataLayer?: unknown[] };

function loadScript(src: string) {
  const el = document.createElement("script");
  el.async = true;
  el.src = src;
  document.head.appendChild(el);
}

function loadAnalytics() {
  const w = window as AnalyticsWindow;
  w.dataLayer = w.dataLayer || [];

  // Google Tag Manager
  w.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  loadScript(`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`);

  // Google Analytics (gtag must push the `arguments` object, not an array)
  const gtag = function (..._args: unknown[]) {
    void _args;
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments);
  };
  gtag("js", new Date());
  gtag("config", GA_ID);
  loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);
}

/**
 * Loads GTM + GA on first user interaction (or after a fallback delay) so
 * third-party scripts never compete with the initial render.
 */
export default function DeferredAnalytics() {
  useEffect(() => {
    const events = ["pointerdown", "keydown", "scroll", "touchstart", "mousemove"] as const;
    let done = false;

    const run = () => {
      if (done) return;
      done = true;
      cleanup();
      loadAnalytics();
    };
    const cleanup = () => {
      events.forEach((e) => window.removeEventListener(e, run));
      clearTimeout(timer);
    };

    events.forEach((e) => window.addEventListener(e, run, { once: true, passive: true }));
    const timer = setTimeout(run, 8000);

    return cleanup;
  }, []);

  return null;
}
