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
  if (msg.content.toLowerCase().startsWith("$mon")) {
    var mon = msg.content.toLowerCase().split(" ");

	if(mon.length ===2){

		msg.reply("Here is your search list for "+mon[1]);
		msg.reply("http://ratemyserver.net/index.php?mob_name="+mon[1]+"&page=re_mob_db&f=1&mob_search=Search");
	}else{
		msg.reply("lenght = "+mon.length);
	}
  }
  if (msg.content.toLowerCase().startsWith("$item")) {
    var item = msg.content.toLowerCase().split(" ");

	if(item.length ===2){

		msg.reply("Here is your search list for "+item[1]);
		msg.reply("http://ratemyserver.net/index.php?iname="+item[1]+"&page=re_item_db&quick=1&isearch=Search");
	}else{
		msg.reply("lenght = "+mon.length);
	}
  }
});
client.login('NDgzODMzMDUxOTg2NTI2MjA4.DmZMuw.Q77zRpCY-85EdyzzhUMzqA1B88Y');
