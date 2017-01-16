jQuery(function () {
    jQuery('.tabs__control__item--faq').on('click', function() {
        var tabItem = jQuery('.tabs__list__item--faq');
        tabItem.css({display: 'none'});
        var line = jQuery('.tabs__control__item__line--faq-list')[jQuery(this).index()];
        hideTabsLines('.tabs__control__item__line--faq-list');
        setTimeout(function(){
            showTabsLine(line);
        }, 500);
        jQuery(tabItem[jQuery(this).index()]).css({display: 'block'});
    });



    //CAROUSEL
    jQuery('.carousel-arrows__arrow-right--faq').on('click', function(){
        bindTabCarouselArrowRight('.tabs__list__item--faq',
            '.tabs__control__item__line--faq-carousel')
    });

    jQuery('.carousel-arrows__arrow-left--faq').on('click', function(){
        bindTabCarouselArrowLeft('.tabs__list__item--faq',
            '.tabs__control__item__line--faq-carousel')
    });

    jQuery('.tabs__control__item--faq-subtab').on('click', function () {
        if(jQuery(this).find('.description--faq-tabs').is(':visible')) {
            jQuery(this).find('.description--faq-tabs').slideUp('slow');
            jQuery(this).find('.tabs__control__item__svg--faq-subtab').empty();
            createAllTabIcons('.tabs__control__item__svg--faq-subtab');
            jQuery(this).parent().find('.tabs__control__item__svg--faq-subtab').css({marginTop: '6px'});
            return;
        }

        var text = jQuery('.description--faq-tabs');
        var index = jQuery(this).index();
        text.slideUp('slow');
        jQuery(this).find(text).slideDown('slow');
        jQuery('.tabs__control__item__svg--faq-subtab').empty();
        createAllTabIcons('.tabs__control__item__svg--faq-subtab', 0);
        var svg = jQuery(this).find('svg');
        svg.attr('class', 'tabs__control__item__svg tabs__control__item__svg--faq-subtab this');
        svg.css({marginTop: '6px'});
        svg.empty();
        createActiveTabCross('.this');
        jQuery(svg).css({marginTop: '2px'});
        svg.attr('class', 'tabs__control__item__svg tabs__control__item__svg--faq-subtab');
    });

    // call functions
    if(jQuery('.tabs__control__item__line--faq-list').length > 0) {
        createTabSvgLines('.tabs__control__item__line--faq-list','.tabs__control__item__line--faq-carousel');
    }
    carouselFaqInit('.jcarousel--faq');
    jQuery(jQuery('.description--faq-tabs')[0]).css({display: 'block'});
    createAllTabIcons('.tabs__control__item__svg--faq-subtab');
    if(jQuery('.tabs__control__item__svg--faq-subtab').length > 0) {
        createFirstTabCross('.tabs__control__item__svg--faq-subtab');
    }
});