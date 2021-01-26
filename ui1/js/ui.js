/* 상품 목록 타입 변경 버튼 */
function btnTypeChange() {
	var $boxContainer = $('.product-box');
	var $btnType = $('.header__button');
	var arrayViewType = ["product-box--thumbnail", "product-box--image", "product-box--list"]; // 뷰타입별 클래스명
	var arrayBtnTitle = [
		"썸네일형 보기에서 이미지형 보기로 변경",
		"이미지형 보기에서 목록으로 보기로 변경",
		"리스트형 보기에서 썸네일형 보기로 변경"
	]	// 버튼 클릭 시, 변경될 버튼 title 내용
	var num = 0; // 버튼 클릭 횟수 count
	var viewTypeLength = arrayViewType.length; // 뷰타입의 개수

	$btnType.on('click', function() {
		num ++;

		if (num === viewTypeLength) num = 0;

		$boxContainer.removeClass().addClass('product-box').addClass(arrayViewType[num]);
		$btnType.attr('title', arrayBtnTitle[num]);

		return num;
	});
}

$(document).ready(function() {
	btnTypeChange();
});