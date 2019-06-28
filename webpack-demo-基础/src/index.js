import _ from "lodash";
import printMe from "./print.js";
import "./index.css";
import Icon from "./icon.png";
import LargeIcon from "./icon-large.png";

function component() {
  var element = document.createElement("div");

  // 用iconfont生成的字体只有输入的文字才变（海山城三个字），其他所有字都不变
  element.innerHTML = _.join(["海山城", "正常字体"], " <-----> ");
  element.classList.add("hello");

  // 将图像添加到我们现有的 div。
  var myIcon = new Image();
  myIcon.src = Icon;
  myIcon.classList.add("icon");
  element.appendChild(myIcon);

  // 将大图像添加到我们现有的 div。
  var myLargeIcon = new Image();
  myLargeIcon.src = LargeIcon;
  myLargeIcon.classList.add("large-icon");
  element.appendChild(myLargeIcon);

  var btn = document.createElement("button");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
