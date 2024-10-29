const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`

module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': ['prettier --write', buildEslintCommand, () => 'npx tsc --noEmit'],
}
