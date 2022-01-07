const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/assets/styles/variables.styl')]
    })
}

module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  devServer: {
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    port: 7301,
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      '^/datamap-dataassets-server': {
        target: `http://${ip}`,
        changeOrigin: true
        // pathRewrite: {
        //   '^/data-model': ''
        // }
      }
    }
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type =>
      addStyleResource(config.module.rule('stylus').oneOf(type))
    )
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    }
  },
};
