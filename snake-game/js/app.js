const canvas = document.getElementById("myCanvas");

const ctx = canvas.getContext("2d");
//getContext() 會回傳一個canvas的drawing context, drawing context可以用來在canvas中畫圖

const unit = 20;
const row = canvas.height / unit;
const column = canvas.width / unit;

let snake = []; //陣列中的每個元素，都是一個物件用於儲存蛇身體的座標(x,y)

function createSnake() {
  snake[0] = {
    x: 80,
    y: 0,
  };

  snake[1] = {
    x: 60,
    y: 0,
  };

  snake[2] = {
    x: 40,
    y: 0,
  };

  snake[3] = {
    x: 20,
    y: 0,
  };
}

//果實
class Fruit {
  constructor() {
    this.x = Math.floor(Math.random() * column) * unit;
    this.y = Math.floor(Math.random() * row) * unit;
  }
  drawFruit() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, unit, unit);
  }

  pickALocation() {
    let overlapping = false;
    let new_x;
    let new_y;

    function checkOverlap(new_x, new_y) {
      for (let i = 0; i < snake.length; i++) {
        if (new_x === snake[i].x && new_y === snake[i].y) {
          overlapping = true;
          return;
        } else {
          overlapping = false;
        }
      }
    }

    do {
      new_x = Math.floor(Math.random() * column) * unit;
      new_y = Math.floor(Math.random() * row) * unit;
      checkOverlap(new_x, new_y);
    } while (overlapping);

    this.x = new_x;
    this.y = new_y;
  }
}
//初始設定
createSnake();
let myFruit = new Fruit();

window.addEventListener("keydown", changeDirection);

let d = "Right";

function changeDirection(e) {
  if (e.key === "ArrowLeft" && d !== "Right") {
    d = "Left";
  } else if (e.key === "ArrowDown" && d !== "Up") {
    d = "Down";
  } else if (e.key === "ArrowUp" && d !== "Down") {
    d = "Up";
  } else if (e.key === "ArrowRight" && d !== "Left") {
    d = "Right";
  }
  //防止在連續案件下的自殺問題
  window.removeEventListener("keydown", changeDirection);
}

function draw() {
  //每次重繪前，先檢查蛇有沒有咬到自己
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      clearInterval(myGame);
      alert("you dead");
      return;
    }
  }

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //先畫果實
  myFruit.drawFruit();

  for (let i = 0; i < snake.length; i++) {
    if (i === 0) {
      ctx.fillStyle = "lightgreen";
    } else {
      ctx.fillStyle = "lightblue";
    }
    ctx.strokeStyle = "white";

    //穿牆
    if (snake[i].x >= canvas.width) {
      snake[i].x = 0;
    }
    if (snake[i].x < 0) {
      snake[i].x = canvas.width - unit;
    }
    if (snake[i].y >= canvas.height) {
      snake[i].y = 0;
    }
    if (snake[i].y < 0) {
      snake[i].y = canvas.height - unit;
    }

    //x,y,width,height
    ctx.fillRect(snake[i].x, snake[i].y, unit, unit);
    ctx.strokeRect(snake[i].x, snake[i].y, unit, unit);
  }
  //以目前d的變數方向來決定下一楨要放在哪個座標
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (d === "Left") {
    snakeX -= unit;
  } else if (d === "Up") {
    snakeY -= unit;
  } else if (d === "Right") {
    snakeX += unit;
  } else if (d === "Down") {
    snakeY += unit;
  }

  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  if (snake[0].x === myFruit.x && snake[0].y === myFruit.y) {
    myFruit.pickALocation();
  } else {
    snake.pop();
  }

  //吃到果實判斷
  snake.unshift(newHead);
  window.addEventListener("keydown", changeDirection);
}

let myGame = setInterval(draw, 100);
