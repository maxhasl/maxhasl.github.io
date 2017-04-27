$(function () {

    $('.menu__mobile').on('click', function () {
        var list = $('.menu__list');
        var logo = $('.header__logo');
        console.log('calc(50% - '+ logo.width()/2+')');
        if(list.is(':visible')){
            list.hide('slow');
            if($(window).width()< 479){
                logo.css({left: 16, opacity: 1});
            } else {
                logo.css({left: 16});
            }
        } else {
            list.show('slow');
            if($(window).width()< 479){
                logo.css({left: 'calc(50% - '+ logo.width()/2+'px)', opacity: 0});
            } else {
                logo.css({left: 'calc(50% - '+ logo.width()/2+'px)'});
            }
        }
    });

});