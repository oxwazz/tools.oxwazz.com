// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vee-validate/nuxt',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@nuxt/image',
    'nuxt-icon',
    'nuxt-swiper',
    'nuxt-posthog',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    '@nuxt/eslint'
  ],
  runtimeConfig: {
    // The private keys which are only available within server-side
    OXWAZZ_TEST_PRIVATE: process.env.OXWAZZ_TEST_PRIVATE,
    // Keys within public, will be also exposed to the client-side
    public: {
      OXWAZZ_TEST_PUBLIC: process.env.OXWAZZ_TEST_PUBLIC
    }
  },
  typescript: {
    typeCheck: true
  },

  // @nuxt/eslint config
  eslint: {
    // checker: true
  },

  // @nuxt/ui config
  colorMode: {
    preference: 'light'
  },

  // @nuxt/ui tailwindcss config
  tailwindcss: {
    configPath: './tailwind.config.ts'
  },
  // postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {}
  //   }
  // },

  // @nuxtjs/google-fonts config
  googleFonts: {
    display: 'swap',
    families: {
      Roboto: true,
      'Jacquard+12': true,
      'Crimson Pro': {
        wght: '200..900',
        ital: '200..700'
      },
      'Poetsen One': true,
      'JetBrains Mono': true
    }
  },
  // @nuxtjs/i18n config
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
  // @nuxt/image config
  image: {
    imagekit: {
      baseURL: 'https://ik.imagekit.io/dietela'
    }
  },
  // @vee-validate/nuxt config
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage'
    }
  }
})
