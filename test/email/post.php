<?
// ----------------------------конфигурация-------------------------- //
$adminemail="maxhasl@ukr.net";  // e-mail админа
$backurl="http://google.com";  // На какую страничку переходит после отправки письма
//---------------------------------------------------------------------- //
// Принимаем данные с формы
$name=$_POST['name'];
$email=$_POST['email'];
$msg=$_POST['message'];
// Проверяем валидность e-mail
    $msg=" 
 
 
<p>Имя: $name</p> 
 
 
<p>E-mail: $email</p> 
 
 
<p>Сообщение: $msg</p> 
 
 
";



    // Отправляем письмо админу

    mail("$adminemail", "Сообщение от $name", "$msg");

// Выводим сообщение пользователю

    print "<script language='Javascript'><!-- 
function reload() {location = \"$backurl\"}; setTimeout('reload()', 6000); 
//--></script> 
 
$msg 
<p>Сообщение отправлено! Подождите, сейчас вы будете перенаправлены на главную страницу...</p>";
exit;
?>