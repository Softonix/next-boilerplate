import fs from 'fs'
import { extractStyle } from '@ant-design/static-style-extract'
import { ThemeProvider } from './index'

const outputPath = 'public/antd.min.css'

const css = extractStyle(ThemeProvider)

fs.writeFileSync(outputPath, css)

console.log(`🎉 Antd CSS generated at ${outputPath}`)
