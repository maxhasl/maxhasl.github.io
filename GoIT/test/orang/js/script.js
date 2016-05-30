jQuery(document).ready(function($) {
	
	//SCROLL UP
	$('.scroll_up').on('click',function(){
		$('body, html').animate({
			scrollTop: 0
		}, 900);
	});
	
	//SCROLL UP
	$('.scroll_down').on('click',function(){
		var block_height = $(".banner1_wrap").outerHeight() + $(".banner1_wrap").offset().top;
		$('body, html').animate({
			scrollTop: block_height
		}, 700);
	});
	
	//MOBILE MENU
	// $('.close_menu').on('click',function() {
		// $('body').removeClass('menu_open');
	// });
	// $('.open_menu').on('click',function() {
		// $('body').toggleClass('menu_open');
	// });
	
	
	$('.main_menu_top > .menu-item-has-children').on('click',function() {
		$(this).find('ul:first').slideToggle();
	});
	
	
	//TESTIMONIALS SLIDER
	$('.testimonials_slider').slick({
		fade: true,
	});
	
	//PICTURE POPUP
	$('a[href$=".jpg"]').magnificPopup({type:'image'});
	$('a[href$=".png"]').magnificPopup({type:'image'});
	$('a[href$=".gif"]').magnificPopup({type:'image'});
	 
	 
	//SVG BUTTON
	if($('.btn_svg').length > 0) {
		$(".btn_svg_bg").each(function() {
			var snapC = Snap(this);
			if($(window).width() > 1024) {
				var snapC1 = snapC.path("M 0 0 L 0 9.99 C 0 15 0 20 0 25 C 0 26 0 27 0 28 C 0 29 0 30 0 31 C 0 35.666666666666664 0 40.333333333333336 0 45 L 0 55.72 C 0 56 74.66669583295369 56.046666353843015 112 56 C 149.3334208324223 55.953333500326124 224 55.72 224 55.72 L 224 45.73 C 224 41 224 37 224 33 C 224 31.333333333333332 224 29.666666666666668 224 28 C 224 27 224 26 224 25 C 224 20 224 15 224 10 L 224 0 C 224 0 149.33333333333334 0 112 0 C 74.66666666666666 0 0 0 0 0 Z M 0 0")
			}	else {
				var snapC1 = snapC.path("M 0 0 L 0 9.99 C 0 19.97 5.14 23.98 8.51 24.86 C 9.84 25.23 10.83 26.42 10.83 27.86 C 10.83 29.3 9.84 30.5 8.5 30.84 C 5.14 31.74 0 35.75 0 45.73 L 0 55.72 C 0 55.72 41.81 52.36 111.53 52.36 C 185.55 52.36 224 55.72 224 55.72 L 224 45.73 C 224 35.75 218.86 31.74 215.49 30.86 C 214.16 30.49 213.17 29.3 213.17 27.86 C 213.17 26.42 214.16 25.22 215.5 24.88 C 218.86 23.98 224 19.97 224 9.99 L 224 0 C 224 0 182.56 3.36 111.53 3.36 C 49.67 3.36 0 0 0 0 Z M 0 0")
			}
		});
		  
		if($(window).width() > 1024) {
				$(".btn_svg").mouseenter(function(){
			var snapC = Snap(this);
					sqrFunc = function(){
						snapC.select("path").stop().animate({d:"M 0 0 L 0 9.99 C 0 19.97 5.14 23.98 8.51 24.86 C 9.84 25.23 10.83 26.42 10.83 27.86 C 10.83 29.3 9.84 30.5 8.5 30.84 C 5.14 31.74 0 35.75 0 45.73 L 0 55.72 C 0 55.72 41.81 52.36 111.53 52.36 C 185.55 52.36 224 55.72 224 55.72 L 224 45.73 C 224 35.75 218.86 31.74 215.49 30.86 C 214.16 30.49 213.17 29.3 213.17 27.86 C 213.17 26.42 214.16 25.22 215.5 24.88 C 218.86 23.98 224 19.97 224 9.99 L 224 0 C 224 0 182.56 3.36 111.53 3.36 C 49.67 3.36 0 0 0 0 Z M 0 0"},200,mina.easeinout);
					}	
				setTimeout(sqrFunc, 100);
				});

				$('.btn_svg').mouseleave(function(){
				var snapC = Snap(this);
					sqrFunc = function(){
						snapC.select("path").stop().animate({d:"M 0 0 L 0 9.99 C 0 15 0 20 0 25 C 0 26 0 27 0 28 C 0 29 0 30 0 31 C 0 35.666666666666664 0 40.333333333333336 0 45 L 0 55.72 C 0 56 74.66669583295369 56.046666353843015 112 56 C 149.3334208324223 55.953333500326124 224 55.72 224 55.72 L 224 45.73 C 224 41 224 37 224 33 C 224 31.333333333333332 224 29.666666666666668 224 28 C 224 27 224 26 224 25 C 224 20 224 15 224 10 L 224 0 C 224 0 149.33333333333334 0 112 0 C 74.66666666666666 0 0 0 0 0 Z M 0 0"},200,mina.easeinout);
					}
						setTimeout(sqrFunc, 100);
				});
			}
	}
	
	
	//NUMBER COUNTER
	var data_count = 1;
	if($('.numbers_list').length > 0) {
		var numbers_pos = $('.numbers_list').offset().top;
	}
	
	$(window).scroll(function(){
		if ( data_count == 1) {
			var scroll_pos = $(this).scrollTop();
			
			if(numbers_pos < scroll_pos + $(window).height()){
				data_count = 2;
				$('.count_numbers span').each(function () {
					$(this).prop('Counter',0).animate({
						Counter: $(this).text()
					}, {
						duration: 4000,
						easing: 'swing',
						step: function (now) {
							$(this).text(Math.ceil(now));
						}
					});
				});
			}	
		}
	});
	
	if($('.morph-shape').length > 0) {
		var	s = Snap( '.morph-shape svg' ),
				path = s.select( 'path' ),
				initialPath = path.attr('d'),
				pathOpen = $('.morph-shape').data( 'morph-open' );
			
		$('.open_menu, .close_menu').on( 'click', function(){
			
			if( $('body').hasClass('menu_open')) {
				$('body').removeClass('menu_open');
					// reset path
				path.animate( {d:initialPath},900,mina.linear);
			}	else {
				$('body').addClass('menu_open');
				// animate path
				setTimeout( function() {
					path.animate( {d:pathOpen},400,mina.elastic);
				}, 300 );
			}
		});
	}
	
	// CLOCK COUNTER
	var clock;		
		$(document).ready(function() {
			var clock;
			clock = $('.clock').FlipClock({
		        clockFace: 'DailyCounter',
				language: 'ru',
		        autoStart: false,
		        callbacks: {
		        	stop: function() {
		        		$('.message').html('The clock has stopped!')
		        	}
		        }
		    });
		    clock.setTime(220880);
		    clock.setCountdown(true);
		    clock.start();
		});
	
});