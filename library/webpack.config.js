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
    }
}

/**
 *  使用方法
 *  import library from 'library'   //ES Module
 *  const library  = require('library') // CommonJS
 *  require(['library', function() { // AMD
 *  }])
 *  
 *  <script src="library.js"></script> // script
 *  library.  // 使用 library 全局变量
 * 
 *  library 与 libraryTarget 配合使用
 * 
 */