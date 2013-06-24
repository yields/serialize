
/**
 * dependencies
 */

var submittable = require('submittable')
  , encode = encodeURIComponent
  , reduce = require('reduce')
  , value = require('value');

/**
 * Serialize the given `form`.
 *
 * @param {Element} el
 * @return {String}
 */

module.exports = function(el){
  var ret = reduce(el.elements, param, []);
  return ret.join('&').replace(/%20/g, '+');

  function param(arr, el){
    if (!submittable(el)) return arr;
    var key = encode(el.name);
    var val = encode(value(el));
    arr.push(key + '=' + val);
    return arr;
  }
};
