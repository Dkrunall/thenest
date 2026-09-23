import type { MetadataRoute } from "next";

const BASE_URL = "https://thenestatwaikiki.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: BASE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/book`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/gallery`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    {
      url: `${BASE_URL}/blog/restaurants-in-andheri-east`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/best-rooftop-dining-experience-in-andheri`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/best-japanese-restaurant-in-andheri`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
