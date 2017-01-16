jQuery(function () {
//grid
    createHeightGridItem('.grid__item--services', 0.53, 0.6);
    var servicesGridFill = jQuery('.grid__item__fill--services');

    for(var i = 0; i < servicesGridFill.length; i++){
        if(i % 2 == 0) {
            jQuery(servicesGridFill[i]).addClass('grid__item__fill--services-right');
        } else {
            jQuery(servicesGridFill[i]).addClass('grid__item__fill--services-left');
        }
    }
    if(jQuery(window).width() > 1023){
        verticalAlign('.grid-content--services', '.grid__item--services');
        verticalAlign('.grid-content--services-carousel', '.jcarousel__item--services', 79);

    }

    jQuery(window).resize(function(){
        createHeightGridItem('.grid__item--services', 0.518, 0.5789);
        if(jQuery(window).width() > 1023){
            verticalAlign('.grid-content--services', '.grid__item--services');
            verticalAlign('.grid-content--services-carousel', '.jcarousel__item--services', 79);
        }
    });
});