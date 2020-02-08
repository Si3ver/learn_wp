const path = require("path");
const webpack = require("webpack");

const devConfig = {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  output: {
    filename: "bundle.js",
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 2 }
          },
          "sass-loader",
          "postcss-loader"
        ]
      }]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: "./dist",
    open: true,
    hot: true
    // hotOnly: true
  },
  optimization: {
    // usedExports: true
  }
};

module.exports = devConfig;
