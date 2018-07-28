const express = require('express')
const webpack = require('webpack')
const webPackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./config.js')
const compiler = webpack(config)

app.use(webPackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.listen(3000, function () {
  console.log('example app listening on port 3000')
})