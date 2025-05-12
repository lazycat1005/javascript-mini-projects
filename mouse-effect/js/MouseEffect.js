let mouse_x = 0;
let mouse_y = 0;
//建立兩個變數用以儲存滑鼠的x,y軸
let ball_x = 0;
let ball_y = 0;
//建立兩個變數儲存球體座標
let vel_x = 0;
let vel_y = 0;
//存放用戶滑鼠的加速度
const docStyle = document.documentElement.style;
//縮寫
const strength = 0.15;
//球的移動速度只有滑鼠的15%,做出延遲的效果
const drag = 0.15;
//用戶拖拉滑鼠的加速度
document.addEventListener("mousemove", (event) => {
  //監聽滑鼠移動的X.Y軸參數
  mouse_x = event.clientX;
  //將獲取的值帶入變數mouse_x
  mouse_y = event.clientY;
  //將獲取的值帶入變數mouse_y
});

function delayMotion() {
  let distance_x = mouse_x - ball_x;
  distance_x *= strength;
  vel_x *= drag;
  vel_x += distance_x;
  ball_x += vel_x;

  let distance_y = mouse_y - ball_y;
  distance_y *= strength;
  vel_y *= drag;
  vel_y += distance_y;
  ball_y += vel_y;

  docStyle.setProperty("--mouse-x", ball_x);
  docStyle.setProperty("--mouse-y", ball_y);
  //將球體座標返回給CSS
  docStyle.setProperty("--scale", (vel_x + vel_y) * strength);

  requestAnimationFrame(delayMotion);
  //將函數更新,以獲取球體每偵的座標
}
delayMotion();
