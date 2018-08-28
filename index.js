// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('https://git.io/d.js-heroku', {type: 'WATCHING'});
	client.channels.get('483838057498542081').send('I am online');
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});
client.login('NDgzODMzMDUxOTg2NTI2MjA4.DmZMuw.Q77zRpCY-85EdyzzhUMzqA1B88Y');
