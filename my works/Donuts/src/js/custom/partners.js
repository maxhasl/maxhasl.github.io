jQuery(function () {
    function checkPartnersCarousel() {
        var wrapper = jQuery('.carousel-wrap--partners');
        var container = jQuery('.jcarousel--partners');
        var items = jQuery('.jcarousel__list__item--partners').length;
        if(items > 4) return;
        var windowWidth = jQuery(window).width();
        console.log(items);
        if(windowWidth > 1535) {
            container.css({maxWidth: 256 * (items-2)});
            wrapper.css({maxWidth: container.width() + 276});
        } else if (windowWidth > 1023) {
            container.css({maxWidth: 170 * (items-2)});
            wrapper.css({maxWidth: container.width() + 196});
        } else if (windowWidth > 767 && items < 4) {
            container.css({maxWidth: 90 * (items-2)});
            wrapper.css({maxWidth: container.width() + 80});
        } else if (windowWidth > 374 && items < 3) {
            container.css({maxWidth: 70 * (items-2)});
            wrapper.css({maxWidth: container.width() + 70});
        } else { return }
    }
    checkPartnersCarousel();

    jQuery('.jcarousel').jcarousel({
        wrap: 'circular'
    });

    jQuery(window).resize(function () {
        checkPartnersCarousel();
    })
});