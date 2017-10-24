'use strict'

const handlers = require('../handlers')

const routes = (server) => [
  {
    method: 'GET',
    path: '/',
    config: {
      handler: handlers.package.version
    }
  },
  {
    method: 'GET',
    path: '/webhook',
    config: {
      handler: handlers.facebook.webhook.validation
    }
  },
  {
    method: 'POST',
    path: '/webhook',
    handler: handlers.facebook.webhook.messages
  }
]

module.exports = routes
