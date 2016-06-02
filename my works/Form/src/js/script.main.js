'use strict'
$(function (){

  $('.input-text').focus(function(){
    $(this).css({borderBottom: '1px solid white'});
  });

  $('.input-text').focusout(function(){
    var textValue = $('.input-text').val();
    console.log(textValue);
    if(textValue.indexOf('@')+1) {
      $('.input-text').css({borderBottom: '1px solid gainsboro'});
    } else {
      $('.input-text').css({borderBottom: '1px solid #ff6377'});
    };
  });
});
