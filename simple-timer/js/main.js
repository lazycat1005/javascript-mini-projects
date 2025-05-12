const play = document.querySelector(".startBtn");
const stop = document.querySelector(".stopBtn");
const re = document.querySelector(".rebtn");
const time = document.querySelector("#time");
//存放顯示數字
let clock = 0;
//存放時間函式
let timeFn = null;

play.addEventListener("click", playFn);
stop.addEventListener("click", stopFn);
re.addEventListener("click", reFn);

function playFn() {
  cleanBtn();
  play.classList.add("active");
  //移除監聽,避免二次觸發
  play.removeEventListener("click", playFn);

  timeFn = setInterval(() => {
    clock++;
    time.innerText = clock;
  }, 1000);
}
function stopFn() {
  cleanBtn();
  stop.classList.add("active");
  clearInterval(timeFn);
  //開起播放按鈕的監聽事件
  play.addEventListener("click", playFn);
}
function reFn() {
  cleanBtn();
  re.classList.add("active");
  clearInterval(timeFn);
  play.addEventListener("click", playFn);
  //數字歸零
  clock = 0;
  time.innerText = clock;
  setTimeout(() => {
    cleanBtn();
  }, 100);
}
//清除按鈕樣式的函式
function cleanBtn() {
  play.classList.remove("active");
  stop.classList.remove("active");
  re.classList.remove("active");
}
