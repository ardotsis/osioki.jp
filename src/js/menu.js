$(function() {


	/*　レアちゃん作　*/


	//グローバル変数
	var showed = null;


function init() {
	$('#js_clockColon').css('display', 'inline');
	showClock();
}


//時計表示

function showClock() {

	function addZero(n) {
		var res;
		if (n<10) { res = '0' + n; }
		else { res = n; }
		return res;
	}

	var now = new Date();
	var time = [addZero(now.getHours()), addZero(now.getMinutes())]
	$('#js_clockHour').text(time[0]);
	$('#js_clockMin').text(time[1]);

	if ($('#js_clockColon').css('visibility') == 'visible') {
	$('#js_clockColon').css('visibility', 'hidden'); }

	else {
	$('#js_clockColon').css('visibility', 'visible'); }

	setTimeout(showClock, 500);
}


//ポップアップ処理

function popup() {

	if ($('.popup').hasClass('hidden')) {

		if ($(this).hasClass('Gate')) {
			$('.popup.Gate').fadeIn(200);
			$('.mark.Gate').fadeIn(200);
			showed = 'Gate';
		}

		if ($(this).hasClass('Look')) {

			return;

			/*可動
			$('.popup.Look').fadeIn(200);
			$('.mark.Look').fadeIn(200);
			showed = 'Look';
			*/
		}

		if ($(this).hasClass('Clap')) { return; }
		if ($(this).hasClass('Top')) { return; }

		$('.popup').removeClass('hidden');

	}

	else {

		if ($(this).hasClass('Gate')) {
			if ( showed === 'Look' ) { return; }
			$('.popup.Gate').fadeOut(200);
			$('.mark.Gate').fadeOut(200);
		}

		if ($(this).hasClass('Look')) {
			if ( showed === 'Gate' ) { return; }
			$('.popup.Look').fadeOut(200);
			$('.mark.Look').fadeOut(200);
		}

		if ($(this).hasClass('Clap')) { return; }
		if ($(this).hasClass('Top')) { return; }

		$('.popup').addClass('hidden');
		showed = null;

	}

}


$('.tool li').on('click', popup);
$(window).on('load', init);

});