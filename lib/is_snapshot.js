'use strict'

/**
 * @param {Array|Array[]} msg
 * @return {boolean} isSnapshot
 */
const isSnapshot = msg => msg[0] && Array.isArray(msg[0])

module.exports = isSnapshot
