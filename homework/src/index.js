import _ from 'lodash';
import './style.css';
// 当你 import MyImage from './my-image.png'，该图像将被处理并添加到 output 目录，
// 并且 MyImage 变量将包含该图像在处理后的最终 url。
// html-loader 以相同的方式处理 <img src="./my-image.png" />。
import Icon from './icon.jpg';
// 数据
import Data from './data.xml';
// 输出
import printMe from './print.js';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // 将图片添加到我们现有的 div。
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    // 数据
    console.log(Data);

    // 输出
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
  }
  
document.body.appendChild(component());

if(module.hot) {
  module.hot.accept('./print.js', function() {
    console.log(1, 'Accepting the updated printMe module!')
    printMe();
  })
}