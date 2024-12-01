/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
    // outputStandalone: true,
  },
};

export default nextConfig;
