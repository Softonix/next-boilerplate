module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    './.eslintrc-auto-import.json',
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
  },
  ignorePatterns: ['/*', '!/src', '/src/core/scripts', '/src/core/styles', '/src/core/config/auto-import'],
  rules: {
    'react/no-unescaped-entities': 0,
    'react/jsx-no-undef': [0, { allowGlobals: true }],
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
    'react/no-children-prop': 0,
  },
}
