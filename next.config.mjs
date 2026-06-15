/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/Priyanshu-Patra-Portfolio' : '',
  assetPrefix: isProd ? '/Priyanshu-Patra-Portfolio/' : '',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
