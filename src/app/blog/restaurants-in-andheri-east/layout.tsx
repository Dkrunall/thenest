import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurants in Andheri East | Fine Dining at The Nest",
  description:
    "Looking for the best restaurants in Andheri East? Explore fine dining, Japanese-Peruvian cuisine, handcrafted cocktails, and more at The Nest at Waikiki.",
  keywords: [
    "restaurants in andheri east",
    "best restaurants in andheri east",
    "fine dining andheri east",
    "nikkei cuisine mumbai",
    "japanese peruvian restaurant mumbai",
    "handcrafted cocktails andheri",
    "sushi andheri east",
    "business lunch andheri east",
    "romantic dinner andheri east",
    "restaurants for celebrations andheri",
    "the nest at waikiki",
  ].join(", "),
  openGraph: {
    title: "Restaurants in Andheri East | Fine Dining at The Nest",
    description:
      "The Nest at Waikiki brings Nikkei cuisine — Japanese craftsmanship meets Peruvian creativity — to Andheri East, alongside handcrafted cocktails and elegant hospitality.",
    url: "https://thenestatwaikiki.com/blog/restaurants-in-andheri-east",
    siteName: "The Nest at Waikiki",
    type: "article",
    publishedTime: "2026-06-24",
  },
  alternates: { canonical: "https://thenestatwaikiki.com/blog/restaurants-in-andheri-east" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
