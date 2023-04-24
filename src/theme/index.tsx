import { ButtonTheme } from './button'

export const ThemeProvider = (node: JSX.Element) => (
  <AntConfigProvider
    theme={{
      token: {
        colorPrimary: '#d75d3c'
      },
      components: {
        Button: ButtonTheme
      }
    }}
  >
    {node}
  </AntConfigProvider>
)
