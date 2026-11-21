$(function(){

	//load
	$(window).load(function(){
		$('body').css({
				'visibility':'visible', 'opacity':1
		});
	});
	
	
	//header menu
	$(document).ready(function($) {
		var isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;
	
			//header menu dropdown
			$('.header .nav, .drop_menu').on('mouseenter focusin', function(){
				$(".drop_menu").stop().fadeIn(400);
			});

			$('.header .nav, .drop_menu').on('mouseleave focusout', function(){
				$(".drop_menu").stop().fadeOut(400);
			});


			$(".header .nav li").mouseover(function(){
				$('.header .nav li').removeClass('on');
				$(this).addClass('on');
			});
			

			$(".header .drop_menu .drop > li").mouseover(function () {
				//alert('ok');
				$(".header .nav li").removeClass("on");
				$(this).addClass("on");
				var activemenu = $(this).attr("rel");
				$("#" + activemenu).addClass('on')
			})

			$(".header").mouseleave(function(){
				$(".header .nav li").removeClass("on");
			});
		});

	//backtop
	$(window).scroll(function(){
		var WT = $(window).scrollTop(),
			Wh = $(window).height(),
			Dh = $(document).height(),
			Fh = $(".footer").innerHeight();

		if (WT > Dh-Wh-Fh) {
			$(".back-top span").removeClass('fixed');
		} else {
			$(".back-top span").addClass('fixed');
		}

		 if ($(this).scrollTop() > 100) { 
		   $('.back-top span').addClass("show");  
		} else { 
			 $('.back-top span').removeClass("show"); 
		} 
	});

	$('.back-top').click(function(){
			$('body, html').animate({ scrollTop: 0 }, 700); return false; 
	});


});