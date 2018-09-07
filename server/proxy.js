const { resolve } = require('path')
const proxy = require('http-proxy-middleware')

require('dotenv').config({
  path: resolve(__dirname, '../.env'),
})

const proxyTarget = process.env.MACHINE_LEARNING_PROXY_TARGET + '/api'
const apiKey = process.env.MACHINE_LEARNING_API_KEY

module.exports = function () {
  return proxy('/_/', {
    target: proxyTarget,
    changeOrigin: true,
    xfwd: true,

    pathRewrite: {
      '^/_/' : '/',
    },

    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'api-key': apiKey
    }
  })
}
