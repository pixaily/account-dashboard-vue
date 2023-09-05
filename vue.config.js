const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/account-dashboard-vue/" : '/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/utils.scss";',
        implementation: require('sass')
      },
    },
  },
})
