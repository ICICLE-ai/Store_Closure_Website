// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
const path = require('path');

module.exports = {
    publicPath: '/static/dist/', // Should be STATIC_URL + path/to/build
    outputDir: path.resolve(__dirname, '../static/dist/'), // Output to a directory in STATICFILES_DIRS
    filenameHashing: false, // Django will hash file names, not webpack
    runtimeCompiler: true, // See: https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    devServer: {
      proxy: 'https://storeclosureapi.pods.icicle.tapis.io/',
      devMiddleware: {
        writeToDisk: true, 
      }
    },
    
};