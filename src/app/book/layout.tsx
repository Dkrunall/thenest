import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Table – The Nest at Waikiki | Rooftop Restaurant Andheri East Mumbai",
  description:
    "Reserve your table at The Nest at Waikiki — Mumbai's best rooftop restaurant and cocktail bar in Andheri East. Book for birthday parties, anniversary dinners, corporate events, and private parties at Peninsula Grand Hotel.",
  keywords: [
    "book a table rooftop restaurant mumbai",
    "birthday party places in andheri",
    "party venues in andheri",
    "party places in Andheri Mumbai",
    "private party venue mumbai",
    "best restaurants in mumbai reservation",
    "rooftop restaurant reservation andheri east",
    "birthday celebration andheri east",
    "corporate event venue andheri",
    "party place in andheri",
    "night clubs in andheri reservation",
    "best clubs in andheri east booking",
    "restaurants in andheri east booking",
    "luxury dining experience Mumbai reservation",
    "rooftop dining in andheri mumbai booking",
    "top restaurants in Andheri East",
    "The Nest at Waikiki reservation",
  ].join(", "),
  openGraph: {
    title: "Book a Table – The Nest at Waikiki | Rooftop Bar Andheri East",
    description:
      "Reserve your table at Mumbai's premier rooftop bar & restaurant. Perfect for birthday parties, anniversaries, corporate events & private gatherings in Andheri East.",
    url: "https://thenestbywaikiki.com/book",
    siteName: "The Nest at Waikiki",
    type: "website",
  },
  alternates: { canonical: "https://thenestbywaikiki.com/book" },
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
