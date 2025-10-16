import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Netlify
  output: 'export',
  // Handle trailing slashes consistently
  trailingSlash: false,
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
