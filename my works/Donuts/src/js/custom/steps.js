//grid
jQuery(function () {
    createHeightGridItem('.grid__item--steps', 0.505, 0.56);
    var stepsGridFill = jQuery('.grid__item__fill--steps');

    for(var i = 0; i < stepsGridFill.length; i++){
        if(i % 2 == 0) {
            jQuery(stepsGridFill[i]).addClass('grid__item__fill--steps-right');
        } else {
            jQuery(stepsGridFill[i]).addClass('grid__item__fill--steps-left');
        }
    }

    if(jQuery(window).width() > 1023){
        verticalAlign('.grid-content--steps', '.grid__item--steps');
    } else {
        jQuery('.grid-content--steps').removeAttr('style');
    }

    jQuery(window).resize(function(){
        createHeightGridItem('.grid__item--steps', 0.505, 0.56);
        if(jQuery(window).width() > 1023){
            verticalAlign('.grid-content--steps', '.grid__item--steps');
        } else {
            jQuery('.grid-content--steps').removeAttr('style');
        }
    });
});