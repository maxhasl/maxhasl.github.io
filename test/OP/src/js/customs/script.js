$(function() {
  //added banner link
  var windowSize = $(window).width();
  console.log(windowSize);
  function createLink(linkStart, linkFinish){
    var bannerLink = Snap('.banner__link__svg');
    var linkD = linkStart;
    var linkBg = bannerLink.path(null);
    linkBg = bannerLink.path(linkD);
    $('.banner__link__svg').hover(function(){
      linkBg.animate({d: linkFinish}, 200);
    },function(){
      linkBg.animate({d: linkStart}, 200);
    });
  };
  window.addEventListener("resize", function() {
  	alert("1dasd");
    $('banner__link__svg').remove();
    $('banner__link').append('<svg class="banner__link__svg"><span class="banner__link__svg__text">FIND OUT MORE</span></svg>');
    changelink();
    alert($(window).width());
  }, false);
  function changelink(){
      if(windowSize>375){
        createLink("M 0 0 L 0 9.99 C 0 19.97 0 23.98 0 24.86 C 0 25.23 0 26.42 0 27.86 C 0 29.3 0 30.5 0 30.84 C 0 31.74 0 35.75 0 45.73 L 0 56 C 0 56 41.81 56 111.53 56 C 185.55 56 224 56 224 56 L 224 56 C 224 35.75 224 31.74 224 30.86 C 224 30.49 224 29.3 224 27.86 C 224 26.42 224 25.22 224 24.88 C 224 23.98 224 19.97 224 9.99 L 224 0 C 224 0 182.56 0 111.53 0 C 49.67 0 0 0 0 0 Z M 0 0",
                   "M 0 0 L 0 9.99 C 0 19.97 5.14 23.98 8.51 24.86 C 9.84 25.23 10.83 26.42 10.83 27.86 C 10.83 29.3 9.84 30.5 8.5 30.84 C 5.14 31.74 0 35.75 0 45.73 L 0 55.72 C 0 55.72 41.81 52.36 111.53 52.36 C 185.55 52.36 224 55.72 224 55.72 L 224 45.73 C 224 35.75 218.86 31.74 215.49 30.86 C 214.16 30.49 213.17 29.3 213.17 27.86 C 213.17 26.42 214.16 25.22 215.5 24.88 C 218.86 23.98 224 19.97 224 9.99 L 224 0 C 224 0 182.56 3.36 111.53 3.36 C 49.67 3.36 0 0 0 0 Z M 0 0");
      } else if(windowSize==375){
        createLink("M 0 0 L 0 9.99 C 0 19.97 0 23.98 0 24.86 C 0 25.23 0 26.42 0 27.86 C 0 29.3 0 30.5 0 30.84 C 0 31.74 0 35.75 0 45.73 L 0 55.72 C 0 55.72 38.88 55.72 107.04 55.72 C 179.4 55.72 216 55.72 216 55.72 L 216 45.73 C 216 35.75 216 31.74 216 30.86 C 216 30.49 216 29.3 216 27.86 C 216 26.42 216 25.22 216 24.88 C 216 23.98 216 19.97 216 9.99 L 216 0 C 216 0 176.49 0 107.04 0 C 46.56 0 0 0 0 0 Z M 0 0",
                   "M 0 0 L 0 9.99 C 0 19.97 5.02 23.98 8.32 24.86 C 9.62 25.23 10.59 26.42 10.59 27.86 C 10.59 29.3 9.62 30.5 8.31 30.84 C 5.02 31.74 0 35.75 0 45.73 L 0 55.72 C 0 55.72 38.88 52.36 107.04 52.36 C 179.4 52.36 216 55.72 216 55.72 L 216 45.73 C 216 35.75 210.98 31.74 207.68 30.86 C 206.38 30.49 205.41 29.3 205.41 27.86 C 205.41 26.42 206.38 25.22 207.69 24.88 C 210.98 23.98 216 19.97 216 9.99 L 216 0 C 216 0 176.49 3.36 107.04 3.36 C 46.56 3.36 0 0 0 0 Z M 0 0");
      } else if(windowSize<375){
        createLink("M 0 0 L 0 9.99 C 0 19.97 0 23.98 0 24.86 C 0 25.23 0 26.42 0 27.86 C 0 29.3 0 30.5 0 30.84 C 0 31.74 0 35.75 0 45.73 L 0 55.72 C 0 55.72 37.33 55.72 99.58 55.72 C 165.67 55.72 200 55.72 200 55.72 L 200 45.73 C 200 35.75 200 31.74 200 30.86 C 200 30.49 200 29.3 200 27.86 C 200 26.42 200 25.22 200 24.88 C 200 23.98 200 19.97 200 9.99 L 200 0 C 200 0 163 0 99.58 0 C 44.35 0 0 0 0 0 Z M 0 0",
                   "M 0 0 L 0 9.99 C 0 19.97 4.58 23.98 7.59 24.86 C 8.78 25.23 9.67 26.42 9.67 27.86 C 9.67 29.3 8.78 30.5 7.59 30.84 C 4.58 31.74 0 35.75 0 45.73 L 0 55.72 C 0 55.72 37.33 52.36 99.58 52.36 C 165.67 52.36 200 55.72 200 55.72 L 200 45.73 C 200 35.75 195.42 31.74 192.41 30.86 C 191.22 30.49 190.33 29.3 190.33 27.86 C 190.33 26.42 191.22 25.22 192.41 24.88 C 195.42 23.98 200 19.97 200 9.99 L 200 0 C 200 0 163 3.36 99.58 3.36 C 44.35 3.36 0 0 0 0 Z M 0 0");
      };
  };
    //end added banner link
  changelink();
});
