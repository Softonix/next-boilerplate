const { FileSystemIconLoader } = require('unplugin-icons/loaders')
const path = require('pathe')
const fs = require('fs')
const { pascalCase } = require('change-case')
const iconsPath = path.join(process.cwd(), '/src/assets/icons')

const Icons = require('unplugin-icons/webpack')

const IconsPluginCustom = () => Icons({
  compiler: 'jsx',
  jsx: 'react',
  customCollections: {
    icon: FileSystemIconLoader(iconsPath)
  }
})

const IconsImports = () => {
  return fs.readdirSync(iconsPath).map(file => {
    const fileName = path.parse(file).name
    return {
      from: `~icons/icon/${fileName}.jsx`,
      imports: [['default', `Icon${pascalCase(fileName)}`]]
    }
  })
}

module.exports = {
  IconsPluginCustom,
  IconsImports
}
