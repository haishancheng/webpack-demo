import { cube } from "./math.js";
import "./index1.css";
import "./index2.css";

console.log("process.env.NODE_ENV", process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  console.log("Looks like we are in development mode!");
} else if (process.env.NODE_ENV === "production") {
  console.log("Looks like we are in production mode!");
}

function component() {
  var div = document.createElement("div");
  div.classList.add("outer");

  var innerDiv = document.createElement("div");
  innerDiv.classList.add("inner");
  innerDiv.innerHTML = "inner div";
  div.appendChild(innerDiv);

  var element = document.createElement("pre");
  element.innerHTML = ["Hello webpack!", "5 cubed is equal to " + cube(5)].join("\n\n");
  div.appendChild(element);

  return div;
}

document.body.appendChild(component());
