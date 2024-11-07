import Icons from 'unplugin-icons/webpack'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

export const AppIconsPlugin = ({ dir }) => {
  return Icons({
    compiler: 'jsx',
    jsx: 'react',
    customCollections: {
      icon: FileSystemIconLoader(dir),
    },
  })
}

export const AppIconsResolver = () =>
  IconsResolver({
    prefix: 'app',
    extension: 'jsx',
    customCollections: ['icon'],
  })
