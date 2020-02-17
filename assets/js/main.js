"use strict";

var $slides = undefined,
    interval = undefined,
    $selectors = undefined,
    $btns = undefined,
    currentIndex = undefined,
    nextIndex = undefined;

var cycle = function cycle(index) {
	var $currentSlide = undefined,
	    $nextSlide = undefined,
	    $currentSelector = undefined,
	    $nextSelector = undefined;

	nextIndex = index !== undefined ? index : nextIndex;

	$currentSlide = $($slides.get(currentIndex));
	$currentSelector = $($selectors.get(currentIndex));

	$nextSlide = $($slides.get(nextIndex));
	$nextSelector = $($selectors.get(nextIndex));

	$currentSlide.removeClass("active").css("z-index", "0");

	$nextSlide.addClass("active").css("z-index", "1");

	$currentSelector.removeClass("current");
	$nextSelector.addClass("current");

	currentIndex = index !== undefined ? nextIndex : currentIndex < $slides.length - 1 ? currentIndex + 1 : 0;

	nextIndex = currentIndex + 1 < $slides.length ? currentIndex + 1 : 0;
};

$(function () {
	currentIndex = 0;
	nextIndex = 1;

	$slides = $(".slide");
	$selectors = $(".selector");
	$btns = $(".btn");

	$slides.first().addClass("active");
	$selectors.first().addClass("current");

	interval = window.setInterval(cycle, 6000);

	$selectors.on("click", function (e) {
		var target = $selectors.index(e.target);
		if (target !== currentIndex) {
			window.clearInterval(interval);
			cycle(target);
			interval = window.setInterval(cycle, 6000);
		}
	});

	$btns.on("click", function (e) {
		window.clearInterval(interval);
		if ($(e.target).hasClass("prev")) {
			var target = currentIndex > 0 ? currentIndex - 1 : $slides.length - 1;
			cycle(target);
		} else if ($(e.target).hasClass("next")) {
			cycle();
		}
		interval = window.setInterval(cycle, 6000);
	});
});

window.onload=function(){
  var btnSearch = document.querySelector(".btn-search");
var searchBlock = document.querySelector(".search");
var closeBlockSearch = document.querySelector(".close")

btnSearch.addEventListener("click", function (evt) {
	evt.preventDefault();
  searchBlock.classList.add("active-search");
});

closeBlockSearch.addEventListener("click", function (evt) {
	evt.preventDefault();
	searchBlock.classList.remove("active-search");
});
}
//Менюшка мобилка

$(function() {
  $(".btn-menu").click(function() {
    $(".navbar").toggleClass("navbar_active_menu");
		$(".list").toggleClass("list_active_menu");
		$(".list-btn").toggleClass("list-btn_active_menu");
		$(".logo").toggleClass("logo_active_menu");
		$(".search").toggleClass("search_active_menu");
		$(".share").toggleClass("share_active_menu");
		$(".btn-user").toggleClass("d-none");
		$(".btn-cad").toggleClass("d-none");
		$(".bg_white_a").toggleClass("bg_white");
		// $("#img_logo").attr("src","assets/img/styles_img/logo.svg");
		$(".hamburger").removeClass('bg_white_hamburger');
		if ($("#img_logo").attr("src") === ("assets/img/styles_img/logo_black.svg") ) {
			$("#img_logo").attr("src","assets/img/styles_img/logo.svg");
		}
  });
});
	
$(document).ready(function(){
	$('.btn-menu').click(function(){
		$('.btn-menu').toggleClass('active')
	})
})

$(function() {
  $(".btn_inf1").click(function() {
    $(".info_description").removeClass("d-none");
		$(".info_descript").removeClass("d-none");
		$(".info_descrip_zam").addClass("d-none");
		$(".info_descrip_dop").addClass("d-none");
  });
});

$(function() {
  $(".btn_inf2").click(function() {
    $(".info_description").addClass("d-none");
		$(".info_descript").addClass("d-none");
		$(".info_descrip_zam").addClass("d-none");
		$(".info_descrip_dop").removeClass("d-none");
  });
});

$(function() {
  $(".btn_inf3").click(function() {
    $(".info_description").addClass("d-none");
		$(".info_descript").addClass("d-none");
		$(".info_descrip_dop").addClass("d-none");
		$(".info_descrip_zam").removeClass("d-none");
  });
});

$(function() {
	var q = $(this);
	q.find('.value_minus').click(function() {
		var data = q.find('.quntity').val();
		if(data > 0){
			q.find('.quntity').val(parseInt(data) - 1);
		}
		return false
	});

	q.find('.value_plus').click(function() {
		var data = q.find('.quntity').val();
		q.find('.quntity').val(parseInt(data) + 1);
		return false
	});
});


// $(window).scroll(function(){
// 	$('.navbar').toggleClass('header-has-background', $(this).scrollTop() > 150);
// });

// $(function(){
// 	$(window).scroll(function() {
// 			var top = $(document).scrollTop();
// 			if (top < 105) $("#main-menu").css({top: '0', position: 'relative'});
// 			else $("#main-menu").css({top: '0px', width: '1100px',  position: 'fixed', background: '#333'});
// 	});
// });