'use strict';

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

