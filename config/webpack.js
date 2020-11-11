// webpack.js

const vueLoader = require('./loaders/vue')
const pugLoader = require('./loaders/pug')
const scssLoader = require('./loaders/scss')

module.exports = {
  module: {
    rules: [vueLoader, scssLoader, pugLoader],
  },
}
