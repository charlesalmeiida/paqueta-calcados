import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.brchallenges.com",
        port: "",
        pathname: "/shoes/**",
      },
    ],
  },
}

export default nextConfig
