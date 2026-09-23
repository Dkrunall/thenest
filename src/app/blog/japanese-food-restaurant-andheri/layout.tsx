import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Japanese Food Restaurant Andheri | The Nest at Waikiki",
  description:
    "Discover what makes a Japanese food restaurant in Andheri special, from sushi and Japanese flavours to premium rooftop dining at The Nest at Waikiki.",
  keywords: [
    "japanese food restaurant andheri",
    "japanese food in andheri",
    "best japanese food in andheri",
    "japanese restaurant in andheri east",
    "japanese lunch restaurant in andheri",
    "japanese dinner andheri",
    "aesthetic restaurants in andheri",
    "rooftop dining andheri east",
    "the nest at waikiki",
  ].join(", "),
  openGraph: {
    title: "Japanese Food Restaurant Andheri | The Nest at Waikiki",
    description:
      "Discover what makes a Japanese food restaurant in Andheri special, from sushi and Japanese flavours to premium rooftop dining at The Nest at Waikiki.",
    url: "https://thenestatwaikiki.com/blog/japanese-food-restaurant-andheri",
    siteName: "The Nest at Waikiki",
    type: "article",
    publishedTime: "2026-09-23",
  },
  alternates: { canonical: "https://thenestatwaikiki.com/blog/japanese-food-restaurant-andheri" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
