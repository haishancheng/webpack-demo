const path = require("path");
// 将打包的bundle.js（多个也可以）插入到自生成的html中
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 清理 /dist 文件夹
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js", //chunkFilename决定非入口 chunk 的名称
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
    // hot: true // HMR，模块热加载
  },
  devtool: "inline-source-map",
  devServer: {
    //webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件
    contentBase: "./dist",
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development" // 打包到html的title
    }),
    new webpack.NamedModulesPlugin(), //HMR相关，添加了 NamedModulesPlugin，以便更容易查看要修补(patch)的依赖
    new webpack.HotModuleReplacementPlugin() //HMR相关
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"] // style-loader可配合cssHMR
      }
    ]
  }
};
