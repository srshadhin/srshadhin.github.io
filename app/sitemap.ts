import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { caseStudies } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.siteUrl;

  return [
    {
      url: `${base}/#top`,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseStudies.map((study) => ({
      url: `${base}/work/${study.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
