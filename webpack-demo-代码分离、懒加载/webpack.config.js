const path = require("path");
// 将打包的bundle.js（多个也可以）插入到自生成的html中
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 清理 /dist 文件夹
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
    another: "./src/another-module.js"
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js", //chunkFilename决定非入口 chunk 的名称
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Code Splitting" // 打包到html的title
    })
  ],
  optimization: {
    // 代码分离，相同的引用的代码会打成一个单独包(可用作优化)
    splitChunks: {
      name: "common",
      chunks: "all"
    }
  }
};
