const merge = require('webpack-merge')
const common = require('./config.common.js')

module.exports = merge(common, {
  entry: {
    index: ['./src/index.js'],
  },
  mode: 'production'
})