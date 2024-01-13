/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.BASE_URL,
  },
  images: {
    domains: ["129.154.41.215"],
  },
};

module.exports = nextConfig;
