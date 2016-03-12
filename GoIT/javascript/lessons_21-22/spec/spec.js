var app = require('../js/jasmine/script.js');

describe("pow", function() {
  it("POW = ", function() {
    //prepare
    var result;
    console.log('app', app)
    //act
    result = app.pow(2,3);
    //assert

    expect(result).toBe(8);
  });
});