var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    index: ['webpack-hot-middleware/client', './src/index.js'],
  },
  output: {
    filename: '[name][hash].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        'less-loader'
      ]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use:['file-loader']
    }] 
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new CleanWebpackPlugin(['dist']),
  ],
  devServer: {
    contentBase: 'dist',
    hot: true
  },
  mode: 'development'
}