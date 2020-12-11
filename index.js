const Discord = require('discord.js');

const client = new Discord.Client();

client.commands = new Discord.Collection();

const prefix = ''

client.once('ready', () => {
    console.log('AutoResponder is online');
    client.user.setActivity('Your Messages', { type: 'WATCHING' });
});

 
client.on("message", message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();  
    if (command === "hello") {  
	    message.channel.send(`Hello ${message.author}`);  
    }else if(command == "hi") {
        message.channel.send(`HI ${message.author}`)
    }else if(command == "help") {
        message.channel.send(`This command is under development....`)
    }
}); 
  
client.login("/*Put your bot token here*/")