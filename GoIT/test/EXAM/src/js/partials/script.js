'use strict'
//CAROUSEL
$(function() {
  $.support.cors = true;
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
// MASONRY
  // function masonry() {
  //   var $container = $('#masonry-container');
  //   // Инициализация Масонри, после загрузки изображений
  //   $container.imagesLoaded( function() {
  //      $container.masonry({
  //      itemSelector: '.masonry__item',
  //      gutter: 20
  //      });

  //   });
  // };

   var queryDefault = "http://api.pixplorer.co.uk/image?&amount=7&size=mb";

  function search(link) {
    
    $.ajax({ 
        type: 'GET',
        url: link,
        dataType: 'json',
        cache: false,
    })
    .success( function(data){ 
        var obj = {
          data: data
        };
        $('#start__container').after('<section id="masonry-container" class="clearfix"></section>');
        var html = $('#images-template').html();
        var content = tmpl(html, obj);
        setTimeout(function(){
        $('#masonry-container').append(content);
        // masonry();
        }, 300);
        console.log(data);
    });
  };


   $('.find__link--2').on('click', function (e){
       e.preventDefault();
       var oldItems = $('#masonry-container');
       oldItems.remove();
       var word = $('.holiday__input__text').val();
       $('.holiday__input__text').val("");
       var link = 'http://api.pixplorer.co.uk/image?word='+word+'&amount=7&size=mb';
       search(link);
    });

  search(queryDefault);   

});