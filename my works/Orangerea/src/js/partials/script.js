'use strict'
$(function() {
  var hint = $('.form__hint__close');
  var label = $('.form__label');
  //create hint hover
	label.hover(function(){
		$(this).next().find('.form__hint__close').addClass('form__hint__close--label__checked');
	  }, function(){
    if($(this).hasClass('form__label--checked')) {

    } else{
	  $(this).next().find('.form__hint__close').removeClass('form__hint__close--label__checked');
	  }
  });
    //hint open
    if($(document).width()<'768'){
	    hint.on('click', function(){
	    	$(this).parent().find('.form__hint__open').toggle('slow');
	        });
	} else {
        hint.mouseenter(function(){
          	$(this).parent().find('.form__hint__open').show('slow');
        });
        hint.mouseleave(function() {
            $(this).parent().find('.form__hint__open').delay(3000).hide('slow');
        });
    };
    //setting submit
      label.on('click', function(){
      	$('.form__label--checked').removeClass('form__label--checked');
        $('.form__hint__close--label__checked').removeClass('form__hint__close--label__checked');
      	$(this).addClass('form__label--checked');
        $(this).next().find('.form__hint__close').addClass('form__hint__close--label__checked');
      	$('.form__submit').removeAttr('disabled');
      });    	
});
