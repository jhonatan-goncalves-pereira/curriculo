import type { NextConfig } from "next";
 
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/curriculo",      // nome exato do repositório no GitHub
  assetPrefix: "/curriculo/",  // garante que JS/CSS sejam carregados do caminho correto
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
 
export default nextConfig;