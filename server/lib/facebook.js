'use strict'

const config = require('../../config')

const Logger = require('bucker').createLogger({
  name: 'facebook',
  console: config.get('/logger/options/console')
})

const wreck = require('./wreck-promise'),
  fbApiUrl = config.get('/messenger/apiUrl'),
  fbMessagePath = config.get('/messenger/messagePath'),
  fbAccessToken = config.get('/messenger/accessToken')

// send message to facebook
const response = (template) => {

  const payload = template || {}
  const uri = (fbMessagePath || '/').concat(`?access_token=${fbAccessToken}`)
  const timeout = 5000

  const opts = {
    baseUrl: fbApiUrl,
    payload: payload,
    timeout: timeout,
    rejectUnauthorized: true
  }

  wreck.post(uri, opts).then(response => {
    let recipientId = response.body.recipient_id
    let messageId = response.body.message_id
    Logger.info('Successfully sent message with id %s to recipient %s', messageId, recipientId)
  }).catch((error) => {
    Logger.error(error, 'Unable to send message %j', payload)
  })

}

module.exports = {
  response
}
