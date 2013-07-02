
/**
 * dependencies
 */

var submittable = require('submittable')
  , qs = require('querystring')
  , reduce = require('reduce')
  , value = require('value');

/**
 * Serialize the given `form`.
 *
 * @param {Element} el
 * @return {String}
 */

exports = module.exports = function(el){
  return qs
  .stringify(exports.object(el))
  .replace(/%20/g, '+');
};

/**
 * Serialize the given `form` to object.
 *
 * @param {Element} el
 * @return {Object}
 */

exports.object = function(el){
  return reduce(el.elements, function(ret, el){
    if (!submittable(el)) return;

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
