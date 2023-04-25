const AutoImports = require('unplugin-auto-import/webpack')

const NextImports = require('./next-imports')
const AntImports = require('./ant-imports')
const { IconsPluginCustom, IconsImports } = require('./icons-imports')

const AutoImportsPlugin = () => AutoImports({
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
    ...IconsImports(),
    ...NextImports
  ]
})

module.exports = {
  AutoImportsPlugin,
  IconsPluginCustom
}
