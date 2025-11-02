import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect www → non-www
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.masharenterprises.com" }],
        destination: "https://masharenterprises.com/:path*",
        permanent: true,
      },
      // Optional: Force HTTPS for root domain
      {
        source: "/:path*",
        has: [{ type: "host", value: "masharenterprises.com" }],
        destination: "https://masharenterprises.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;