function subscribeCreateLink(){
    if($(window).width() > 1023){
        createMainLink('.link__svg--subscribe',
                      'M0,0.1v4c0,15.7,0,23.3,0,23.3l0,0C0,32,0,29.7,0,32c0,2.3,0,0,0,4.5l0,0c0,0,0,8,0,23.6V64h256.2V0H0V0.1z',
                      'M0,0.1v4c0,15.7,8.1,22,13.4,23.3l0,0c2.1,0.5,3.6,2.4,3.6,4.7c0,2.3-1.6,4.1-3.6,4.7l0,0C8.1,38.2,0,44.5,0,60.1V64h256.2V0H0V0.1z');

    } else if($(window).width() > 374) {
        createMainLink('.link__svg--subscribe',
            'M313.2,0c-17.9,0-26.5,0-26.5,0l0,0c0,0-2.8,0-5.5,0s-2.6,0-5.4,0l0,0c0,0-8.7,0-26.4,0H0v64h328V0H313.2z',
            'M313.2,0c-17.9,0-25.1,8.1-26.5,13.4l0,0c-0.6,2.1-2.7,3.6-5.4,3.6c-2.6,0-4.7-1.6-5.4-3.6l0,0C274.4,8.1,267.2,0,249.4,0H0v64h328V0H313.2z');
    } else {
        createMainLink('.link__svg--subscribe',
            'M275,0c-15.7,0-23.2,0-23.2,0l0,0c-2.4,0-2.4,0-4.8,0c-2.3,0-2.3,0-4.9,0l0,0c0,0-7.6,0-23.2,0H0v64h288V0H275z',
            'M275,0c-15.7,0-22,8.1-23.3,13.4l0,0c-0.5,2.1-2.4,3.6-4.7,3.6c-2.3,0-4.1-1.6-4.7-3.6l0,0C240.9,8.1,234.6,0,219,0H0v64h288V0H275z');
};
};

$('.link--subscribe').on('click', function(){
  $('.hint--subscribe').remove();
  emailCheck('.subscribe__form__input-text', '#subscribe__submit', '.subscribe__form', 'hint--subscribe');
});

subscribeCreateLink();
$(window).resize(function(){
    deleteLink('.link__svg--subscribe');
    subscribeCreateLink();
});
