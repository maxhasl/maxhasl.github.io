$(function(){
  //GRID
  //create height for grid items
  createHeightGridItem('.grid__item--read-more', 0.518, 0.5789);
  //vertical alignment for grid content
  verticalAlign('.grid-content--read-more', '.grid__item--read-more');
  //LIST
  //create links
  function readMoreCreateListLinks(){
    var linkContent = $('.link__svg--read-more-content');
    var linkList = $('.link__svg--read-more-lists');
    for(var i = 0; i < linkContent.length; i++){
      createMainLink($(linkContent)[i],
                    'M 84.53 0 C 22.67 0 0 0 0 0 L 0 10 C 0 19.97 0 23.98 0 24.86 L 0 24.88 C 0 25.23 0 26.42 0 27.86 C 0 29.3 0 30.5 0 30.85 L 0 30.86 C 0 31.74 0 35.75 0 45.73 L 0 55.72 C 0 55.72 14.81 55.72 84.53 55.72 C 158.54 55.72 169.99 55.72 169.99 55.72 L 169.99 45.73 C 169.99 35.75 169.99 31.74 169.99 30.86 L 169.99 30.84 C 169.99 30.49 169.99 29.3 169.99 27.86 C 169.99 26.42 169.99 25.23 169.99 24.88 L 169.99 24.86 C 169.99 23.98 169.99 19.97 169.99 10 L 169.99 0 C 169.99 0 155.56 0 84.53 0',
                    'M 84.53 3.36 C 22.67 3.36 0 0 0 0 L 0 10 C 0 19.97 5.13 23.98 8.51 24.86 L 8.5 24.88 C 9.84 25.23 10.83 26.42 10.83 27.86 C 10.83 29.3 9.84 30.5 8.5 30.85 L 8.51 30.86 C 5.13 31.74 0 35.75 0 45.73 L 0 55.72 C 0 55.72 14.81 52.36 84.53 52.36 C 158.54 52.36 169.99 55.72 169.99 55.72 L 169.99 45.73 C 169.99 35.75 164.86 31.74 161.49 30.86 L 161.49 30.84 C 160.15 30.49 159.17 29.3 159.17 27.86 C 159.17 26.42 160.15 25.23 161.49 24.88 L 161.49 24.86 C 164.86 23.98 169.99 19.97 169.99 10 L 169.99 0 C 169.99 0 155.56 3.36 84.53 3.36');
    };
    for(var i = 0; i < linkList.length; i++){
      createMainLink($(linkList)[i],
                'M 0 0 L 0 9.99 C 0 19.97 0 23.98 0 24.86 C 0 25.23 0 26.42 0 27.86 C 0 29.3 0 30.5 0 30.84 C 0 31.74 0 35.75 0 45.73 L 0 56 C 0 56 41.81 56 111.53 56 C 185.55 56 224 56 224 56 L 224 56 C 224 35.75 224 31.74 224 30.86 C 224 30.49 224 29.3 224 27.86 C 224 26.42 224 25.22 224 24.88 C 224 23.98 224 19.97 224 9.99 L 224 0 C 224 0 182.56 0 111.53 0 C 49.67 0 0 0 0 0 Z M 0 0',
                'M 0 0 L 0 9.99 C 0 19.97 5.14 23.98 8.51 24.86 C 9.84 25.23 10.83 26.42 10.83 27.86 C 10.83 29.3 9.84 30.5 8.5 30.84 C 5.14 31.74 0 35.75 0 45.73 L 0 55.72 C 0 55.72 41.81 52.36 111.53 52.36 C 185.55 52.36 224 55.72 224 55.72 L 224 45.73 C 224 35.75 218.86 31.74 215.49 30.86 C 214.16 30.49 213.17 29.3 213.17 27.86 C 213.17 26.42 214.16 25.22 215.5 24.88 C 218.86 23.98 224 19.97 224 9.99 L 224 0 C 224 0 182.56 3.36 111.53 3.36 C 49.67 3.36 0 0 0 0 Z M 0 0');
    };
  };
  setTimeout(function () {
    var readMoreList = jQuery('.read-more__lists__list');
    for (var i = 0; i < readMoreList.length; i++){
      var title = jQuery(readMoreList[i]).find('.read-more-content__title');
      var description = jQuery(readMoreList[i]).find('.read-more-content__description');
      createMaxHeightContent(title, 1023);
      createMaxHeightContent(description, 1023);
    }
  }, 0);
  //LINES
  //create height for lines items
  createHeightGridItem('.grid__item--read-more-lines', 0.67, 1);
  //vertical alignment for lines content
  if($(window).width() > 1023){
    verticalAlign('.read-more-content--lines', '.grid__item--read-more-lines');
  }
  //TILES
  createHeight('.tiles__item--read-more', 1.34);
  createTilesAnimation('.tiles__item--read-more',
      '.tiles__item--read-more-text',
      '.tabs-checked--tiles-read-more',
      '.shadow--tiles-read-more');
  createFistTileActive('.tiles__item--read-more',
                       '.tiles__item--read-more-text',
                       '.shadow--tiles-read-more',
                       '.tabs-checked--tiles-read-more',
                       '.read-more-content--tiles');
//create responsive tiles content
  function readMoreCreateRespTilesContent(){
    var width = $('.tiles__item--read-more').width();
    $('.read-more-content--tiles').css({width: width});
    if($(window).width() > 768){
      verticalAlign('.read-more-content--tiles', '.tiles__item--read-more');
    } else {
      $($('.read-more-content--tiles')).css({marginTop: '0px'});
    };
  };

  // calling new functions
  readMoreCreateListLinks();
  readMoreCreateRespTilesContent();

  $(window).resize(function(){
    createHeightGridItem('.grid__item', 0.518, 0.5789);
    createHeightGridItem('.grid__item--read-more-lines', 0.67, 1);
    if(jQuery(window).width() > 1023){
      verticalAlign('.grid-content--read-more', '.grid__item--read-more');
      verticalAlign('.read-more-content--lines', '.grid__item--read-more-lines');
    } else {
      jQuery('.grid-content--read-more').removeAttr('style');
      jQuery('.read-more-content--lines').removeAttr('style');
    }
    createHeight('.tiles__item--read-more', 1.34);
    setTimeout(function () {
      var readMoreList = jQuery('.read-more__lists__list');
      for (var i = 0; i < readMoreList.length; i++){
        var title = jQuery(readMoreList[i]).find('.read-more-content__title');
        var description = jQuery(readMoreList[i]).find('.read-more-content__description');
        createMaxHeightContent(title, 1023);
        createMaxHeightContent(description, 1023);
      }
    }, 0);
    createTilesAnimation('.tiles__item--read-more',
                         '.tiles__item--read-more-text',
                         '.tabs-checked--tiles-read-more',
                         '.shadow--tiles-read-more');

    createFistTileActive('.tiles__item--read-more',
                         '.tiles__item--read-more-text',
                         '.shadow--tiles-read-more',
                         '.tabs-checked--tiles-read-more',
                         '.read-more-content--tiles');

    readMoreCreateRespTilesContent();
  });
});

