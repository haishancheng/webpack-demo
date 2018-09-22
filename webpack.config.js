const path = require('path');
//HtmlWebpackPlugin 创建了一个全新的文件，所有的 bundle 会自动添加到 html 中。
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// webpack 内置有 HMR（模块热替换） 插件
const webpack = require('webpack');

module.exports = {
  entry: {
    // app: './src/index.js',
    // print: './src/print.js',
    app: './src/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    // compress: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  mode: "development"
};