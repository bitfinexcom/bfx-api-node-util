# Bitfinex API Utilities for Node.JS

[![Build Status](https://travis-ci.org/bitfinexcom/bfx-api-node-util.svg?branch=master)](https://travis-ci.org/bitfinexcom/bfx-api-node-util)

This repo contains minor utilities shared by the Bitfinex Node.JS API libraries.

### Features

* `prepareAmount` and `preparePrice` for making values API-compatible
* `nonce` generator function
* `padCandles` for handling gaps in candle data returned by the Bitfinex APIs

### Installation

```bash
npm i --save bfx-api-node-util
```

### Quickstart

```js
const { nonce } = require('bfx-api-node-util')
const n = nonce()

// n is ready to be passed to API requests, or used as order CIDs, etc
```

### Docs

[Refer to `docs/func_docs.md`](/docs/func_docs.md) for JSDoc-generated API documentation

### Example: Padding Candles

```js
const { padCandles } = require('bfx-api-node-util')
const { RESTv2 } = require('bfx-api-node-rest')
const rest = new RESTv2()

const candles = await rest.candles({
  symbol: 'tBTCUSD',
  timeframe: '1m',
})

const paddedCandles = padCandles(candles, 60 * 1000)

// paddedCandles are ready to be used for processing where 0-volume candles are required
```

### Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
