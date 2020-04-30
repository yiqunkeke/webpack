const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const prodConfig =  {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // 在线上环境中依然使用MiniCssExtractPlugin插件的loader
                    'css-loader', 
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
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
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].chunk.css'
        })
    ],
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})],
        splitChunks: {
            cacheGroups: {
            // 多入口的 css 都打包到一个文件
            //   styles: {
            //     name: 'styles',
            //     test: /\.css$/,
            //     chunks: 'all', // 无论同步异步
            //     enforce: true, // 不管splitChunks其他配置，都强制提取到一个styles文件
            //   }
            }
        }
    }
}

module.exports = merge(commonConfig, prodConfig);
