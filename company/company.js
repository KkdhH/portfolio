//slide
$('.left').click(function() {
	$('#bgL > li:last').prependTo('#bgL');
});
$('.right').click(function() {
	$('#bgL > li:first').appendTo('#bgL');
});

setInterval(function() {
			$('#bgL > li').first().appendTo('#bgL');
		}, 7000);

setInterval(function() {
            $('#bgSm > li').first().appendTo('#bgSm');
        }, 7000);

//menu scroll
$(window).scroll(function() {
	if(120 < $(window).scrollTop() ) {
		$('.header').css({'background':'#f7fafc', 'border-bottom':'1px solid #242424'});
		$('.top_button').css({'right':'30px'});
	} else {
		$('.header').css({'background':'none', 'border-bottom':'none'});
		$('.top_button').css({'right':'-240px'});
	}
});

//top 버튼 속도
var top_speed = 1200;
var top_btn = $('.top_button');

$(top_btn).bind('click', _btnTopAction);

function _btnTopAction() {
	$('html, body').stop().animate({scrollTop:0}, top_speed, "easeOutQuart");
}

//이미지 확대
$('.business nav ul a').hover(function() {
	$(this).siblings('div').children('img').stop().css({'transform':'scale(1.25)', 'opacity':'.9'});
}, function() {
	$(this).siblings('div').children('img').stop().css({'transform':'scale(1)', 'opacity':'1'});
});

$('.business nav ul img').hover(function() {
	$(this).stop().css({'transform':'scale(1.25)', 'opacity':'.9'});
}, function() {
	$(this).stop().css({'transform':'scale(1)', 'opacity':'1'});
});

//mobile menu
$('.header p i').click(function() {
    $('.menuMb').animate({'left':'0'}, 500);
    $('.animsition').animate({'opacity':'.45'});
});
$('.menuMb p i').click(function() {
    $('.menuMb').animate({'left':'-100%'}, 500);
    $('.animsition').animate({'opacity':'1'});
});

//로딩
$(".animsition").animsition({
    inClass: 'fade-in-down-sm',
    inDuration: 1500,
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