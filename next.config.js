/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['assets.super.so', 'images.spr.so'],
  },
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig 