'use strict'

module.exports = {
  create: (recipientId) => {
    return {
      recipient: {
        id: recipientId
      },
      message: {
        attachment: {
          type: 'template',
          payload: {
            template_type: 'button',
            text: 'This is a button template',
            buttons: [
              {
                type: 'web_url',
                url: 'https://facebook.com',
                title: 'Open facebook.com'
              },
              {
                type: 'postback',
                title: 'Start Chatting',
                payload: 'USER_DEFINED_PAYLOAD'
              }
            ]
          }
        }
      }
    }
  }
}
