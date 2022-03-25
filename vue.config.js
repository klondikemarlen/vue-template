const { defineConfig } = require("@vue/cli-service")

const webpackConfig = require("./config/webpack")

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: webpackConfig,
})
