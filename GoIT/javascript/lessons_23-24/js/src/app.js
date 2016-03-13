require {
   [
     'model',
     'view',
     'controller'
   ],
   function (model, view, controller) {
   	var firstList = ['lol 1', 'lol 2', 'lol 3'];
    var model = new Model(firstList);
    var view = new View(model);
    var controller = new Controller(model, view);
   }
};