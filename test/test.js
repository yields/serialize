
describe('serialize', function(){

  var serialize = require('serialize');
  var one = document.forms[0];
  var two = document.forms[1];

  it('should serialize a simple form', function(){
    assert('foo=some+text&baz=moar++text' == serialize(one));
  })

  it('should serialize a form with selectbox', function(){
    assert('foo=baz&baz=foo&select=1' == serialize(two));
  })

  function assert(expr, ms){
    if (!expr) throw new Error(ms || 'err');
  }

})
