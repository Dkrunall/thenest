import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Japanese Cuisine Restaurant in Andheri | The Nest",
  description:
    "Looking for a Japanese cuisine restaurant in Andheri? Explore Japanese flavours, dining styles, sushi and modern rooftop dining at The Nest at Waikiki.",
  keywords: [
    "japanese cuisine restaurant in andheri",
    "japanese restaurant in andheri east",
    "authentic japanese restaurant in andheri",
    "sushi and japanese restaurant in andheri",
    "japanese fine dining in andheri",
    "japanese dinner restaurant andheri",
    "premium dining places in andheri east",
    "the nest at waikiki",
  ].join(", "),
  openGraph: {
    title: "Japanese Cuisine Restaurant in Andheri | The Nest",
    description:
      "Looking for a Japanese cuisine restaurant in Andheri? Explore Japanese flavours, dining styles, sushi and modern rooftop dining at The Nest at Waikiki.",
    url: "https://thenestatwaikiki.com/blog/japanese-cuisine-restaurant-in-andheri",
    siteName: "The Nest at Waikiki",
    type: "article",
    publishedTime: "2026-09-23",
  },
  alternates: { canonical: "https://thenestatwaikiki.com/blog/japanese-cuisine-restaurant-in-andheri" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
