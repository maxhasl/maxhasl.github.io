// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};
 
  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :
     
      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
       
        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +
       
        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");
   
    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();'use strict';

$(function () {

  var arrayQuestions = [{
    title: 'var result = 5 + ‘5’ - 0;',
    answers: ['55', '10', '50'],
    check: '55'
  }, {
    title: 'Зачем используется ключевое слово var?',
    answers: ['Для выполнения написанного выше кода', 'Для вывода результатов программы на экран', 'Для создания новой переменной'],
    check: 'Для создания новой переменной'
  }, {
    title: 'Чем отличаются циклы while от do while?',
    answers: ['независимо от условия цикл do while выполнится хотя бы раз', 'в javascript нет цикла do while', 'независимо от условия цикл while выполнится хотя бы раз'],
    check: 'независимо от условия цикл do while выполнится хотя бы раз'
  }];
  var objectQuestions = {
    questions: arrayQuestions
  };

  localStorage.setItem('questions', JSON.stringify(objectQuestions));
  var retrievedString = localStorage.getItem('questions');
  var retrievedObject = JSON.parse(retrievedString);
  var html = $('#template').html();
  var content = tmpl(html, retrievedObject);
  $body = $('body');
  $('body').append(content);

  var arrayAnswer = [];

  var checkAnswer = function checkAnswer(e) {

    var $answer = $(e.currentTarget).parent('label').text().slice(0);
    for (var i = 0; i < arrayQuestions.length; i++) {
      if ($(e.currentTarget).attr('name') == [i]) {
        arrayAnswer[i] = $answer;
      };
    };
    console.log(arrayAnswer);
  };

  var resultCheckAnswer = function resultCheckAnswer() {
    var resultTest = 0;
    for (var i = 0; i < arrayQuestions.length; i++) {
      if (arrayAnswer[i] == arrayQuestions[i].check) {
        resultTest += 1;
      };
    };

    $modal = $('<div class="modal"> Ваш результат: ' + resultTest + ' из ' + arrayQuestions.length + ' </div>');
    $backModal = $('<div class="back--modal"></div>');
    $backModal.one('click', hideModal);
    $body.append($backModal);
    $body.append($modal);
  };

  var hideModal = function hideModal() {
    $('.checkbox').removeAttr('checked');
    $modal.remove();
    $backModal.remove();
    arrayAnswer = [];
    resultTest = 0;
  };
  var answer = $('.checkbox');
  var result = $('.submit');
  answer.on('click', checkAnswer);
  result.on('click', resultCheckAnswer);
});
