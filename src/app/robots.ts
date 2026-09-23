import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://thenestatwaikiki.com/sitemap.xml",
    host: "https://thenestatwaikiki.com",
  };
}
