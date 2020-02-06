# 学习 Webpack

## QA

Q: 什么是 webpack-cli，与 webpack 什么关系？

> A: 使我们能在命令行中运行`webpack`命令

**两种方式运行 webpack**

1. [cli](https://webpack.js.org/api/cli/)
2. [编程调用 API](https://webpack.js.org/api/node/)👉[先阅读指引](https://webpack.js.org/guides/development/)

## 0.文档阅读路径整理

**起步**

- [起步](https://webpack.js.org/guides/getting-started/)

**模块**

- [概念-模块](https://webpack.js.org/concepts/modules/)
- API-模块
  - [方法](https://webpack.js.org/api/module-methods/)
  - [变量](https://webpack.js.org/api/module-variables/)
- [HMR 热模块替换](https://webpack.js.org/guides/hot-module-replacement/)

**常用的 Loaders**

- [file-loader](https://webpack.js.org/loaders/file-loader/)
  - 占位符 Placeholders
  - 字体打包 [iconfont](https://www.iconfont.cn/)
  - [资源文件管理](https://webpack.js.org/guides/asset-management/)
- [url-loader](https://webpack.js.org/loaders/url-loader/)
  - limit 小于该尺寸则转换成 base64, 大于该尺寸和 file-loader 效果一样
- [css-loader](https://webpack.js.org/loaders/sass-loader/)
  - CSS Modules(scoped css): 开启配置 options.modules
- [sass-loader](https://webpack.js.org/loaders/sass-loader/)
  - 依赖 node-sass 下载问题参考
- [postcss-loader](https://webpack.js.org/loaders/postcss-loader/)
  - postcss.config.js
  - autoprefixer 插件

**常用 plugins**

- [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/)
  - template 属性，接收 html 模板的路径
  - 插件会帮助引入生成的 js 文件
- [CleanWebpackPlugin](https://github.com/johnagan/clean-webpack-plugin/)
- webpack.HotModuleReplacementPlugin()

## 1. 基础

- mode 控制打包后的代码是否压缩。
- entry 入口
  - [详细配置参数](https://webpack.js.org/configuration/entry-context/)
- output 出口
  - publicPath、filename、path
  - [指引-输出管理](https://webpack.js.org/guides/output-management/)
  - [output 的详细参数](https://webpack.js.org/configuration/output/)
- module
- plugins
- [devtool](https://webpack.js.org/configuration/devtool/), **SourceMap**
  - cheap 不跟踪列
  - module 还跟着非业务代码
  - inline 不单独建立.map 文件
  - eval
  - 最佳实践推荐, 开发环境用`cheap-module-eval-source-map`, 生产环境用`cheap-module-source-map`
- devServer
  - contentBase、open、port、proxy
  - [详细配置](https://webpack.js.org/configuration/dev-server/)
  - hot: true 开启 HMR(热模块更新)
  - hotOnly: true 即便 HMR 未生效也不要刷新浏览器

## 2.babel

- babel-loader
- @babel/core 核心模块
- 会污染全局环境（推荐开发业务代码时用）
  - @babel/preset-env 包含了 ES6 转 ES5 的翻译规则
    - useBuiltIns: 'usage' 只打包用到的 polyfill
  - @babel/polyfill 兼容低版本浏览器（Pormise 等语法）
    - js 中需要引入 `import "@babel/polyfill"`
- 以闭包的形式注入，不污染全局环境（推荐开发类库时用）
  - @babel/plugin-transform-runtime
  - @babel/runtime
  - @babel/runtime-corejs2
- .babelrc
  - 单独写，避免 options 太大

**动态 import 语法支持**

- 安装插件 @babel/plugin-syntax-dynamic-import
- 配置.babelrc 或 babel-loader 增加一项 option ：`plugins: ["@babel/plugin-syntax-dynamic-import"]`

## 3.tree-shaking

- tree-shaking 只支持 ES module

  - package.json sideEffects,排除掉不进行摇树的模块（特别是 js 中 import 的 css、@babel/polyfill 等）
  - 开发模式不会真正进行摇动树，但会标记 `/*! exports used: xxx */`
  - 开发模式下 webpack 需要配如下字段，生产模式不需要配

```js
const wpConfig =
optimization: {
  usedExports: true;
}
```

## 4. Code Spliting 代码分割

1. 简单粗暴(同步加载的代码)

```js
const wpConfig =
optimization: {
  splitChunks: {
    chunks: all
  }
}
```

2. 异步加载的代码

无需做任何配置，会自动代码分割。

3. [webpack.splitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/)

魔法注释 magic comments

```js
import (/* webpackChunkName:"lodash" */ xxx).then()
```

