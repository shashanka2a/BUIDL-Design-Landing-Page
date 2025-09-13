/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
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

