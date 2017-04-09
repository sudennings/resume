/**
 * Created by hxsd on 2016/12/17.
 */
window.onload =  function(){
    var search = document.getElementById("search");
    var mask = document.getElementById("mask-bg");
    var ipt = document.getElementById("ipt");
    search.onclick = function(){
        mask.style.display = "block";
        mask.style.opacity = "1";
        mask.style.zIndex = "999";
        ipt.focus();
    }
    var x = document.getElementById("x");
    x.onclick = function (){
        mask.style.display = "none";
        mask.style.opacity = "0";
        mask.style.zIndex = "-999";
    }
    var ajnav = document.getElementById("aj-nav");
    var ajnavlist = document.getElementById("aj-nav-list");
    ajnav.onclick = function(){
        ajnavlist.style.display = "block";
    }
    var listx = document.getElementById("list-x");
    listx.onclick = function(){
        ajnavlist.style.display = "none";
    }
    var asidelist = document.getElementById("aside-list");
    var aside = document.getElementById("aside");
    var xx = document.getElementById("xx");
    var head = document.getElementById("head");
    var pic = document.getElementById("pic");
    var nav = document.getElementById("nav");
    asidelist.onclick = function(){
        head.style.width =  pic.style.width = "80%";
        aside.style.display = "block";
        nav.style.display = "none";
    }
    xx.onclick = function(){
        head.style.width =  pic.style.width = "100%";
        aside.style.display = "none";
        nav.style.display = "block";
    }
}