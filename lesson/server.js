const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
const compiler = webpack(config);

// 创建服务器实例
const app = express();

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}))

// 监听 3000 端口
app.listen(3000, () => {
    console.log('server is running');
})