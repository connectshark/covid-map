const webpack = require('webpack')

module.exports = {
  css: {
    sourceMap: false
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/covid-map/'
    : '/',
  
  chainWebpack: config => {
    config.plugin('ignore').use(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))
  },
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