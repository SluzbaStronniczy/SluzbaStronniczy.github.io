import withOptimizedImages from "next-optimized-images";

/** @type {import('next').NextConfig} */
const nextConfig = withOptimizedImages({
  reactStrictMode: true,
  swcMinify: true,
  exportPathMap: async function() {
    return {
      "/": { page: "/" },
    }
  },
  handleImages: ["jpeg", "png", "svg"],
})

export default nextConfig;
