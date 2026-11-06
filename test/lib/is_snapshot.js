'use strict'

const test = require('brittle')
const isSnapshot = require('../../lib/is_snapshot')

test('isSnapshot - detects snapshots by data structure', (t) => {
  t.test('returns false for heartbeats', (t) => {
    t.is(isSnapshot(['hb']), false)
  })

  t.test('returns false simple lists (data updates)', (t) => {
    t.is(isSnapshot([1337]), false)
  })

  t.test('returns true for nested lists (snapshots)', (t) => {
    t.is(isSnapshot([['a'], ['b']]), true)
  })
})
