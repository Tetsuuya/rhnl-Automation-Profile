import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export to /out for Firebase Hosting (no server needed)
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
