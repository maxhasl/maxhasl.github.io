define (
  'controller',
  [
    
  ],
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
  return self;
};


);