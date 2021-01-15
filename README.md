# Discord Rich Presence Client in Node.js
One of the only RP Clients with clickable buttons and changeable text using discord itself(you cant click buttons on your own profile) using the NPM package `@discordjs/discord-rpc`
NOTE: you have to host this on your pc, won't work if u host it on a vps as discord needs to be open and logged in if u use this.
NOTE: THIS IS NOT A SELF BOT.
# Setting up
- Install [nodejs](nodejs.org), idk why but ONLY node v12 works so get node v12.20.0
- Clone this repo on your local machine
- open config.js
- edit the things u want
- Go to [discord dev portal](https://discord.com/developers/applications) and create a new app, named anything u want (this will be visible on your profile as `Playing name`)
- then in the app go to rich presence and click on art assets
- Then Scroll down and copy the image name, then paste it in rpc.js in `large_image: 'image name here'` thanks to [@BearTS](https://github.com/BearTS) for helping with this
- then go back to dev portal, click on general info
- copy the client ID and paste it in config.js
- then go to bot in dev portal and click on add bot, and paste the bot token in config.js
- open discord, and copy ur own user id. see https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
- choose a good prefix
- invite your bot to a server using https://discordapi.com/permissions.html
- open a new terminal/command prompt window, and do `cd path/to/folder`
- then do `npm install` to install the npm packages from package.json
- then do `node rpc.js` to run the RPC, (u can also use pm2, forever, nodemon)<br/>
Tested on KDE neon, Manjaro, Ubuntu, Windows 10/7 (should work on mac too)
