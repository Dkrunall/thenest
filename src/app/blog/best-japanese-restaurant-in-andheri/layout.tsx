import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Japanese Restaurant in Andheri | The Nest at Waikiki",
  description:
    "Looking for the best Japanese restaurant in Andheri? Experience authentic Nikkei cuisine, premium sushi, and handcrafted cocktails at The Nest at Waikiki.",
  keywords: [
    "best japanese restaurant in andheri",
    "japanese restaurant andheri east",
    "nikkei cuisine mumbai",
    "japanese peruvian fusion restaurant",
    "sushi andheri east",
    "sashimi mumbai",
    "robata grill andheri",
    "handcrafted cocktails andheri",
    "fine dining andheri east",
    "the nest at waikiki",
  ].join(", "),
  openGraph: {
    title: "Best Japanese Restaurant in Andheri | The Nest at Waikiki",
    description:
      "Discover authentic Nikkei dining at The Nest at Waikiki — Japanese precision meets Peruvian creativity, with fresh sushi, sashimi, and handcrafted cocktails in Andheri.",
    url: "https://thenestatwaikiki.com/blog/best-japanese-restaurant-in-andheri",
    siteName: "The Nest at Waikiki",
    type: "article",
  },
  alternates: { canonical: "https://thenestatwaikiki.com/blog/best-japanese-restaurant-in-andheri" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
