const express = require('express')
const webpack = require('webpack')
const webPackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const app = express()
const config = require('./config.dev.js')
const compiler = webpack(config)

app.use(webPackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  hot: true
}))

app.use(webpackHotMiddleware(compiler))

app.listen(3000, function () {
  console.log('example app listening on port 3000')
})