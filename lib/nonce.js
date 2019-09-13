'use strict'

let nonce = null

module.exports = () => {
  const now = Date.now() * 1000
  nonce = (nonce < now) ? now : nonce + 1
  return nonce
}
