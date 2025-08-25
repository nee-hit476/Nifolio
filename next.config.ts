import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // for static export
  images: {
    unoptimized: true, // required for static export
  },
  basePath: "/Nifolio", // your repo name
  assetPrefix: "/Nifolio/", // ensures static assets load from correct path
};

export default nextConfig;
