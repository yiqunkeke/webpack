/** 这些配置都是 webpack 提供给我们的配置接口
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // mode 的默认值就是 production
    // 如果不配置 mode ，在打包时会发生警告。
    // 如果设置mode 为 production,则打包出的文件就会被压缩成一行。
    // 设置mode 为 development，则打包出来的文件就不会被压缩。
    mode: 'development',
    devtool: 'cheap-module-eval-source-map', // none source-map inline-source-map cheap-source-map cheap-module-source-map...
    // 项目要从哪个文件开始打包
    // entry: './src/index.js',
    entry: {
        main: './src/index.js'
        // sub: './src/index.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // contentBase 表示服务器启在哪个文件夹下
        open: true,
        hot: true, // 开启 HMR
        // hotOnly: true  // 即使 HMR 不生效，也不刷新浏览器
    },
    // 非 js 模块打包配置
    module: {
        rules: [
            // 图片文件
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // placeholders 占位符
                            name: '[name]_[hash].[ext]',
                            // 把打包后的文件放到 dist/images/文件夹中
                            outputPath: 'images/',
                            limit: 10240 // 10kb
                        }
                    }
                ]
            },
            // css文件
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            // scss 文件
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // 0 => 无 loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader
                            importLoaders: 2, // 在 css-loader 前应用的 loader 的数量
                            modules: false // 开启/关闭 css modules
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                    ]
            },
            // 字体文件
            {
                test: /\.(eot|ttf|svg|woff)$/,
                use: {
                    loader: 'file-loader'
                }
            },
            // babel
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader",
                // options: {
                //     "presets": ["@babel/preset-env"]
                // }
                // 下面的配置放到 .babelrc 
                // options: {
                //     // 业务代码打包
                //     // "presets": [["@babel/preset-env", {
                //     //     "targets": {
                //     //         "chrome": "67"
                //     //     },
                //     //     "useBuiltIns": "usage"
                //     //   }]]
                //     // 第三方类库打包
                //     // https://babeljs.io/docs/en/babel-plugin-transform-runtime
                //     "plugins": [["@babel/plugin-transform-runtime", {
                //         "absoluteRuntime": false,
                //         "corejs": 2,
                //         "helpers": true,
                //         "regenerator": true,
                //         "useESModules": false,
                //         "version": "7.0.0-beta.0"
                //       }]]
                // }
            }
        ]
    },
    plugins: [ 
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin() // HMR
    ],
    // tree shaking
    optimization: {
        usedExports: true
    },
    output: {
        // publicPath: 'http://cdn.com.cn/',
        filename: '[name].js',
        // filename: 'js/[name]/[chunkhash:16]_bundle.js', // 打包后生成的文件名
        // path: 打包出的文件要放置到哪个文件夹下，path 必须是一个绝对路径
        // 所以需要引入 node.js 中 path 模块并调用模块的 resolve()方法来得到一个绝对路径
        path: path.resolve(__dirname, 'dist')
        // hashDigestLength: 20
    }
}