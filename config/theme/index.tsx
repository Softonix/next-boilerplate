import React from 'react'
import { ConfigProvider } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'

import { ButtonTheme } from './button'

export const ThemeProvider = (node: JSX.Element) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#d75d3c'
      },
      components: {
        Button: ButtonTheme
      }
    }}
  >
    <StyleProvider hashPriority="high">
      {node}
    </StyleProvider>
  </ConfigProvider>
)
