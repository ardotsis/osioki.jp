$(function() {


	/*　レアちゃん作　*/


	//グローバル変数（現在未使用）
	var word;

	//Split用グローバル変数
	var setElm = $('.talk p'),
	delaySpeed = 70,
	fadeSpeed = 0;
	setText = setElm.html();


//デフォルト
function talkDefault() {
	word = 'いらっしゃいませ。<br>どうぞ寛いでいって下さいね。';
	talk(word);
}

//メニュー
function talkMenu() {
	if ($(this).hasClass('off'))			{ word = 'ごめんなさい、この先は<br>今は準備中みたいです。' }
	if ($(this).hasClass('First'))		{ word = 'お客様は此方へどうぞ。<br>私がご案内させて頂きます。' }
	if ($(this).hasClass('Gallery'))	{ word = 'メインコンテンツです。<br>お好きなジャンルへどうぞ。' }
	if ($(this).hasClass('Play'))		{ word = 'ちょっとした息抜きにどうぞ。<br>そのまま遊ぶ事が出来ます。' }
	if ($(this).hasClass('Blog'))		{ word = 'たまに新しい世界の紹介や<br>近況報告がされています。' }
	if ($(this).hasClass('Hell'))		{ word = 'ブログが新しくなりました。<br>混沌が広がっています。' }
	if ($(this).hasClass('Links'))		{ word = '余所様や素敵な商業作品、<br>各種ツールへご案内します。' }
	if ($(this).hasClass('Under'))		{ word = 'あら、これは…？<br>今は準備中みたいです。' }
	talk(word);
}

//ツール
function talkTool() {
	if ($(this).hasClass('Gate'))		{ word = '各種SNSへ繋がっています。<br>お暇な時にどうぞ。' }
	if ($(this).hasClass('Look'))		{ word = '私の見た目を変えられる…<br>ようになるみたいです。' }
	if ($(this).hasClass('Clap'))		{ word = '拍手を送る事が出来ます。<br>お気に召しましたら是非。' }
	if ($(this).hasClass('Top'))		{ word = '最初のページへ戻ります。<br>新着情報等がありますよ。' }
	talk(word);
}

//ポップアップ
function talkPopup() {
	if ($(this).hasClass('Twitter'))	{ word = '色々な事が呟かれています。<br>何でもありみたいですね。' }
	if ($(this).hasClass('Pixiv'))		{ word = 'たまにイラストを置いています。<br>お気に入り登録が出来ますよ。' }
	talk(word);
}


//表示

function talk(word) {
	$('.guide .talk p').empty();
	$('.guide .talk p').append(word);
	split();
}


//一文字ずつ表示 （参考：BlackFlag様）

function split() {

	setElm.css({visibility:'visible'}).children().addBack().contents().each(function(){
		var elmThis = $(this);
		if (this.nodeType == 3) {
			var $this = $(this);
			$this.replaceWith($this.text().replace(/(\S)/g, '<span class="textSplitLoad">$&</span>'));
		}
	});

	splitLength = $('.textSplitLoad').length;

	setElm.find('.textSplitLoad').each(function(i){
		splitThis = $(this);
		splitTxt = splitThis.text();
		splitThis.delay(i*(delaySpeed)).css({display:'inline-block',opacity:'0'}).animate({opacity:'1'},fadeSpeed);
	});

}


$(document).ready(talkDefault);
$('ul.menu li').on('mouseenter', talkMenu);
$('.tool ul li').on('mouseenter', talkTool);
$('.popup ul li').on('mouseenter', talkPopup);

});
