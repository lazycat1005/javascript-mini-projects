let player = 1;
let plater1TotalScore = 0;
let plater2TotalScore = 0;
let time = 1;
let gameStart = true;

//將骰子初始化
document.querySelector(".dice").style = "display:none";
//將獎盃初始化
document.querySelector(".winner1").style = "display:none";
document.querySelector(".winner2").style = "display:none";
document.querySelector(".win1").style = "display:none";
document.querySelector(".win2").style = "display:none";
//監聽擲骰子按鈕,當按下時出現1~6亂數,並顯示出相對應骰子圖片
document.querySelector(".roll").addEventListener("click", function () {
  if (gameStart) {
    let roll = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".dice").style = "display:block";
    document.querySelector(".dice").src = "./img/dice" + roll + ".png";

    if (player === 1) {
      document.querySelector("#player" + player + "-score").textContent = roll;
      plater1TotalScore += roll;
      document.querySelector("#player" + player + "-total-score").textContent =
        plater1TotalScore;
      document.querySelector(".panel-" + player).classList.remove("active");
      player = 2;
      document.querySelector(".panel-" + player).classList.add("active");
    } else {
      document.querySelector("#player" + player + "-score").textContent = roll;
      plater2TotalScore += roll;
      document.querySelector("#player" + player + "-total-score").textContent =
        plater2TotalScore;
      document.querySelector(".panel-" + player).classList.remove("active");
      player = 1;
      document.querySelector(".panel-" + player).classList.add("active");
    }
    time++;
    if (time === 7) {
      if (plater1TotalScore > plater2TotalScore) {
        document.querySelector(".winner1").style = "display:block";
        document.querySelector(".win1").style = "display:block";
        gameStart = false;
      } else if (plater1TotalScore < plater2TotalScore) {
        document.querySelector(".winner2").style = "display:block";
        document.querySelector(".win2").style = "display:block";
        gameStart = false;
      } else {
        document.querySelector(".roll").textContent = "Draw";
        gameStart = false;
      }
    }
  } else {
    init();
    gameStart = true;
  }
});
document.querySelector(".rest").addEventListener("click", function () {
  init();
  gameStart = true;
});

function init() {
  player = 1;
  plater1TotalScore = 0;
  plater2TotalScore = 0;
  time = 1;
  document.querySelector(".dice").style = "display:none";

  document.querySelector(".winner1").style = "display:none";
  document.querySelector(".winner2").style = "display:none";
  document.querySelector(".win1").style = "display:none";
  document.querySelector(".win2").style = "display:none";
  document.getElementById("player1-score").textContent = 0;
  document.getElementById("player2-score").textContent = 0;
  document.getElementById("player1-total-score").textContent = 0;
  document.getElementById("player2-total-score").textContent = 0;

  document.querySelector(".panel-1").classList.add("active");
  document.querySelector(".panel-2").classList.remove("active");

  document.querySelector(".roll").textContent = "ROLL";
}
