var isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;
var count = 1;
var max = 4;
var categ = ["Branding", "Branding", "Digital Art", "Digital Art"];
$(document).ready(function() {
	console.log('%cHandcrafted from scratch just for you. \nv4 - Connell McCarthy \n\nView on Github: https://github.com/connellmccarthy/connell',"border-radius:3px; padding:3px; background: #FF6136; color: #fff");
	preload([
	    'img/work/1.jpg',
	    'img/work/2.jpg',
	    'img/work/3.jpg',
	    'img/work/4.jpg'
	]);
	if (isMobile) {
		window.setInterval(function(){switchFrame('fwd');}, 2500);
	}
	$('.next').click(function() {switchFrame('fwd');});
	$('.prev').click(function() {switchFrame('rvs');});
});

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