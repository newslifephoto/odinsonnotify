// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('https://git.io/d.js-heroku', {type: 'WATCHING'});
	// try{
		// client.channels.get('315373134670725120').send('I am online. see *help for command');
	// }
	// catch(e){
	// }
	try{
		client.channels.get('483838057498542081').send('I am online. see *help for command');
	}
	catch(e){
		
	}
});

client.on('message', msg => {
  if (msg.content === '*help') {
    msg.reply('*mon monstername\n*item itemname');
  }
  if (msg.content.toLowerCase().startsWith("*mon")) {
    var mon = msg.content.toLowerCase().split(" ");

	if(mon.length ===2){

		msg.reply("Here is your search list for "+mon[1]);
		msg.reply("http://ratemyserver.net/index.php?mob_name="+mon[1]+"&page=re_mob_db&f=1&mob_search=Search");
	}else{
		msg.reply("lenght = "+mon.length);
	}
  }
  if (msg.content.toLowerCase().startsWith("*item")) {
    var item = msg.content.toLowerCase().split(" ");

	if(item.length ===2){

		msg.reply("Here is your search list for "+item[1]);
		msg.reply("http://ratemyserver.net/index.php?iname="+item[1]+"&page=re_item_db&quick=1&isearch=Search");
	}else{
		msg.reply("length = "+mon.length);
	}
  }
   if (msg.content.toLowerCase().startsWith("*createmo")) {
	    var emo = msg.content.toLowerCase().split(" ");
		if(emo.length === 3){
			var fs = require('fs'),
			request = require('request');

			var download = function(uri, filename, callback){
				request.head(uri, function(err, res, body){
				console.log('content-type:', res.headers['content-type']);
				console.log('content-length:', res.headers['content-length']);
				request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
			  });
			};
			msg.reply("in 3");
		}
   }
});
client.login('NDgzODMzMDUxOTg2NTI2MjA4.DmZMuw.Q77zRpCY-85EdyzzhUMzqA1B88Y');
