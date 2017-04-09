/**
 * Created by Administrator on 2017/4/9.
 */
$(function(){
    /*----pro1----*/
    $(".pro1List>div a").hover(
        function(){
            $(this).find(".pro1Model").fadeIn(1000);
        },
        function(){
            $(this).find(".pro1Model").fadeOut(1000);
        }
    )
});