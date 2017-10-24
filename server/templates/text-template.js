'use strict'

module.exports = {
  create: (recipientId, messageText) => {
    return {
      recipient: {
        id: recipientId
      },
      message: {
        text: messageText
      }
    }
  }
}
