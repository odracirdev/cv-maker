/** @type {import("prettier").Config} */
const config = {
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  overrides: [
    {
      files: '*.{yaml,yml}',
      options: {
        tabWidth: 3
      }
    }
  ],
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '^@data/(.*)$',
    '^@layouts/(.*)$',
    '^@pages/(.*)$',
    '^@components/(.*)$',
    '^@scripts/(.*)$',
    '^@styles/(.*)$',
    '^@/(.*)$',
    '^.[./].*'
  ]
}

export default config
