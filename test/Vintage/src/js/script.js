'use strict';
$(function () {
    //create margin for main content
    function createMarginForContent() {
        var contentHeight = $('.home__title').height() + $('.play').height();
        $('.home__title').css({marginTop: ($(window).height() - contentHeight)/2+19});
    }
    createMarginForContent();
    // create main title split text
    var mainTitle = $('.home__title');
    var quantity = Math.floor(mainTitle.width()/28);
    var words = mainTitle.text().split(' ');

    var lines = [];
    var line = 0;
    for(var i=0; i<words.length; i++){
        if(lines[line] == undefined) lines[line] = '';
        if(words[i].length + lines[line].length <= quantity) {
            lines[line] = lines[line] + words[i] + ' ';
        } else {
            line++;
            i--;
        }
    }

    mainTitle.text('');
    for (var i=0; i<lines.length; i++) {
        mainTitle.html(mainTitle.html() + '<p>' + lines[i] + '</p>');
    }
    
    //greensock
    //create variables
    var tl = new TimelineMax();
    var mainTitleLine = $('.home__title p');
    var mainTitleLineHeight = mainTitleLine.height();
    var mainTitleMarginTop = parseInt(mainTitle.css('margin-top'), 10);

    var logoImage = $('.logo__image');
    var logoTitle = $('.logo__title');

    var languages = $('.languages');
    var languagesMarginTop = parseInt(languages.css('margin-top'), 10);

    var menuLinkImage = $('.menu-link__image path');
    var menuLinkTitle = $('.menu-link__title');

    var play = $('.play');
    var playTitle = $('.play__title');
    var playTitleMarginTop =  parseInt(playTitle.css('margin-top'), 10);

    var scrollDown = $('.scroll-down');
    var scrollDownBorder = $('.mouse-down__border--pink');
    var scrollDownDot = $('.mouse-down__dot');



    //set styles
    mainTitle.css({
        marginTop: mainTitleMarginTop + mainTitleLineHeight,
        opacity: 0
    });

    mainTitleLine.css({
        marginTop: mainTitleLineHeight,
        height: 0,
        opacity: 0
    });

    $(logoImage[0]).css({
        transform: 'matrix(1, 0, 0, 1, 0, 21)',
        opacity: 0
    });
    
    $(logoImage[1]).css({
        transform: 'matrix(1, 0, 0, 1, 15, 0)',
        opacity: 0
    });

    logoTitle.css({
        transform: 'matrix(1, 0, 0, 1, 0, 21)',
        opacity: 0
    });

    languages.css({
        marginTop: languagesMarginTop + 21,
        opacity: 0
    });

    menuLinkImage.css({
        opacity: 0
    });

    $(menuLinkImage[2]).css({
        transform: 'matrix(1, 0, 0, 1, 0, 17)',
        opacity: 0
    });

    menuLinkTitle.css({
        marginTop:  21,
        opacity: 0
    });

    play.css({
        transform: 'rotate(180deg) scale(0.5)',
        opacity: 0
    });

    playTitle.css({
        marginTop: playTitleMarginTop - 10,
        opacity: 0
    });

    scrollDown.css({
        opacity: 0
    });

    
    //set header animations
    tl.to(logoImage[0], 1, {y:0, opacity: 1})
        .to(logoImage[1], 1, {x:0, opacity: 1}, '-=0.3')
            .to(logoTitle, 1, {y:0, opacity: 1}, '-=1')
                .to(languages, 1, {marginTop: languagesMarginTop, opacity: 1}, '-=1')
                    .to(menuLinkImage[2], 1, {y:0, opacity: 1}, '-=2')
                        .to(menuLinkTitle, 1, {marginTop: 0, opacity: 1}, '-=1')
                            .to(menuLinkImage[1], 0.5, {opacity: 1}, '-=0.3')
                                .to(menuLinkImage[0], 0.5, {opacity: 1}, '-=0.3');

    //set main animations
    tl.to(mainTitle, 0.8, {marginTop: mainTitleMarginTop, opacity: 1})
        .to(mainTitleLine[0], 0.8, {marginTop: 0, height: mainTitleLineHeight, opacity: 1}, '-=1')
            .to(mainTitleLine[1], 0.8, {marginTop: 0, height: mainTitleLineHeight, opacity: 1}, '-=0.7')
                .to(mainTitleLine[2], 0.8, {marginTop: 0, height: mainTitleLineHeight, opacity: 1}, '-=0.7')
                    .to(play, 0.7, {rotation: 0, scale: 1, opacity: 1})
                        .to(playTitle, 0.7, {marginTop: playTitleMarginTop, opacity: 1})
                            .to(scrollDown, 1, {opacity: 1});
    //set mouse-down animation
    var tlScroll = new TimelineMax({repeat: -1, delay: 4.5});

    tlScroll.to(scrollDown, 0.7, {bottom: 20}, 'bottom')
                .to(scrollDown, 0.7, {bottom: 40}, 'top')
                    .to(scrollDownBorder, 0.7, {strokeDashoffset: 0}, 'bottom')
                        .to(scrollDownBorder, 0, {strokeDashoffset: 55}, 'top')
                            .to(scrollDownDot, 0.7, {y:18, opacity: 0}, 'bottom')
                                .to(scrollDownDot, 0, {y:0, opacity: 1}, 'top')
                                    .to(scrollDownDot, 0.5, {y: -6 }, 'top');

    //set menu animation
    var menuLinkImageSvg = $('.menu-link__image');
    $('.menu-link').hover(
        function() {
            var tlMenu = new TimelineMax();
            tlMenu.to(menuLinkImage[0], 0.7, {y:-10}, 'first')
                    .to(menuLinkImage[2], 0.7, {y: 10}, 'first')
                        .to(menuLinkImageSvg, 0, {marginTop: -12, height: 40}, 'first');
        }, function() {
            var tlMenu = new TimelineMax();

            tlMenu.to(menuLinkImage[0], 0.7, {y:0}, 'two')
                .to(menuLinkImage[2], 0.7, {y:0}, 'two')
                .to(menuLinkImageSvg, 0.3, {marginTop: 0, height: 18}, 'two');
        }
    );

    $('.menu-link').on('click', function () {
        // $(this).preventDefault();
        var tlMenuClick = new TimelineMax();
        tlMenuClick.to(menuLinkImage[0], 1, {attr:{d: 'M0.6,21L21.7,0.6C22.3,0,23.3-0.2,24,0.2l0,0c1.2,0.6,1.4,2.3,0.4,3.3L3.4,24c-0.6,0.6-1.6,0.7-2.3,0.4l0,0C-0.1,23.7-0.4,22,0.6,21z'}}, 'first')
                     .to(menuLinkImage[2], 1, {attr:{d: 'M3.6,0.8C10.3,7.6,17,14.5,23.7,21.3c0.6,0.6,0.7,1.5,0.4,2.3l0,0c-0.6,1.2-2.2,1.4-3.2,0.4C14.2,17.1,7.5,10.3,0.8,3.5C0.2,2.9,0.1,1.9,0.5,1.2l0,0C1.1,0,2.7-0.2,3.6,0.8z'}}, 'first')
                        .to(menuLinkImage[1], 1, {display: 'none'}, 'first');


    });




    $(window).resize(function () {
        createMarginForContent();
    })
});