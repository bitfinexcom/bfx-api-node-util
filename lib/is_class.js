'use strict'

const _isFunction = require('lodash/isFunction')

/**
 * Query if the provided argument is a class
 *
 * @param {Function} f - function to check
 * @returns {boolean} isClass
 */
const isClass = f => (
  _isFunction(f) &&
  (/^class\s/.test(Function.prototype.toString.call(f)))
)

module.exports = isClass
