import { resolve } from 'path'

require('dotenv').config({
  path: resolve(__dirname, '../.env'),
})

export const PORT = process.env.PORT || 3000
export const isProduction = process.env.NODE_ENV === 'production'

export const API_HOST = process.env.API_HOST
export const API_KEY = process.env.API_KEY

export const VIBLO_API_URL = process.env.VIBLO_API_URL || 'https://api.viblo.asia'
