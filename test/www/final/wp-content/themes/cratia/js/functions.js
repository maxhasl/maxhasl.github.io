jQuery(document).ready(function($) {
    //Для страницы раздела.Афикс сайдбара
    if($('.follow-by-user')[0]){
    function makeAffix(){
        var sidebarPositionTop = $('.follow-from-here').offset().top;
        var sidebarWidth = $('.follow-from-here').outerWidth();
        var affixTop = $('footer').offset().top;
        $('.follow-by-user-outer').css({width:sidebarWidth});
        $('.follow-by-user-outer').affix({
            offset:{
                top:sidebarPositionTop,
                bottom:function(){
                    return (this.bottom = $('footer').outerHeight(true)+17)
                }
            }
        });
        $('.follow-by-user-outer').on('affixed.bs.affix',function(){
            $(this).css({width:sidebarWidth,position:'fixed'});
        });
        $('.follow-by-user-outer').on('affixed-top.bs.affix',function(){
            $(this).css({width:sidebarWidth,position:'relative'});
        })
    }
        if($('#afixed').height() > $('aside').height()){
            $('html,body').css({
                'height':'auto'
            })
            makeAffix();
            $(window).resize(function(){
                makeAffix();
            });
        }
    }

    //Лайтбоксы
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox({
            gallery_parent_selector:'.carousel'
        });
    });

    //Раскрывающаяся по клику новость
    $('.single-news-open').click(function(){
        var hided_part = $(this).parentsUntil('.single-news').find('.hided-part');
        if(!hided_part.is(':animated')){
            hided_part.slideToggle();
            $(this).toggleClass('opened');
        }

    });
        $('[name="contact"]').inputmask("mask",{
            "mask":"+38(999) 99-99-999",
            showMaskOnHover:false
        });


    function director_mail_sent_ok(){

    }

    $('#contactForm').submit(function () {
        sendContactForm();
        return false;
    });
//    $('.sidebar-element-header').click(function(){

//    });

});