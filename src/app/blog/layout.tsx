import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Nest Journal | Blog – The Nest at Waikiki, Andheri East Mumbai",
  description:
    "The Nest at Waikiki blog — cocktail recipes, behind-the-bar stories, event recaps, seasonal menus, and nightlife guides from Mumbai's best rooftop bar in Andheri East.",
  keywords: [
    "rooftop bar blog mumbai",
    "cocktail recipes mumbai",
    "best cocktail bar in mumbai",
    "nightlife in mumbai",
    "rooftop restaurant andheri east",
    "bar stories mumbai",
    "tiki cocktail recipes",
    "mumbai nightlife guide",
    "andheri east nightlife",
    "best bars in andheri",
    "The Nest at Waikiki blog",
    "rooftop dining mumbai",
  ].join(", "),
  openGraph: {
    title: "The Nest Journal | Blog – The Nest at Waikiki",
    description:
      "Cocktail recipes, bar stories, event recaps and seasonal menus from Mumbai's premier rooftop bar in Andheri East.",
    url: "https://thenestbywaikiki.com/blog",
    siteName: "The Nest at Waikiki",
    type: "website",
  },
  alternates: { canonical: "https://thenestbywaikiki.com/blog" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
