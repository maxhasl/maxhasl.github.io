$(function () {
	  var $tabItem = $('.tab__item');
    var $tabText = $('.tab__text');
	
	$tabItem.eq(0).on('click', function () {
           $tabItem.removeClass('tab__item--checked');
           $(this).addClass('tab__item--checked');
           $tabText.eq(0).css('display', 'block');
           $tabText.eq(1).css('display', 'none');
           $tabText.eq(2).css('display', 'none');           
	    });

	$tabItem.eq(1).on('click', function () {
		   $tabItem.removeClass('tab__item--checked');
           $(this).addClass('tab__item--checked');
           $tabText.eq(1).css('display', 'block');
           $tabText.eq(0).css('display', 'none');
           $tabText.eq(2).css('display', 'none');
	    });

	$tabItem.eq(2).on('click', function () {
		   $tabItem.removeClass('tab__item--checked');
           $(this).addClass('tab__item--checked');
           $tabText.eq(2).css('display', 'block');
           $tabText.eq(0).css('display', 'none');
           $tabText.eq(1).css('display', 'none');
	    });
});
