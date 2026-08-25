import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";

// Required for `output: "export"` (the GitHub Pages build) — otherwise this
// route handler is treated as dynamic and fails the static export.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${profile.siteUrl}/sitemap.xml`,
  };
}
