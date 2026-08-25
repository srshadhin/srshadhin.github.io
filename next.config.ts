import type { NextConfig } from "next";

// GitHub Pages serves this repo at /portfolio/, not the domain root, and only
// serves static files — so the Pages build (GITHUB_PAGES=true, set by the
// deploy workflow) switches to a static export with a matching basePath.
// Vercel and local dev keep the default full Next.js build.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "portfolio";

const nextConfig: NextConfig = isGithubPages
  ? {
      output: "export",
      images: { unoptimized: true },
      basePath: `/${repoName}`,
      assetPrefix: `/${repoName}/`,
    }
  : {};

export default nextConfig;
