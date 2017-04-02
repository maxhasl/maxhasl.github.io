$(function () {
    function createMarginForContent() {
        var contentHeight = $('.home__title').height() + $('.play').height();
        $('.home__title').css({marginTop: ($(window).height() - contentHeight)/2+19});
    }
    createMarginForContent();

    $(window).resize(function () {
        createMarginForContent();
    })
});