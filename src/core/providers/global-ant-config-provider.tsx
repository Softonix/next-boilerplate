import { AntdRegistry } from '@ant-design/nextjs-registry'
import { defaultAppFont } from '@/shared/lib/constants'
import { appColors } from '../styles/tailwind/app.colors'

export const GlobalAntConfigProvider = ({ children }: TChildrenProps) => {
  return (
    <AntConfigProvider
      theme={{
        token: {
          fontFamily: defaultAppFont.style.fontFamily,
          colorPrimary: appColors.primary,
        },
      }}
    >
      <AntdRegistry>{children}</AntdRegistry>
    </AntConfigProvider>
  )
}
