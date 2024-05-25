import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: ['**/*.vue'],
    rules: {
      'no-console': 'warn',
      'vue/no-multiple-template-root': 'off',
      'vue/html-self-closing': 'off',
    }
  },
)