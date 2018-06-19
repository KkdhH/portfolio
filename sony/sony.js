//메인 플러그인
$('.slider').bxSlider({
    'mode':'fade',
    'controls': false,
    'pager': true,
    'auto': true,
    'autoHover': true,
    'speed': 500,
    'pause': 4500
});

//news플러그인
$('.new_slide').slick({
    centerMode:true,
    dots:true,
    slidesToShow:1,
    arrows:false,
    variableWidth:true,
    touchMove:false,
    swipeToSlide:false,
    draggable:false,
    autoplay:true,
    autoplaySpeed:3000,
    pauseOnHover:true,
    pauseOnDotsHover:true,
    swipe:false,
    focusOnSelect:false,
    infinite:true
});

//best btn
var $Bbtn = $('.best > .best_product > .best_btn > li');
var $best = $('.best > .best_product > article');
var $Bgnb = $('.best > .gnb > li')
var n = 0;

$Bbtn.click(function() {
    n = $(this).index();
    $best.animate({marginLeft:-1240 * n + 'px'});
    $Bgnb.css({'border':'none'});
    $Bgnb.eq(n).css({'border-bottom':'2px solid #8d8d8d'});

    $Bbtn.removeClass('on');
    $(this).addClass('on');
});

var auto = setInterval(slide, 3500);
function slide() {
    n = (n+1)%5;
    $best.animate({marginLeft:-1240 * n + 'px'});
    $Bgnb.css({'border':'none'});
    $Bgnb.eq(n).css({'border-bottom':'2px solid #8d8d8d'});

    $Bbtn.eq(n).addClass('on').siblings().removeClass('on');
 }

//gnb
$Bgnb.click(function() {
    n = $(this).index();
    $Bbtn.eq(n).click();
});

/*
$Bgnb.hover(function() {
    $(this).css({'background':'rgba(122, 184, 226, .2)'});
}, function() {
    $(this).css({'background':'none'});
});
*/

//자동 취소
$Bbtn.mouseenter(function() {
    clearInterval(auto);
});
$Bbtn.mouseleave(function() {
    auto = setInterval(slide, 3500);
});

$Bgnb.mouseenter(function() {
    clearInterval(auto);
});
$Bgnb.mouseleave(function() {
    auto = setInterval(slide, 3500);
});

//news
$('.news .news2').hover(function() {
    $('.news .news2 p').css({
        'font-weight':'700'
    });
}, function() {
    $('.news .news2 p').css({
        'font-weight':'normal'
    });
});
   
$('.news .news3').hover(function() {
    $('.news .news3 p').css({
        'background-color':'rgba(22, 22, 22, .9)',
        'font-weight':'700'
    });
}, function() {
    $('.news .news3 p').css({
        'background-color':'rgba(22, 22, 22, .6)',
        'font-weight':'normal'
    });
});

$('.news .news4').hover(function() {
    $('.news .news4 p').css({
        'background-color':'rgba(22, 22, 22, .9)',
        'font-weight':'700'
    });
}, function() {
    $('.news .news4 p').css({
        'background-color':'rgba(22, 22, 22, .6)',
        'font-weight':'normal'
    });
});