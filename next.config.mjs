/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['localhost'],
    unoptimized: false,
  },
  reactStrictMode: false,
  experimental: {
    suppressHydrationWarning: true,
  },
}

export default nextConfig
