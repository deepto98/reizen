module.exports = {
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  extends: [
    'next/core-web-vitals',
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-typescript',
    'eslint-config-prettier',
    'eslint-plugin-import',
    'eslint-plugin-prettier',
  ]
}