/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['assets.super.so', 'images.spr.so'],
  },
  trailingSlash: true,
  srcDir: 'src',
}

module.exports = nextConfig 