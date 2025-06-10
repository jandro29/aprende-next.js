// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: 'export', // Esto es lo nuevo que reemplaza a `next export`

  output: 'standalone',
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
