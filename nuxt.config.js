module.exports = {
  /*
  ** Env variables
  */
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    apiUrl : 'https://jsonplaceholder.typicode.com/',
  },
    /*
  ** Headers of the page
  */
  head: {
    title: 'pandacraft2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/api/': { target: 'https://jsonplaceholder.typicode.com/', pathRewrite: {'^/api/': ''} }
    // '/api2/': 'http://api.another-website.com'
  },
  styleResources: {
    scss: [
      'assets/styles/index.scss',
    ]
  },
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/vuetify.js',
    '~/plugins/axios',
  ],
    /*
  ** Build configuration
  */
  build: {
    vendor: [
      'vue-i18n',
      'vuetify'
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
}
