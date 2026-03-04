import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/repositorio-des-web",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
