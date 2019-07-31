import NuxtConfiguration from '@nuxt/config'
import colors from 'vuetify/es5/util/colors'
import pkg from './package.json'

const config: NuxtConfiguration = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + pkg.name,
    title: pkg.name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.name || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/firebase',
    '@/plugins/auth'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    '@nuxtjs/vuetify'
  ],
  // PWA manifest
  manifest: {
    name: 'gifch',
    short_name: 'gifch',
    lang: 'ja'
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    theme: {
      primary: '#3f51b5',
      secondary: '#b0bec5',
      accent: '#8c9eff',
      error: '#b71c1c'
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // extend(config, ctx) {
    // }
  }
}

export default config
