'use strict'

let lastNonce = Date.now() * 1000

/**
 * Generates a new nonce for usage with the Bitfinex APIs
 *
 * @return {number} nonce
 */
const nonce = () => {
  lastNonce += 1
  return lastNonce
}

module.exports = nonce
