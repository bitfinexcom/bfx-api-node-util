'use strict'

const test = require('brittle')
const nonce = require('../../lib/nonce')

test('nonce', (t) => {
  t.test('is non-zero and a number', (t) => {
    t.ok(!isNaN(nonce()) && nonce() > 0)
  })

  t.test('is increasing', (t) => {
    t.ok(nonce() < nonce()) // eslint-disable-line
  })
})
