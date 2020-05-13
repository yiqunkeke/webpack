const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'library.js',
        // libraryTarget: 'umd', // 支持CommonJS/ES Module/AMD
        library: 'library', // 把库挂载到 library 全局变量
        libraryTarget: 'this' // 不再支持CommonJS/ES Module/AMD，而是把 library 全局变量挂载到 this 对象上: this.library
    },
    externals: ['lodash']
}

/**
 *  1.使用方法
 *  import library from 'library'   //ES Module
 *  const library  = require('library') // CommonJS
 *  require(['library', function() { // AMD
 *  }])
 * 
 *  <script src="library.js"></script> // script
 *  library.  // 使用 library 全局变量
 * 
 *  2. library 与 libraryTarget 配合使用：
 *      library: 'library', 
 *      libraryTarget: 'this'   把 library 全局变量挂载到 this 对象
 *      libraryTarget: 'window'  挂载到 window ---浏览器环境
 *      libraryTarget: 'global'  挂载到 global --- node 环境
 *  通过 this.library 或者 window.library 或者 global.library 来访问库
 *  
 *  
 *  3. 一般来说， libraryTarget 设置成 umd。
 *      library: 'root',
 *      libraryTarget: 'umd'
 *  这样可以保证使用模块化方式正常引入、
 *  在script标签下也可以正确引入（通过root变量）
 *   
 *  4. externals---
 *  假设在 string.js 中使用 lodash 拼接
 *  则打包生成的 library.js 库文件中就包含了 lodash，
 *  可以看到，打包生成的库文件大小变成了 72.4kiB
 *  
 *  假如用户在使用library.js 时，自己也引入了 lodash:
 *      import _ from 'lodash';
 *      import library from 'library';
 *  就会导致重复引入。
 *  
 *  解决办法：
 *  在 webpack 配置文件中，配置 externals 选项
 *  externals: ['lodash']
 *  
 *  再来打包，代码变成了 1.41 KiB
 *  
 *  externals: ['lodash']---表示打包过程中遇到 lodash 库，则忽略 lodash。
 *                          不要把它打包到代码里面去。
 *  那么如果用户在外面没有引入 lodash，而是直接使用 library.js 库：
 *      import library from 'library';
 *  是不行的。
 *  因为我这个库中要用 lodash，但是这个库里面自己又没有 lodash。
 *  所以在使用库文件时，需要用户自动手动引入 lodash。
 * 
 *  这样的话， 既避免了两次lodash的打包，又可以让代码正确运行。
 *  所以一般来说，在做库打包时，externals也是常见配置项。
 *  
 *  5. externals 对象形式---------------
 *      externals: {
 *          lodash: {
 *              commonjs: 'lodash'
 *          } 
 *      }
 * 
 *  https://www.webpackjs.com/configuration/externals/#externals
 * 
 * 6. 把库 publish 到 npm 的仓库
 *  别人就可以通过 npm install 来安装并使用库
 */