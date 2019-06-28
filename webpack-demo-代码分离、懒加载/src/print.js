console.log("动态导入成一个单独的chunk（print.bundle.js)。懒加载执行，点击按钮是才加载执行本文件");

export default () => {
  console.log('Button Clicked: Here\'s "some text"!');
};
