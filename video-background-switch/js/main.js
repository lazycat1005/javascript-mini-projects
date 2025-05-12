// 從文檔中選擇所有帶有 'slide' 類別的元素，並將它們轉化為一個數組
const slides = [...document.querySelectorAll(".slide")];

// 對於每一個幻燈片元素，添加一個點擊事件的監聽器
slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    // 查找當前激活的幻燈片，即帶有 'active' 類別的幻燈片
    const activeSlide = document.querySelector(".slide.active");

    // 獲取當前激活幻燈片的邊界屬性，包括位置和尺寸
    const activeSlideProps = Object.assign(activeSlide.getBoundingClientRect());

    // 獲取被點擊幻燈片的邊界屬性，包括位置和尺寸
    const slideProps = slide.getBoundingClientRect();

    // 設置當前激活幻燈片的CSS屬性，使其位置和尺寸等於被點擊幻燈片的相應屬性
    activeSlide.style.cssText = `width:${slideProps.width}px; height:${slideProps.height}px; top:${slideProps.top}px; left:${slideProps.left}px;`;

    // 設置被點擊幻燈片的CSS屬性，使其位置和尺寸等於當前激活幻燈片的相應屬性
    slide.style.cssText = `width:${activeSlideProps.width}px; height:${activeSlideProps.height}px; top:${activeSlideProps.top}px; left:${activeSlideProps.left}px;`;

    // 從當前激活的幻燈片中移除 'active' 類別
    activeSlide.classList.remove("active");

    // 給被點擊的幻燈片添加 'active' 類別，使其成為新的激活幻燈片
    slide.classList.add("active");
  });
});
