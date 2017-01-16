var pricingItemTop = $('.pricing__block__list__item__svg--top');
var pricingItemBottom = $('.pricing__block__list__item__svg--bottom');
var pricingItemContainer = pricingItemTop.parent();

setTimeout(function () {
    var pricingList = $('.pricing__block__list');
    for (var i = 0; i < pricingList.length; i++){
        var item = $(pricingList[i]).find('.pricing-content');
        createMaxHeightContent(item, 673);
    }
}, 0);

$(window).resize(function () {
    for (var i = 0; i < pricingList.length; i++){
        var item = $(pricingList[i]).find('.pricing-content');
        createMaxHeightContent(item, 673);
    }
});

function createPricingBackground(id, link, animate, container) {
    var snap = Snap(id);
    var linkBg = snap.path(link);
    $(container).hover(function(){
        linkBg.animate({d: animate}, 100);
    },function(){
        linkBg.animate({d: link}, 100);
    });
}

for (var i=0; i < pricingItemTop.length; i++) {
    createPricingBackground(pricingItemTop[i],'M288.5,25.5v-25h-144l0,0c0,0,2,0,0,0s0,0,0,0h-22.7H0.5v25',
        'M288.5,24.6v-24c0,0-54.9,6.3-122.2,7.6c-11.8,1-16.7,7.6-17.8,12.1c-0.5,1.9-2.2,3.3-4.2,3.3s-3.7-1.4-4.2-3.3c-1.1-4.4-5.9-10.8-17.2-12C54.6,7.1,0.5,0.6,0.5,0.6v24',
        pricingItemContainer[i]);
}
for (var i=0; i < pricingItemBottom.length; i++) {
    createPricingBackground(pricingItemBottom[i],'M0.5,0v15c0,0,63.2,0,142.3,0s145.8,0,145.8,0V0', 'M0.5,0v15c0,0,63.3-3.6,142.4-3.6S288.5,15,288.5,15V0', pricingItemContainer[i]);
}

var pricingLinkOne = $('.link__svg--pricing-content-option-one');
for (var i=0; i < pricingLinkOne.length; i++) {
    createMainLink(pricingLinkOne[i],
        'M96,0C24.3,0,0,0,0,0v9.9c0,9.8,0,9.8,0,15c0,2.6,0,1.2,0,2.6s0,0,0,2.9c0,6,0,6,0,15.8V56c0,0,24.7,0,96.7,0s95.3,0,95.3,0v-9.9c0-9.8,0-9.8,0-15.5c0-2.6,0-1.2,0-2.6s0,0,0-2.8c0-5.5,0-5.5,0-15.3V0C192,0,167.7,0,96,0z',
        'M 96.31 2.96 C 24.61 2.96 0 0 0 0 L 0 9.87 C 0 19.71 4.96 24.17 8.33 25.04 C 9.67 25.4 10.65 26.58 10.65 28 C 10.65 29.42 9.67 30.6 8.33 30.95 C 4.96 31.83 0 36.29 0 46.13 L 0 56 C 0 56 24 53 96 53 C 168 53 192 56 192 56 L 192 46.13 C 192 36.29 186.69 31.83 183.32 30.96 C 181.99 30.6 181 29.42 181 28 C 181 26.58 181.99 25.4 183.32 25.05 C 186.69 24.17 192 19.71 192 9.87 L 192 0 C 192 0 168 2.96 96.31 2.96 Z M 96.31 2.96');
}

var pricingLinkTwo = $('.link__svg--pricing-content-option-two');
for (var i=0; i < pricingLinkTwo.length; i++) {
    createMainLink(pricingLinkTwo[i],
        'M213.9,0c-12.2,0-18,0-18,0l0,0c-4.1,0-2.3,0-4.1,0c-1.8,0,0,0-4.5,0l0,0c0,0-4.8,0-17,0H0v64h224V0H213.9z',
        'M213.9,0c-12.2,0-17.1,8.1-18.1,13.4l0,0c-0.4,2.1-1.9,3.6-3.7,3.6c-1.8,0-3.2-1.6-3.7-3.6l0,0c-1.1-5.3-6-13.4-18.1-13.4H0v64h224V0H213.9z');
}
