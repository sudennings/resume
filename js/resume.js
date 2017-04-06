/**
 * Created by Administrator on 2017/3/24.
 */

$(function(){
    /*------------banner---------*/
    //banner切换图
    $('.banner-info').on("mouseover",function(){
            $(this).find("img").attr({src:"images/smile.jpg"});

    }).on("mouseout",function(){
        $(this).find("img").attr({src:"images/sad.jpg"});
    });
    //点击出现微信二维码
    $(".wechat").click(function(){
        $("#model").fadeIn(1000);
        $("#weixin").slideDown();
    });
    $("#model").click(function(){
        $("#model").fadeOut(1000);
        $("#weixin").slideUp();
    });
});