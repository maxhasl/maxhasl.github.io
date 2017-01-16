jQuery(function(){
//create social links
    function testimonialsSocialLink(id, line, letter){
        var snap = Snap(id);
        var linkCounter = snap.path(line);
        var linkLetter = snap.path(letter);
        linkLetter.attr({fill: "#a46393",
            strokeWidth: 0});
        jQuery(id).hover(function(){
            linkCounter.animate({strokeDashoffset: '100'}, 300);
        },function(){
            linkCounter.animate({strokeDashoffset: '0'}, 300);
        });
    }

    function testimonialsCreateSocialLinks(){
        var facebookLinks = jQuery('.facebook');
        var googleLinks = jQuery('.google');
        var twitterLinks = jQuery('.twitter');

        if(jQuery(window).width() > 374){
            for(var i = 0; i<facebookLinks.length; i++){
                testimonialsSocialLink(facebookLinks[i],
                    'M 16 31 C 24.28 31 31 24.28 31 16 C 31 7.72 24.28 1 16 1 C 7.72 1 1 7.72 1 16 C 1 24.28 7.72 31 16 31 Z M 16 31',
                    'M 20 8 L 20 11 L 18 11 C 17.4 11 17 11.4 17 12 L 17 14 L 20 14 L 20 17 L 17 17 L 17 24 L 14 24 L 14 17 L 12 17 L 12 14 L 14 14 L 14 11.5 C 14 9.6 15.6 8 17.5 8 L 20 8 L 20 8 Z M 20 8');
            }
            for(var i = 0; i<googleLinks.length; i++){
                testimonialsSocialLink(googleLinks[i],
                    'M 16 31 C 24.28 31 31 24.28 31 16 C 31 7.72 24.28 1 16 1 C 7.72 1 1 7.72 1 16 C 1 24.28 7.72 31 16 31 Z M 16 31',
                    'M 15.64 12.39 C 15.64 11.32 15 9.18 13.39 9.18 C 12.75 9.18 12 9.61 12 11 C 12 12.29 12.64 14.11 14.14 14.11 C 14.14 14.11 15.64 14 15.64 12.39 L 15.64 12.39 Z M 15 17.64 L 14.68 17.64 L 14.68 17.64 C 14.36 17.64 13.39 17.75 12.75 17.96 C 12 18.18 11.14 18.71 11.14 19.79 C 11.14 20.96 12.21 22.14 14.36 22.14 C 15.96 22.14 16.93 21.07 16.93 20 C 16.93 19.25 16.39 18.71 15 17.64 L 15 17.64 Z M 13.39 23.43 C 10.39 23.43 9 21.71 9 20.21 C 9 19.68 9.11 18.5 10.61 17.64 C 11.46 17.11 12.54 16.79 13.93 16.68 C 13.71 16.46 13.61 16.14 13.61 15.61 C 13.61 15.39 13.61 15.29 13.71 15.07 L 13.29 15.07 C 11.14 15.07 9.86 13.46 9.86 11.86 C 9.86 10.04 11.25 8 14.25 8 L 18.75 8 L 18.43 8.32 L 17.68 9.07 L 17.57 9.18 L 16.82 9.18 C 17.25 9.61 17.79 10.36 17.79 11.54 C 17.79 13.04 17.04 13.79 16.07 14.43 C 15.86 14.54 15.64 14.86 15.64 15.18 C 15.64 15.5 15.86 15.71 16.07 15.82 C 16.18 15.93 16.39 16.04 16.61 16.14 C 17.46 16.79 18.64 17.54 18.64 19.25 C 18.64 21.18 17.25 23.43 13.39 23.43 L 13.39 23.43 Z M 24 15.71 L 21.86 15.71 L 21.86 17.86 L 20.79 17.86 L 20.79 15.71 L 18.64 15.71 L 18.64 14.64 L 20.79 14.64 L 20.79 12.5 L 21.86 12.5 L 21.86 14.64 L 24 14.64 L 24 15.71 L 24 15.71 Z M 24 15.71');
            }
            for(var i = 0; i<twitterLinks.length; i++){
                testimonialsSocialLink(twitterLinks[i],
                    'M 16 31 C 24.28 31 31 24.28 31 16 C 31 7.72 24.28 1 16 1 C 7.72 1 1 7.72 1 16 C 1 24.28 7.72 31 16 31 Z M 16 31',
                    'M 22.45 13.05 C 22.34 18.34 19 22.02 13.94 22.25 C 11.88 22.36 10.38 21.67 9 20.87 C 10.5 21.1 12.45 20.52 13.49 19.6 C 11.99 19.49 11.07 18.68 10.61 17.42 C 11.07 17.53 11.53 17.42 11.88 17.42 C 10.5 16.96 9.57 16.15 9.46 14.31 C 9.81 14.54 10.26 14.66 10.72 14.66 C 9.69 14.08 9 11.9 9.81 10.52 C 11.3 12.13 13.14 13.51 16.13 13.74 C 15.32 10.52 19.69 8.79 21.42 10.98 C 22.23 10.86 22.8 10.52 23.38 10.29 C 23.14 11.09 22.69 11.55 22.11 12.01 C 22.69 11.9 23.26 11.78 23.72 11.55 C 23.61 12.13 23.03 12.59 22.45 13.05 L 22.45 13.05 Z M 22.45 13.05');
            }
        } else {
            for(var i = 0; i<facebookLinks.length; i++){
                testimonialsSocialLink(facebookLinks[i],
                    'M 14.21 27.43 C 21.3 27.43 27.05 21.69 27.05 14.6 C 27.05 7.51 21.3 1.76 14.21 1.76 C 7.13 1.76 1.38 7.51 1.38 14.6 C 1.38 21.69 7.13 27.43 14.21 27.43 Z M 14.21 27.43',
                    'M 17.49 7.75 L 17.49 10.32 L 15.78 10.32 C 15.27 10.32 14.93 10.66 14.93 11.18 L 14.93 12.89 L 17.49 12.89 L 17.49 15.45 L 14.93 15.45 L 14.93 21.44 L 12.36 21.44 L 12.36 15.45 L 10.65 15.45 L 10.65 12.89 L 12.36 12.89 L 12.36 10.75 C 12.36 9.12 13.73 7.75 15.35 7.75 L 17.49 7.75 L 17.49 7.75 Z M 17.49 7.75');
            }
            for(var i = 0; i<googleLinks.length; i++){
                testimonialsSocialLink(googleLinks[i],
                    'M 14.21 27.43 C 21.3 27.43 27.05 21.69 27.05 14.6 C 27.05 7.51 21.3 1.76 14.21 1.76 C 7.13 1.76 1.38 7.51 1.38 14.6 C 1.38 21.69 7.13 27.43 14.21 27.43 Z M 14.21 27.43',
                    'M 13.84 11.51 C 13.84 10.6 13.29 8.76 11.91 8.76 C 11.36 8.76 10.72 9.13 10.72 10.32 C 10.72 11.42 11.27 12.98 12.55 12.98 C 12.55 12.98 13.84 12.89 13.84 11.51 L 13.84 11.51 Z M 13.29 16 L 13.01 16 L 13.01 16 C 12.74 16 11.91 16.1 11.36 16.28 C 10.72 16.46 9.99 16.92 9.99 17.84 C 9.99 18.85 10.9 19.85 12.74 19.85 C 14.11 19.85 14.94 18.94 14.94 18.02 C 14.94 17.38 14.48 16.92 13.29 16 L 13.29 16 Z M 11.91 20.96 C 9.35 20.96 8.15 19.49 8.15 18.2 C 8.15 17.75 8.25 16.74 9.53 16 C 10.26 15.55 11.18 15.27 12.37 15.18 C 12.19 15 12.1 14.72 12.1 14.26 C 12.1 14.08 12.1 13.99 12.19 13.8 L 11.82 13.8 C 9.99 13.8 8.89 12.43 8.89 11.05 C 8.89 9.5 10.08 7.75 12.65 7.75 L 16.5 7.75 L 16.22 8.03 L 15.58 8.67 L 15.49 8.76 L 14.85 8.76 C 15.21 9.13 15.67 9.77 15.67 10.78 C 15.67 12.06 15.03 12.7 14.2 13.25 C 14.02 13.35 13.84 13.62 13.84 13.9 C 13.84 14.17 14.02 14.35 14.2 14.45 C 14.3 14.54 14.48 14.63 14.66 14.72 C 15.4 15.27 16.4 15.91 16.4 17.38 C 16.4 19.03 15.21 20.96 11.91 20.96 L 11.91 20.96 Z M 20.99 14.35 L 19.15 14.35 L 19.15 16.19 L 18.24 16.19 L 18.24 14.35 L 16.4 14.35 L 16.4 13.44 L 18.24 13.44 L 18.24 11.6 L 19.15 11.6 L 19.15 13.44 L 20.99 13.44 L 20.99 14.35 L 20.99 14.35 Z M 20.99 14.35');
            }
            for(var i = 0; i<twitterLinks.length; i++){
                testimonialsSocialLink(twitterLinks[i],
                    'M 14.21 27.43 C 21.3 27.43 27.05 21.69 27.05 14.6 C 27.05 7.51 21.3 1.76 14.21 1.76 C 7.13 1.76 1.38 7.51 1.38 14.6 C 1.38 21.69 7.13 27.43 14.21 27.43 Z M 14.21 27.43',
                    'M 19.74 12.07 C 19.64 16.6 16.79 19.75 12.46 19.94 C 10.68 20.04 9.41 19.45 8.22 18.76 C 9.5 18.96 11.18 18.47 12.06 17.68 C 10.78 17.58 10 16.89 9.6 15.81 C 10 15.91 10.39 15.81 10.68 15.81 C 9.5 15.42 8.72 14.73 8.62 13.15 C 8.91 13.35 9.31 13.45 9.7 13.45 C 8.82 12.96 8.22 11.09 8.91 9.91 C 10.19 11.28 11.77 12.47 14.33 12.66 C 13.64 9.91 17.38 8.43 18.85 10.3 C 19.54 10.2 20.03 9.91 20.52 9.71 C 20.33 10.4 19.93 10.79 19.44 11.19 C 19.93 11.09 20.43 10.99 20.82 10.79 C 20.72 11.28 20.23 11.68 19.74 12.07 L 19.74 12.07 Z M 19.74 12.07');
            }
        }
    }

    function testimonialsDeleteSocialLinks(){
        jQuery('.socials__link__svg').empty();
    }

    //tab control
    var tabItem = jQuery('.testimonials__tabs__control__item');
    var tabText = jQuery('.testimonials__tabs__text__item');
    var shadow = jQuery('.shadow--tabs');

    function testimonialsCreateHeighTabItem(){
        tabItem.css({height: (tabItem.width()) * 1.22});
        shadow.css({webkitTransition: 'opacity 0.7s',
            mozTransition: 'opacity 0.7s',
            oTransition: 'opacity 0.7s',
            transition: 'opacity 0.7s'});
    }
    //make fist tab active
    jQuery(shadow[0]).css({height: '0px',
        marginTop: tabItem.height()-29});
    jQuery(tabItem[0]).find('.tabs-checked').css({height: '29px'});

    //tabs animations
    tabItem.on('click', function(){
        var el = $(this).parent().parent();
        $('body').animate({
            scrollTop: $(el).offset().top}, 1000);
        var index = jQuery(this).index();
        tabText.css('display', 'none');
        shadow.css({height: 'inherit',
            marginTop: '0px',
            webkitTransition: 'height 0.5s, margin-top 0.5s, opacity 0.7s',
            mozTransition: 'height 0.5s, margin-top 0.5s, opacity 0.7s',
            oTransition: 'height 0.5s, margin-top 0.5s, opacity 0.7s',
            transition: 'height 0.5s, margin-top 0.5s, opacity 0.7s'});
        jQuery(shadow[index]).css({height: '0px',
            marginTop: tabItem.height()-29});
        jQuery(tabText[index]).css({display: 'block'});
        tabItem.find('.tabs-checked').css({height: '0px'});
        jQuery(this).find('.tabs-checked').css({height: '29px'});
        testimonialsDeleteSocialLinks();
        testimonialsCreateSocialLinks();
    });


    //tiles
    createHeight('.tiles__item--testimonials', 1.22);
    createTilesAnimation('.tiles__item--testimonials',
        '.tiles__item--testimonials-text',
        '.tabs-checked--tiles-testimonials',
        '.shadow--testimonials');
    createFistTileActive('.tiles__item--testimonials',
        '.tiles__item--testimonials-text',
        '.shadow--testimonials',
        '.tabs-checked--tiles-testimonials',
        '.profile--tiles');
//create responsive tiles content
    function testimonialsCreateRespTilesContent(){
        var width = jQuery('.tiles__item--testimonials').width();
        var tiles = jQuery('.profile--tiles');
        tiles.css({width: width});
        if(jQuery(window).width() > 768){
            verticalAlign('.profile--tiles', '.tiles__item--testimonials');
        } else {
            tiles.css({marginTop: '0px'});
        }
    }

    testimonialsCreateSocialLinks();
    testimonialsCreateHeighTabItem();
    testimonialsCrRespWidthTabCarousel();
    testimonialsCrRespWidthCarousel();
    testimonialsCreateRespTilesContent();
    setTimeout(function () {
        var testimonialsList = jQuery('.testimonials__list');
        for (var i = 0; i < testimonialsList.length; i++){
            var title = jQuery(testimonialsList[i]).find('.profile__name--list');
            var subTitle = jQuery(testimonialsList[i]).find('.profile__description--list');
            var description = jQuery(testimonialsList[i]).find('.feedback__text--list');
            createMaxHeightContent(title, 768);
            createMaxHeightContent(subTitle, 768);
            createMaxHeightContent(description, 768);
        }
    }, 0);

    jQuery(window).resize(function(){
        testimonialsDeleteSocialLinks();
        testimonialsCreateSocialLinks();
        testimonialsCreateHeighTabItem();
        testimonialsCrRespWidthTabCarousel();
        testimonialsCrRespWidthCarousel();
        setTimeout(function () {
            var testimonialsList = jQuery('.testimonials__list');
            for (var i = 0; i < testimonialsList.length; i++){
                var title = jQuery(testimonialsList[i]).find('.profile__name--list');
                var subTitle = jQuery(testimonialsList[i]).find('.profile__description--list');
                var description = jQuery(testimonialsList[i]).find('.feedback__text--list');
                createMaxHeightContent(title, 768);
                createMaxHeightContent(subTitle, 768);
                createMaxHeightContent(description, 768);
            }
        }, 0);
        createHeight('.tiles__item--testimonials', 1.22);
        createTilesAnimation('.tiles__item--testimonials',
            '.tiles__item--testimonials-text',
            '.tabs-checked--tiles-testimonials',
            '.shadow--testimonials');
        createFistTileActive('.tiles__item--testimonials',
            '.tiles__item--testimonials-text',
            '.shadow--testimonials',
            '.tabs-checked--tiles-testimonials',
            '.profile--tiles');
        testimonialsCreateRespTilesContent();
    });
});