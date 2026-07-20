import type { MetadataRoute } from "next";

// The public marketing routes. The tool itself (/app/*) is intentionally left
// out: it's gated behind auth and lives in a separate container.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://klovered.com";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];
}
