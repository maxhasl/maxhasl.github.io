$(function () {
   var $takeHint = $('.text');
   $takeHint.hover(hintIn, hintOut);
   function	hintIn() {
      $('.hint').remove();
      var index = $(this).parent().index();
      var title = $(this).attr('title');      
      $('.field').eq(index).append('<span class="hint">'+title+'</span>');
      $(this).focusin(hintOut);
   }
   function hintOut() {
   	  $('.hint').remove();
   }

   var $submit = $('.submit');
   $submit.click(submitIn);
   function submitIn() {
      $('.hint').remove();
      var title = $('input').eq(0).attr('title');
      $('.field').eq(0).append('<span class="hint">'+title+'</span>');
      var title = $('input').eq(1).attr('title');
      $('.field').eq(1).append('<span class="hint">'+title+'</span>');
      var title = $('input').eq(2).attr('title');
      $('.field').eq(2).append('<span class="hint">'+title+'</span>');  
    }  
});