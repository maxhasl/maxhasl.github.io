var app = {
  pow:  function pow(num, pow){
                 var result = 1;
                 for(var i=0; i<pow; i++){
                 result = result*num;
                 }
        return result;
        }
};

module.exports = app;