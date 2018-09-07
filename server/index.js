const { Nuxt, Builder } = require('nuxt')
const proxy = require('./proxy')()
const app = require('express')()
const nuxtConfig = require('../nuxt.config.js')

const isProd = process.env.NODE_ENV === 'production'
const nuxt = new Nuxt(nuxtConfig)

app.use(proxy)

// No build in production
if (!isProd) {
  const builder = new Builder(nuxt)
  builder.build()
}

app.use(nuxt.render)
app.listen(3000)

console.log('Server is listening on http://localhost:3000')
