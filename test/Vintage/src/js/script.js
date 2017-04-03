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


    
    //set animations
    tl.to(logoImage[0], 1, {y:0, opacity: 1})
        .to(logoImage[1], 1, {x:0, opacity: 1}, '-=0.3')
            .to(logoTitle, 1, {y:0, opacity: 1}, '-=1')
                .to(languages, 1, {marginTop: languagesMarginTop, opacity: 1}, '-=1')
                    .to(menuLinkImage[2], 1, {y:0, opacity: 1}, '-=2')
                        .to(menuLinkTitle, 1, {marginTop: 0, opacity: 1}, '-=1')
                            .to(menuLinkImage[1], 0.5, {opacity: 1}, '-=0.3')
                                .to(menuLinkImage[0], 0.5, {opacity: 1}, '-=0.3');




    tl.to(mainTitle, 1, {marginTop: mainTitleMarginTop, opacity: 1})
        .to(mainTitleLine[0], 1, {marginTop: 0, height: mainTitleLineHeight, opacity: 1}, '-=1')
            .to(mainTitleLine[1], 1, {marginTop: 0, height: mainTitleLineHeight, opacity: 1}, '-=0.7')
                .to(mainTitleLine[2], 1, {marginTop: 0, height: mainTitleLineHeight, opacity: 1}, '-=0.7');


    $(window).resize(function () {
        createMarginForContent();
    })
});