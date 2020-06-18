const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    switch (message.content) {
        case '!ping':
            console.log(`ping de ${message.author.tag}`);
            message.reply('pong');
            break;
        case '!lapicero':
            message.reply('eres puto');
            break;
        case '!piedra':
            juego(message);
            break;
        case '!papel':
            juego(message);
            break;
        case '!tijera':
            juego(message);
            break;
        default:
            if (message.content.startsWith('!stfu')) {
                const user = message.mentions.users.first();
                if(user){
                    message.channel.send(`${user}, ${message.author} dice que te calles`);
        
                }else{
                    message.reply('si no tienes nadie a quién mandar callar, cállate');
                }
            }
            break;

      }

});

function juego(message) {
    sel = Math.floor(Math.random() * 3);
    switch (message.content) {
        case '!piedra':
            switch (sel) {
                case 0:
                    message.reply('piedra, empate');
                    break;
                case 1:
                    message.reply('papel, he ganado yo');
                    break;
                case 2:
                    message.reply('tijera, has ganado tu');
                    break;
            }
            break;
        case '!papel':
            switch (sel) {
                case 0:
                    message.reply('piedra, has ganado tu');
                    break;
                case 1:
                    message.reply('papel, empate');
                    break;
                case 2:
                    message.reply('tijera, he ganado yo');
                    break;
            }
            break;
        case '!tijera':
            switch (sel) {
                case 0:
                    message.reply('piedra, he ganado yo');
                    break;
                case 1:
                    message.reply('papel, has ganado tu');
                    break;
                case 2:
                    message.reply('tijera, empate');
                    break;
            }
            break;
    }
    return ;
}
 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret