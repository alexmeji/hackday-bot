'use strict'

const images = [
  'https://media.giphy.com/media/3oEjHAUOqG3lSS0f1C/giphy.gif',
  'https://media.giphy.com/media/y0nR7YHlQ8qek/giphy.gif',
  'http://media.giphy.com/media/rMvVhXIbFHsGc/giphy.gif',
  'http://www.quertime.com/wp-content/uploads/2014/09/phobia_diet_coke_animated_gif_image.gif',
  'https://media.giphy.com/media/CA3CP4j6uZgME/giphy.gif',
  'https://i.pinimg.com/originals/8f/f9/05/8ff9050186728936d81277d3e3c09615.gif',
  'https://media.giphy.com/media/PmpA5ohOUl1xC/giphy.gif',
  'https://media.giphy.com/media/9GimADqtnpAPe/giphy.gif',
  'https://i.pinimg.com/originals/b1/7c/98/b17c98c2d9df1befda300b0fb7c26ae4.gif',
  'http://media0.giphy.com/media/1bYaHhGtueIqQ/giphy.gif',
  'https://media.giphy.com/media/IMSq59ySKydYQ/giphy.gif',
  'https://media.giphy.com/media/cRq8TJsIKmQRG/giphy.gif',
  'https://media.giphy.com/media/AMJL5dMqqxNL2/giphy.gif',
]

module.exports = {
  create: (recipientId) => {
    return {
      recipient: {
        id: recipientId
      },
      message: {
        attachment: {
          type: 'image',
          payload: {
            url: images[Math.floor(Math.random() * images.length)]
          }
        }
      }
    }
  },
  picture: (recipientId, imageUrl) => {
    return {
      recipient: {
        id: recipientId
      },
      message: {
        attachment: {
          type: 'image',
          payload: {
            url: imageUrl
          }
        }
      }
    }
  }
}
