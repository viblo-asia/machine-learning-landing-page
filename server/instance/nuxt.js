import nuxtConfig from '../../nuxt.config.js'
import { isProduction } from '../env'
import { Nuxt, Builder } from 'nuxt'

const nuxt = new Nuxt(nuxtConfig)

// No build in production
if (!isProduction) {
  const builder = new Builder(nuxt)
  builder.build()
}

export default nuxt
