$(function () {
   var arr = ['<span class="hint">Please provide your firstname</span>', 
              '<span class="hint">Please provide also your lastname</span>', 
              '<span class="hint">Your  home or work  address</span>',
              '<span class="hint hint--submit">Please fill in all fields</span>'];

   var $takeHint = $('.text');
   $takeHint.hover(hintIn, hintOut);
   function	hintIn() {
      var index = $(this).parent().index();
      $('.field').eq(index).append(arr[index]);
   }
   function hintOut() {
   	  $('.hint').remove();
   }

   var $submit = $('.submit');
   $submit.hover(submitIn, submitOut);
   function submitIn() {
   	   if ($takeHint.eq(0).val() == '') {
       	 $('.field').eq(0).append(arr[0])};
       if ($takeHint.eq(1).val() == '') {
         $('.field').eq(1).append(arr[1])};
       if ($takeHint.eq(2).val() == '') {
         $('.field').eq(2).append(arr[2])};      
   }
   function submitOut() {
   	   $('.hint').remove();
   }
});