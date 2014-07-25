
/**
 * dependencies
 */

var submittable = require('submittable')
  , reduce = require('reduce')
  , value = require('value')
  , query = require('query');

/**
 * Serialize the given `form`.
 *
 * @param {Element} el
 * @return {String}
 */

exports = module.exports = function(el){
 var ret = reduce(query.all('*', el), param, []);
 return ret.join('&').replace(/%20/g, '+');

 function param(arr, el){
   if (!submittable(el)) return arr;
   var key = encodeURIComponent(el.name);
   var val = encodeURIComponent(value(el));
   arr.push(key + '=' + val);
   return arr;
 }
};

/**
 * Serialize the given `form` to object.
 *
 * @param {Element} el
 * @return {Object}
 */

exports.object = function(el){
  return reduce(query.all('*', el), function(ret, el){
    if (!submittable(el)) return ret;

    if (!ret[el.name]) {
      ret[el.name] = value(el);
    } else if (ret[el.name].push) {
      ret[el.name].push(value(el));
    } else {
      ret[el.name] = [ret[el.name], value(el)];
    }

    return ret;
  }, {});
};
