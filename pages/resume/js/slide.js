/**
 * Created by Administrator on 2017/4/6.
 */
$(function(){
    $(window).on("scroll",function(){
        //左滑
        $("#resMain > div").find(".slideLeft").each(function(){
            $(this).css({
                position:"relative",
                left:"-500px",
                opacity:0
            });
            if($(document).scrollTop()+500>=$(this).offset().top) {
                $(this).animate({
                    opacity: 1,
                    left: 0
                }, "slow");
            }
        });
        //右滑
        $("#resMain > div").find(".slideRight").each(function(){
            $(this).css({
                position:"relative",
                right:"-500px",
                opacity:0
            });
            if($(document).scrollTop()+500>=$(this).offset().top) {
                $(this).animate({
                    opacity: 1,
                    right: 0
                }, "slow");
            }
        })
    })
});