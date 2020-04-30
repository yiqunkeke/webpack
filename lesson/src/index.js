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

// 13. tree shaking 只支持ES Module
// import {add} from './math.js';
// add(1, 6);

// 14. Code Splitting 
// 14.1 不做代码分割
// main.js 2MB
// 问题1：打包文件会很大，加载时间会长
// 问题2： 重新访问页面，又要加载2MB的内容
// import _ from 'lodash';
// 业务逻辑 1MB
// console.log(_.join(['a', 'b', 'c'], '***'));
// 此处省略10万行业务逻辑
// console.log(_.join(['a', 'b', 'c'], '***'));

// 14.2 手动代码分割 vs webpack中配置代码分割
// 把 main.js 拆成了两个 js 文件，分别是 lodash.js（1MB） 和 main.js(1MB) 

// 14.3 在 webpack 中另一种方式进行代码分割
// function getComponent() {
//     // 异步加载 lodash 模块
//     // 引入的 lodash 库会被放到 _ 这个变量中
//     return import('lodash').then(({ default: _ }) => {
//         var element = document.createElement('div');
//         element.innerHTML = _.join(['Dell', 'Lee'], '-');
//         return element;
//     })
// }
// 我们定义了一个函数，这个函数会异步加载 lodash 组件，当加载成功之后
// 它会创建一个div 标签，内容是 Dell-Lee，然后把 div 标签返回回来
// getComponent().then(element => {
//     document.body.appendChild(element);
// })
// 调用 getComponent() 异步获取 lodash 库，
// 获取到之后创建一个 element 返回回来
// 返回回来 then() 方法就能接收到这个 element
// 然后把这个 element 挂载到页面上

// 15. splitChunksPlugin 
// [minSize]
// 这个test模块非常小，连1KB都不到
// import test from './test';
// console.log(test.name);

// [cacheGroups]
// import jquery from 'jquery';
// import _ from 'lodash';
// console.log(_.join(['a', 'b', 'c'], '***'));

// 16. Lazy Loading 
//  同步加载  ---简洁
// import _ from 'lodash';
// var element = document.createElement('div');
// element.innerHTML = _.join(['Dell', 'Lee'], '-');
// document.body.appendChild(element);

// 异步加载  --- 实现懒加载行为
// function getComponent() {
//     return import(/*webpackChunkName:"lodash"*/'lodash').then(({ default: _ }) => {
//         var element = document.createElement('div');
//         element.innerHTML = _.join(['Dell', 'Lee'], '-');
//         return element;
//     })
// }

// document.addEventListener('click',() => {
//     getComponent().then(element => {
//         document.body.appendChild(element);
//     })
// })

// 17. css分割（提取）----MiniCssExtractPlugin
import './style1.css'
console.log('Dell Lee');