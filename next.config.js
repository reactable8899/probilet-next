/** @type {import('next').NextConfig} */

const withNextIntl = require("next-intl/plugin")("./i18n.ts");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "90.156.229.247",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = withNextIntl(nextConfig);
