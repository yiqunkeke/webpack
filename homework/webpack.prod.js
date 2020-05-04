const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'production',
    // 避免在生产中使用 inline-*** 和 eval-***，因为它们可以增加 bundle 大小，并降低整体性能。
    devtool: 'source-map', 
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        // 使用 webpack 内置的 DefinePlugin 为所有的依赖定义'process.env.NODE_ENV'变量
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});
