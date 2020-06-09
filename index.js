'use strict'

const precision = require('./lib/precision')
const nonce = require('./lib/nonce')
const genAuthSig = require('./lib/gen_auth_sig')
const isSnapshot = require('./lib/is_snapshot')
const isClass = require('./lib/is_class')
const padCandles = require('./lib/pad_candles')

/**
 * This module contains minor utilities shared by the Bitfinex Node.JS API
 * libraries.
 *
 * @license MIT
 * @module bfx-api-node-util
 */

module.exports = {
  ...precision,
  nonce,
  genAuthSig,
  isSnapshot,
  isClass,
  padCandles
}
