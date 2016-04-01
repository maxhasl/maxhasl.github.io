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
// MASONRY
  $.support.cors = true;
  function masonry() {
    var $container = $('#masonry-container');
       $container.isotope({
       itemSelector: '.masonry__item',
       masonry: {
                 gutter: 20
                }
    });
  };

   var queryDefault = "http://api.pixplorer.co.uk/image?&amount=7&size=s";

   function search(link) {
    
    $.ajax({ 
        type: 'GET',
        url: link,
        dataType: 'json',
        cache: false,
        success: function(data){ 
                                var obj = {
                                  data: data
                                };
                                $('#start__container').after('<section id="masonry-container" class="clearfix"></section>');
                                var html = $('#images-template').html();
                                var content = tmpl(html, obj);
                                setTimeout(function(){
                                $('#masonry-container').append(content);
                                masonry();
                                }, 300);
                               }
    })
  };

  
   $('.find__link--2').on('click', function (e){
       e.preventDefault();
       var oldItems = $('#masonry-container');
       oldItems.remove();
       var word = $('.holiday__input__text').val();
       $('.holiday__input__text').val("");
       var link = "http://api.pixplorer.co.uk/image?word="+word+"&amount=7&size=s"
       search(link);
       setTimeout(take, 2000);
    });

   search(queryDefault);   
//MODAL
    var oldIE;
       if ($('html').is('.lt-ie7, .lt-ie8, .lt-ie9')) {
          oldIE = true;
       }

       if (oldIE) {
        return 0;
       } else {
        function createModal(link) {
    var $body = $('body');
    var $modal = $('<div class="modal--back"><img class="modal" src="'+link+'"></div>');
    // var $backModal = $('<div class="modal--back"></div>');
    // $body.append($backModal);
    $body.append($modal);
    // $backModal.on('click', hideModal);
  };

  function hideModal(){
    $('.modal').remove();
    $('.modal--back').remove();
  }

  setTimeout(take, 2000);
  function take(){
    $('.masonry__image').on('click', function(){
          var image = $(this);
          var link = image[0].currentSrc;
          createModal(link);
    })
  };
       }

  

});