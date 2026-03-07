import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  outputFileTracingRoot: path.join(__dirname, '../'),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'be-sporton.agunacourse.com',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'backend-sporton.vercel.app',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
