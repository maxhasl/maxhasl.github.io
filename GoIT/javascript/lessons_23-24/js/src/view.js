define (
  'view',
  [
    
  ],
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
  return self;
};

);