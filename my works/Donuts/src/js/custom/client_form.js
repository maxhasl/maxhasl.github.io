function clientFormCreateLink(){
    if($(window).width() > 1535){
        createMainLink('.link__svg--client-form',
                      'M725,0c-15.7,0-23.5,0-23.5,0l0,0c-4.8,0-2.5,0-4.8,0c-2.3,0,0,0-4.2,0l0,0c0,0-7.9,0-23.5,0H450v64h288V0H725z M450,64H0V0h450V64z',
                      'M725,0c-15.7,0-22,8.1-23.3,13.4l0,0c-0.5,2.1-2.4,3.6-4.7,3.6c-2.3,0-4.1-1.6-4.7-3.6l0,0C690.9,8.1,684.6,0,669,0H450v64h288V0H725z M450,64H0V0h450V64z');
    } else if($(window).width() > 1023) {
        createMainLink('.link__svg--client-form',
                      'M467,0c-15.7,0-23.5,0-23.5,0l0,0c-4.8,0-2.5,0-4.8,0c-2.3,0,0,0-4.2,0l0,0c0,0-7.9,0-23.5,0H192v64h288V0H467z M192,64H0V0h192V64z',
                      'M467,0c-15.7,0-22,8.1-23.3,13.4l0,0c-0.5,2.1-2.4,3.6-4.7,3.6c-2.3,0-4.1-1.6-4.7-3.6l0,0 C432.9,8.1,426.6,0,411,0H192v64h288V0H467z M192,64.1H0v-64h192V64.1z');
    } else if($(window).width() > 374) {
        createMainLink('.link__svg--client-form',
                      'M331,0c-15.7,0-23.5,0-23.5,0l0,0c-4.8,0-2.5,0-4.8,0c-2.3,0,0,0-4.2,0l0,0c0,0-7.9,0-23.5,0H56v64h288V0H331z M56,64H0V0h56V64z',
                      'M331,0c-15.7,0-22,8.1-23.3,13.4l0,0c-0.5,2.1-2.4,3.6-4.7,3.6c-2.3,0-4.1-1.6-4.7-3.6l0,0 C296.9,8.1,290.6,0,275,0H56v64h288V0H331z M56,64.1H0v-64h56V64.1z');
    } else {
        createMainLink('.link__svg--client-form',
                      'M275,0c-15.7,0-23.2,0-23.2,0l0,0c-2.4,0-2.4,0-4.8,0c-2.3,0-2.3,0-4.9,0l0,0c0,0-7.6,0-23.2,0H0v64h288V0H275z',
                      'M275,0c-15.7,0-22,8.1-23.3,13.4l0,0c-0.5,2.1-2.4,3.6-4.7,3.6c-2.3,0-4.1-1.6-4.7-3.6l0,0C240.9,8.1,234.6,0,219,0H0v64h288V0H275z');
};
};

//inspection form
$('.link--client-form').on('click', function(){
  $('.hint--client-form').remove();
  var email = $(this).parent().find('input[type=email]');
  var text = $(this).parent().find('.client-form__form__input-text');
  inputTextCheck(text, '#submit__client-form', '.client-form__form', 'hint--client-form');
  emailCheck(email, '#submit__client-form', '.client-form__form', 'hint--client-form');
});

clientFormCreateLink();
$(window).resize(function(){
    deleteLink('.link__svg--client-form');
    clientFormCreateLink();
});
