/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'build',
  images: {
    unoptimized: true
  },
  experimental: {
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig

