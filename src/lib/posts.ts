export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  /** Publish date, ISO format (YYYY-MM-DD). */
  date: string;
};

// Newest first — this order is used on the blog index.
export const posts: Post[] = [
  {
    slug: "japanese-food-restaurant-andheri",
    title: "Japanese Food Restaurant Andheri: Where Japanese Flavours Meet Rooftop Dining",
    excerpt:
      "Japanese dining in Andheri East is no longer limited to sushi. Discover how The Nest at Waikiki pairs Japanese-Continental plates with rooftop views, tiki mixology and DJ-led nights.",
    tags: ["Japanese Food", "Rooftop Dining", "Andheri East", "Sushi"],
    date: "2026-09-23",
  },
  {
    slug: "japanese-cuisine-restaurant-in-andheri",
    title: "Japanese Cuisine Restaurant in Andheri: A Modern Guide to Japanese Dining",
    excerpt:
      "A great Japanese dining experience is about precision, balance, texture and presentation. A modern guide to Japanese cuisine, sushi and rooftop dining at The Nest at Waikiki.",
    tags: ["Japanese Cuisine", "Fine Dining", "Andheri East", "Sushi"],
    date: "2026-09-23",
  },
  {
    slug: "best-japanese-restaurant-in-andheri",
    title: "Best Japanese Restaurant in Andheri: Discover the Art of Nikkei Dining at The Nest at Waikiki",
    excerpt:
      "For those searching for the best Japanese restaurant in Andheri, The Nest at Waikiki offers authentic Nikkei cuisine, premium sushi, and handcrafted cocktails in an elegant setting.",
    tags: ["Japanese Cuisine", "Nikkei", "Sushi", "Andheri East", "Cocktails"],
    date: "2026-08-06",
  },
  {
    slug: "best-rooftop-dining-experience-in-andheri",
    title: "Best Rooftop Dining Experience in Andheri: Why The Nest at Waikiki Stands Out",
    excerpt:
      "Mumbai is a city that never slows down. When it comes to finding the perfect combination of great food, signature cocktails, stunning views, and a lively atmosphere, The Nest at Waikiki delivers an experience that goes far beyond dining.",
    tags: ["Rooftop Dining", "Andheri East", "Cocktails", "Mumbai Nightlife"],
    date: "2026-06-24",
  },
  {
    slug: "restaurants-in-andheri-east",
    title: "Restaurants in Andheri East: The Ultimate Guide to Exceptional Dining Experiences",
    excerpt:
      "When searching for the best restaurants in Andheri East, diners today want more than just great food. The Nest at Waikiki brings together Nikkei cuisine, handcrafted cocktails, and elegant hospitality for every occasion.",
    tags: ["Restaurants", "Andheri East", "Fine Dining", "Nikkei Cuisine", "Cocktails"],
    date: "2026-06-24",
  },
];

export function getPost(slug: string): Post {
  const post = posts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Unknown blog post: ${slug}`);
  return post;
}

export function formatPostDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
