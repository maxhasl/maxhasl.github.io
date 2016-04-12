$(function() {
	$('.image').on('click', function(){

      var image = $(this);
      console.log(image[0]);
      console.log(image[0].currentSrc);


	});
	 // $('.js__checker').on('click', function () {      
  //          if ($(this).find('.bg__sign').hasClass('bg__sign--checked')==true) {
  //          $(this).find('.tabs__text').slideUp('slow');
  //          $(this).find('.bg__sign').find('.sign').removeClass('sign--checked');
  //          $(this).find('.banner__tab--checked').removeClass('banner__tab--checked');
  //          $(this).find('.bg__sign--checked').removeClass('bg__sign--checked');
  //         } else {
  //          $('.tabs__text').slideUp('slow');
  //          $('.banner__tab--checked').removeClass('banner__tab--checked');
  //          $('.bg__sign--checked').removeClass('bg__sign--checked');
  //          $('.sign').removeClass('sign--checked');
  //          $(this).find('.tabs__text').slideDown('slow');
  //          $(this).find('.bg__sign').find('.sign').addClass('sign--checked');
  //          $(this).find('.banner__tab').addClass('banner__tab--checked');
  //          $(this).find('.bg__sign').addClass('bg__sign--checked');
  //         }               
      // });
});