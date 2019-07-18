'use strict'

const crypto = require('crypto')
const getNonce = require('./nonce')

module.exports = (secret, payload = '') => {
  const nonce = getNonce()
  if (payload.length === 0) {
    payload = `AUTH${nonce}${nonce}`
  }

  const sig = crypto
    .createHmac('sha384', secret)
    .update(payload)
    .digest('hex')

  return {
    payload,
    sig,
    nonce: getNonce()
  }
}
