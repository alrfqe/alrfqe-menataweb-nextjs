import type { NextConfig } from 'next';
import { legacyRedirects } from './src/site/legacy-routes';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.1.12', '192.168.248.110'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return legacyRedirects.map((redirect) => ({
      ...redirect,
      permanent: true,
    }));
  },
};

export default nextConfig;
