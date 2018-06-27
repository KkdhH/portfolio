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
	$(this).stop().siblings('div').children('img').css({'transform':'scale(1.25)', 'opacity':'.9'});
}, function() {
	$(this).stop().siblings('div').children('img').css({'transform':'scale(1)', 'opacity':'1'});
});

$('.business nav ul img').hover(function() {
	$(this).stop().css({'transform':'scale(1.25)', 'opacity':'.9'});
}, function() {
	$(this).stop().css({'transform':'scale(1)', 'opacity':'1'});
});
