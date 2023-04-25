import React from 'react'
import { ConfigProvider } from 'antd'

export const ThemeProvider = (node: JSX.Element) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#d75d3c'
      }
      // components: {
      //   Button: ButtonTheme
      // }
    }}
  >
    {node}
  </ConfigProvider>
)
