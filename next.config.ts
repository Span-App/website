import type { NextConfig } from "next";

// If you have a custom domain like span.lol, you don't need basePath or assetPrefix
// If you're using GitHub Pages with username.github.io/website, you need these settings
const isGitHubPages = process.env.DEPLOY_TARGET === 'gh-pages';
const hasCustomDomain = true; // Set to true if you have a CNAME file with a custom domain

const nextConfig: NextConfig = {
  output: 'export',
  basePath: (isGitHubPages && !hasCustomDomain) ? '/website' : '',
  assetPrefix: (isGitHubPages && !hasCustomDomain) ? '/website' : '',
  
  // Option 2: If your GitHub Pages URL is organization.github.io (no subpath)
  // basePath: '',
  
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
