'use strict';
$(()=> {
 
  const arrayQuestions = [
    {
      title: 'var result = 5 + ‘5’ - 0;',
      answers: [
                '55',
                '10',
                '50'
               ],
      check: '55'
    },
    {
      title: 'Зачем используется ключевое слово var?',
      answers: [
                'Для выполнения написанного выше кода',
                'Для вывода результатов программы на экран',
                'Для создания новой переменной'
               ],
      check: 'Для создания новой переменной'
    },
    {
      title: 'Чем отличаются циклы while от do while?',
      answers: [
                'независимо от условия цикл do while выполнится хотя бы раз',
                'в javascript нет цикла do while',
                'независимо от условия цикл while выполнится хотя бы раз'
               ],
      check: 'независимо от условия цикл do while выполнится хотя бы раз'
    },
  ];
  const objectQuestions = {
    questions: arrayQuestions
  }

  localStorage.setItem('questions', JSON.stringify(objectQuestions));
  let retrievedString = localStorage.getItem('questions');
  let retrievedObject = JSON.parse(retrievedString);
  let html = $('#template').html();  
  let content = tmpl(html, retrievedObject);
  $body = $('body');
  $('body').append(content);

 let arrayAnswer = [];

 let checkAnswer = (e) => {     
     
     let $answer = $(e.currentTarget).parent('label').text().slice(0);
     for (let i = 0; i < arrayQuestions.length; i++) {
      if ($(e.currentTarget).attr('name') == [i]) {
           arrayAnswer[i] = $answer};
         };
         console.log(arrayAnswer);
  };

  let resultCheckAnswer = () => {
    let resultTest = 0;
    for (let i = 0; i < arrayQuestions.length; i++) {
       if (arrayAnswer[i] == arrayQuestions[i].check) {
         resultTest += 1;
       };
    };

    $modal = $(`<div class="modal"> Ваш результат: ${resultTest} из ${arrayQuestions.length} </div>`);
    $backModal = $(`<div class="back--modal"></div>`)
    $backModal.one('click', hideModal);
    $body.append($backModal);
    $body.append($modal);
  };

  let hideModal = () => {
    $('.checkbox').removeAttr('checked');
    $modal.remove();
    $backModal.remove();
    arrayAnswer = [];
    resultTest = 0;
  }
  let answer = $('.checkbox');
  let result = $('.submit');
  answer.on('click', checkAnswer);
  result.on('click', resultCheckAnswer);

});
