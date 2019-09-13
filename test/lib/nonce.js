/* eslint-env mocha */
'use strict'

const assert = require('assert')
const nonce = require('../../lib/nonce')

describe('nonce', () => {
  it('is non-zero and a number', () => {
    assert(!isNaN(nonce()) && nonce() > 0)
  })

  it('is increasing', () => {
    assert(nonce() < nonce()) // eslint-disable-line
  })
})
