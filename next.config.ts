import type { NextConfig } from "next";
 
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/curriculo",
  assetPrefix: "/curriculo/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
 
export default nextConfig;
 