// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('Ragnarok', {type: 'WATCHING'});
	const channel = client.channels.get("483838057498542083");
  if (!channel) return console.error("The channel does not exist!");
  channel.join().then(connection => {
    // Yay, it worked!
    console.log("Successfully connected.");
	
  }).catch(e => {
    // Oh no, it errored! Let's log it to console :)
    console.error(e);
  });
	// const channel = member.guild.channels.find(ch => ch.name === 'general');
	// channel.send('Hello, I am online');
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
