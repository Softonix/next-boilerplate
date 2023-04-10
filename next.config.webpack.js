const AutoImports = require('unplugin-auto-import/webpack')

const autoImports = AutoImports({
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

module.exports = (config) => {
  config.plugins.push(autoImports)
  return config
}
