const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        // lodash: './src/lodash.js',
        main: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name]_[hash].[ext]',
                            outputPath: 'images/',
                            limit: 10240
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
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
            },
            {
                test: /\.(eot|ttf|svg|woff)$/,
                use: {
                    loader: 'file-loader'
                }
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader",
            }
        ]
    },
    plugins: [ 
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        // Code Splitting
        // splitChunksPlugin
        splitChunks: {
            chunks: 'all',
            // minSize: 30000, // 只有大于30KB的模块，在打包时才会做代码分割
            minSize: 0, 
            minChunks: 1, // 最少引用次数
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~', // 连接符
            name: true, // 是否使用cacheGroups的组名来命名。默认以数字命名打包生成文件
            cacheGroups: { // 缓存组
                vendors: {
                    test: /[\\/]node_modules[\\/]/, // 模块是否满足在 node_modules 目录中
                    priority: -10, // 组优先级
                    // filename: 'vendors.js' // 分割生成文件名
                },
                default: {
                    // minChunks: 1,
                    priority: -20,
                    reuseExistingChunk: true, // 如果模块已经被打包过，则不会重复打包相同模块
                    // filename:'common.js'
                }
            }
        }
    }
}