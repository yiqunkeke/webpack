const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var Visualizer = require('webpack-visualizer-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        // another: './src/another-module.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Cashing'
        }),
        new CleanWebpackPlugin(),
        // This will output a file named statistics.html in your output directory.
        new Visualizer({
            filename: './statistics.html'
        })
    ],
    output: {
        filename: '[name].[hash:8].bundle.js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    optimization: {
        usedExports: true, // tree shaking
        splitChunks: { // code splitting
            chunks: 'all'
        }
    },
    module: {
        rules: [
            // webpack 根据正则表达式，来确定应该查找哪些文件，并将其提供给指定的 loader。
            // 在这种情况下，以 .css 结尾的全部文件，都将被提供给 style-loader 和 css-loader。
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            // file-loader 和 url-loader 可以接收并加载任何文件，然后将其输出到构建目录。
            // 这就是说，我们可以将它们用于任何类型的文件，包括字体。
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                   'file-loader'
                ]
            },
            // 数据- 类似于 NodeJS，JSON 支持实际上是内置的，也就是说 import Data from './data.json' 默认将正常运行。
            // 要导入 CSV、TSV 和 XML，你可以使用 csv-loader 和 xml-loader
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            }
        ]
    }
}