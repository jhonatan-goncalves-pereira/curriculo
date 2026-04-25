import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  
  images: {
    unoptimized: true,  
  },
  basePath: '/curriculo',
  trailingSlash: true,  
};

export default nextConfig;