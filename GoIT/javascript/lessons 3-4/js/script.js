//FUNCTION GENERATE MAIN
function createMain (elem, css, parent) {
    var child = document.createElement(elem);
    child.classList.add(css);

    var parent = document.querySelector(parent);
    parent.appendChild(child);
}
//FUNCTION GENERATE HEADER
function createHeader () {
	var header = document.createElement('p');
    header.classList.add('header');
    header.innerHTML = 'Тест по программированию';

    var parent = document.querySelector('.main');
    parent.appendChild(header);
}
//FUNCTION GENERATE FORM
function createForm () {
    var form = document.createElement('form');
    form.classList.add('form');
    
    var parent = document.querySelector('.main');
    parent.appendChild(form);
}
//FUNCTION GENERATE CONNTAINERS FOR ANSWERS
function createContainerForAnswers () {
	var container = document.createElement('div');
	container.classList.add('container');

	var parent = document.querySelector('form')
	parent.appendChild(container);
}
//FUNCTION GENERATE QUSTIONS
function createQuestion (number) {
	var question = document.createElement('p');
	question.classList.add('question');
	question.innerHTML = number+'. Вопрос №'+number;

	var parent = document.querySelector('form');
	parent.appendChild(question);
}
//FUNCTION GENERATE ANSWERS
function createAnswer (option, id, number, nq) {
	var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = option;
    checkbox.id = id;
    checkbox.classList.add('checkbox');

    var label = document.createElement('label')
    label.htmlFor = id;
    label.appendChild(document.createTextNode('Вариант ответа №'+number));
    
    var parent = document.getElementsByClassName('container');
    parent[nq].appendChild(checkbox);
    parent[nq].appendChild(label);
}
//FUNCTION GENERATE SUBMIT
function createSubmit () {
	var submit = document.createElement('input');
	submit.type = 'submit';
	submit.value = 'Проверить мои результаты';
	submit.classList.add ('submit');

	var parent = document.querySelector('form');
	parent.appendChild(submit);
}
// CREATE OBJECT
var testElements = {
	main: createMain,
	header: createHeader,
	question: createQuestion,
	forma: createForm,
	container: createContainerForAnswers,
	checkbox: createAnswer,
	submit: createSubmit
}
//calling elements of the object
testElements.main('div', 'main', 'body');
testElements.header ();
testElements.forma ();
testElements.question (1);
testElements.container();
testElements.checkbox ('1', '1', '1', '0');
testElements.checkbox ('2', '2', '2', '0');
testElements.checkbox ('3', '3', '3', '0');
testElements.question (2);
testElements.container();
testElements.checkbox ('1', '4', '1', '1');
testElements.checkbox ('2', '5', '2', '1');
testElements.checkbox ('3', '6', '3', '1');
testElements.question (3);
testElements.container();
testElements.checkbox ('1', '7', '1', '2');
testElements.checkbox ('2', '8', '2', '2');
testElements.checkbox ('3', '9', '3', '2');
testElements.submit ();