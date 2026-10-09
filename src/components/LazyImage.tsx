"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type ImageProps } from "next/image";

/**
 * next/image for `fill` images that sit below the fold. Chrome's native lazy
 * loading starts fetching ~1250px+ ahead of the viewport on slow connections,
 * which pulls large photos into the initial load. This waits until the image
 * is actually close to the viewport. Must be placed inside a positioned parent.
 */
export default function LazyImage({
  rootMargin = "200px",
  fallbackSrc,
  ...props
}: ImageProps & { rootMargin?: string; fallbackSrc?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      const t = setTimeout(() => setVisible(true), 0);
      return () => clearTimeout(t);
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className="absolute inset-0" role="img" aria-label={props.alt}>
      {visible && (
        <Image
          {...props}
          alt={props.alt}
          onError={
            fallbackSrc
              ? (e) => {
                  (e.target as HTMLImageElement).src = fallbackSrc;
                }
              : undefined
          }
        />
      )}
    </div>
  );
}
