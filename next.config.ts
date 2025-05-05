import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '/',  // Must start with a leading slash for next/font
  distDir: 'out',
};

export default nextConfig;
