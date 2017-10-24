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
            template_type: 'generic',
            elements: [
              {
                title: 'Yalo Chat',
                subtitle: 'Home Page',
                item_url: 'https://www.yalochat.com/',
                image_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/9Ng3cDrKdPZ.png',
                buttons: [
                  {
                    type: 'web_url',
                    url: 'https://www.yalochat.com/',
                    title: 'Open Web URL'
                  }
                ],
              }, {
                title: 'Yalo Chat',
                subtitle: 'Interactúa con WhatsApp',
                item_url: 'https://www.yalochat.com/promo',
                image_url: 'https://daks2k3a4ib2z.cloudfront.net/596d4104caac727fda24d6b4/59add50dc31dc00001f37ee1_promo-phone.png',
                buttons: [
                  {
                    type: 'web_url',
                    url: 'https://www.yalochat.com/promo',
                    title: 'Open Web URL'
                  }
                ]
              }
            ]
          }
        }
      }
    }
  }
}
