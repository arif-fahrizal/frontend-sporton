import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'be-sporton.agunacourse.com',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'backend-sporton-production.up.railway.app',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
