'use strict'

let nonce = null

module.exports = () => {
  let now = new Date().getTime() * 1000
  nonce = (nonce < now) ? now : nonce + 1
  return nonce
}
