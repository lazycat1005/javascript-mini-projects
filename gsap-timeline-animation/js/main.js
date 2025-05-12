const navLinks = document.querySelectorAll("#navbar a");
const title = document.querySelector("h1");
const middleLine = document.querySelector(".middle-line");
const homeBtn = document.querySelector(".home-content button");

function homeAnimation() {
  const TL = gsap.timeline();
  TL.from(title, { autoAlpha: 0, y: -50, delay: 0.2 })
    .to(middleLine, { height: 200 }, "+=0.2")
    .from(homeBtn, { autoAlpha: 0, y: -50 }, "-+0.3")
    .from(
      navLinks,
      { autoAlpha: 0, y: -50, duration: 0.4, stagger: 0.1 },
      "-=0.2"
    );
}

window.addEventListener("load", homeAnimation);
