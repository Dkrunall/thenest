import React from "react";

/**
 * Marks its child as a "magnetic" element. The pull-towards-cursor effect is
 * attached lazily (desktop pointers only) by ClientEnhancements, so this
 * component ships no client JavaScript of its own.
 */
export default function Magnetic({ children }: { children: React.ReactNode }) {
  return (
    <div data-magnetic className="inline-block">
      {children}
    </div>
  );
}
