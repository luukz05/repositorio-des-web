import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/repositorio-des-web",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
