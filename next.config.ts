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
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://connect.facebook.net https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https:",
              "connect-src 'self' https://*.supabase.co https://*.facebook.com https://*.google-analytics.com https://*.analytics.google.com",
              "frame-src 'self'",
            ].join("; "),
          },
        ],
      },
    ];
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
      // Trust anchor pages — angielskie aliasy dla skanerów agentów AI
      { source: "/about", destination: "/o-mnie", permanent: true },
      { source: "/contact", destination: "/kontakt", permanent: true },
      { source: "/privacy", destination: "/polityka-prywatnosci", permanent: true },
      { source: "/rss.xml", destination: "/feed.xml", permanent: true },
    ];
  },
  // Turbopack configuration (Next.js 16+ uses Turbopack by default)
  turbopack: {},
  // Webpack configuration (kept for backward compatibility, but Turbopack takes precedence)
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
