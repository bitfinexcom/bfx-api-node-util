'use strict'

const { Notification } = require('bfx-api-node-models')

module.exports = (data) => {
  const notification = new Notification(data)
  return notification.notifyInfo
}
