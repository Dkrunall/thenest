import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery – The Nest at Waikiki | Rooftop Bar & Restaurant, Andheri East Mumbai",
  description:
    "Explore The Nest at Waikiki gallery — rooftop bar interiors, artisan cocktails, Japanese & Continental dishes, and the best rooftop dining ambience in Andheri East, Mumbai.",
  keywords: [
    "rooftop bar photos mumbai",
    "best rooftop restaurants in mumbai",
    "rooftop restaurants in Andheri East",
    "tropical theme restaurant in mumbai",
    "rooftop dining experience in andheri",
    "luxury dining experience mumbai",
    "cocktail bar photos andheri",
    "japanese restaurant photos mumbai",
    "rooftop bar andheri east",
    "terrace bar in mumbai",
    "night clubs in andheri photos",
    "best clubs in andheri east",
    "bars in andheri east",
    "The Nest at Waikiki interior",
    "Peninsula Grand Hotel rooftop",
  ].join(", "),
  openGraph: {
    title: "Gallery – The Nest at Waikiki | Rooftop Bar Andheri East",
    description:
      "Step inside Mumbai's premier rooftop destination. Browse our signature bar, tropical cabanas, handcrafted cocktails, and culinary artistry.",
    url: "https://thenestbywaikiki.com/gallery",
    siteName: "The Nest at Waikiki",
    type: "website",
  },
  alternates: { canonical: "https://thenestbywaikiki.com/gallery" },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
