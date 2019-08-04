var isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;
var count = 1;
var max = 5;
var categ = ["Branding", "Branding", "Digital Art", "Digital Art", "Digital Art"];
var mouse = { x: 0, y: 0 };
var pos = { x: 0, y: 0 };
var ratio = 0.25;
$(document).ready(function() {
	console.log('%cHandcrafted from scratch just for you. \nv4 - Connell McCarthy \n\nView on Github: https://github.com/connellmccarthy/connell',"border-radius:3px; padding:3px; background: #FF6136; color: #fff");
	preload([
	    'img/work/1.jpg',
	    'img/work/2.jpg',
	    'img/work/3.jpg',
	    'img/work/4.jpg',
	    'img/work/5.jpg'
	]);
	if (isMobile) {
		window.setInterval(function(){switchFrame('fwd');}, 2500);
	}
	$('.next').click(function() {switchFrame('fwd');});
	$('.prev').click(function() {switchFrame('rvs');});


	$('#work-frame').mouseenter(function() {
		$('.cursor_follow').fadeIn('fast');
	}).mouseleave(function() {
		$('.cursor_follow').fadeOut('fast');
	});

	window.setInterval(function(){updatePos();},0);
});

$(document).on('mousemove', function(e) {
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	mouse.x = e.pageX;
	mouse.y = e.pageY - scrollTop;
});

function updatePos() {
	pos.x += (mouse.x - pos.x) * ratio;
	pos.y += (mouse.y - pos.y) * ratio;
	$('.cursor_follow').css({
		left: pos.x,
		top: pos.y
	});
}

function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

function switchFrame(d) {
	if (d == 'fwd'){
		if (count == max) {count = 1;} else {count ++;}
	} else {
		if (count == 1) {count = max;} else {count --;}
	}
	$('#w-in-n').text(count);
	$('#w-in-t').text(categ[count - 1]);
	$('#work-img').attr('src', '/img/work/' + count + '.jpg');
}