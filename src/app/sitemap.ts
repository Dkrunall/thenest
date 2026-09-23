import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

const BASE_URL = "https://thenestatwaikiki.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: BASE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/book`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/gallery`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
