import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.vecteezy.com", port: "" },
    ],
  },
};

export default nextConfig;
