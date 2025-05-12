// 獲取HTML元素
const content = document.getElementById("content");
const date = document.getElementById("date");
const time = document.getElementById("time");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("deleteBtn");
const list = document.getElementById("list");

// 初始化一個空陣列來儲存待辦事項
const listArr = [];

// 負責渲染待辦事項列表
function render() {
  let htmlTemplate = ""; // 初始化空字串來儲存HTML模板

  // 遍歷每個待辦事項，並生成對應的HTML模板
  listArr.forEach((item) => {
    htmlTemplate =
      htmlTemplate +
      `
      <div class="border-b pb-3">
        <div>
          <p class='mb-2'>內容:${item.content}</p>
          <p class='mb-2'>時間:${item.date} ${item.time}</p>
        </div>
      </div>
    `;
  });

  // 更新列表的HTML內容
  list.innerHTML = htmlTemplate;
}

// 當按下"新增"按鈕時，將新的待辦事項添加到陣列的開頭，然後重新渲染列表
addBtn.addEventListener("click", () => {
  listArr.unshift({
    content: content.value,
    date: date.value,
    time: time.value,
  });
  render();
});

// 當按下"刪除"按鈕時，將陣列的第一個元素移除，然後重新渲染列表
removeBtn.addEventListener("click", () => {
  listArr.shift();
  render();
});
