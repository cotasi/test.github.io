$(document).ready(function () {
    //화면이 준비되면 실행해라.
    let width = $('.swiper-wrapper').width();

    setInterval(function(){
        $('.swiper-wrapper').animate({'marginLeft':-width},500,function(){
            $('.swiper-slide').eq(0).appendTo('.swiper-wrapper');
            $('.swiper-wrapper').css("marginLeft",0);
        })
    },4000);
})