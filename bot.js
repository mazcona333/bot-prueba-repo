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
    var elec = ["piedra", "papel", "tijera"];
    var res = [", empate", ", gano yo", ", ganas tu"];
    switch (message.content) {
        case '!piedra':
            switch (sel) {
                case 0:
                    message.reply(elec[sel] + res[0]);
                    break;
                case 1:
                    message.reply(elec[sel] + res[1]);
                    break;
                case 2:
                    message.reply(elec[sel] + res[2]);
                    break;
            }
            break;
        case '!papel':
            switch (sel) {
                case 0:
                    message.reply(elec[sel] + res[2]);
                    break;
                case 1:
                    message.reply(elec[sel] + res[0]);
                    break;
                case 2:
                    message.reply(elec[sel] + res[1]);
                    break;
            }
            break;
        case '!tijera':
            switch (sel) {
                case 0:
                    message.reply(elec[sel] + res[1]);
                    break;
                case 1:
                    message.reply(elec[sel] + res[2]);
                    break;
                case 2:
                    message.reply(elec[sel] + res[0]);
                    break;
            }
            break;
    }
    return ;
}
 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret