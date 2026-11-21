$(function(){
	
	$('.popup_close_btn').on('click', function() {
		$('.popup_zone, .popup_bg_blk').removeClass('open');
	});

	$('.popup_close_btn.mobile').on('click', function() {
		$('.popup_zone, .popup_bg_blk').removeClass('open');
	});
	
	//PopupSlider//
	const PopupSlider = new Swiper(".swiper_popup_slider", {
		speed:1000,
		slidesPerView: 1,
		spaceBetween: 10,
		navigation: {
			nextEl: ".popup_zone .swiper-button-next",
			prevEl: ".popup_zone .swiper-button-prev",
		},
		allowTouchMove: false,
		on: {
			init : function () {
			   // $('.swiper_main_slider').addClass('init');
			},				
		}
	});

	PopupSlider.on('slideChange', function(){
		//$('.swiper_main_slider').removeClass('init');
	});

	//Section01 MainSlider//
	const MainSlider = new Swiper(".swiper_main_slider", {
		loop:true,
		speed:1000,
		slidesPerView: 1,
		spaceBetween: 0,
		centeredSlides: true,
		observer: false,
		observeParents: false,
		autoplay: {
			delay: 5000,
			disableOnInteraction:false
		},
		on: {

			progress: function() {
				for (var i=0; i < this.slides.length; i++) {
					var slideProgress = this.slides[i].progress;
					var innerOffset = this.width * 0.5;
					var innerTranslate = slideProgress * innerOffset;
					this.slides[i].querySelector('.bg_wrap').style.transform = 'translate3d(' + innerTranslate + 'px, 0, 0)';
				}
			},
			touchStart: function() {
				for (var i = 0; i < this.slides.length; i++) {
					this.slides[i].style.transition = '';
				}
			},
			setTransition: function(speed) {
				for (var i = 0; i < this.slides.length; i++) {
					this.slides[i].style.transition = speed + 'ms';
					this.slides[i].querySelector('.bg_wrap').style.transition = speed + 'ms';
				}
			}
		}
	});

	MainSlider.on('slideChange', function(){
		
	});
	
	//텍스트 애니메이션//
	function resetTextOpacity() {
		$('.s2_font, .s3_font, .s4_font').find('span').css('opacity', 0);
	}

	$(document).ready(function() {

		function triggerTextAnimation(sectionClass, fontClass, delayTime) {
			if ($(sectionClass).hasClass('active')) {
				setTimeout(function() {
					animateText($(fontClass + ' .top'), function() {
						animateText($(fontClass + ' .bt'));
					});
				}, delayTime); 
			}
		}

		function animateText(element, callback) {
			var text = element.text(); 
			var splitText = text.split(""); 
			element.html(""); 

			$.each(splitText, function(index, value) {
				element.append('<span style="opacity:0;">' + value + '</span>');
			});

			element.css('opacity', 1);

			element.find('span').each(function(i) {
				$(this).delay(100 * i).animate({ opacity: 1 }, 200);
			});

			setTimeout(function() {
				if (callback) callback();
			}, 100 * splitText.length + 200); 
		}

		$('.section_02').on('classChange', function() {
			if ($(this).hasClass('active')) {
				triggerTextAnimation('.section_02', '.s2_font', 1400);
			} else {
				resetTextOpacity();
			}
		});

		$('.section_03').on('classChange', function() {
			if ($(this).hasClass('active')) {
				triggerTextAnimation('.section_03', '.s3_font', 1400);
			} else {
				resetTextOpacity();
			}
		});

		$('.section_04').on('classChange', function() {
			if ($(this).hasClass('active')) {
				triggerTextAnimation('.section_04', '.s4_font', 1400);
			} else {
				resetTextOpacity();
			}
		});
	});

	//Section05 PremiumSlider//
	const PremiumSlider = new Swiper(".swiper_premium_slider", {
		loop:true,
		speed:1000,
		slidesPerView: "auto",
		spaceBetween: 0,
		allowTouchMove: false,
		//centeredSlides: true,
		//observer: true,
		//observeParents: true,
		//navigation: {
			//nextEl: ".section_02 .owl-next",
			//prevEl: ".section_02 .owl-prev",
		//},
		pagination: {
			el: ".section_05 .swiper-pagination",
			type: "progressbar",
			//clickable: true,
			/*renderBullet: function (index, className) {
				var bulletArray = [];
				return '<div class="'+className+'">'+'<span>'+'0'+(index+1)+'</span>'+'</div>';
			},*/
		},
		effect: 'fade',
		//fadeEffect: {
			//crossFade: true
		//},
		autoplay: {
			delay: 3000,
			disableOnInteraction:false
		},
		on: {
			init: function() {    
				$('.num').text('0'+(this.realIndex + 1));
				//$('.custom-fraction .all').text(this.loopedSlides);
			},
			slideChangeTransitionEnd: function() {
				//setTimeout(function(){
					$('.num').text('0'+(this.realIndex + 1));
				//}, 200);	
			}
		}
	});

	PremiumSlider.on('slideChange', function(){
		
	});

	//Fullpage//
	const myFullpage = new fullpage('#fullpage', {
		scrollBar: false,
		licenseKey: '71CA45A0-62C04DD0-9D84A874-AEE9817C',
		scrollingSpeed: 700,
		autoScrolling:true,
		scrollOverflow:true,
		navigation: true,
		//navigationTooltips: ['1', '2', '3', '4', '5'],
		onLeave : function(origin, destination, direction){
			if (origin.index == 1 && direction =='down'){
				$('.header').addClass('b');
			}
			if (origin.index == 2 && direction =='up'){
				$('.header').removeClass('b');
			}
			if (origin.index == 4 && direction =='down'){
				$('.header').removeClass('b');
			}	
			if (origin.index == 3 && direction =='down'){
				PremiumSlider.slideTo(1);
			}
			if (origin.index == 5 && direction =='up'){
				PremiumSlider.slideTo(1);
				$('.header').addClass('b');
			}
		},
		afterLoad: function(origin, destination, direction) {
			if (destination.index == 0) {
				$('.header').addClass('f');
			}
			if (destination.index == 1) {
				$('.header').removeClass('b');
				$('.header').removeClass('f');
				$('.section_02').trigger('classChange');
			} else {
				resetTextOpacity(); 
			}
			if (destination.index == 2) {
				$('.header').addClass('b');
				$('.section_03').trigger('classChange');
			} else {
				resetTextOpacity(); 
			}
			if (destination.index == 3) {
				$('.header').addClass('b');
				$('.section_04').trigger('classChange');
			} else {
				resetTextOpacity(); 
			}
			if (destination.index == 4) {
				$('.header').addClass('b');
			}
			if (destination.index == 5) {
				$('.header').removeClass('b');
				$('.header').removeClass('f');
			}
		}
	});
});