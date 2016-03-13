define (
  'model',
  [
    
  ],
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
   return self;
};

);