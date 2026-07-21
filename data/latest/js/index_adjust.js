$(function() {


	/*@ƒŒƒA‚¿‚á‚ñì@*/


function adjust() {
	var winH = $(window).height();
	var headerH = $('header').height();
	$('.wrap, iframe').css('height', winH-headerH);
}


adjust();
$(window).on('resize', adjust);

});
