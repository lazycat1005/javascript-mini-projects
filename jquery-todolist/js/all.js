$(document).ready(function () {
    $('#add').click(function () {
        //設置一個變數存使用者填入的資料
        let inputVal = $('#input').val();
        //將使用者填入的資料用append()函式新增至畫面上
        $('.list').append(`
        <div class="toDOs">
        <input type="checkbox" class="status">
        <p>${inputVal}</p>
        <button class="delete">DELETE</button>
        </div>`);
        //檢查使用者是否有點選checkbox,有點選則新增刪除線,取消點選則將刪除線移除
        $('.status').each(function () {
            $(this).click(function () {
                let status = $(this).prop("checked");
                if (status == true) {
                    $(this).parent().children("p").css({
                        "text-decoration": "line-through",
                        "color": "#A3CEF1"
                    });
                } else if (status == false) {
                    $(this).parent().children("p").css({
                        "text-decoration": "none",
                        "color": "#E7ECEF"
                    });
                };
            });
            //點選刪除按鈕時將該項目移除
            $('.delete').each(function () {
                $(this).click(function () {
                    $(this).closest('div').remove();
                });
            });
        });
    });
});