/** 这些配置都是 webpack 提供给我们的配置接口
 */
const path = require('path');

module.exports = {
    // mode 的默认值就是 production
    // 如果不配置 mode ，在打包时会发生警告。
    // 如果设置mode 为 production,则打包出的文件就会被压缩成一行。
    // 设置mode 为 development，则打包出来的文件就不会被压缩。
    mode: 'development',
    // 项目要从哪个文件开始打包
    // entry: './src/index.js',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'bundle.js', // 打包后生成的文件名
        // path: 打包出的文件要放置到哪个文件夹下，path 必须是一个绝对路径
        // 所以需要引入 node.js 中 path 模块并调用模块的 resolve()方法来得到一个绝对路径
        path: path.resolve(__dirname, 'dist')
    },
    // 非 js 模块打包配置
    module: {
        rules: [
            // 图片文件
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            // placeholders 占位符
                            name: '[name]_[hash].[ext]',
                            // 把打包后的文件放到 dist/images/文件夹中
                            outputPath: 'images/'
                        }
                    }
                ]
            }
        ]
    }
}