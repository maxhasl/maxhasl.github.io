$(function() {
  $('.jcarousel').jcarousel({
     
  });
  
  $('.jcarousel-prev')  
  .jcarouselControl({
      target: '-=1'
  });

  $('.jcarousel-next')  
  .jcarouselControl({
      target: '+=1'
  });

  $('.jcarousel-pagination')
  .on('jcarouselpagination:active', 'a', function() {
      $(this).find('span').addClass('active');
  })
  .on('jcarouselpagination:inactive', 'a', function() {
      $(this).find('span').removeClass('active');
  })
  .jcarouselPagination({
      item: function(page) {
          return '<a class="page" href="#' + page + '"><span class="checked">&#183</span></a>';
      }
  });

$('.jcarousel-pagination--2')
  .on('jcarouselpagination:active', 'a', function() {
      $(this).find('span').addClass('active');
  })
  .on('jcarouselpagination:inactive', 'a', function() {
      $(this).find('span').removeClass('active');
  })
  .jcarouselPagination({
      item: function(page) {
          return '<a class="page--2" href="#' + page + '"><span class="checked--2">&#183</span></a>';
      }
  });

  // $('.jcarousel').jcarouselAutoscroll({
  //     interval: 3000,
  //     target: '+=1',
  //     autostart: true
  // });

});