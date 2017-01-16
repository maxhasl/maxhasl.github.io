jQuery(function () {
    jQuery('.tabs__control__item--tabs-block').on('click', function() {
        var tabItem = jQuery(this).parent().parent().find('.tabs__list__item--tabs-block');
        tabItem.css({display: 'none'});
        var line = jQuery(this).parent().find('.tabs__control__item__line--tabs-block-list')[jQuery(this).index()];
        hideTabsLines(jQuery(this).parent().find('.tabs__control__item__line--tabs-block-list'));
        setTimeout(function(){
            showTabsLine(line);
        }, 500);
        jQuery(tabItem[jQuery(this).index()]).css({display: 'block'});
    });

    function createAllTabsSvgLines() {
        var tabBlock = jQuery('.tabs--tabs-block');
        for(var i = 0; i < tabBlock.length; i++){
            var line = jQuery(tabBlock[i]).find('.tabs__control__item__line--tabs-block-list');
            console.log(line);
            var carousel = jQuery(tabBlock[i]).find('.tabs__control__item__line--tabs-block-carousel');
            if(line.length > 0) {
                createTabSvgLines(line, carousel);
            }
        }
    }

    if(jQuery('.tabs__control__item__line--tabs-block-list').length > 0){
        createAllTabsSvgLines();
    }

    jQuery('.jcarousel--tabs-block').jcarousel({
        center: true,
        wrap: 'auto'
    });

    jQuery('.jcarousel--tabs-block').jcarouselAutoscroll({
        target: '+=0',
        autostart: false
    });


    jQuery('.carousel-arrows__arrow-right--tabs-block').on('click', function() {
        var item = jQuery(this).parent().parent().find('.tabs__list__item--tabs-block');
        var itemVisible = jQuery(this).parent().parent().find('.tabs__list--tabs-block .tabs__list__item--tabs-block:visible');
        if(itemVisible.index() < item.length - 1){
            item.css({display: 'none'});
            var line = jQuery(this).parent().find('.tabs__control__item__line--tabs-block-carousel')[itemVisible.index() + 1];
            hideTabsLines(jQuery(this).parent().find('.tabs__control__item__line--tabs-block-carousel'));
            setTimeout(function(){
                showTabsLine(line);
            }, 300);
            jQuery(item[itemVisible.index() + 1]).css({display: 'block'});
        }
    });

    jQuery('.carousel-arrows__arrow-left--tabs-block').on('click', function() {
        var itemVisible = jQuery(this).parent().parent().find('.tabs__list--tabs-block .tabs__list__item--tabs-block:visible');
        var item = jQuery(this).parent().parent().find('.tabs__list__item--tabs-block');
        if(itemVisible.index() != 0){
            item.css({display: 'none'});
            var line = jQuery(this).parent().find('.tabs__control__item__line--tabs-block-carousel')[itemVisible.index() - 1];
            hideTabsLines(jQuery(this).parent().find('.tabs__control__item__line--tabs-block-carousel'));
            setTimeout(function(){
                showTabsLine(line);
            }, 300);
            jQuery(item[itemVisible.index() - 1]).css({display: 'block'});
        }
    });
//OPTION TWO
    function createTabControlLine() {
        var tabBlock = jQuery('.tabs--tabs-block-two');
        jQuery(tabBlock).find('.tabs__control-line').css({width: 0});
        content = jQuery(tabBlock).find('.tabs__list__item--tabs-block-two');
        content.css({display: 'none'});
        jQuery(content[0]).css({display: 'block'});
        if(jQuery(window).width() > 1023) {
            for (var i = 0; i < tabBlock.length; i++) {
                var li = jQuery(tabBlock[i]).find('.tabs__control__item--tabs-block-two');
                var line = jQuery(tabBlock[i]).find('.tabs__control-line');
                line.css({width: jQuery(li[0]).width() + 20});
            }
        } else {
            for (var i = 0; i < tabBlock.length; i++) {
                var lineCarousel = jQuery(tabBlock[i]).find('.tabs__control-line-two');
                jQuery(lineCarousel[0]).css({width: '100%'});
            }
        }
    }
    setTimeout(function () {
        createTabControlLine();
    }, 0);

    jQuery('.tabs__control__item--tabs-block-two').on('click', function () {
        var li = jQuery(this).parent().find('.tabs__control__item--tabs-block-two');
        var line = jQuery(this).parent().parent().find('.tabs__control-line');
        var index = jQuery(this).index();
        var width = 0;
        var content = jQuery(this).parent().parent().parent().find('.tabs__list__item--tabs-block-two');
        if(index == 0) {
            line.css({marginLeft: 0,
                width: jQuery(li[0]).width()+20});
        } else {
            for(var i=0; i<index; i++){
                width += jQuery(li[i]).width()+45;
            }
            line.css({marginLeft: width,
                width: jQuery(li[index]).width()+20});
        }
        content.css({display: 'none'});
        jQuery(content[jQuery(this).index()]).css({display: 'block'});
    });

    jQuery('.carousel-arrows__arrow-left--tabs-block-two').on('click', function () {
        var itemVisible = jQuery(this).parent().parent().find('.tabs__list--tabs-block-two .tabs__list__item--tabs-block-two:visible');
        var item = jQuery(this).parent().parent().find('.tabs__list__item--tabs-block-two');
        var line = jQuery(this).parent().find('.tabs__control-line-two');
        if(itemVisible.index() != 0){
            item.css({display: 'none'});
            line.css({width: 0});
            jQuery(item[itemVisible.index() - 1]).css({display: 'block'});
            jQuery(line[itemVisible.index() - 1]).css({width: '100%'})
        }
    });

    jQuery('.carousel-arrows__arrow-right--tabs-block-two').on('click', function () {
        var itemVisible = jQuery(this).parent().parent().find('.tabs__list--tabs-block-two .tabs__list__item--tabs-block-two:visible');
        console.log(itemVisible.index());
        var item = jQuery(this).parent().parent().find('.tabs__list__item--tabs-block-two');
        console.log(item);
        var line = jQuery(this).parent().find('.tabs__control-line-two');
        if(itemVisible.index() < item.length - 1){
            item.css({display: 'none'});
            line.css({width: 0});
            jQuery(item[itemVisible.index() + 1]).css({display: 'block'});
            jQuery(line[itemVisible.index() + 1]).css({width: '100%'})
        }
    });

    //three
    var tabsCross = jQuery('.tabs__control__item__svg--tabs');

    function createTabsListIcon(id) {
        var snap = Snap(id);
        var arrow = snap.path('M 1 1.08 C 1 1.08 9.29 4.5 9.29 9 C 9.29 4.5 17.67 1 17.67 1');
    }

    function createAllTabIcons() {
        for(var i = 0; i < tabsCross.length; i++){
            createTabsListIcon(tabsCross[i]);
        }
        var snap = Snap(tabsCross[0]);
        jQuery(tabsCross[0]).empty();
        jQuery(tabsCross[0]).css({marginTop: '6px'});
        snap.path('M 1 1 L 15.61 15.61');
        snap.path('M 1 1.08 C 1 1.08 9.29 4.5 9.29 9 C 9.29 4.5 17.67 1 17.67 1').animate({d: 'M 5.29 11.71 L 1 15.61'}, 100);
        snap.path('M 14.93 1 L 10.64 5.29');
    }
    if(tabsCross.length > 0){
        createAllTabIcons();
    }

    function tabsDeleteIcons(){
        jQuery('.tabs__control__item__svg--tabs').empty();
    }

    jQuery(jQuery('.tabs__control__item__text--three')[0]).css({display: 'block'});

    jQuery('.tabs__control__item--tabs-block--three').on('click', function () {
        var text = jQuery(this).parent().find('.tabs__control__item__text--three');
        var index = jQuery(this).index();
        var svg = jQuery(this).parent().find('.tabs__control__item__svg--tabs');
        var snap = Snap(svg[index]);
        var image = jQuery(this).parent().parent().find('.tabs__images__item');

        if(jQuery(this).find('.tabs__control__item__text--three').is(':visible')) {
            jQuery(this).find('.tabs__control__item__text--three').slideUp('slow');
            tabsDeleteIcons();
            for(var i = 0; i < tabsCross.length; i++){
                createTabsListIcon(tabsCross[i]);
            }
            svg.css({marginTop: '10px'});
            return;
        }

        text.slideUp('slow');
        jQuery(text[index]).slideDown('slow');
        tabsDeleteIcons();
        for(var i = 0; i < tabsCross.length; i++){
            createTabsListIcon(tabsCross[i]);
        }
        svg.css({marginTop: '10px'});
        jQuery(svg[index]).empty();
        snap.path('M 1 1 L 15.61 15.61');
        snap.path('M 1 1.08 C 1 1.08 9.29 4.5 9.29 9 C 9.29 4.5 17.67 1 17.67 1').animate({d: 'M 5.29 11.71 L 1 15.61'}, 100);
        snap.path('M 14.93 1 L 10.64 5.29');
        jQuery(svg[index]).css({marginTop: '6px'});
        image.css({display: 'none'});
        jQuery(image[index]).css({display: 'block'});
    });
    //FOUR
    function createTabsHoverAnimation() {
        var controlItem = jQuery('.tabs__control__item--tabs-block-four');
        for(var i = 0; i < controlItem.length; i++){
            if(jQuery(controlItem[i]).css('opacity') != 1 ) {
                jQuery(controlItem[i]).hover(function () {
                    jQuery(this).css({opacity: '0.7'});
                }, function () {
                    jQuery(this).css({opacity: '0.5'});
                });
            }
        }
    }
    createTabsHoverAnimation();

    jQuery('.tabs__control__item--tabs-block-four').on('click', function() {
        var tabItem = jQuery(this).parent().parent().find('.tabs__list__item--tabs-block-four');
        var controlItem = jQuery(this).parent().find('.tabs__control__item--tabs-block-four');
        tabItem.css({display: 'none'});
        controlItem.css({opacity: 0.5});
        jQuery(tabItem[jQuery(this).index()]).css({display: 'block'});
        jQuery(controlItem[jQuery(this).index()]).css({opacity: 1});
        jQuery(this).mouseleave(function () {
            jQuery(this).css({opacity: 1});
            createTabsHoverAnimation();
        });

        jQuery(this).hover(function () {
            jQuery(this).css({opacity: '1'});
        },function () {
            jQuery(this).css({opacity: '1'});
        });

    });

    jQuery(window).resize(function () {
        if(jQuery(window).width() == 1023 || jQuery(window).width() == 1024) {
            setTimeout(function () {
                createTabControlLine();
            }, 0);
        }
    });
});