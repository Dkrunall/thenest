import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurants in Andheri East | Rooftop Dining, Cocktails & Nightlife",
  description:
    "Looking for the best restaurants in Andheri East? Discover rooftop dining, signature cocktails, nightlife, Japanese cuisine, and party venues at The Nest at Waikiki.",
  keywords: [
    "restaurants in andheri east",
    "top restaurants in andheri east",
    "best restaurants in mumbai",
    "rooftop restaurants in andheri east",
    "rooftop dining in andheri mumbai",
    "tropical theme restaurant in mumbai",
    "pan asian restaurant in mumbai",
    "japanese restaurant in mumbai",
    "best cocktail bars in mumbai",
    "best cocktail bar in andheri east mumbai",
    "rooftop bar in andheri east",
    "bars in andheri east",
    "night clubs in andheri",
    "best clubs in andheri",
    "best clubs in andheri east",
    "pubs in andheri mumbai",
    "nightlife in mumbai",
    "birthday party places in andheri",
    "party venues in andheri",
    "party places in andheri mumbai",
    "luxury dining experience mumbai",
    "late night bars in andheri east mumbai",
  ].join(", "),
  openGraph: {
    title: "Restaurants in Andheri East | The Nest at Waikiki",
    description:
      "The Nest at Waikiki redefines dining and nightlife in Andheri East — rooftop views, Japanese & Pan-Asian cuisine, signature cocktails, and vibrant events.",
    url: "https://thenestatwaikiki.com/blog/restaurants-in-andheri-east",
    siteName: "The Nest at Waikiki",
    type: "article",
  },
  alternates: { canonical: "https://thenestatwaikiki.com/blog/restaurants-in-andheri-east" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
