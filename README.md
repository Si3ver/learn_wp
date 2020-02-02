# 学习 Webpack

## QA

Q: 什么是 webpack-cli，与 webpack 什么关系？

> A: 使我们能在命令行中运行`webpack`命令

**两种方式运行 webpack**

1. [cli](https://webpack.js.org/api/cli/)
2. [编程调用 API](https://webpack.js.org/api/node/)👉[先阅读指引](https://webpack.js.org/guides/development/)

## 0.文档阅读路径整理

**模块**

- [概念-模块](https://webpack.js.org/concepts/modules/)
- API-模块
  - [方法](https://webpack.js.org/api/module-methods/)
  - [变量](https://webpack.js.org/api/module-variables/)

**起步**

- [起步](https://webpack.js.org/guides/getting-started/)

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

  - template 属性，接收 html 模板的路径

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
