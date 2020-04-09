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

// 4. CommonJS 模块引入方式
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
import avatar from './avatar.jpg';
// import './index.css';
import './index.scss';

var img = new Image(); // 创建 <img>元素
img.src = avatar; // 指定<img> 元素的src
img.classList.add('avatar');

var root = document.getElementById('root');
root.append(img);

