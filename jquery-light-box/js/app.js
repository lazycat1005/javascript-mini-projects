$(document).ready(function () {
  $(".lightBox").hide();
  $(".darkBg").hide();
  $(".piclist img").click(function () {
    $(".darkBg").fadeIn();
    $(".lightBox").fadeIn().find("img").attr("src", $(this).attr("src"));
  });
  $(".close").click(function () {
    $(".lightBox").fadeOut();
    $(".darkBg").fadeOut();
  });
  $(".darkBg").click(function () {
    $(".lightBox").fadeOut();
    $(".darkBg").fadeOut();
  });
});
