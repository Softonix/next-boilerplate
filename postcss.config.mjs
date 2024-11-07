/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: { config: './src/core/styles/tailwind/tailwind.config.ts' },
  },
}

export default config
