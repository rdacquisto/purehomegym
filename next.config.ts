import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js Image Optimization
  },
  basePath: '/purehomegym', // Required for GitHub Pages hosting
  assetPrefix: '/purehomegym/',
};

export default nextConfig;
