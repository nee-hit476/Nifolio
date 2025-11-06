import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",   // Required for GitHub Pages (static export)
  basePath: "",       // Ensure assets are served from root
  assetPrefix: "",    // Avoids hardcoding repo path in asset URLs
};

export default nextConfig;
