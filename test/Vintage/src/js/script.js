'use strict';
$(function () {
    //create margin for main content
    function createMarginForContent() {
        var contentHeight = $('.home__title').height() + $('.play').height();
        $('.home__title').css({marginTop: ($(window).height() - contentHeight)/2+19});
    }
    createMarginForContent();
    //create main title split text
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
    
    
    
    $(window).resize(function () {
        createMarginForContent();
    })
});