import { AppIconsResolver } from './icons.resolver.mjs'
import AutoImport from 'unplugin-auto-import/webpack'
import AntDesignResolver from './antd-component.resolver.mjs'

export default () =>
  AutoImport({
    dts: './dts/auto-imports.d.ts',
    dirs: ['./src/shared/lib/utils', './src/shared/lib/utils/server', './src/shared/config', './src/shared/api'],
    imports: [
      'react',
      {
        'next/navigation': [
          'useSearchParams',
          'usePathname',
          'useParams',
          'useSelectedLayoutSegments',
          'useSelectedLayoutSegment',
          'redirect',
          'notFound',
          'permanentRedirect',
        ],
        'nextjs-toploader/app': ['useRouter'],
        'next/image': [['default', 'NextImage']],
        'next/link': [['default', 'NextLink']],
        'react-dom': ['createPortal'],
        react: ['createContext', 'Fragment'],
      },
    ],
    eslintrc: {
      enabled: true, // Default `false`
    },
    resolvers: [
      AppIconsResolver(),
      AntDesignResolver({
        packageName: 'antd',
        prefix: 'Ant',
        importStyle: false,
      }),
    ],
  })
