// 初始化 Fullpage.js
new fullpage("#fullpage", {
  autoScrolling: true, // 自動滾動
  scrollHorizontally: true, // 允許水平滾動
  // 當用戶離開一個區段時觸發的函數
  onLeave: function (origin, destination, direction) {
    // 使用 GSAP 的 TimelineMax 建立一個新的動畫時間軸
    let loading2 = new TimelineMax();
    // 動畫效果設定
    loading2
      .fromTo(
        ".car-title",
        0.6,
        { autoAlpha: 0, y: 0 }, // 起始狀態
        { autoAlpha: 1, y: 0 }, // 結束狀態
        "+=0.5" // 延遲 0.5 秒開始
      )
      .fromTo(
        ".car-button",
        0.6,
        { autoAlpha: 0, y: 0 }, // 起始狀態
        { autoAlpha: 1, y: 0 } // 結束狀態
      );
  },
});

// 當文檔完全載入後執行
document.addEventListener("DOMContentLoaded", function () {
  // 獲取所有類名為 "arrow" 的元素
  let arrows = document.getElementsByClassName("arrow");
  // 為每個箭頭元素添加點擊事件
  for (i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", function (e) {
      e.preventDefault(); // 防止預設行為
      fullpage_api.moveSectionDown(); // 使用 Fullpage.js API 來向下滾動一個區段
    });
  }

  // 使用 GSAP 的 TimelineMax 建立一個新的動畫時間軸
  let loading = new TimelineMax();
  // 動畫效果設定
  loading
    .fromTo(
      ".car-title h2",
      0.6,
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0 }
    )
    .fromTo(".car-title p", 0.6, { autoAlpha: 0, y: 0 }, { autoAlpha: 1, y: 0 })
    .fromTo(
      ".car-button .btn1",
      0.6,
      { autoAlpha: 0, x: -20 },
      { autoAlpha: 1, x: 0 },
      "-=0.6"
    )
    .fromTo(
      ".car-button .btn2",
      0.6,
      { autoAlpha: 0, x: 20 },
      { autoAlpha: 1, x: 0 },
      "-=0.6"
    )
    .fromTo(
      ".car-button .arrow",
      0.6,
      { autoAlpha: 0, y: 0 },
      { autoAlpha: 1, y: 0 }
    );
});
