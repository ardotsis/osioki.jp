$(function() {


	/*　レアちゃん作　*/


	// グローバル変数

	var body = $('body');
	var bodyBg = $('body', parent.document);


// メイン処理

function init() {


	// MainとBgのbodyクラスを同期

	bodyBg.removeAttr('class');

	if (body.hasClass('type_empty')) { bodyBg.addClass('type_empty') }

	if (body.hasClass('type_default')) { bodyBg.addClass('type_default') }
	if (body.hasClass('type_help')) { bodyBg.addClass('type_help') }
	if (body.hasClass('type_intro')) { bodyBg.addClass('type_intro') }
	if (body.hasClass('type_version')) { bodyBg.addClass('type_version') }

	if (body.hasClass('type_score')) { bodyBg.addClass('type_score') }
	if (body.hasClass('type_scoreWE')) { bodyBg.addClass('type_scoreWE') }
	if (body.hasClass('type_scoreIIDX')) { bodyBg.addClass('type_scoreIIDX') }
	if (body.hasClass('type_noPlay')) { bodyBg.addClass('type_noPlay') }
	if (body.hasClass('type_locked')) { bodyBg.addClass('type_locked') }

	if (body.hasClass('type_fullcombo')) { bodyBg.addClass('type_fullcombo') }
	if (body.hasClass('type_alljustice')) { bodyBg.addClass('type_alljustice') }
	if (body.hasClass('type_alljusticeC')) { bodyBg.addClass('type_alljusticeC') }

	if (body.hasClass('type_character')) { bodyBg.addClass('type_character') }
	if (body.hasClass('type_favorite')) { bodyBg.addClass('type_favorite') }
	if (body.hasClass('type_recommend')) { bodyBg.addClass('type_recommend') }

	if (body.hasClass('type_other')) { bodyBg.addClass('type_other') }


	// アンサーインナーの縦幅アジャスト

	var mainH = $('.answer.main').height();
	var plusH = $('.answer.plus').height();
	$('.answer.main .inner').css('height', mainH);
	$('.answer.plus .inner').css('height', plusH);


}


// スクロール判定

function isScrollable() {

	var showPos = 610

	var top = $('.scrollTop').offset().top;
	var end = $('.scrollEnd').offset().top;
	var scrollPos = ( end - top );

	if (scrollPos > showPos) { $('.scrollMark').show() }
	else { $('.scrollMark').hide() }

}


// スクロール判定（ヘルプ）

function isScrollableHelp() {

	var showPos = 560

	var top = $('.scrollTop').offset().top;
	var end = $('.scrollEnd', parent.document).offset().top;
	var scrollPos = ( end - top );

	if (scrollPos > showPos) { $('.scrollMark', parent.document).show() }
	else { $('.scrollMark', parent.document).hide() }

}


// 空エンターキャンセル

function isEmpty() {

	if ( document.form.speak.value == "" ) { return false; }

}


init();
isScrollable();

$('.answer.Main .inner').on('scroll', isScrollable);
$('.answer.Plus .inner').on('scroll', isScrollable);
$('.characters .inner').on('scroll', isScrollable);
$('.helpIcon', parent.document).on('click', isScrollableHelp);
$('.helpCover .inner', parent.document).on('scroll', isScrollableHelp);

$('input[type="submit"]').on('click', isEmpty);

});
