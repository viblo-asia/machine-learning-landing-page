import { resolve } from 'path'
import proxy from 'http-proxy-middleware'
import { API_HOST, API_KEY } from '../env'

export default () => proxy('/_/', {
  target: `${API_HOST}/api`,
  changeOrigin: true,
  xfwd: true,

  pathRewrite: {
    '^/_/': '/',
  },

  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'api-key': API_KEY
  }
})
