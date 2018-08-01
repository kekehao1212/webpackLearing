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
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new CleanWebpackPlugin(['dist'])
  ]
}