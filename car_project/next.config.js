/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      'localhost:3000',
      // 'cdna.artstation.com', //localhost
    ],
  },
};

module.exports = nextConfig;
