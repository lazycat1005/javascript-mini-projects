const slides = document.querySelector(".slides");
const controls = document.querySelector(".controls");
const amountOfImages = 10;

for (let i = 0; i < amountOfImages; i++) {
  const img = document.createElement("img");
  img.setAttribute("src", `img/img-${i}.jpg`);
  img.setAttribute("id", `img-${i}`);
  slides.appendChild(img);

  const a = document.createElement("a");
  a.setAttribute("href", `#img-${i}`);
  a.style.backgroundImage = `url(img/icons/icon-${i}.jpg)`;
  controls.appendChild(a);
}

document.addEventListener("scroll", () => {
  controls.style.top = `${window.scrollY}px`;
});
