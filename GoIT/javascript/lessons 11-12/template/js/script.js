$(document).ready(function() {
    var html = $('#template').html();
    var data = {
       name: prompt('Введите ваше имя!', ''),
       photo: prompt('Ссылка на ваше фото!', ''),
       status: prompt('Введите ваш род деятельности!', ''),
       cause_1: prompt('1-я причина почему хотите учить FrontEnd!', ''),
       cause_2: prompt('2-я причина почему хотите учить FrontEnd!', ''),
       cause_3: prompt('3-я причина почему хотите учить FrontEnd!', ''),
       phone: prompt('Введите ваш номер телефона!', ''),
       link: prompt('Ссылка на ваш профиль Вконтакте!', ''),
       feedback: prompt('Ваш feedback!', ''),
    }
    var content = tmpl(html, data);
    console.log(template);
    $('body').append(content);
});