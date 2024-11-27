import { AppIconsResolver } from './icons.resolver.mjs'
import AutoImport from 'unplugin-auto-import/webpack'

export default () =>
  AutoImport({
    dts: './dts/auto-imports.d.ts',
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
    resolvers: [AppIconsResolver()],
  })
