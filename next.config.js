const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

/** @type {import('next').NextConfig} */
const nextConfig = withPlugins([
  [optimizedImages],
  // [withTM],
], {
  reactStrictMode: true,
  swcMinify: true,
  exportPathMap: async function() {
    return {
      "/": { page: "/" },
    }
  },
})

module.exports = nextConfig;
