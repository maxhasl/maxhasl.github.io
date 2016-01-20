// 1 TASK
var numIN = prompt('Введите число!', '');
var powIN = prompt('Введите степень!', '');

function pow(num, pow){
	 var result = 1;
   for(var i=0; i<pow; i++){
   	 result = result*num;
   }
   return result;
}
resultOut = pow(numIN, powIN);
console.log(resultOut);

// 2 TASK
var arr = [];
var k=1;
for(var i=0; i<5; i++) {
	arr[i] = prompt('Введите '+k+'-e имя','');
	k++;
}
var userName = prompt('Введите ваше имя!', '')

var user = '';

for (var l=0; l<arr.length;l++){
	var index = arr[l].indexOf(userName)+1;
	if (index==true) {
       user=userName;
	}
}
if (user==''){
	alert ('Ошибка входа в систему!');
} else {
	alert(user+', вы успешно вошли в систему!');
}