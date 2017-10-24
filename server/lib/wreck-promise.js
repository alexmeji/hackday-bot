'use strict'

const config = require('../../config')

const Promise = require('bluebird'),
  Wreck = require('wreck'),
  Logger = require('bucker').createLogger({
    name: 'wreck-promise',
    console: config.get('/logger/options/console')
  })

// Set default configuration for Wreck and get new instance
const wreck = Wreck.defaults({
  timeout: 2000
})

const request = (method, uri, options) => {
  return new Promise((resolve, reject) => {

    Logger.info(`make a request method:${method} uri:"${uri}" options:%j`, options)
    wreck.request(method, uri, options, (err, res) => {
      if (err) {
        return reject(err)
      }

      wreck.read(res, {}, function (err, body) {
        if (err) {
          return reject(err)
        }

        let jsonBody = {}
        try {
          jsonBody = JSON.parse(body.toString())
        }
        catch (e) {
          return reject(e)
        }

        return resolve({
          host: uri,
          proxy: true,
          body: jsonBody
        })
      })
    })
  })
}

module.exports = {
  request,
  defaults: (options) => { wreck = wreck.defaults(options) },
  get: (uri, options) => { return request('GET', uri, options) },
  post: (uri, options) => { return request('POST', uri, options) },
  put: (uri, options) => { return request('PUT', uri, options) },
  delete: (uri, options) => { return request('DELETE', uri, options) }
}
