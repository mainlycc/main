import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  redirects: async () => {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "mainly.pl",
          },
        ],
        destination: "https://www.mainly.pl/:path*",
        permanent: true,
      },
    ];
  },
  webpack: (config, { dev, isServer }) => {
    // Optymalizacje dla produkcji
    if (!dev && !isServer) {
      Object.assign(config.optimization.splitChunks, {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        cacheGroups: {
          default: false,
          vendors: false,
          commons: {
            name: 'commons',
            chunks: 'all',
            minChunks: 2,
          },
          shared: {
            name: (module: any, chunks: any) => {
              const allChunksNames = chunks.map((item: any) => item.name).join('~');
              return `shared-${allChunksNames}`;
            },
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            minChunks: 1,
          },
        },
      });
    }
    return config;
  },
};

export default nextConfig;
