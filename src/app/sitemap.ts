import type { MetadataRoute } from "next";

const SITE_URL = "https://ultracrm.ru";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const sections = [
    "",
    "#vozmozhnosti",
    "#reshenie",
    "#scenariy",
    "#analitika",
    "#dlya-kogo",
    "#otzyvy",
    "#tarify",
    "#faq",
  ];

  return sections.map((hash, i) => ({
    url: `${SITE_URL}/${hash}`,
    lastModified,
    changeFrequency: "weekly",
    priority: i === 0 ? 1 : 0.7,
  }));
}
