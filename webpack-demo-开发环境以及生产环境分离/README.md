# 自配webpack架子
#### 生产环境

1. 减轻js代码。(删除未引用多余代码；将函数直接替换成返回的表达式等)
     - webpack4以后，直接mode：production即可
     - 使用UglifyJSPlugin
2. mini-css-extract-plugin
      - 把 js 中 import 导入的样式文件代码，打包成一个实际的 css 文件，结合 html-webpack-plugin，在 dist/index.html 中以 link 插入 css 文件；默认将 js 中 import 的多个 css 文件，打包时合成一个
1. optimize-css-assets-webpack-plugin
      - 压缩优化css（去空格等）