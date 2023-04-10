/** @type {import('next').NextConfig} */

const AutoImport = require('unplugin-auto-import/webpack')

const nextConfig = {
  publicRuntimeConfig: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL
  },

  reactStrictMode: true,

  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],

  webpack: (config) => {
    config.plugins.push(AutoImport({
      dts: './dts/auto-imports.d.ts',

      dirs: [
        './src/services',
        './src/pages/**/*.service.ts',
        './src/pages/**/components'
      ],

      eslintrc: {
        enabled: true
      },

      imports: [
        'react',
        'react-i18next'
      ]
    })
    )
    return config
  }
}

module.exports = nextConfig
