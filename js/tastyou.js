/**
 * Created by hxsd on 2017/3/23.
 */


(function (){
    function getPlaylist(limit,fn){
        var server="http://musicapi.duapp.com/api.php";
        /*方法一：改成同步，在全局var一个变量，把值赋给变量，再rerurn，但改成同步之后就有问题*/
        /*var result;
         $.ajax({
         type:"get",/!*最好写上请求链接*!/
         url:server+"?type=topPlayList&cat=%E5%85%A8%E9%83%A8&offset=0&limit="+limit,/!*？-------------*!/
         async:"false",/!*同步*!/
         success:function(data){
         /!*如果请求成功就能获取*!/
         if (data.code==200){
         /!* console.log(data.playlists);*!/
         result=data.playlists;/!*回调函数*!/
         }
         }
         });
         return result;*/

        /*方法二：回调函数*/
        limit=limit||6;
        //判断函数返回的true，false
        if(checkCache()){
            //访问缓存
            //函数内传入的是对象，所以得转换回来
            fn(JSON.parse(localStorage.playlist));
            console.log("访问缓存");
        }else {
            //访问网络
            $.ajax({
                type:"get",/*最好写上请求链接*/
                url:server+"?type=topPlayList&cat=%E5%85%A8%E9%83%A8&offset=0&limit="+limit,/*？-------------*/
                async:"true",/*异步*/
                success:function(data){
                    /*如果请求成功就能获取。code来自data*/
                    if (data.code==200){
                        /* console.log(data.playlists);*/

                        //对象不能缓存，得转换成字符串类型
                        localStorage.playlist=JSON.stringify(data.playlists);
                        //缓存时间
                        localStorage.cacheTime=new Date().getTime();
                        fn&&fn(data.playlists);/*回调函数*/
                    }

                }
            });
            console.log("访问网络");
        }

    }
    //本地缓存
    function checkCache(){
        if (!localStorage.playlist){
            return false;
        }
        if(new Date().getTime()- localStorage.cacheTime>=10*60*1000){
            return false;
        }
        return true;
    }

    pic();
    function pic(){
        getPlaylist(21,getData);
        function getData(data){
            /*此时data就为从接口获取的数据*/
            /* console.log(data);*/
            /*把结构放在html里的template标签里*/
            var reContent= $(".re-content");
            var template = $("template").html();

            for (var k=0;k<data.length;k++) {
                var $template=$(template);
                var num=parseInt(data[k].playCount/1000)+"万";
                $template.find("a").attr("href","#/songlist?id="+data[k].id);
                $template.find("p").html(data[k].name);
                $template.find("span").html(num);
                $template .find("img").attr({src:data[k].coverImgUrl});
                $template .appendTo(reContent);
            }
        }
    }
})();
