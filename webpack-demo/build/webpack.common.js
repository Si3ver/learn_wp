const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const merge = require('webpack-merge');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

const commonConfig = {
  entry: {
    main: "./src/index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  chrome: "57"
                },
                useBuiltIns: "usage",
                corejs: 2
              }
            ]
          ],
          plugins: ["@babel/plugin-syntax-dynamic-import"]
          // plugins: [
          //   [
          //     "@babel/plugin-transform-runtime",
          //     {
          //       corejs: 2,
          //       helpers: true,
          //       regenerator: true,
          //       useESModules: false
          //     }
          //   ]
          // ]
        }
      },
      {
        test: /\.(jpg|png|gif)$/i,
        use: {
          loader: "url-loader",
          options: {
            name: "[name]_[hash:6].[ext]",
            outputPath: "images/",
            limit: 10240
          }
        }
      },
      {
        test: /\.(eot|ttf|svg|woff)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name]_[hash:6].[ext]",
            outputPath: "assets/fonts/"
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    runtimeChunk: {
      name: "runtime"
    },
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: false,
        default: false,
      }
    }
  }
};

module.exports = (env) => {
  if (env && env.production) {
    return merge(commonConfig, prodConfig);
  } else {
    return merge(commonConfig, devConfig);
  }
}