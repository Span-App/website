import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Enable for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/website' : '',
  
  // Option 2: If your GitHub Pages URL is organization.github.io (no subpath)
  // basePath: '',
  
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
