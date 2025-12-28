$(function() {


	/*　レアちゃん作　*/


	// グローバル変数

	var body = $('body');
	var bodyBg = $('iframe').contents().find('body');


// 初期表示

function showPage() {

	$('iframe').contents().find('.rating').css('display', 'none');
	$('iframe').contents().find('.form').css('display', 'none');
	$('iframe').contents().find('.answer').css('display', 'none');
	$('iframe').contents().find('.answerMark').css('display', 'none');

	$('.area_inner').fadeIn(1000);
	setTimeout(showChara, 500);

	// エクレール表示
	function showChara() {
	
		$('iframe').css('visibility', 'visible');
		$('.chara_fog').fadeIn(1500);

		setTimeout(charaFade, 1500);
		setTimeout(showAnswer, 2500);

		// フェードイン
		function charaFade() {
			$('.chara').fadeIn(2500);
			$('.chara_fog').fadeOut(2500);
		}
		
	}

	// アンサー表示
	function showAnswer() {
		$('iframe').contents().find('.answer.main').fadeIn(500);
		$('iframe').contents().find('.answerMark').fadeIn(500);
		setTimeout(showRecent, 800);
	}

	// 最近の出来事表示
	function showRecent() {
		$('iframe').contents().find('.answer.recent').fadeIn(500);
		setTimeout(showUI, 1000);
	}

	// その他UI表示
	function showUI() {
		$('.helpIcon').fadeIn(500);
		$('iframe').contents().find('.answer').show();
		$('iframe').contents().find('.rating').fadeIn(500);
		$('iframe').contents().find('.form').fadeIn(500);
	}

}


// 初期表示（デバッグ用演出スキップ）

function showPageDebug() {

	$('iframe').css('visibility', 'visible');
	$('.area_inner').show();
	$('.chara').show();
	$('.rating').show();
	$('.helpIcon').show();

}


// ヘルプ表示

function showHelp() {
	
	if ($('.helpCover').css('display') == 'block') { return; }

	$('.chara').addClass('blackOut');
	$('.helpIcon').addClass('blackOut');
	$('.helpCover').fadeIn(200);
	$('.helpCover .inner').scrollTop( 0 );

}


// ヘルプ非表示

function closeHelp() {

	$('.chara').removeClass('blackOut');
	$('.helpIcon').removeClass('blackOut');
	$('.helpCover').fadeOut(200);

}


$(window).on('load', showPage);			// 公開用
//$(window).on('load', showPageDebug);	// デバッグ用

$('.helpIcon').on('click', showHelp);
$('.helpCover .close').on('click', closeHelp);

});