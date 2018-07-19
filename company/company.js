$('.left').click(function() {
	$('.header_bg > li:last').prependTo('.header_bg');
});
$('.right').click(function() {
	$('.header_bg > li:first').appendTo('.header_bg');
});

setInterval(function() {
			$('.header_bg > li').first().appendTo('.header_bg');
		}, 7000);


$('.header_bg, .main').mouseenter(function() {
	$('.btnG').css({'display':'block'});
});
$('.header_bg').mouseleave(function() {
	$('.btnG').css({'display':'none'});
});


$(window).scroll(function() {
	if(150 < $(window).scrollTop() ) {
		$('.header').css({'background':'#f7fafc', 'border-bottom':'1px solid #242424'});
		$('.top_button').css({'right':'30px'});
	} else {
		$('.header').css({'background':'none', 'border-bottom':'none'});
		$('.top_button').css({'right':'-240px'});
	}
});

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
