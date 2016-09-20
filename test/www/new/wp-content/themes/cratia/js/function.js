
$(document).ready(function(){
(function($){

	$.fn.wrapChildren = function(options) {

		var options = $.extend({
			childElem : undefined,
			sets : 1,
			wrapper : '<ul>'
		}, options || {});

		if (options.childElem === undefined) return this;

		return this.each(function() {
			var elems = $(this).children(options.childElem), arr = [];

			elems.each(function(i,value) {
				arr.push(value);
				if (((i + 1) % options.sets === 0) || (i === elems.length -1)) {
					var set = $(arr);
					arr = [];
					set.wrapAll($(options.wrapper));
				}
			});
		});
	}

})(jQuery);
    $('.nav_main > ul > li > ul').each(function() {
       if($(this).children('li').size()>=10 && $(this).children('li').children('ul').size()==0){
           $(this).children('li').css({ "width": "50%", "float": "left" });
           $(this).css({ "width": "660px"});
       }
    });


	$('.c_wrapper .team_container div').wrapChildren({ childElem : 'li' , sets: 2});
	$('.nav_main ul li').append('<span class="spacer"></span>');
	$('.c_main_content p img').wrap('<div class="sertificate"></div>');
	
	$('.c_main_content blockquote').addClass("c_file");
	$('.c_main_content blockquote p').addClass("c_file_desc");
	$('.c_main_content blockquote a').addClass("c_file_desc");
	$('.c_main_content blockquote').append('<span class="c_file_icon"></span>');
	
	$('.c_file_desc a').addClass("fancybox");
	$('.wpcf7-mail-sent-ok').parent().parent().parent().parent().parent().addClass("activeform");
	$('.wpcf7-mail-sent-ng').parent().parent().parent().parent().parent().addClass("activeform");
	$('.wpcf7-validation-errors').parent().parent().parent().parent().parent().addClass("activeform");
	
	$(function() {
		$( ".news_container li .clicked" ).click(function() {
		  $(this).parent().parent().toggleClass( "active", 1000 );
		  return false;
		});
	});
	
	// $(function() {
		// $( ".news_container li .clicked" ).click(function() {
		  // $(this).parent().parent().parent().find('li.active').toggleClass( "active", 1000 );
		  // if (!$(this).parent().parent().hasClass('active')) {
			// $(this).parent().parent().toggleClass( "active", 1000 );
		  // }		  
		  // return false;
		// });
	// });

	$(function() {
		$( ".contact_top .contact_call a" ).click(function() {
		  $(this).parent().parent().addClass( "activeform", 1000 );
		  return false;
		});
	});
	$(function() {
		$( ".contact_top .contact_pop .pop_close" ).click(function() {
		  $(this).parent().parent().parent().removeClass( "activeform", 1000 );
		  return false;
		});
	});

    $('.partners_main a').attr('target', '_blank');
    $('.hide_partners').remove();
    $('.main_content_wrap div:only-child()').css({'padding-bottom':'71px'});

    var partnersP = $(".partners_main p");
    for(var k = 0; k < partnersP.length; k+=2) {
        partnersP.slice(k, k+2).wrapAll("<div></div>");
    }

    $('.partners_main div p:first-child()').mouseover(function(){
        $(this).css({'z-index':8});

    });

    $('.partners_main div p:last-child()').mouseout(function () {
        $('.partners_main div p:first-child()').css({'z-index':10});
    })



	
});
