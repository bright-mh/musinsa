/* parallax */
var WINDOW = $(window);
var windowH = WINDOW.height();
var arrSectionOffset = []; // motion-box 각각의 시작 위치값이 들어갈 배열

var parallax = {
	settings : function(){
		var motionBox = $('.motion-box');

		motionBox.each(function(idx) { // arrSectionOffset 배열값 반환
			arrSectionOffset[idx] = motionBox.eq(idx).offset().top;
		});
	},
	moveParallax : function () {
		var motionBox = $('.motion-box');
		var intScrollTop = WINDOW.scrollTop();
		var windowHalf = windowH/2;
		var SectionH = motionBox.outerHeight(); //motion-box의 높이값

		/* 첫번째 모션은 로딩이 되거나 박스의 범위에 스크롤이 들어오면 클래스(on)을 추가하여 모션 시작.
		첫번째 모션만 첫번째의 박스의 범위를 벗어나면 클래스(on)을 삭제하여 모션 중지
		그 외 모션들은 스크롤의 위치가 현재 모션이 실행 되고 있는 박스의 중간 지점 이상일 때 클래스(on)을 추가하여 모션 시작.
		박스의 중간 지점 보다 현재 스크롤 위치가 작아지면 클래스(on)을 삭제하여 모션 중지 */
		motionBox.each(function(idx) {
			if (idx == 0) {
				if (arrSectionOffset[0] + SectionH > intScrollTop) {
					$(this).addClass('on');
				} else {
					$(this).removeClass('on');
				}
			} else if (idx > 0) {
				if (intScrollTop >= arrSectionOffset[idx] - windowHalf) {
					$(this).addClass('on');
				} else {
					$(this).removeClass('on');
				}
			}
		});
	}
}

$(window).on("load", function() {
	parallax.settings();
	parallax.moveParallax();
});
$(window).on("scroll", function() {
	parallax.moveParallax();
});
$(window).on("resize", function() {
	parallax.settings();
	parallax.moveParallax();
});