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
        $('<div id="weixin"></div>').appendTo("body");
        $('<div id="model"></div>').appendTo("body");
        $("#model").fadeIn(1000);
        $("#weixin").slideDown();
        $("#model").click(function(){
           /* $("#model").remove();
            $("#weixin").remove();*/
             $("#model").fadeOut(1000);
             $("#weixin").slideUp();
        });
    });
    //菜单页面滚动
    $("#menu").on("click",function(e){
        e.stopPropagation();
        $(".menu-list").slideDown();
        $(".menu-list a").on("click",function(){
            // 获得hash值。href='#'里的
            var id = this.hash;
            $(".menu-list").hide();
            $(this).parent().addClass("active").siblings().removeClass("active");
//                    console.log("id:" + id);
            // 距离浏览器顶部的距离
//                    console.log($(id).offset().top);
            $("html,body").animate({
                // 以hash值为id选择器
                scrollTop:$(id).offset().top
            },600);
        });
    });
    $(document).on("click",function(){
        $(".menu-list").slideUp();
    })


});