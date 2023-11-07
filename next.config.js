/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "test-front.framework.team",
      },
    ],
  },
};

module.exports = nextConfig;
