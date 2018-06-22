//각 디바이스의 높이값을 가져와 웹사이트의 높이값으로 적용
/*
var ht = $(window).height();
$('.wrap').height(ht);
*/

/***********************메뉴틀*******************/
$('.menu_left img, .menu_left p').hover(function() {
	$('.menu > .slide_st').stop().animate({left:0},200,'easeOutBack');
	$('.menu > .menu_left p').css({
		"transform":"rotate(0deg)",
		"color":"#000"
	},300);
}, function() {
	$('.menu > .slide_st').stop().animate({left:-130},200,'easeOutBack');
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
	$('.wrap').stop().animate({'opacity':'.8'}, 700);
});

$('.menu > .slide img').click(function() {
	$('.menu > .slide').stop().animate({left:'-30%'}, 400);
	$('.menu .menu_top').animate({top:-80}, 400);
	$('.menu .menu_top h1').animate({marginLeft:45}, 400);
	$('.menu .menu_bottom').animate({bottom:-80}, 400);
	$('.menu .menu_right').animate({right:-80}, 400);
	$('.wrap').stop().animate({'opacity':'1'},400);
});

/*************************************************************/
$('.list .sony').mouseenter(function() {
	$('.wrap').css({
		// 'background':'url(images/sony_works.png)',
		'background':'url(images/sony_works2.png)',
		'background-size':'cover',
		'background-position':'center'
	});
});
$('.list .sony').mouseleave(function() {
	$('.wrap').css({
		'background':'url(images/star_works.png) #5d2855',
		'background-size':'cover',
		'background-position':'center'
	});
});

/*****************************************************/
