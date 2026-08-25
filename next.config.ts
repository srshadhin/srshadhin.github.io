import type { NextConfig } from "next";

// GitHub Pages only serves static files, so the Pages build
// (GITHUB_PAGES=true, set by the deploy workflow) switches to a static
// export. The repo is the srshadhin.github.io user site, so it's served at
// the domain root — no basePath needed. Vercel and local dev keep the
// default full Next.js build.
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = isGithubPages
  ? {
      output: "export",
      images: { unoptimized: true },
    }
  : {};

export default nextConfig;
