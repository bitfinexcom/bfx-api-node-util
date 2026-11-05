'use strict'

const test = require('brittle')
const { TradingTicker } = require('bfx-api-node-models')
const isClass = require('../../lib/is_class')

test('isClass', (t) => {
  t.test('returns true for classes', (t) => {
    t.ok(isClass(TradingTicker))
  })

  t.test('returns false for functions', (t) => {
    t.ok(!isClass(() => {}))
  })

  t.test('returns false for class instances', (t) => {
    const ticker = new TradingTicker()
    t.ok(!isClass(ticker))
  })

  t.test('returns false for primitives', (t) => {
    t.ok(!isClass(42))
    t.ok(!isClass('42'))
    t.ok(!isClass({}))
    t.ok(!isClass([]))
  })
})
