const Discord = require('discord.js');
const http = require('http');

const client = new Discord.Client;

const getScript = (url) => {
    return new Promise((resolve, reject) => {
        const http      = require('http'),
              https     = require('https');

        let client = http;

        if (url.toString().indexOf("https") === 0) {
            client = https;
        }

        client.get(url, (resp) => {
            let data = '';

            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                resolve(data);
            });

        }).on("error", (err) => {
            reject(err);
        });
    });
};

var rupdate = '';

client.on("ready", async function() {
    rupdate = await getScript('https://setup.rbxcdn.com/version');
    console.log('Started: ' + rupdate)
    client.channels.cache.get('806512218950729748').send("hey idots! i has been started on heroku dis time and will now ping lot for infinite time thank me later C:");
    
    while (true) {
        let nupdate = await getScript('https://setup.rbxcdn.com/version');
        if (nupdate !== rupdate) {
            rupdate = nupdate;
            content = new Discord.MessageEmbed()
            .setAuthor("Update Notifier", client.user.avatarURL())
            .setTitle('Roblox Updated!')
            .setColor('#32CD32')
            .setDescription(' *-* **Roblox Version** `' + nupdate + '`\n *-* **Address List** *Coming Soon!*\n\n **Update Notifier** Created by Nexus42.');
            client.channels.cache.get('827149240928043018').send(content);
            client.channels.cache.get('827149240928043018').send("@here");
            console.log('Updated to ' + nupdate);
        }
    }
});

client.login(`ODI3MTA4MzcxMDkzMjU4MjYw.YGWOsg.IPJ1ZstimkGrtPnnweM7vgp3NmE`);