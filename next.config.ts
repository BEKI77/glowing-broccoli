import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*"
      },
      {
        protocol: "http",
        hostname: "*"
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/contact',
        destination: 'https://script.google.com/macros/s/AKfycbwIRKqcsMSxqgN4M0h5tE0uHudhIz6oAjM49U7GtyApSxIKwOrIEgzq_aA1mVlG6hxh/exec', // The actual endpoint
      },
    ];
  },
};

export default nextConfig;
