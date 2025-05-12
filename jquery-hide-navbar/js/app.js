$(document).ready(function(){
    $('.topMenu').css("margin-top","-110px");
    $('.close').hide();

    $('.open').click(function(){
        $('.open').hide();
        $('.close').show();
        $('.setting').animate({marginTop:"110px"})
    });
    $('.close').click(function(){
        $('.close').hide();
        $('.open').show();
        $('.setting').animate({marginTop:"-110px"})
    });
    $('.setting li').mousemove(function(){
        $('body').css({
           "background-color": $(this).attr("data-color"),
           "transition-duration":"0.8s"
        })
    })
  });