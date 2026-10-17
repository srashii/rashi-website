const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      { source: "/portfolio/chat-delight", destination: "/portfolio/chat-to-fintech", permanent: true },
      { source: "/portfolio/realtime-homepage", destination: "/portfolio", permanent: true },
      { source: "/assets/RashiSrivastavaResume-public.pdf", destination: "/assets/RashiSrivastava-Resume.pdf", permanent: true },
    ];
  },
  images: {
    remotePatterns: [],
  },
};

module.exports = withContentlayer(nextConfig);
