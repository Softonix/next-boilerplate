/** @type {import('next').NextConfig} */
const AutoImports = require('./config/auto-imports')

const nextConfig = {
  publicRuntimeConfig: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL
  },
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  transpilePackages: ['antd'],
  webpack: (config) => {
    config.plugins.push(AutoImports)
    return config
  }
}

module.exports = nextConfig
