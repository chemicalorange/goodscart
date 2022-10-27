/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['p.tsx', 'p.ts'],
  images: { domains: ['images.unsplash.com'] },
  typescript: {
    ignoreBuildErrors: true,
  },

}

module.exports = nextConfig
