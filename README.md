# 学习 Webpack

## QA

Q: 什么是 webpack-cli，与 webpack 什么关系？

> A: 使我们能在命令行中运行`webpack`命令

## 1. 基础

- mode 控制打包后的代码是否压缩。
- entry 入口
- output 出口

### 文档阅读路径整理

**模块**

- [概念-模块](https://webpack.js.org/concepts/modules/)
- API-模块
  - [方法](https://webpack.js.org/api/module-methods/)
  - [变量](https://webpack.js.org/api/module-variables/)

**起步**

- [起步](https://webpack.js.org/guides/getting-started/)

**Loaders**

- [file-loader](https://webpack.js.org/loaders/file-loader/)
  - 占位符 Placeholders
- [url-loader](https://webpack.js.org/loaders/url-loader/)
  - limit 小于该尺寸则转换成 base64, 大于该尺寸和 file-loader 效果一样
- [css-loader](https://webpack.js.org/loaders/sass-loader/)
  - CSS Modules(scoped css): 开启配置 options.modules
- [sass-loader](https://webpack.js.org/loaders/sass-loader/)
  - 依赖 node-sass 下载问题参考
- [postcss-loader](https://webpack.js.org/loaders/postcss-loader/)
  - postcss.config.js
  - autoprefixer 插件

## 2.资源文件管理

**字体打包**

- [iconfont](https://www.iconfont.cn/)

**拓展阅读**

- [资源文件管理](https://webpack.js.org/guides/asset-management/)
