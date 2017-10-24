'use strict'

const config = require('../../config')

const _ = require('lodash'),
  Boom = require('boom'),
  Logger = require('bucker').createLogger({
    name: 'facebook-handler',
    console: config.get('/logger/options/console')
  })

const webhook = {
  validation: (request, reply) => {

    // get verify token from configuration
    const token = config.get('/messenger/token')

    // parse query params
    const hub = {
      mode: request.query['hub.mode'],
      verifyToken: request.query['hub.verify_token'],
      challenge: request.query['hub.challenge']
    }

    // validate connection
    if (hub.mode === 'subscribe' && hub.verifyToken === token) {
      Logger.info('Validating webhook OK')
      reply(hub.challenge)
    } else {
      Logger.error('Failed validation. Make sure the validation tokens match.')
      reply(Boom.forbidden('Failed validation. Make sure the validation tokens match.'))
    }

  },
  messages: (request, reply) => {

    const data = request.payload

    // Make sure this is a page subscription
    if (_.has(data, 'object') && _.isEqual(_.get(data, 'object'), 'page')) {

      // response to facebook OK
      reply({})

      // Iterate over each entry - there may be multiple if batched
      _.each(data.entry, (entry) => {

        // Iterate over each messaging event
        _.each(entry.messaging, (event) => {

          Logger.debug(`Messenger event: %j`, event)

        })
      })

    } else {
      reply(Boom.badRequest('Payload data'))
    }

  }
}

module.exports = {
  webhook
}
