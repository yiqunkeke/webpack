import _ from 'lodash';
// css
import './style.css';
// 当你 import MyImage from './my-image.png'，该图像将被处理并添加到 output 目录，
// 并且 MyImage 变量将包含该图像在处理后的最终 url。
// html-loader 以相同的方式处理 <img src="./my-image.png" />。
// 图片
import Icon from './icon.jpg';
// 数据
import Data from './data.xml';
// 输出
import printMe from './print.js';
// tree shaking
import { cube } from './math.js';

// 指定环境（生产环境构建）
if(process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode！');
}

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    var pre = document.createElement('pre');
    // var span = document.createElement('span');
    // var br = document.createElement('br');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // 图片
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    // 数据
    console.log(Data);

    // 输出
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    // tree shaking
    pre.innerHTML = [
      'Hello webpack!',
      '5 cube is equal to ' + cube(5)
    ].join('\n\n');
    element.appendChild(pre);

    // lazy loading --todo
    // span.innerHTML = 'lazy loading';
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.appendChild(br);
    // element.appendChild(span);
    // span.click = function(){
    //   import(/*webpackChunkName:"lazyload" */ './lazyload').then(function({ default: lazy }){
    //     // var lazy = module.default;
    //     lazy();
    //   })
    // }
    
    return element;
  }
  
document.body.appendChild(component());

// HMR
if(module.hot) {
  module.hot.accept('./print.js', function() {
    console.log(1, 'Accepting the updated printMe module!')
    printMe();
  })
}

// code splitting （- 3 种分离方法）
// 1. 入口起点：使用 entry 配置手动地分离代码
// 2. 防止重复：使用 CommonsChunkPlugin 去重和分离 chunk
// 3. 动态导入：通过模块的内联函数调用来分离代码
// 
// 1.入口分割缺点：
// 如果入口 chunks 之间包含重复的模块，那些重复模块都会被引入到各个 bundle 中。
// 这种方法不够灵活，并且不能将核心应用程序逻辑进行动态拆分代码。
// 以上两点中，第一点对我们的示例来说无疑是个问题，因为之前我们在 ./src/index.js 中也引入过 lodash，这样就在两个 bundle 中造成重复引用。

// 2.接着，我们通过使用 CommonsChunkPlugin 来移除重复的模块。
// Error: webpack.optimize.CommonsChunkPlugin has been removed, please use config.optimization.splitChunks instead.
// 所以方法2改为选用 splitChunksPlugin 

// 3.动态导入
// 动态导入 lodash 来分离一个 chunk :
// function getComponentDynamic() {
//   return import(/*webpackChunkName:"lodash" */ 'lodash').then (_ => {
//     var element = document.createElement('div');
//     element.innerHTML = _.join(['Hello', 'webpack', ' ']);
//     return element;
//   }).catch(err => 'An error occured while loading the component');
// }

// getComponentDynamic().then(component => {
//   document.body.appendChild(component);
// })

