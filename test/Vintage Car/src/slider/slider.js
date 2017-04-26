'use strict';
$(function () {
    var sliderImage = $('.slider__image');
    sliderImage.css({
        height: $(window).width()* 0.371
    });
    console.log(sliderImage.width());
    var Page = (function() {
        var navArrows = jQuery( '#nav-arrows' ).hide(),
            shadow = jQuery( '#shadow' ).hide(),
            slicebox = jQuery( '#sb-slider' ).slicebox( {
                onReady : function() {
                    navArrows.show();
                    shadow.show();
                },
                orientation : 'r',
                cuboidsRandom : true,
                disperseFactor : 30
            } ),

            init = function() {
                initEvents();
            },
            initEvents = function() {
                // add navigation events
                navArrows.children( ':first' ).on( 'click', function() {
                    slicebox.next();
                    return false;
                } );

                navArrows.children( ':last' ).on( 'click', function() {
                    slicebox.previous();
                    return false;
                } );

            };

        return { init : init };
    })();

    Page.init();

    $(window).resize(function () {
        sliderImage.css({
            height: $(window).width()* 0.371
        });
    })
});