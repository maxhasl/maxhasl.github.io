'use strick';
$(function() {
  var arrayQuestions = [
  {
    question: "var result = 5 + ‘5’ - 0;",
    answerOne: "55",
    answerTwo: "10",
    answerThree: "50",
    answerTrue: "55"
  },
    {
    question: "Зачем используется ключевое слово var?",
    answerOne: "Для выполнения написанного выше кода",
    answerTwo: "Для вывода результатов программы на экран",
    answerThree: "Для создания новой переменной",
    answerTrue: "Для создания новой переменной"
  },
    {
    question: "Чем отличаются циклы while от do while?",
    answerOne: "независимо от условия цикл do while выполнится хотя бы раз",
    answerTwo: "в javascript нет цикла do while",
    answerThree: "независимо от условия цикл while выполнится хотя бы раз",
    answerTrue: "независимо от условия цикл do while выполнится хотя бы раз"
  },
  ];
  
  var objectQuestions = {
    questions: arrayQuestions
  }

  localStorage.setItem('objectQuestions', JSON.stringify(objectQuestions));
  var retrievedString = localStorage.getItem('objectQuestions');
  var retrievedObject = JSON.parse(retrievedString);
  var html = $('#template').html();  
  var content = tmpl(html, retrievedObject);
  $body = $('body');
  $('body').append(content);

 var arrayAnswer = [];

 function checkAnswer(e){     
     
     var $answer = $(e.currentTarget).parent('label').text().slice(0);
     for (var i = 0; i < arrayQuestions.length; i++) {
      if ($(e.currentTarget).attr('name') == [i]) {
           arrayAnswer[i] = $answer};
         };
         console.log(arrayAnswer);
  };

  function resultCheckAnswer(){
    var resultTest = 0;
    for (var i = 0; i < arrayQuestions.length; i++) {
       if (arrayAnswer[i] == arrayQuestions[i].answerTrue) {
         resultTest += 33.3;
       };
    };

    $modal = $('<div class="modal"> ' + 'Ваш результат: ' + resultTest + '%' + ' </div>');
    $backModal = $('<div class="back--modal"></div>')
    $backModal.one('click', hideModal);
    $body.append($backModal);
    $body.append($modal);
  };

  function hideModal(){
    $('.checkbox').removeAttr('checked');
    $modal.remove();
    $backModal.remove();

  }
  var answer = $('.checkbox');
  var result = $('.submit');
  answer.on('click', checkAnswer);
  result.on('click', resultCheckAnswer);

});