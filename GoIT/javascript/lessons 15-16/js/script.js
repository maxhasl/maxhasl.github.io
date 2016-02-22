'use strict;'
$(function () {
    var	page = 0;
    function search() {
    	var query = $('#query').val();
    	if (query == ''){
    		query = 'google';
    	};
        $.getJSON("http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q="+ query + "&callback=GoogleCallback&context=?&rsz=8&start="+page*8+"",
        function(data){
        var arrayResults = data.results;    
        var obj = {
        	object: arrayResults
        };        
        var html = $('#template').html();
        var content = tmpl(html, obj);
        $('.results').append(content);
        $('.pages').css('display', 'block');
    });
};
    $('.submit').click(search);
    $(document).bind('keydown', function() {
        if (event.keyCode == 13) {
            search();
        };
});
    $('.page__link').on('click', function(e){
        e.preventDefault();
        $('.active').removeClass();
        page = $(e.currentTarget).text();
        $(e.currentTarget).addClass("active");
        $('.result').remove();      
        search();      
});
});

function GoogleCallback (func, data) {
    window[func](data);
};


// 2 TASK

$(function() {
 
 function human() {
 	this.name = 'Max';
 	this.age = 20;
 	this.sex = 'male';
 	this.height = 174;
 	this.weight = 70;

 }

 function worker(){
    this.job = 'doctor';
    this.salary = 3000;
    this.day = 0;
    this.work = function() {
      this.day++;
      this.worked = 'Doctor works ' + this.day + ' days';
      return this.worked;
    };
  }

 function student() {
    this.placeOfStudy = 'KKZ';
    this.stipend = 650;
    this.serial = 0;
    this.watchSerials = function() {
      this.serial++;
      this.watchSerials = 'Student looks ' + this.serial;
      return this.watchSerials;
    }
 }

  var newWorkerOne = new worker();
  newWorkerOne.prototype = new human();
  console.log(newWorkerOne);
  console.log(newWorkerOne.work());

  var newWorkerTwo = new worker();
  newWorkerTwo.prototype = new human();
  console.log(newWorkerTwo);
  console.log(newWorkerTwo.work());

  var newStudentOne = new student();
  newStudentOne.prototype = new human();
  console.log(newStudentOne);
  console.log(newStudentOne.watchSerials());

  var newStudentTwo = new student();
  newStudentTwo.prototype = new human();
  console.log(newStudentTwo);
  console.log(newStudentTwo.watchSerials());

});