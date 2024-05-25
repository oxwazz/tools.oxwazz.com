import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        customPrimary: {
          50: '#F8F4EB',
          100: '#F3EBDB',
          200: '#E9DABD',
          300: '#DFC99E',
          400: '#D1B274',
          500: '#C39A4A',
          600: '#A07C35',
          700: '#765B27',
          800: '#4C3A19',
          900: '#211A0B',
          950: '#0C0A04'
        }
      }
    }
  }
}
