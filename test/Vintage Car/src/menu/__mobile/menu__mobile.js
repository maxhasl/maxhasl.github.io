$(function () {

    $('.menu__mobile').on('click', function () {
        var list = $('.menu__list');
        var logo = $('.header__logo');
        console.log('calc(50% - '+ logo.width()/2+')');
        if(list.is(':visible')){
            list.hide('slow');
            logo.css({left: 16});
        } else {
            list.show('slow');
            logo.css({left: 'calc(50% - '+ logo.width()/2+'px)'});
        }
    });

});