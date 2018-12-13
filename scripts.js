$(document).ready(function(){
	$('.icons').slideUp(500).slideToggle(1000);
});


var $sun = $('.sun');
var $win = $(window);

$win.on('scroll', function() {
	var top = $win.scrollTop() / 3;
	$sun.css('transform', 'rotate(' + top + 'deg)');

});
