const path = require("path");
// 将打包的bundle.js（多个也可以）插入到自生成的html中
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 清理 /dist 文件夹
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
    print: "./src/print.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            // url-loader包括了file-loader。
            // 设定的limit以内的图片会以url-loader打包成base64。超过limit大小的图片默认会被file-loader正常打包
            loader: "url-loader",
            options: {
              limit: 8192 // 单位byte，1kb = 1024byte
            }
          },
          {
            // 压缩图片，压缩后的体积和上面的limit比较来判断是不是要使用url-loader转化成base64
            loader: "image-webpack-loader"
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"] //url-loader也可以
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Output Management" // 打包到html的title
    })
  ]
};
