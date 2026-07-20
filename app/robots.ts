import type { MetadataRoute } from "next";

// Tells crawlers the whole marketing site is fair game and points them at the
// sitemap. Both URLs use the canonical klovered.com domain (see metadataBase).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://klovered.com/sitemap.xml",
    host: "https://klovered.com",
  };
}
