'use strict';
$(function () {
    //create margin for main content
    function createMarginForContent() {
        var contentHeight = $('.home__title').height() + $('.play').height();
        $('.home__title').css({marginTop: ($(window).height() - contentHeight)/2+19});
    }
    createMarginForContent();
    //create margin for menu list
    function createMarginForMenu() {
        var contentHeight = $('.menu__list').height();
        $('.menu__list').css({marginTop: ($(window).height() - contentHeight)/2-47});
    }

    createMarginForMenu();
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
    
    var menuLink = $('.menu-link');
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


    var tlMenu = new TimelineMax();
    tlMenu.to(menuLinkImage[0], 0.7, {y:-10, delay: 0.1}, 'first')
                    .to(menuLinkImage[2], 0.7, {y: 10, delay: 0.1}, 'first')
                        .to(menuLinkImageSvg, 0, {y: -11, height: 40}, 'first');

    tlMenu.reversed(true);

    menuLink.hover(function(){
        if(!tlMenu.paused()) tlMenu.play();
    }, function () {
        if(!tlMenu.paused()) tlMenu.reverse();
    });

    function createMarginForMenu() {
        var contentHeight = $('.menu__list').height();
        $('.menu__list').css({marginTop: ($(window).height() - contentHeight)/2-47});
    }
    createMarginForMenu();

    var tlMenuClick = new TimelineMax();

    var menu = $('.menu');
    var menuListItem = $('.menu__item');
    var menuListItemHeight = menuListItem.height();
    var socialList = $('.social__list');

    tlMenuClick.to($('.languages'), 0.5, {x: -40, opacity: 0, delay: 0.10}, 'first')
                .to(menuLinkTitle[0], 0, {className: '+=hidden'})
                .to(menuLinkTitle[1], 0, {className: 'menu-link__title'})
                .to(menu, 0.5, {left: 0}, 'first')
                .to(menuLinkImage[0], 0.5, {rotation:120, transformOrigin:"bottom", x:0, y: -20, delay: 0.1}, 'first')
                .to(menuLinkImage[1], 0.5, {rotation: 20, transformOrigin:"bottom", x:-5, y: -3, delay: 0.1}, 'first')
                .to(menuLinkImage[2], 0.5, {opacity: 0, delay: 0.1}, 'first')
                .set(languages,{className:'+=languages--open-menu'})
                .set($('.languages__item'),{className:'+=languages__item--open-menu'})
                .set(languages, {x: -40})
                .to(languages, 0.5, {x: 0, opacity: 1})
                .set(menuListItem, {height: menuListItemHeight - 40, opacity: 0}, 'first')
                .staggerTo(menuListItem, 0.5, {height: menuListItemHeight, opacity: 1}, 0.2)
                .set(socialList, {x: -40, opacity: 0}, 'first')
                .to(socialList, 0.5, {x: 0, opacity: 1});


    tlMenuClick.reversed(true);

    function toggleDirection() {
        tlMenuClick.reversed() ? tlMenuClick.play() : tlMenuClick.reverse();
            if(!tlMenu.paused()) {
                tlMenu.pause();
            } else {
                tlMenuClick.eventCallback("onReverseComplete", function () {
                    if ($('.menu-link:hover').length != 0) {
                        tlMenu.resume();
                    } else {
                        tlMenu.reverse();
                    }

                });
            }
    }

    menuLink.click(function(e){
        e.preventDefault();
        toggleDirection();

    });


    $(window).resize(function () {
        createMarginForContent();
        createMarginForMenu();
    })
});