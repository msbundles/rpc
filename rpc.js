const RPC = require('discord-rpc');
const client = new RPC.Client({ transport: 'ipc' });
const config = require('./config.js');
const fs = require('fs');
const clientId = config.CLIENT_ID;

// Setting the activity
client.on('ready', () => {

    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: config.UPPER_TEXT,
            state: config.LOWER_TEXT,
            assets: {
                large_image: config.LARGE_IMAGE_NAME,
                large_text: config.LARGE_IMAGE_TEXT
            },
            buttons: [
                { label: config.BUTTON_1_TEXT, url: config.BUTTON_1_URL },
                { label: config.BUTTON_2_TEXT, url: config.BUTTON_2_URL }
            ]
        }
    })

});

client.login({clientId});

