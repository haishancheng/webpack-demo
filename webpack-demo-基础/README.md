# 自配webpack架子
目前已有模块
- 打包css。style-loader,url-loader
- 打包图片。url-loader，file-loader，image-webpack-loader(可用于压缩图片)
- 打包字体。url-loader，file-loader
- 将打包的bundle.js（多个也可以）插入到自动生成的html中。html-webpack-plugin
- 清理 /dist 文件夹。clean-webpack-plugin