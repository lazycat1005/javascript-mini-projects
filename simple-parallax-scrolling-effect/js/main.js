const bg = document.querySelector("#bg");
const moon = document.querySelector("#moon");
const mountain = document.querySelector("#mountain");
const road = document.querySelector("#road");
const text = document.querySelector("#text");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  // console.log(value);
  //利用滾動的數值對每個元素進行不同的移動設置，使其呈現出視差滾動的效果
  bg.style.top = value * 0.5 + "px";
  moon.style.left = -value * 0.5 + "px";
  mountain.style.top = -value * 0.15 + "px";
  road.style.top = value * 0.15 + "px";
  text.style.top = value * 1 + "px";
});
