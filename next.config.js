/** @type {import('next').NextConfig} */
const webpack = require('./next.config.webpack')

const nextConfig = {
  publicRuntimeConfig: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL
  },
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  webpack
}

module.exports = nextConfig
