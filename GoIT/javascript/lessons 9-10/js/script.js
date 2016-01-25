$(function() {
  $('.jcarousel').jcarousel({
     
  });
  
  $('.jcarousel-prev')
  .on('jcarouselcontrol:active', function() {
      $(this).removeClass('inactive');
  })
  .on('jcarouselcontrol:inactive', function() {
      $(this).addClass('inactive');
  })
  .jcarouselControl({
      target: '-=1'
  });

  $('.jcarousel-next')
  .on('jcarouselcontrol:inactive', function() {
      $(this).addClass('inactive');
  })
  .on('jcarouselcontrol:active', function() {
      $(this).removeClass('inactive');
  })
  .jcarouselControl({
      target: '+=1'
  });

  $('.jcarousel-pagination')
  .on('jcarouselpagination:active', 'a', function() {
      $(this).addClass('active');
  })
  .on('jcarouselpagination:inactive', 'a', function() {
      $(this).removeClass('active');
  })
  .jcarouselPagination({
      item: function(page) {
          return '<a class="page" href="#' + page + '">' + page + '</a>';
      }
  });
  $('.jcarousel').jcarouselAutoscroll({
      interval: 3000,
      target: '+=1',
      autostart: true
  });
  
  var $secondMenu = $('.menu__js__2');
  var $thirdMenu = $('.menu__js__3');

  $secondMenu.on('mouseover', function(){
    var $childMenu = $('.menu--1');
    var $menuItem = $('.menu__item');
    $childMenu.show(400);
    $menuItem.animate({
        backgroundColor:"#aaa",}, 500)
  });

    $secondMenu.on('mouseleave', function(){
    var $childMenu = $('.menu--1');
    $childMenu.hide(400);
  });

  $thirdMenu.on('mouseover', function(){
    var $childMenu = $('.menu--2');
    $childMenu.show(400);
  });

  $thirdMenu.on('mouseleave', function(){
    var $childMenu = $('.menu--2');
    $childMenu.hide(400);
  });


// НЕ РАБОТАЕТ ХЗ ПОЧЕМУ
// $('.test').on('mouseover',
//   function () {
//     $(this).animate({
//         backgroundColor:"#03C",
//     }, 500 );
// }); 

// $('.test').on('mouseleave', function() {
//     $(this).animate({
//         backgroundColor:"#0CF",
//     }, 500 );
// });
});