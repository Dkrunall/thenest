"use client";

import { useEffect } from "react";

/**
 * Lifts the inline fallback-font override set on <html> (see layout.tsx) once the
 * page has loaded, so the real web fonts download after the critical rendering path.
 */
export default function FontActivator() {
  useEffect(() => {
    const activate = () => {
      const root = document.documentElement.style;
      root.removeProperty("--font-cormorant");
      root.removeProperty("--font-inter");
    };
    if (document.readyState === "complete") {
      activate();
      return;
    }
    window.addEventListener("load", activate, { once: true });
    return () => window.removeEventListener("load", activate);
  }, []);

  return null;
}
