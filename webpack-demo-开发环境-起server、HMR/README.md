# 自配webpack架子
#### 1.开发环境
- 使用source map，方便源码调试
- 自动编译代码
  - 使用观察模式。scripts中加入webpack --watch
  - 使用webpack-dev-server。修改文件，保存时自动刷新。scripts中加入webpack-dev-server --open
  - 使用 webpack-dev-middleware。自写server中使用。
- HMR，模块热加载js
  - webpack.NamedModulesPlugin +  webpack.HotModuleReplacementPlugin。
  - devServer下的hot设为true
  - js中代码改变时，module.hot.accept。。。
- HMR 修改样式表
  - 借助于 style-loader 的帮助