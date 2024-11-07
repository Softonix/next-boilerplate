import { AntdRegistry } from '@ant-design/nextjs-registry'
import { defaultAppFont } from '@/shared/lib/constants'
import { appColors } from '../styles/tailwind/app.colors'

export const GlobalAntConfigProvider = ({ children }: TChildrenProps) => {
  return (
    <AntConfigProvider
      theme={{
        components: {
          Button: {
            dangerColor: appColors.dangerForeground,
          },
          Modal: {
            borderRadius: 16,
          },
          Input: {
            colorBorder: appColors.regular,
            colorTextPlaceholder: '#A3ACBA',
            colorText: '#19213D',
            borderRadiusLG: 16,
            inputFontSizeLG: 16,
            paddingInlineLG: 16,
          },
        },
        token: {
          borderRadius: 8,
          controlHeightLG: 46,
          controlHeight: 40,
          controlHeightSM: 32,
          fontFamily: defaultAppFont.style.fontFamily,
          colorPrimary: appColors.primary,
          colorInfo: appColors.regularForeground,
          colorText: appColors.regularForeground,
        },
      }}
    >
      <AntdRegistry>{children}</AntdRegistry>
    </AntConfigProvider>
  )
}
