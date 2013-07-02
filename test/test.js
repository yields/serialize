
describe('serialize', function(){

  var serialize = require('serialize');
  var one = document.forms[0];
  var two = document.forms[1];
  var three = document.forms[2];

  it('should serialize a simple form to object', function(){
    assert('some text' == serialize.object(one).foo);
    assert('moar  text' == serialize.object(one).baz);
  })

  it('should return `[name=foo]` into an array', function(){
    var obj = serialize.object(three);
    assert('1' == obj.foo[0]);
    assert('2' == obj.foo[1]);
    assert('3' == obj.foo[2]);
  })

  it('should serialize a simple form', function(){
    console.log(serialize(one));
    assert('foo=some+text&baz=moar++text' == serialize(one));
  })

  it('should serialize a form with selectbox', function(){
    assert('foo=baz&baz=foo&select=1' == serialize(two));
  })

  function assert(expr, ms){
    if (!expr) throw new Error(ms || 'err');
  }

})
