/**
 * Created by Administrator on 2017/3/24.
 */
$(function(){
    /*------------banner---------*/
    $('.banner-info').on("mouseover",function(){
            $(this).find("img").attr({src:"images/smile.jpg"});

    }).on("mouseout",function(){
        $(this).find("img").attr({src:"images/sad.jpg"});
    });
//
$(".wechat").click(function(){
    $("#model").fadeIn(1000);
    $("#weixin").slideDown();
});
    $("#model").click(function(){
        $("#model").fadeOut(1000);
        $("#weixin").slideUp();
    })
});