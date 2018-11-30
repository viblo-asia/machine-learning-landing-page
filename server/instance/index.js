import nuxt from './nuxt'
import express from 'express'
import routes from '../routes'

const app = express()

app.use(routes)
app.use(nuxt.render)

export default app
