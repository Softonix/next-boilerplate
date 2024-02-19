/** @type {import('next').NextConfig} */
import { AutoImportsPlugin, AutoImportsIconsPlugin } from './config/auto-imports/index.mjs'
import bundleAnalyzer from '@next/bundle-analyzer'

const nextConfig = {
    publicRuntimeConfig: {
        apiUrl: process.env.NEXT_PUBLIC_API_URL
    },
    reactStrictMode: true,
    // pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js', 'api.ts'],
    images: {
        domains: ['lh3.googleusercontent.com', 'test-upload-picture-buckjet.s3.eu-north-1.amazonaws.com']
    },
    webpack: (config) => {
        config.plugins.push(AutoImportsPlugin())
        config.plugins.push(AutoImportsIconsPlugin())
        return config
    }
}

export default bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
    openAnalyzer: true
})(nextConfig)
