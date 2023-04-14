/** @type {import('next').NextConfig} */
const webpack = require('./next.config.webpack')

const nextConfig = {
  publicRuntimeConfig: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL
  },
  reactStrictMode: true,
  // TODO I hate this config !!!
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js', 'api.ts'],
  webpack
}

module.exports = nextConfig
