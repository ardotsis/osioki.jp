$(function() {


// 左右行インナー位置を中央インナーに合わせる

function adjust() {
	
	var win =		$(window).width();									// ウィンドウ幅
	var inner =	$('.area.logo .inner').width();						// 中央インナー幅
	var left =		$('.contents .leftside .inner').outerWidth();		// 左行インナー幅
	var right =		$('.contents .rightside .inner').outerWidth();	// 右行インナー幅

	var space =	( win - inner )/2							// 左右の余白
	
	$('.contents .leftside').css('width', left + space );
	$('.contents .rightside').css('width', right +  space );

}


adjust();
$(window).on('resize', adjust);

});