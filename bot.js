const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === '!ping') {
        
        console.log(`ping de ${message.author}`);
        message.reply('pong');

       }

    if (message.content === '!lapicero') {

        message.reply('${message.author} eres puto');

        }

    if (message.content.startsWith('!stfu')) {
        const user = message.mentions.users.first();
        message.channel.send(`Callate ${user}`);
        }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret