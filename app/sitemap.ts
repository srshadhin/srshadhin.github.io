import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { caseStudies } from "@/data/projects";

// Required for `output: "export"` (the GitHub Pages build) — otherwise this
// route handler is treated as dynamic and fails the static export.
export const dynamic = "force-static";

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
