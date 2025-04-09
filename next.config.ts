import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  // deeexiao.github.io为根域名，不需要子路径
  basePath: '',
  assetPrefix: '',
  // 临时禁用ESLint检查
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
