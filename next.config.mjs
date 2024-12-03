/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  basePath: '/lib',  // Replace with your GitHub repo name
  assetPrefix: '/lib',  // Replace with your GitHub repo name
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
};

export default nextConfig;