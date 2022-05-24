const proxyConfig = () => {
  if (process.env.DEPLOY_ENV === 'dev') {
    return {
      '/api': { target: 'http://localhost:8000', changeOrigin: true }
    }
  } else {
    return {
      '/api': { target: 'http://backend:8000', changeOrigin: true }
    }
  }
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'homepage',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  server: {
    port: process.env.NUXT_PORT || 3000, // default: 3000
    host: process.env.NUXT_HOST || 'localhost', // default: localhost,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    proxy: true
  },

  proxy: proxyConfig(),

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  auth: {
    strategies: {
      local:{
        token: {
          property: 'token',
          required: true,
          type: ''
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints:{
          login: { url: '/api/user/login', method: 'post'},
          logout: { url: '/api/user/logout', method: 'post'},
          user: { url: '/api/user/info', method: 'get'},
        }
      }
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
