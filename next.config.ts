import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{

      protocol: "https",
      hostname: "assets.audiomack.com",
      port: '',
      pathname: '/assets/**'
    }]
  }
};

export default nextConfig;
