//각 디바이스의 높이값을 가져와 웹사이트의 높이값으로 적용
/*
var ht = $(window).height();
$('.wrap').height(ht);
*/

/***********************틀*******************/
$('.menu_left img, .menu_left p').hover(function() {
	$('.menu > .slide_st').stop().animate({left:0},500,'easeOutBack');
	$('.menu > .menu_left p').css({
		"transform":"rotate(0deg)",
		"color":"#000"
	},300);
}, function() {
	$('.menu > .slide_st').stop().animate({left:-130},300,'easeOutBack');
	$('.menu > .menu_left p').css({
		"transform":"rotate(-90deg)",
		"color":"#fff"
	},300);
});
	
$('.menu_left img, .menu_left p').click(function() {
	$('.menu > .slide').stop().animate({left:0}, 600);
	$('.menu .menu_top').animate({top:-10}, 600);
	$('.menu .menu_top h1').animate({marginLeft:'8%'}, 600);
	$('.menu .menu_bottom').animate({bottom:-10}, 600);
	$('.menu .menu_right').animate({right:-10}, 600);
	$('.wrap').stop().animate({'opacity':'.9'}, 700);
});

$('.menu > .slide img').click(function() {
	$('.menu > .slide').stop().animate({left:'-50%'}, 400);
	$('.menu .menu_top').animate({top:-80}, 400);
	$('.menu .menu_top h1').animate({marginLeft:45}, 400);
	$('.menu .menu_bottom').animate({bottom:-80}, 400);
	$('.menu .menu_right').animate({right:-80}, 400);
	$('.wrap').stop().animate({'opacity':'1'},400);
});

$('.menu_top h1 a, .slide a').click(function() {
	$('.menu > .slide').stop().animate({left:'-50%'}, 600);
	$('.menu .menu_top').animate({top:-80}, 600);
	$('.menu .menu_top h1').animate({marginLeft:45}, 600);
	$('.menu .menu_bottom').animate({bottom:-80}, 600);
	$('.menu .menu_right').animate({right:-80}, 600);
});

/**************************배경별*************************/
$('.wrap').mousemove(function(e) {
		
	var x = e.pageX; //마우스 커서의 x축 위치 값
	var y = e.pageY; //마우스 커서의 y축 위치 값
	$('.s11').css({'left':41-(x/10), 'top':50+(y/10)});
	$('.s12').css({'left':57+(x/20), 'top':154-(y/20)});
	$('.s13').css({'left':173-(x/30), 'top':45-(y/30)});
	});

/*********************************************************/
$(".animsition").animsition({
    inClass: 'fade-in',
    inDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: '.wrap', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });