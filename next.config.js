/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['assets.super.so', 'images.spr.so'],
  },
  trailingSlash: true,
  basePath: '/deeexiao.github.io',
  assetPrefix: '/deeexiao.github.io/',
}

module.exports = nextConfig 