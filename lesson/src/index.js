// 1. 面向过程开发
/*
var dom = document.getElementById('root');

var header = document.createElement('div');
header.innerText = 'Header';
dom.append(header);

var sidebar = document.createElement('div');
sidebar.innerText = 'Sidebar';
dom.append(sidebar);

var content = document.createElement('div');
content.innerText = 'Content';
dom.append(content);
*/


// 2.面向对象开发
/*
new Header();
new Sidebar();
new Content();
*/

// 3. 模块化
// ES Module 模块引入方式
/*
import Header from './header.js';
import Sidebar from './sidebar.js';
import Content from './content.js';
*/

// CommonJS 模块引入方式
/*
var Header = require('./header.js');
var Sidebar = require('./sidebar.js');
var Content = require('./content.js');

new Header();
new Sidebar();
new Content();
*/

// 5. Loader
// 使用 CommonJS 模块方式引入
/*
var avatar = require('./avatar.jpg');
console.log(avatar);
*/

// 使用 ES module 方式引入模块
/*
import avatar from './avatar.jpg';
// import './index.css';
// import './index.scss'; // 全局引入
import style from './index.scss'; // CSS Modules-- CSS 模块化引入
import createAvatar from './createAvatar.js';

createAvatar();

var img = new Image(); // 创建 <img>元素
img.src = avatar; // 指定<img> 元素的src
// img.classList.add('avatar');
img.classList.add(style.avatar);


var root = document.getElementById('root');
root.append(img);
*/

// 7. 打包字体文件
/*
import './font.scss';
var root = document.getElementById('root');
root.innerHTML = '<div class="iconfont icon-bussiness-man"></div>';
*/

// 8. sourceMap、webpack --watch、webpack-dev-Server、webpack-dev-middleware
// console.log('hello world! lijingke!!!!');

// 9. HMR - css
// import './style.css';
// var btn = document.createElement('button');
// btn.innerHTML='新增';
// document.body.appendChild(btn);

// btn.onclick = function() {
//     var div = document.createElement('div');
//     div.innerHTML = 'item';
//     document.body.appendChild(div);
// }

// 10. HMR - js
// import counter from './counter';
// import number from './number';
// counter();
// number();
// // 如果开启了 HMR
// if(module.hot){
//     // 只要 number.js文件发生了改变， number 函数就会重新执行
//     module.hot.accept('./number',()=>{
//         document.body.removeChild(document.getElementById('number')); // 清除掉原来的 id 为 number 的节点
//         number();
//     })
// }

// 11. Babel - ES6 语法 
// import "@babel/polyfill";
// const arr = [
//     new Promise(()=>{}),
//     new Promise(()=>{})
// ];
// arr.map(item => {
//     console.log(item);
// })

// 12. Babel - react 语法
// import "@babel/polyfill";

// import React, {Component} from 'react';
// import ReactDom from 'react-dom';

// class App extends Component {
//     render() {
//         return <div>Hello World</div>
//     }
// }

// ReactDom.render(<App/>, document.getElementById('root'));

// 13. tree shaking
import {add} from './math.js';
add(1, 6);