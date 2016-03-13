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

function Model(data) {
  var self = this;

  self.data = data;

  self.addItem = function(item) {
    if(item.length === 0) {
      return;
    };
     self.data.push(item);
     return self.data;
  };

  self.removeItem = function(item) {
    if(index === -1) {
      return;
    };
    var index = self.data.indexOf(item);
    self.data.splice(index, 1);
    return self.data;
  };

  self.editItem = function (item, newItem) {
     var index = $.inArray(item, self.data);
     self.data[index] = newItem;
     return self.data;
   };
};
 

function View(model) {
  var self = this;

  function init() {
    var wrapper = tmpl($('#wrapper-template').html());
    $('body').append(wrapper);
    self.elements = {
      input: $('.item__value'),
      add: $('.item__add'),
      listContainer: $('.item__list'),
      edit: $('.item__edit')
    };
    self.renderList(model.data);
  };

  self.renderList = function(data) {
     var list = tmpl($('#list-template').html(), {data: data});
     self.elements.listContainer.html(list);
  };

  init();
};


function Controller(model, view) {
   var self = this;
   view.elements.add.on('click', addItem);
   view.elements.listContainer.on('click', '.item__remove', removeItem);
   view.elements.listContainer.on('click', '.list__item__text', editItem);


   function addItem() {
     var newItem = view.elements.input.val();
     model.addItem(newItem);
     view.renderList(model.data);
     view.elements.input.val('');
   };

   function removeItem() {
     var item = $(this).attr('data-value');
     model.removeItem(item);
     view.renderList(model.data);
   }

   function editItem() {
     var item = $(this).text();
     var itemCss = $(this).css('color', 'red');
     var editItem = $('.item__value').val(item);     

    function pushItem() {
     var newItem = view.elements.input.val();
     if (newItem.length === 0) {
      return;
     };
     model.editItem(item, newItem);
     itemCss.css('color', 'black');
     view.renderList(model.data);
    };
    view.elements.edit.on('click', pushItem);
  };
};

$(function(){
  var firstList = ['lol 1', 'lol 2', 'lol 3'];
  var model = new Model(firstList);
  var view = new View(model);
  var controller = new Controller(model, view);
});

