'use strict'
//create main link
function createMainLink(id, linkStart, linkFinish){
  var snap = Snap(id);
  var linkD = linkStart;
  var linkBg = snap.path(linkD);
  $(id).hover(function(){
    linkBg.animate({d: linkFinish}, 100);
  },function(){
    linkBg.animate({d: linkStart}, 100);
  });
};
//delete link
function deleteLink(id) {
  $(id).empty();
}
//create height for tile items
function createHeight(id, factor){
  $(id).css({height: $(id).width() * factor});
};
//vertical alignment
function verticalAlign(e, parent){
  for(var i = 0; i<$(e).length; i++){
    $($(e)[i]).css({marginTop: (($(parent).height() - $($(e)[i]).height()) * 0.5)});
  };
};
//create responsive height grid item
function createHeightGridItem(e, factor1536, factor1024){
  if($(window).width()>1535){
    createHeight(e, factor1536);
  } else if($(window).width()>1023){
    createHeight(e, factor1024);
  } else {
    $($(e)).css({height: 'auto'});
  };
};
//create first tile active
function createFistTileActive(item, text, shadow, fill, content){
  var tilesItem = $(item);
  var tilesText = $(text);
  var tilesShadow = $(shadow);
  var tilesFill = $(fill);
  var tilesContent = $(content);

  if($(window).width() > 1279){
    //reset
    $(tilesText).css({width: '0px'});
    // $(tilesShadow).css({opacity: '0.6'});
    $(tilesShadow).hover(function(){
        $(this).css({opacity: '0.3'});
    }, function(){
        $(this).css({opacity: '0.6'});
    });
    $(tilesFill).css({width: '0px',
                      top: tilesItem.height()*0.5-48});
    $('.tabs-checked--tiles-right').removeClass('tabs-checked--tiles-right');
    //active
    $(tilesText[0]).css({width: '25%'});
    $(tilesFill[0]).css({width: '29px'});
    $(tilesShadow[0]).css({opacity: '0'});
    $(tilesShadow[0]).hover().off();
    verticalAlign(tilesContent, tilesItem);

  } else if ($(window).width() > 768 && $(window).width() < 1280){
    $(tilesText).css({width: '50%'});
    $(tilesFill).css({width: '29px',
                      top: tilesItem.height()*0.5-48});
  } else {
    $(tilesFill).css({width: '100%',
                      top: 'auto',
                      bottom: '0'});
    $(tilesText).css({width: '100%'});
  };
};

//create tiles animathion
function createTilesAnimation(item, text, fill, shadow){
  var tilesItem = $(item);
  var tilesText = $(text);
  var tilesFill = $(fill);
  var tilesShadow = $(shadow);

  $(tilesShadow).css({opacity: '0.6'});
  if($(window).width()>1279) {
    $(tilesItem).on('click', function() {
      var index = $(this).index();
      if(index % 2 == 0) {
        $(tilesFill).css({width: '0px'});
        $(tilesShadow).css({opacity: '0.6'});
        $(tilesShadow).hover(function(){
            $(this).css({opacity: '0.3'});
        }, function(){
            $(this).css({opacity: '0.6'});
        });
        $(tilesText).css({width: '0px'});
        $(this).hover();
        $(this).next().css({width: '25%'});
        setTimeout(function(){
          $(tilesFill[index*0.5]).css({width: '29px'});
          $(tilesShadow[index*0.5]).css({opacity: '0'});
          $(tilesShadow[index*0.5]).hover().off();
        }, 500);
      };
    });
  } else if (($(window).width() > 768) && ($(window).width() < 1280)){
    tilesShadow.css({opacity: '0'});
    tilesShadow.hover().off();
    tilesItem.off();
    var checked = tilesFill;
    $(tilesText[0]).css({width: '50%'});
    for(var i=1; i<checked.length; i+=2){
      $(checked[i]).addClass('tabs-checked--tiles-right');
    };
  } else if($(window).width() < 767){
    tilesText.css({height: 'auto'});
    $(tilesText[0]).css({width: '100%'});
  };
};
//email checked
function emailCheck(e, submit, submitSvg, hint){
  var email = $(e);
  if(email.val().indexOf('@')+1){
      $(email).css({borderBottom: "1px solid gainsboro"});
  } else {
      var attrName = $(email).attr('name');
      $(submitSvg).append('<p class="hint '+hint+'">- Please enter valied email</p>');
      $(email).css({borderBottom: "1px solid #ff6377"});
    };
  if($('.'+hint+'').length){
    $(submit).prop('disabled', true);
  } else {
    $(submit).prop('disabled', false);
  };
};
//input text checked
function inputTextCheck(e, submit, submitSvg, hint){
  var text = $(e);
  for(var i = 0; i < $(text).length - 1; i++){
    var val = $(text[i]).val();
    if(val.length == 0){
      var attrName = $(text[i]).attr('name');
      $(text[i]).css({borderBottom: "1px solid #ff6377"});
      $(submitSvg).append('<p class="hint '+hint+'">- Please enter valied ' + attrName + '</p>');
    } else {
      $(text[i]).css({borderBottom: "1px solid gainsboro"});
    };
  };
  if($('.'+hint+'').length){
    $(submit).prop('disabled', true);
  } else {
    $(submit).prop('disabled', false);
  };
};

//responsive width for carousel items
function testimonialsCrRespWidthCarousel(){
  var photo = $('.jcarousel__item__photo--carousel');
  var content = $('.jcarousel__item__content--carousel');
  var arrows = $('.carousel-arrows--carousel');
  var name = $('.profile__name--carousel');
  if($(window).width()>768){
    $(photo).css({width: ($(window).width()-94) * 0.366});
    $(content).css({width: ($(window).width()-94) * 0.634});
    $(arrows).css({width: content.width()});
    $(name).css({width: content.width()-141});
  } else {
    $(photo).css({width: '100%'});
    $(arrows).css({width: '100%'});
  };
};

function testimonialsCreateArrow(id, linkStart, linkFinish){
  var snap = Snap(id);
  var linkD = linkStart;
  var link = snap.path(linkD);
  $(id).hover(function(){
    link.animate({d: linkFinish}, 300);
  },function(){
    link.animate({d: linkStart}, 300);
  });
};

var testimonialsArrowLeft = $('.carousel-arrows__arrow-left');
var testimonialsArrowRight = $('.carousel-arrows__arrow-right');
for(var i = 0; i < testimonialsArrowLeft.length; i++){
  testimonialsCreateArrow(testimonialsArrowLeft[i], 'M 11.34,1 c 0,0 -4.47,10.34 -10.34,10.34 5.87,0 10.44,10.44 10.44,10.44',
      'M 13,4 c 0,0 -6.13,7.34 -12,7.34 5.87,0 12,7.44 12,7.44');
};
for(var i = 0; i < testimonialsArrowLeft.length; i++){
  testimonialsCreateArrow(testimonialsArrowRight[i], 'M 3.6637712,21.78 c 0,0 4.47,-10.34 10.3399998,-10.34 C 8.1337712,11.44 3.5637712,1 3.5637712,1',
      'M 2.004,18.78 c 0,0 6.1297712,-7.34 11.999771,-7.34 C 8.1337712,11.44 2.004,4 2.004,4');
};

//responsive width for tab carousel items
function testimonialsCrRespWidthTabCarousel(){
  if($(window).width()<=768){
    $('.jcarousel__item__content').css({width: $(window).width()-64});
  };
};

// jcarousel settings
$('.jcarousel').jcarousel({
  wrap: 'circular'
});

// $('.jcarousel').jcarouselAutoscroll({
//   interval: 3000,
//   target: '+=1',
//   autostart: true
// });
$('.carousel-arrows__arrow-left').jcarouselControl({
  target: '-=1'
});

$('.carousel-arrows__arrow-right').jcarouselControl({
  target: '+=1'
});

//TABS LINE ANIMATION
function tabsLine(id, width) {
  var snap = Snap(id);
  var lineOne = snap.path('M'+width*0.5+',6.2c'+width*0.29+',0,'+width*0.497+'-5.3,'+width*0.497+'-5.3');
  var lineTwo = snap.path('M'+width*0.5+',6.2C'+width*0.2117+',6.2,'+width*0.002+',1,'+width*0.002+',1');
}

function createTabsLines(id) {
  var lines = $(id);
  var parent = lines.parent();
  for(var i = 0; i < lines.length; i++){
    $(lines[i]).css({width: $(parent[i]).width(),
                     strokeDasharray : $(parent[i]).width(),
                     strokeDashoffset: $(parent[i]).width()});
    tabsLine(lines[i], $(parent[i]).width());
  }
}

function showTabsLine(e) {
  Snap(e).animate({strokeDashoffset: '0'}, 500);
}
function hideTabsLines(id) {
  var tabsLines = $(id);
  for(var i = 0; i<tabsLines.length; i++){
    var width = jQuery(tabsLines[i]).parent().width();
    Snap(tabsLines[i]).animate({strokeDashoffset: width}, 400);
  }
}

function createMaxHeightContent(elClassOrjQueryEl, windowMinWidthToApply) {
    console.log('We are going to find end set max height to group of elements', elClassOrjQueryEl);
    var $content = $(elClassOrjQueryEl);
    $content.css({height: 'auto',
    minHeight: '0'});

    if ($(window).width() < windowMinWidthToApply) return;

    var maxHeight = 0;
    $content.each(function (key, el) {
        var elHeight = $(el).height();
        console.log('Compare with', el, 'whom has height', elHeight);
        maxHeight = (elHeight > maxHeight) ? elHeight : maxHeight;
        if(elHeight > 800) {
            var $el = jQuery(el);
            console.log('each');
            _.each(['.pricing-content__price', '.pricing-content__name', '.pricing-content__list'], function (childElClass) {
                console.log('step');
                var $childEl = $el.find(childElClass);
                console.log('class', childElClass,
                    'margin-top:', $childEl.css('margin-top'),
                    'padding-top:', $childEl.css('padding-top'),
                    'height:', $childEl.css('height'),
                    'padding-bottom:', $childEl.css('padding-bottom'),
                    'margin-bottom:', $childEl.css('margin-bottom')
                );

                debugger; // <-- отладчик остановится тут
            });
        }
    });
    console.log('////////////////////////////////////////////////////////');
    console.log('Finally we set height as', maxHeight);

    $content.css({"min-height": maxHeight});
}
/////FAQ
function createTabSvgLines(list, carousel) {
  if($(window).width() > 1024){
    createTabsLines(list);
    showTabsLine($(list)[0]);
  } else{
    createTabsLines(carousel);
    showTabsLine($(carousel)[0]);
  }
}

function carouselFaqInit(id) {
  var carouselFaq = $(id);
  carouselFaq.jcarousel({
    center: true,
    wrap: 'auto'
  });
  carouselFaq.jcarouselAutoscroll({
    target: '+=0',
    autostart: false
  });
}

function bindTabCarouselArrowRight(item, line) {
  var listItem = $(item);
  var listItemVisible = $(item + ':visible');
  if(listItemVisible.index() < listItem.length - 1){
    listItem.css({display: 'none'});
    var itemLine = $(line)[listItemVisible.index() + 1];
    hideTabsLines(line);
    setTimeout(function(){
      showTabsLine(itemLine);
    }, 300);
    $(listItem[listItemVisible.index() + 1]).css({display: 'block'});
  }
}

function bindTabCarouselArrowLeft(item, line){
  var listItem = $(item);
  var listItemVisible = $(item + ':visible');
  if(listItemVisible.index() != 0){
    listItem.css({display: 'none'});
    var itemLine = $(line)[listItemVisible.index() - 1];
    hideTabsLines(line);
    setTimeout(function(){
      showTabsLine(itemLine);
    }, 300);
    $(listItem[listItemVisible.index() - 1]).css({display: 'block'});
  }
}

function createAllTabIcons(id) {
  var tabsCross = $(id);
  for(var i = 0; i < tabsCross.length; i++){
    var snap = Snap(tabsCross[i]);
    var arrow = snap.path('M 1 1.08 C 1 1.08 9.29 4.5 9.29 9 C 9.29 4.5 17.67 1 17.67 1');
  }
}

function createFirstTabCross(item) {
  var activeItem = $(item);
  var snap = Snap(activeItem[0]);
  $(activeItem[0]).empty();
  $(activeItem[0]).css({marginTop: '2px'});
  snap.path('M 1 1 L 15.61 15.61');
  snap.path('M 1 1.08 C 1 1.08 9.29 4.5 9.29 9 C 9.29 4.5 17.67 1 17.67 1').animate({d: 'M 5.29 11.71 L 1 15.61'}, 100);
  snap.path('M 14.93 1 L 10.64 5.29');
}

function createActiveTabCross(id) {
  var snap = Snap(id);
  snap.path('M 1 1 L 15.61 15.61');
  snap.path('M 1 1.08 C 1 1.08 9.29 4.5 9.29 9 C 9.29 4.5 17.67 1 17.67 1').animate({d: 'M 5.29 11.71 L 1 15.61'}, 100);
  snap.path('M 14.93 1 L 10.64 5.29');
}
