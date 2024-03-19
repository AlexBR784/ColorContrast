import { getContrastRatio, hex2rgb } from "./contrastCalculator.js";

const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const example1 = document.getElementById("example1");
const editor = document.getElementById("editor");
const points = document.getElementById("indexC");

let color1RGB = [0, 0, 0];
let color2RGB = [0, 0, 0];

color1.onchange = (ev) => {
  let color = ev.target.value;
  color1RGB = hex2rgb(color);
  points.innerText = Math.round(getContrastRatio(color1RGB, color2RGB));
  example1.style.backgroundColor = color;
};

color2.onchange = (ev) => {
  let color = ev.target.value;
  color2RGB = hex2rgb(color);
  points.innerText = Math.round(getContrastRatio(color1RGB, color2RGB));
  example1.style.color = color;
};

editor.oninput = (ev) => {
  example1.innerText = ev.target.value;
};
