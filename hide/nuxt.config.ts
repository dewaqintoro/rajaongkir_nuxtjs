import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  env: {
    tautanUrl: process.env.TAUTAN_URL || 'http://localhost:4530',
    tautanUrlTest: process.env.TAUTAN_URL_TEST || 'http://localhost:4530',
  },
  head: {
    title: 'Tentang Kita',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  loading: false,
  plugins: ['@/plugins/global.ts'],
  components: [{ path: '~/components', ignore: 'widgets/*' }],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    '@nuxtjs/composition-api',
    'pinia/nuxt',
    '@nuxtjs/google-fonts',
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', 'cookie-universal-nuxt'],
  axios: {},
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-nested': {},
      },
    },
  },
  fontawesome: {
    component: 'Fa',
    proIcons: {
      regular: [
        'faArrowsAlt',
        'faAnalytics',
        'faChartBar',
        'faCreditCard',
        'faDiceD4',
        'faEllipsisV',
        'faExternalLink',
        'faHome',
        'faLightbulbOn',
        'faLink',
        'faMapMarkerAlt',
        'faPaintBrush',
        'faPaperPlane',
        'faPen',
        'faPlusCircle',
        'faPlus',
        'faQuestionCircle',
        'faText',
        'faTrashAlt',
      ],
    },
  },
  googleFonts: {
    families: {
      Inter: {
        wght: [500, 600, 700],
        ital: [500, 600, 700],
      },
    },
    display: 'swap',
  },
}

export default config
