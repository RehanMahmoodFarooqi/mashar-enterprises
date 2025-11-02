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
    ];
  },
  // Optional: other Next.js settings can go below if needed
};

export default nextConfig;
