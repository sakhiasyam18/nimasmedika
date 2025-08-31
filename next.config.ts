import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // izinkan unsplash
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};
// next.config.js
module.exports = {
  images: {
    domains: ["img.youtube.com"],
  },
};

export default nextConfig;
