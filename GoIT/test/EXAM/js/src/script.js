'use strict'
//CAROUSEL
$(function() {
  $('.jcarousel').jcarousel({
      wrap: 'circular'
  });
  
  $('.jcarousel').jcarouselAutoscroll({
      interval: 3000,
      target: '+=1',
      autostart: true,
  });

   $('.jcarousel__left')  
  .jcarouselControl({
      target: '-=1'
  });

  $('.jcarousel__right')  
  .jcarouselControl({
      target: '+=1'
  });

//AJAX
   var queryDefault = "http://api.pixplorer.co.uk/image?&amount=7";
   function search (link) {
   	$.getJSON(link,
        function(data){
        var obj = {
           data: data
        };
        var html = $('#images-template').html();
        var content = tmpl(html, obj);
        $('#masonry-container').append(content);
        masonry();
    });
   };

   search(queryDefault);   
  
   $('.find__link--2').on('click', function (e){
	  e.preventDefault();
	  var oldItems = $('#masonry-container').find('.masonry__item');
    oldItems.remove();

    $('#masonry-container').masonry( 'remove', oldItems )
    // layout remaining item elements
    .masonry('layout');
});

	  var word = $('.holiday__input__text').val();
	  $('.holiday__input__text').val("");
	  var link = "http://api.pixplorer.co.uk/image?word="+word+"&amount=7&size=tb"
	  search(link);
});

//MASONRY
  function masonry() {
    var $container = $('#masonry-container');
    // Инициализация Масонри, после загрузки изображений
    $container.imagesLoaded( function() {
       $container.masonry({
       itemSelector: '.masonry__item',
       gutter: 20
       });
    });
  };

});