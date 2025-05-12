let createdTime;
let clickedTime;
let reactionTime;

function getRandeomColor() {
    let max = 250;
    let min = 20;
    let red = Math.floor(Math.random() * (max - min + 1)) + min;
    let green = Math.floor(Math.random() * (max - min + 1)) + min;
    let blue = Math.floor(Math.random() * (max - min + 1)) + min;
    let color = "rgba(" + red + "," + green + "," + blue + ",1.0)";
    return color;
    //隨機顏色
}

function makeBox() {
    let time = Math.random();
    time = time * 1000;

    setTimeout(function () {

        if (Math.random() >= 0.5) {
            document.getElementById('box').style.borderRadius = "50px";
        } else {
            document.getElementById('box').style.borderRadius = "0px";
        }
        // 隨機生成圖形
        let browserMin = 0;
        let browserMax = window.innerHeight - 300;
        let top = Math.floor(Math.random() * (browserMax - browserMin + 1)) + browserMin;
        //console.log(top);
        browserMin = 0;
        browserMax = window.innerWidth - 200;
        let left = Math.floor(Math.random() * (browserMax - browserMin + 1)) + browserMin;
        //console.log(left);
        //定義物件在瀏覽器位置
        let dynamicBound;
        if (window.innerWidth > window.innerHeight) {
            dynamicBound = window.innerWidth / 20;
            //console.log(dynamicBound);
        } else {
            dynamicBound = window.innerHeight / 20;
            //console.log(dynamicBound);
        }
        dynamicBound =dynamicBound + "px";
       
        document.documentElement.style.setProperty("--bound", dynamicBound);
        

        document.getElementById('box').style.top = top + "px";
        document.getElementById('box').style.left = left + "px";
        //隨機位置出現

        document.getElementById('box').style.backgroundColor = getRandeomColor();
        //呼叫隨機顏色函數
        document.getElementById('box').style.display = 'block';
        //初始狀態顯示BOX
    }, time);
    createdTime = Date.now();
}

document.getElementById('box').onclick = function () {
    this.style.display = "none";
    //點擊後BOX消失
    clickedTime = Date.now();
    reactionTime = (clickedTime - createdTime) / 1000;
    //計算兩者時間差並將將結果除以1000毫秒代入reactionTime
    document.getElementById('time').innerHTML = reactionTime;
    makeBox()
}
makeBox();