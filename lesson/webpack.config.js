/** 这些配置都是 webpack 提供给我们的配置接口
 */
const path = require('path');

module.exports = {
    // 项目要从哪个文件开始打包
    entry: './src/index.js',
    output: {
        filename: 'bundle.js', // 打包后生成的文件名
        // path: 打包出的文件要放置到哪个文件夹下，path 必须是一个绝对路径
        // 所以需要引入 node.js 中 path 模块并调用模块的 resolve()方法来得到一个绝对路径
        path: path.resolve(__dirname, 'dist')
    }
}