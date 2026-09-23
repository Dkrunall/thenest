import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Rooftop Dining Experience in Andheri | The Nest at Waikiki",
  description:
    "Discover why The Nest at Waikiki is among the best rooftop restaurants in Mumbai. Enjoy signature cocktails, Japanese cuisine, tropical vibes, and an unforgettable rooftop dining experience in Andheri East.",
  keywords: [
    "best rooftop dining experience in andheri",
    "rooftop restaurants in andheri east",
    "best rooftop restaurants in mumbai",
    "rooftop dining in andheri mumbai",
    "japanese restaurant in mumbai",
    "pan asian restaurant in mumbai",
    "best cocktail bar in mumbai",
    "best cocktail bar in andheri east mumbai",
    "rooftop bar in andheri east",
    "birthday party places in andheri",
    "party venues in andheri",
    "nightlife in mumbai",
    "best clubs in andheri",
    "late night bars in andheri east mumbai",
    "restaurants in andheri east",
    "luxury dining experience mumbai",
  ].join(", "),
  openGraph: {
    title: "Best Rooftop Dining Experience in Andheri | The Nest at Waikiki",
    description:
      "Discover why The Nest at Waikiki is among the best rooftop restaurants in Mumbai — signature cocktails, Japanese cuisine, and tropical rooftop vibes in Andheri East.",
    url: "https://thenestatwaikiki.com/blog/best-rooftop-dining-experience-in-andheri",
    siteName: "The Nest at Waikiki",
    type: "article",
    publishedTime: "2026-06-24",
  },
  alternates: { canonical: "https://thenestatwaikiki.com/blog/best-rooftop-dining-experience-in-andheri" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
