/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['assets.super.so', 'images.spr.so'],
  },
  trailingSlash: true,
  // Ensure TypeScript is properly compiled
  typescript: {
    ignoreBuildErrors: false,
  },
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  // Configure security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://assets.super.so https://images.spr.so;"
          }
        ],
      },
    ]
  },
}

module.exports = nextConfig 