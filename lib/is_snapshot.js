'use strict'

const _isArray = require('lodash/isArray')

/**
 * Query if the provided message is a websocket snapshot packet
 *
 * @param {Array|Array[]} msg - message
 * @returns {boolean} isSnapshot
 */
const isSnapshot = msg => msg[0] && _isArray(msg[0])

module.exports = isSnapshot
