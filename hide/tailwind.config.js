/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    screens: {
      mobile: { max: '576px' },
      tablet: { max: '767px' },
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif', 'circular-std'],
      },
      colors: {
        // brand: '#E20016',
        // body: '#232323',
        // gray: {
        //   100: '#F9F9F9',
        //   200: '#F2F2F2',
        //   300: '#E9E9E9',
        //   400: '#D5D5D5',
        //   500: '#B0B0B0',
        //   600: '#838383',
        //   700: '#595959',
        //   800: '#3B3B3B',
        //   900: '#232323',
        // },
      },
      borderRadius: {
        xl: '10px',
        '2xl': '24px',
      },
      boxShadow: {
        base: '0px 2px 6px rgba(195, 199, 204, 0.5)',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    whitelistPatterns: [/(fa-)|(svg-)|(sr-)/],
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.ts',
    ],
  },
}
