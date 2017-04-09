/**
 * Created by Administrator on 2017/4/9.
 */
$(function(){
    /*----pro1----*/
    $(".pro1List>div a").hover(
        function(){
            $(this).find(".pro1Model").fadeIn();
        },
        function(){
            $(this).find(".pro1Model").fadeOut();
        }
    );

    $(".homeContent .pro2Per").find("a").hover(
        function(){
            $("<div class='pro2Model'></div>").appendTo($(this));
            $(this).find(".pro2Model").fadeIn();
        },
        function(){
            $(this).find(".pro2Model").fadeOut();
        }
    )
});