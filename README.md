# Hackday Bot
===================

**Requirements**
------------
 - git client
 - nodejs +v6.10.0 & npm
 - [ngrok](https://ngrok.com/) (Secure tunnels to localhost)

**Installation**
----------------
Download github project and install dependencies

    git clone git@github.com:devcfacebook/hackday-bot.git
    cd hackday-bot
    npm install

Create **.env** file or clone **.env.example** in root directory

    APP_PORT=3020
    PAGE_ACCESS_TOKEN=

Launch the application by running `npm start` and open http://localhost:3020 in your browser.

	hackday-bot@1.0.0 start ~/hackday-bot
	node index.js
	server.info: Server running at: http://localhost:3020

on another terminal run `ngrok command`

    ngrok http 3020

----------

    ngrok by @inconshreveable

    Session Status                online
    Update                        update available (version 2.2.8, Ctrl-U to update)
    Version                       2.2.4
    Region                        United States (us)
    Web Interface                 http://127.0.0.1:4040
    Forwarding                    http://d6f4d9ba.ngrok.io -> localhost:3020
    Forwarding                    https://d6f4d9ba.ngrok.io -> localhost:3020

next step... configure your bot

Facebook
========

**[Quick Start](https://developers.facebook.com/docs/messenger-platform/getting-started/quick-start)**
-----------------------------------
This is a walkthrough to see the basics of the platform in action. Read the [Complete Guide](https://developers.facebook.com/docs/messenger-platform/product-overview/setup) to learn about the platform in more detail.

**1. Create a Facebook App and Page**

 - Create a new [Facebook App](https://developers.facebook.com/apps) and [Page](https://www.facebook.com/pages/create) or use existing ones. Go to the App Dashboard and under Product Settings click "Add Product" and select "Messenger."
![enter image description here](https://scontent-mia3-2.xx.fbcdn.net/v/t39.2178-6/12995587_195576307494663_824949235_n.png?oh=2c4beb8b65bbe674b9d02e55baded4fb&oe=5A7C24C3)

**2. Setup Webhook**

 - In the Webhooks section, click "Setup Webhooks." 
![enter image description here](https://scontent-mia3-2.xx.fbcdn.net/v/t39.2178-6/13331609_660771177408445_306127577_n.png?oh=b2c73c9b6a96d514e26b312d507df043&oe=5A87674C)
 - Enter a **URL for a webhook**, enter a **Verify Token** and select **messages** and **messaging_postbacks** under Subscription Fields. 
![enter image description here](https://scontent-mia3-2.xx.fbcdn.net/v/t39.2178-6/12057143_211110782612505_894181129_n.png?oh=566821dc645b301f1356be2c1c7c35ef&oe=5A78B2F1)
	 - Callback URL: **(use your ngrok https url)** 
		 - https://d6f4d9ba.ngrok.io/webhook
	 - Verify Token: **(value into .env file "VERIFY_TOKEN")**
		 - H@ck-d@y

**3. Get a Page Access Token**

 - In the Token Generation section, select your Page. A Page Access Token will be generated for you. Copy this Page Access Token. Note: The generated token will NOT be saved in this UI. Each time you select that Page a new token will be generated. However, any previous tokens created will continue to function.
![enter image description here](https://scontent-mia3-2.xx.fbcdn.net/v/t39.2178-6/12995543_1164810200226522_2093336718_n.png?oh=27f1f08c8e2ee6139f1a93d24d92aece&oe=5A476D09)
	 - Copy the **Page Access Token** and paste into **.env file "PAGE_ACCESS_TOKEN"**
	 
**4. Subscribe the App to the Page**

 - In the Webhooks section, you can subscribe the webhook for a specific page.
![enter image description here](https://scontent-mia3-2.xx.fbcdn.net/v/t39.2178-6/13421551_1702530599996541_471321650_n.png?oh=60b2566071cfb9662ce3c303d3ab3d8e&oe=5A4E859F)

**5. Restart your project**
	
    ^C
    npm start
    hackday-bot@1.0.0 start ~/hackday-bot
    node index.js
    server.info: Server running at: http://localhost:3020
**6. Test your bot**

 - Open your fan page and let's do magic

# Bonus Extra 💪
===================

**AI Service**
------------
Open https://github.com/devcfacebook/rasa_nlu

-------------------
with ❤ by [@kikerios](https://github.com/kikerios) in collaboration with [@baquiax](https://github.com/baquiax)
