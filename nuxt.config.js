const { defaultSEOData, pageSEO, metaTag } = require('./utils/seo')

module.exports = {
  dev: process.env.NODE_ENV !== 'production',

  // Base head tag for SEO on page
  head: {
    title: defaultSEOData.title,
    meta: [
      { charset: 'utf-8' },
      metaTag('viewport', 'width=device-width, initial-scale=1'),
      ...pageSEO(defaultSEOData)
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://viblo.asia/favicon.ico' },
    ],
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
