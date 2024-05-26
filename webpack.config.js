const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/main.js",
  },
  // 在控制台查看目标代码
  devtool: "inline-source-map",
  // 自动编译
  devServer: {
    static: "./dist",
  },
  // 自动生成html文件
  plugins: [
    new HtmlWebpackPlugin({
      title: "index",
      template: "./src/pages/index/index.html",
      filename: "index.html",
    }),
  ],
  // 代码分离
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
