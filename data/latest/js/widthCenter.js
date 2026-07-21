$(function() {


	/*@ƒŒƒA‚¿‚á‚ñì@*/


function adjust() {
	var winW = $(window).width();
	var areaW = $('.js_widthCenter').width();
	$('.js_widthCenter').css('left', (winW/2) - (areaW/2));
}


adjust();
$(window).on('resize', adjust);

});
