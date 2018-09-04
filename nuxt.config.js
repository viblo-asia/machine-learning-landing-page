module.exports = {
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

  loading: { color: '#3B8070' },

  css: [
    'element-ui/lib/theme-chalk/index.css',
    'assets/sass/app.scss',
  ],

  plugins: [
    '@/plugins/element-ui',
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
