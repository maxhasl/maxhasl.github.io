jQuery(document).ready(function() {
    
    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 280,
        itemMargin: 17,
        controlNav: false,
        directionNav: true,
        prevText: '',
        nextText: '',
        start: function(slider){
            flexslider = slider;
        }
    });
    
});