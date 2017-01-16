jQuery(function () {
    //language
    jQuery('.language').on('click', function () {
        jQuery(this).find('.language__list').toggle();
        jQuery(this).find('.fa').toggleClass(function() {
            if (jQuery(this).is('.fa-chevron-down')) {
                jQuery(this).removeClass('fa-chevron-down');
                return 'fa-chevron-up';
            } else {
                jQuery(this).removeClass('fa-chevron-up');
                return 'fa-chevron-down';
            }
        });
    });
    if(jQuery(window).width() > 1023){
        var siteMenuTwo = jQuery('.site__menu__list-two__list');
        setTimeout(function () {
            siteMenuTwo.css({width: siteMenuTwo.parent().parent().width() + 20});
        }, 0);

        jQuery('.site__menu__list-two__item__title').on('click', function () {
            var localThis = jQuery(this);
            if(jQuery(this).next().is(':visible')){
                jQuery(this).next().slideUp('slow');
                return;
            }
            jQuery(this).parent().parent().find('.site__menu__list-two__item__title').css({opacity: 0.8});
            jQuery(this).parent().parent().find('.site__menu__list-two__item__title').hover(function () {
                jQuery(this).css({opacity: 1});
            }, function () {
                jQuery(this).css({opacity: 0.8});
            });
            jQuery(this).parent().parent().find('.site__menu__list-two__item__fill').css({height: '0px'});
            jQuery(this).parent().parent().find('.site__menu__list-two__list').slideUp('slow');
            setTimeout(function () {
                jQuery(localThis).next().slideDown('slow');
                jQuery(localThis).parent().find('.site__menu__list-two__item__fill').css({height: '7px',
                    marginLeft: jQuery(localThis).parent().width() / 2 - 11});
                jQuery(localThis).hover(function () {
                    jQuery(localThis).css({opacity: 1});
                }, function () {
                    jQuery(localThis).css({opacity: 1});
                })
            }, 500);
        });

        jQuery('.site__menu__list-two__list__item__title').on('click', function () {
            if(jQuery(this).next().is(':visible')){
                jQuery(this).next().slideUp('slow');

                return;
            }
            jQuery(this).parent().parent().find('.sublist-two').slideUp('slow');

            jQuery(this).parent().parent().find('.site__menu__list-two__list__item__title').css({opacity: 0.8});
            jQuery(this).parent().parent().find('.site__menu__list-two__list__item__title').hover(function () {
                jQuery(this).css({opacity: 1});
            }, function () {
                jQuery(this).css({opacity: 0.8});
            });

            jQuery(this).next('.sublist-two').slideDown('slow');
            jQuery(this).hover(function () {
                jQuery(this).css({opacity: 1});
            }, function () {
                jQuery(this).css({opacity: 1});
            })
        })
    } else {
        function createSiteMenuTwoCross(id) {
            var snap = Snap(id);
            snap.path('M1,13h16 M1,7h16 M1,1h16');
        }
        deleteLink('.site__menu__cross');
        createSiteMenuTwoCross('.site__menu__cross');

        //open/hide menu
        jQuery('.site__menu__cross--two').on('click', function () {
            var localThis = jQuery(this);
            if(jQuery(this).find('path').attr('d') == 'M1,13h16 M1,7h16 M1,1h16' || jQuery(this).find('path').attr('d') == 'M1,13C1,13,17,13,17,13M1,7C1,7,17,7,17,7M1,1C1,1,17,1,17,1'){
                Snap(this).select('path').animate({d:'M1,1l13,13 M14,1L1,14'},300,mina.easeinout);
                jQuery(this).parent().find('.site__menu__main__list__item__title').css({width: '100%'});
                jQuery(this).parent().find('.site__menu__logo').css({display: 'none'});
                jQuery(this).parent().find('.site__menu__list-two').slideDown('slow');
                setTimeout(function () {
                    var menuHeight = localThis.parent().find('.site__menu__list-two').height();
                    localThis.parent().find('.site__menu__footer--two').css({height: '200px',
                        bottom: jQuery(window).height() - menuHeight - 250});
                }, 500);
            } else {
                Snap(this).select('path').animate({d:'M1,13h16 M1,7h16 M1,1h16'},300,mina.easeinout);
                jQuery(this).parent().find('.site__menu__logo').css({display: 'block'});
                jQuery(this).parent().find('.site__menu__list-two').slideUp('slow');
                jQuery(this).parent().find('.site__menu__list-two__list').slideUp('slow');
                jQuery(this).parent().find('.sublist-two').slideUp('slow');
                jQuery(this).parent().find('.site__menu__list-two__item__fill').css({height: '0'});
                jQuery(this).parent().find('.site__menu__list-two__list__item__fill').css({height: '0'});
                localThis.parent().find('.site__menu__footer--two').css({height: '0',
                    bottom: '0'});
            }
        });

        jQuery('.site__menu__list-two__item__title').on('click', function () {
            var localThis = jQuery(this);
            if(jQuery(this).next().is(':visible')){
                jQuery(this).next().slideUp('slow');
                return;
            }
            //reset
            jQuery(this).parent().parent().find('.site__menu__list-two__list').slideUp('slow');
            jQuery(this).parent().parent().find('.site__menu__list-two__item__title').css({opacity: 0.8});
            jQuery(this).parent().parent().find('.site__menu__list-two__item__title').hover(function () {
                jQuery(this).css({opacity: 1});
            }, function () {
                jQuery(this).css({opacity: 0.8});
            });
            jQuery('.site__menu__list-two__item__fill').css({height: '0'});
            //animation
            jQuery(this).css({opacity: 1});
            jQuery(this).hover(function () {
                jQuery(this).css({opacity: 1});
            }, function () {
                jQuery(this).css({opacity: 1});
            });
            jQuery(this).next().slideDown('slow');

            setTimeout(function () {
                localThis.parent().find('.site__menu__list-two__item__fill').css({height: '9px'});
            }, 500);
        });

        jQuery('.site__menu__list-two__list__item__title').on('click', function () {
            var localThis = jQuery(this);
            if(jQuery(this).next().is(':visible')){
                jQuery(this).next().slideUp('slow');
                return;
            }
            //reset
            jQuery(this).parent().parent().find('.sublist-two').slideUp('slow');
            jQuery(this).parent().parent().find('.site__menu__list-two__list__item__title').css({opacity: 0.8});
            jQuery(this).parent().parent().find('.site__menu__list-two__list__item__title').hover(function () {
                jQuery(this).css({opacity: 1});
            }, function () {
                jQuery(this).css({opacity: 0.8});
            });
            jQuery('.site__menu__list-two__list__item__fill').css({height: '0'});
            //animation
            jQuery(this).css({opacity: 1});
            jQuery(this).hover(function () {
                jQuery(this).css({opacity: 1});
            }, function () {
                jQuery(this).css({opacity: 1});
            });
            jQuery(this).next().slideDown('slow');
            setTimeout(function () {
                localThis.parent().find('.site__menu__list-two__list__item__fill').css({height: '9px'});
            }, 500);
        });

        function siteMenuSocialLink(id, line, letter){
            var snap = Snap(id);
            var linkCounter = snap.path(line);
            var linkLetter = snap.path(letter);
            jQuery(id).hover(function(){
                linkCounter.animate({strokeDashoffset: '128'}, 400);
            },function(){
                linkCounter.animate({strokeDashoffset: '0'}, 400);
            });
        }

        function menuCreateSocialLinks(){
            var facebookLinks = jQuery('.social-list__item__svg--facebook-two');
            var googleLinks = jQuery('.social-list__item__svg--google-two');
            var twitterLinks = jQuery('.social-list__item__svg--twitter-two');

            for(var i = 0; i<facebookLinks.length; i++){
                siteMenuSocialLink(facebookLinks[i],
                    'M1,21C1,10,10,1,21,1s20,9,20,20c0,11-9,20-20,20S1,32,1,21z',
                    'M26.7,10v4H24c-0.8,0-1.3,0.5-1.3,1.3V18h4v4h-4v9.3h-4V22H16v-4h2.7v-3.3 c0-2.5,2.1-4.7,4.7-4.7H26.7z');
            }
            for(var i = 0; i<googleLinks.length; i++){
                siteMenuSocialLink(googleLinks[i],
                    'M1,21C1,10,10,1,21,1s20,9,20,20c0,11-9,20-20,20S1,32,1,21z',
                    'M17.9,30.6c5.1,0,7-3,7-5.6c0-2.3-1.6-3.3-2.7-4.1c-0.3-0.1-0.6-0.3-0.7-0.4c-0.3-0.1-0.6-0.4-0.6-0.9s0.3-0.9,0.6-1c1.3-0.9,2.3-1.9,2.3-3.9c0-1.6-0.7-2.6-1.3-3.1h1L25,10h-6c-4,0-5.9,2.7-5.9,5.1c0,2.1,1.7,4.3,4.6,4.3h0.6c-0.2,0.3-0.2,0.4-0.2,0.7c0,0.7,0.2,1.1,0.4,1.4c-1.9,0.1-3.3,0.6-4.4,1.3c-2,1.1-2.1,2.7-2.1,3.4C12,28.3,13.9,30.6,17.9,30.6z M20,22.9c1.9,1.4,2.6,2.1,2.6,3.1c0,1.4-1.3,2.9-3.4,2.9c-2.8,0-4.3-1.6-4.3-3.1c0-1.4,1.1-2.1,2.1-2.4c0.9-0.3,2.1-0.4,2.6-0.4C19.7,22.9,19.9,22.9,20,22.9z M20.9,15.9c0,2.1-2,2.3-2,2.3c-2,0-2.9-2.4-2.9-4.1c0-1.9,1-2.4,1.9-2.4C20,11.6,20.9,14.4,20.9,15.9z M29.1,20.3v2.9h-1.4v-2.9h-2.8v-1.4h2.8V16h1.4v2.9H32v1.4H29.1z');
            }
            for(var i = 0; i<twitterLinks.length; i++){
                siteMenuSocialLink(twitterLinks[i],
                    'M1,21C1,10,10,1,21,1s20,9,20,20c0,11-9,20-20,20S1,32,1,21z',
                    'M29.9,17.1c-0.2,7.1-4.6,12-11.4,12.3c-2.8,0.1-4.8-0.8-6.6-1.8c2,0.3,4.6-0.5,6-1.7c-2-0.1-3.2-1.2-3.8-2.9c0.6,0.1,1.2,0,1.7,0c-1.8-0.6-3.1-1.7-3.2-4.1c0.5,0.3,1.1,0.5,1.7,0.5c-1.4-0.8-2.3-3.7-1.2-5.5 c2,2.1,4.4,4,8.4,4.3c-1.1-4.3,4.8-6.6,7.1-3.7c1.1-0.1,1.8-0.6,2.6-0.9c-0.3,1.1-0.9,1.7-1.7,2.3c0.8-0.1,1.5-0.3,2.2-0.6C31.5,15.8,30.7,16.5,29.9,17.1z');
            }
        }
        menuCreateSocialLinks();
    }
});