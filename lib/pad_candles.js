'use strict'

const _reverse = require('lodash/reverse')

/**
 * Fills in missing (0 volume) candles on the provided dataset. The result is a
 * new array (does not mutate)
 *
 * @param {Array[]} candles - array-format candles
 * @param {number} candleWidth - in ms
 * @return {Array[]} paddedCandles
 */
const padCandles = (candles, candleWidth) => {
  const paddedCandles = _reverse([...candles])

  for (let i = 0; i < paddedCandles.length - 1; i += 1) {
    const candle = paddedCandles[i]
    const nextCandle = paddedCandles[i + 1]
    const candlesToFill = ((nextCandle[0] - candle[0]) / candleWidth) - 1

    if (candlesToFill > 0) {
      const fillerCandles = Array.apply(null, Array(candlesToFill)).map((c, i) => {
        return [
          candle[0] + (candleWidth * (i + 1)), // mts
          candle[2], // open
          candle[2], // close
          candle[2], // high
          candle[2], // low
          0 // vol
        ]
      })

      paddedCandles.splice(i + 1, 0, ...fillerCandles)
    }
  }

  return _reverse(paddedCandles)
}

module.exports = padCandles
