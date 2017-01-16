jQuery(function () {
   jQuery('.tabs__control__item--rest-menu').on('click', function() {
      var item = jQuery(this).parent().parent().find('.tabs__list__item--rest-menu');
      item.css({display: 'none'});
      item.parent().find('.this_line_svg').attr('class', 'tabs__control__item__line tabs__control__item__line--rest-menu');
      var line = jQuery(this).find('.tabs__control__item__line--rest-menu');
      line.attr("class", "tabs__control__item__line tabs__control__item__line--rest-menu this_line_svg");
      hideTabsLines(jQuery(this).parent().find('.tabs__control__item__line--rest-menu'));
      setTimeout(function(){
         showTabsLine('.this_line_svg');
      }, 500);
      jQuery(item[jQuery(this).index()]).css({display: 'block'});
   });
   var restMenuTabBlock = jQuery('.tabs--rest-menu');
   for(var i = 0; i < restMenuTabBlock.length; i++) {
      createTabsLines(jQuery(restMenuTabBlock[i]).find('.tabs__control__item__line--rest-menu'));
      showTabsLine(jQuery(restMenuTabBlock[i]).find('.tabs__control__item__line--rest-menu')[0]);
   }
});