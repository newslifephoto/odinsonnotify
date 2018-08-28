// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('https://git.io/d.js-heroku', {type: 'WATCHING'});
	const channel = member.guild.channels.find(ch => ch.name === 'general');
	channel.send('Hello, I am online');
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
  // if (message.content === '/join') {
    // Only try to join the sender's voice channel if they are in one themselves
    // if (message.member.voiceChannel) {
      // message.member.voiceChannel.join()
        // .then(connection => { // Connection is an instance of VoiceConnection
          // message.reply('I have successfully connected to the channel!',{tts:true});
        // })
        // .catch(console.log);
    // } else {
      // message.reply('You need to join a voice channel first!');
    // }
  // }
});
client.login('NDgzODMzMDUxOTg2NTI2MjA4.DmZMuw.Q77zRpCY-85EdyzzhUMzqA1B88Y');
