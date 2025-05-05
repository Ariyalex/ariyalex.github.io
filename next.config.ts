import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // For username.github.io repositories, GitHub serves from the root domain
  // No basePath is needed, and assetPrefix should be empty
  basePath: '',
  assetPrefix: '',
};

export default nextConfig;
