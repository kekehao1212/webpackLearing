const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./config.common.js')

module.exports = merge(common, {
  mode: 'development',
  entry: {
    index: ['webpack-hot-middleware/client?reload=true', './src/index.js'],
  },
  devServer: {
    contentBase: 'dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})