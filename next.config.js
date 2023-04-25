/** @type {import('next').NextConfig} */
const { AutoImportsPlugin, IconsPluginCustom } = require('./config/auto-imports')
const bundleAnalyzer = require('@next/bundle-analyzer')

const nextConfig = {
  publicRuntimeConfig: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL
  },
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js', 'api.ts'],
  transpilePackages: ['antd'],
  webpack: (config) => {
    config.plugins.push(AutoImportsPlugin())
    config.plugins.push(IconsPluginCustom())
    return config
  }
}

module.exports = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true
})(nextConfig)
