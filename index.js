'use strict'

const precision = require('./lib/precision')
const nonce = require('./lib/nonce')
const genAuthSig = require('./lib/gen_auth_sig')
const isSnapshot = require('./lib/is_snapshot')
const isClass = require('./lib/is_class')
const padCandles = require('./lib/pad_candles')
const takeResNotifyInfo = require('./lib/res_notification_info')

module.exports = {
  ...precision,
  nonce,
  genAuthSig,
  isSnapshot,
  isClass,
  padCandles,
  takeResNotifyInfo
}
