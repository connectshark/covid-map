const webpack = require('webpack')

module.exports = {
  css: {
    sourceMap: false
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/covid-map/'
    : '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://covid-19.nchc.org.tw/api',
        //ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}