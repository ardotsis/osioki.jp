$(function() {


	/*　レアちゃん作　*/


function init() {

	function showInner() {
		$('.logo').fadeIn(1000);
	}

	function showLogo() {
		$('.logo h1').fadeIn(500);
	}

	function showEclair() {
		$('iframe.eclair').attr('src', 'eclair/eclair.html');
		$('iframe.eclair').fadeIn(400);
	}

	setTimeout(showInner, 200);
	setTimeout(showLogo, 1000);
	setTimeout(showEclair, 2500);

}

setTimeout(init, 300);

$("#top_slider").slider({ time: 25, });

});
