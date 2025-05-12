const loadText = document.querySelector(".loading-text");
let load = 0;
let int = setInterval(loading, 30);

//從0到100後進行時間軸動畫
function loading() {
  load++;
  if (load > 99) {
    clearInterval(int);
    showVideo();
  }
  loadText.innerText = `${load}%`;
}
//時間軸動畫
function showVideo() {
  const TL = gsap.timeline({
    default: {
      ease: "power2",
    },
  });

  TL.to(".load-container", { autoAlpha: 0, duration: 0.5, delay: 0.5 })
    .add(() => {
      document.querySelector("video").play();
    }, "-=0.8")
    .add(() => {
      document.querySelector(".load-container").style.display = "none";
    })
    .from("h1", { y: -100, autoAlpha: 0 })
    .from(".middle-line", { y: 100, autoAlpha: 0 })
    .from("button", { y: 100, autoAlpha: 0 });
}
//讀取網頁時呼叫loading函式
window.addEventListener("load", loading);
