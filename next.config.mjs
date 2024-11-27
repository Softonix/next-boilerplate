import AutoImport from './src/core/config/auto-import/auto-imports.config.mjs'
import { AppIconsPlugin } from './src/core/config/auto-import/icons.resolver.mjs'
import withBundleAnalyzer from '@next/bundle-analyzer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Important: return the modified config
    return {
      ...config,
      plugins: [...config.plugins, AutoImport(), AppIconsPlugin({ dir: './public/icons' })],
    }
  },
}

const analyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

export default analyzer(nextConfig)
