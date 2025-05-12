$(document).ready(function () {
    //將索引值0排除不做隱藏,其他全隱藏
    $('.content li:gt(0)').hide();

    $('.tabs li').click(function () {
        //點選到該物件時,其他內容隱藏
        $('.content li').hide();
        //頁簽選項動畫特效
        $('.tabs li .bg').animate({
            top: "64px"
        }, 100);
        $(this).find('.bg').animate({
            top: "0px"
        }, 100);
        $('.tabs li').removeClass('active');
        //點選到該物件時,才顯示對應索引值的內容
        $('.content li').eq($(this).index()).fadeIn();
    })
})