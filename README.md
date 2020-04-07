# webpack从基础到实战

手把手带你掌握新版 Webpack 4



## 背景

随着前端工程越来越复杂，单独的建几个文件（HTML、CSS、JS）来写业务代码，这样的方式已经无法保证项目的可维护性。

所以就想把不同的业务逻辑拆成模块，然后去分开引入这些模块，每个模块自己做自己的事情，这样就能实现项目的维护性和可扩展性了。但假如你有几千个模块，你能在页面中引入几千个文件吗？所以当项目大到一定程度的时候，我们就得借助工具来管理我们的模块了。

webpack 4 就是这样一种工具。来帮助我们管理复杂项目。



## 类似工具

- gulp
- grunt
- browserify

而 **Vue、React、Angular 都开始使用 webpack 来做底层代码的构建**。



## webpack优势

- Tree shaking
- 懒加载
- 代码分割
- ...

所以用webpack做代码管理的工具，已经是越来越多前端开发者的共识了。如果你不会webpack你可能会觉得我业务代码也没有任何问题，但是如果你学会了webpack，你会从更深一层去思考前端工程化上的内容，也能发现，在代码背后也别有洞天。学习webpack将极大的扩充你的前端开发视野。



## webpack 4

- 速度更快，大型项目节约90%构建时间
- 内置了更多默认配置，变更了许多API



## 课程安排

- 第一章 课程介绍
- 第二章 初识webpack
  - webpack 是什么？
  - webpack 产生背景
  - webpack 基础使用

- 第三章 webpack 核心概念
  - Loader
  - Plugin
  - SourceMap
  - HMR

- 第四章 webpack 进阶
  - TreeShaking
  - 代码分割 CodeSplitting
  - 懒加载
  - 缓存 Caching
  - Shimming

- 第五章 webpack 实战配置案例
  - 如何打包一个库？
  - 如何打包 PWA 项目？
  - 如何在项目中配置 TypeScript、ESlint?
  - 如何打包多页应用？

- 第六章 webpack 底层原理及脚手架工具分析
  - 如何编写自己的 Loader 和 Plugin?
  - 实现类似 webpack 的打包器
  - Create React App 和 Vue Cli 3.0 中的 webpack 配置

知识点：

`Loader` `HMR`  `Create React App` `Caching` 

`Plugin`  `SourceMap`  `Vue Cli 3.0` `Shimming`

`WebpackDevServer`  `TreeShaking`   `CodeSplitting` 

`Babel`  `React`  `Library`  `Eslint` `PWA`

`Vue`  `Mode` `性能优化` `多页应用`  `原理`

`PreLoading`  `PreFetching` `环境变量` `TypeScript` 



## 学习前提

- html, css, js
- nodejs
- webpack



## 讲授方式

- 通俗易懂的案例讲解基础

- 借助实战案例复习基础

- 带着你编写每一行代码

- 层层深入

  

## 课程收获

- 彻底学会webpack的配置
- 理解 webpack 的作用及原理
- 上手项目的打包过程配置
- 拥有工程化的前端思维
- 步入高级前端工程师行列