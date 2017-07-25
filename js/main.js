$(function() {
	/*礼拜五头部共用交互*/
	$(document).on("mousewheel", function(e) {
		if($(this).scrollTop() >= 100) {
			$(".nav-middle-wrap").css({
				position: "fixed",
				top: 0,
				left: 0,
				zIndex: 10000
			});
		} else {
			$(".nav-middle-wrap").css({
				position: "relative",
				zIndex: 10000,
				top: 0,
				left: 0
			});
		}
		if($(this).scrollTop() >= 50) {
			$("#top").fadeIn();
		} else {
			$("#top").fadeOut();
		}
	});

	/*返回顶部按钮点击*/
	$(document).on("click", "#top .totop", function() {
		$("html,body").animate({
			scrollTop: "0px"
		}, 400)
		$(".nav-middle-wrap").css({
			position: "relative",
			top: 0,
			left: 0,
			zIndex: 10000
		});
	});

	if(window.location.href.indexOf('/order-information')) {
		$(".nav-shopcar strong").eq(1).addClass("shopcar-active").siblings().removeClass("shopcar-active");
	} else if(window.location.href.indexOf('/success-shopcar')) {
		$(".nav-shopcar strong").eq(2).addClass("shopcar-active").siblings().removeClass("shopcar-active");
	} else {
		$(".nav-shopcar strong").eq(0).addClass("shopcar-active").siblings().removeClass("shopcar-active");
	}

});