// vue.config.js

const webpackConfig = require('./config/webpack')

module.exports = {
  outputDir: 'tmp/dist',
  configureWebpack: webpackConfig,
}
