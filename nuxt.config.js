module.exports = {
  dev: process.env.NODE_ENV !== 'production',

  head: {
    title: 'Viblo Machine Learning Services',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Viblo machine learning services' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://viblo.asia/favicon.ico' }
    ]
  },

  loading: { color: '#5488c7' },

  css: [
    '~/assets/sass/libs/element-ui.scss',
    '~/assets/sass/app.scss',
  ],

  plugins: [
    '~/plugins/element-ui',
    '~/plugins/font-awesome',
  ],

  build: {
    /* Run ESLint on save */
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
  }
}
