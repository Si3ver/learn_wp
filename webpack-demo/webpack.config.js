const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js"
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
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
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 2 } },
          "sass-loader",
          "postcss-loader"
        ]
      }
    ]
  }
};
