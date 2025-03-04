/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Enable experimental features including Turbo
  experimental: {
    // Enable Turbo for faster builds and page loads
    turbo: {
      loaders: {
        // Add loaders for specific file types if needed
        '.svg': ['@svgr/webpack'],
      },
    },
    // Enable server components caching
    serverComponentsExternalPackages: [],
    // Enable optimistic updates
    optimisticClientCache: true,
  },
  
  // Enable SWC minification for faster builds
  swcMinify: true,
  
  // Configure caching behavior
  onDemandEntries: {
    // Period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 60 * 60 * 1000, // 1 hour
    // Number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 5,
  },
  
  // Ignore TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Ignore ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Enable static page generation optimization
  output: 'standalone',
  
  // Configure HTTP caching headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=604800',
          },
        ],
      },
      {
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=604800',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
