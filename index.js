const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ".";
client.on("ready", message => {
    console.log('bot => ok');
})

client.on("message", message => {
    if(message.content === `${prefix}ping`) {
        message.channel.send(`🏓 pong - ${client.ws.ping}`)
    }
        
    if(message.content === `salut`){
        message.channel.send('<a:mc:736946454228369503> salut');
    }
        
    
         message.channel.send(help)  
   } 

   if(message.content === `tg`){
        message.channel.send('merci de ne pas insulter ');
    }

   if(message.content === `Fdp`){
        message.channel.send('ta mère la pute tu arrête <a:ban:736946398490001408>');
    }

   if(message.content === `.nitro`){
      message.channel.send('1 invite = nitro classic  <a:emoji_55:739952349937664131>!');
    }
    
   if(message.content === `.support`){
      message.channel.send('voici le lien du serveur support: https://discord.gg/fFUDPuZ');
    }
   if (message.content === `.help`){
let embed = new Discord.MessageEmbed()
.setTitle('voici mes commands .help') 
.setDescription('<===Invitation==>')
.addField('.help')
.addField('**<===moderation==>**')
.setThumbail('https://cdn.discordapp.com/attachments/737388526848442459/742203444919533668/images_14.png')
.setImage('https://cdn.discordapp.com/attachments/737388526848442459/742203445062271027/Discord_Infos-2.png')
.setTimestamp()
.setFooter('create by jordan');

    }
})

client.login(process.env.TOKEN);
