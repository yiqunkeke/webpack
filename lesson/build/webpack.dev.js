const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map', 
    devServer: {
        contentBase: path.join(__dirname, 'dist'), 
        open: true,
        hot: true, 
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', // 在开发环境中依然使用 style-loader
                    'css-loader', 
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: false
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                    ]
            }
        ]
    },
    plugins: [ 
        new webpack.HotModuleReplacementPlugin() 
    ]
}

module.exports = merge(commonConfig, devConfig);
