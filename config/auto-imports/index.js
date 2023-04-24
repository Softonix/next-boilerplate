const AutoImports = require('unplugin-auto-import/webpack')

const NextImports = require('./next')
const AntImports = require('./ant')

const AutoImportsPlugin = AutoImports({
  dts: './dts/auto-imports.d.ts',

  dirs: [
    './src/components',
    './src/services',
    './src/pages/**/*.service.ts',
    './src/pages/**/components',
    './src/theme'
  ],

  eslintrc: {
    enabled: true
  },

  imports: [
    'react',
    'react-i18next',
    {
      from: 'react',
      imports: ['FC'],
      type: true
    },
    AntImports,
    ...NextImports
  ]
})

module.exports = AutoImportsPlugin
