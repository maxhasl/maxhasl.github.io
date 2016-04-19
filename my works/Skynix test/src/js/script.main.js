'use strict'
$(function() {

	$('.form__label').hover(function(){
		$(this).find('.form__hint__close').css({border: '2px solid #ff5d00',
	                                            width: '28px',
	                                            height: '28px',
	                                            lineHeight: '28px'
	                                            });
	}, function(){
		$(this).find('.form__hint__close').css({border: 'none',
	                                            width: '32px',
	                                            height: '32px',
	                                            lineHeight: '32px'});
	});

	$('.form__hint__close').on('click', function(){
		$(this).parent().find('.form__hint__open').toggle('display');
	});



})