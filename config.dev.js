const merge = require('webpack-merge')
const common = require('./config.common.js')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: 'dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})