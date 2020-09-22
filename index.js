const Discord = require("discord.js");
const Enmap = require("enmap");
const Canvas = require('canvas');
const fs = require("fs");
const reddit = require('@elchologamer/random-reddit');
const { Menu } = require('discord.js-menu');
const canvacord = require("canvacord");
const nodeCMD = require("node-cmd");
const leveling = require('discord-leveling')
let alexa = require('alexa-bot-api');
let ai = new alexa("aw2plm")//access key free :)
const { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const client = new Discord.Client()



const usedCommandRecently = new Set();

const config = require("./config.json");

let options = {
    imageOnly: true,
    allowNSFW: false
};

client.on('ready', () => {
 console.log('i am ready!')
 client.user.setActivity('am.help!');
});

client.on('message', async message => {
  if(message.author.bot) return; 

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
   var profile = await leveling.Fetch(message.author.id)
  leveling.AddXp(message.author.id, 10)
  //If user xp higher than 100 add level
  if (profile.xp + 10 > 100) {
    await leveling.AddLevel(message.author.id, 1)
    await leveling.SetXp(message.author.id, 0)
    message.reply(`Congraluations you now are level ${profile.level + 1}`)
  } 
  if (command === 'wiki') {
    let text = args.join(" ");
    message.channel.send('https://among-us-wiki.fandom.com/wiki/' + text);
  }

if (command === 'guide') {
  if (!args.length){
   const embed = new MessageEmbed()
      .setTitle('Error!')
      .setColor(0xff0000)
      .setDescription('Did you mean .am guide crewmate/impostor?')
    // Send the embed to the same channel as the message
    message.channel.send(embed);
   }
    else if (args[0] === 'crewmate') {
      const embed2 = new MessageEmbed()
      .setTitle('Crewmate')
      .setColor("3480eb")
      	.addField('Basics!', 'Your main objective is to finish your tasks before dying, you could also do tasks upon death.', true)
	.addField('Grouping', 'Never Group with people you think could be the impostor, i would advise not to group with more than 2 people because anyone could be the impostor!', false)
        .addField('Tasks', 'After you have completed all of your tasks tell everyone to be in the cafeteria if they completed there tasks because the impostor cannot kill more than 1 person at a time without people noticing him killing Once, you completed your tasks and you are in the cafeteria do emergency meetings to figure out who is the imposter', false)
    // Send the embed to the same channel as the message
    message.channel.send(embed2);
	}
    else if (args[0] === 'impostor') {
      const embed3 = new MessageEmbed()
      .setTitle('impostor')
      .setColor("3480eb")
      	.addField('Basics!', 'Your main objective is to kill everyone without being noticed', true)
	.addField('Grouping', 'Always Group up with people because they are like your witnesses they will help you when your reported!', false)
        .addField('Tasks', 'You have to fake tasks but dont stand there too long because then people will report you!', false)
        .addField('Kills', 'Kill people when there is no one else in the room there is one execption to this when there are alot of people in the same spot.', false)
    message.channel.send(embed3);
	}
   }
  if (command === 'ping') {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }

  if (command === 'map') {
   if (!args.length){
   const embed = new MessageEmbed()
      .setTitle('Error!')
      .setColor(0xff0000)
      .setDescription('Did you mean .am map skield/polus/mira')
    // Send the embed to the same channel as the message
    message.channel.send(embed);
   }
  else if (args[0] === 'polus') {
        const attachment = new MessageAttachment('https://i.imgur.com/ymbOGWN.jpg');
    // Send the attachment in the message channel
    message.channel.send(attachment);
	}
  else if (args[0] === 'skield') {
        const attachment = new MessageAttachment('https://i.imgur.com/w8Dklsg.png');
    // Send the attachment in the message channel
    message.channel.send(attachment);
	}
  else if (args[0] === 'mira') {
        const attachment = new MessageAttachment('https://i.imgur.com/XAyCaa6.png');
    // Send the attachment in the message channel
    message.channel.send(attachment);
	}
   }

 if (command === 'character') {
if (!args.length){
   const embed = new MessageEmbed()
      .setTitle('Error!')
      .setColor(0xff0000)
      .setDescription('Did you mean .am character <color> ex: lime')
    // Send the embed to the same channel as the message
    message.channel.send(embed);
   }
  else if (args[0] === 'lime') {
        const attachment = new MessageAttachment('https://vignette.wikia.nocookie.net/among-us-wiki/images/f/fd/12_lime.png');
    // Send the attachment in the message channel
    message.channel.send(attachment);
	}
else if (args[0] === 'cyan') {
        const attachment = new MessageAttachment('https://vignette.wikia.nocookie.net/among-us-wiki/images/f/f2/11_cyan.png');
    // Send the attachment in the message channel
    message.channel.send(attachment);
	}
else if (args[0] === 'red') {
        const attachment = new MessageAttachment('https://vignette.wikia.nocookie.net/among-us-wiki/images/a/a6/1_red.png');
    // Send the attachment in the message channel
    message.channel.send(attachment);
	}
else if (args[0] === 'green') {
        const attachment = new MessageAttachment('https://vignette.wikia.nocookie.net/among-us-wiki/images/3/34/3_green.png');
    // Send the attachment in the message channel
    message.channel.send(attachment);
	}
else if (args[0] === 'blue') {
        const attachment = new MessageAttachment('https://vignette.wikia.nocookie.net/among-us-wiki/images/8/8e/2_blue.png');
    // Send the attachment in the message channel
    message.channel.send(attachment);
	}
else if (args[0] === 'brown') {
        const attachment = new MessageAttachment('https://vignette.wikia.nocookie.net/among-us-wiki/images/b/b2/10_brown.png');
    // Send the attachment in the message channel
    message.channel.send(attachment);
	}
else if (args[0] === 'purple') {
        const attachment = new MessageAttachment('https://vignette.wikia.nocookie.net/among-us-wiki/images/7/72/9_purple.png');
    // Send the attachment in the message channel
    message.channel.send(attachment);
	}
else if (args[0] === 'pink') {
        const attachment = new MessageAttachment('https://vignette.wikia.nocookie.net/among-us-wiki/images/9/9b/4_pink.png');
    // Send the attachment in the message channel
    message.channel.send(attachment);
	}
else if (args[0] === 'orange') {
        const attachment = new MessageAttachment('https://vignette.wikia.nocookie.net/among-us-wiki/images/f/f1/5_orange.png');
    // Send the attachment in the message channel
    message.channel.send(attachment);
	}
else if (args[0] === 'yellow') {
        const attachment = new MessageAttachment('https://vignette.wikia.nocookie.net/among-us-wiki/images/5/54/6_yellow.png');
    // Send the attachment in the message channel
    message.channel.send(attachment);
	}
  }

  if (command === 'memes') {
  message.channel.send("```Please, wait some memes take a while to load.```")
reddit.getPost('AmongUs', options).then(post => {
    console.log(`Received post: ${post.images}`);
 const embed = new MessageEmbed()
      .setTitle(`${post.title}`)
      .setImage(`${post.image}`)
      .setColor("99caff")
      .setFooter("powered by me duh.")
    // Send the embed to the same channel as the message
    message.channel.send(embed);
}).catch(err => {
    console.log(err);
});

  }
  if (command === 'help') {
 const embed = new MessageEmbed()
      .setTitle("Help - Commands!")
      .addField("1.", "am.guide <ex: impostor> - Teaches you how to play the game")
      .addField("2.","am.ping - pong!")
      .addField("3.","am.map <ex: polus> - Shows you a picture of the selected maps do am.map without arguments to view all of the Options.")
      .addField("4.","am.wiki - shows you the desired page of the wiki ex: am.wiki impostor")
      .addField("5.","am.character <ex: lime> - Shows you a picture of the desired character", false)
      .addField("6.","am.memes - shows you among us memes!", false)
      .addField("7.","am.trigger - Triggers someone!", false)
      .addField("8.","am.trash - Trash meme command",false)
      .addField("9.","am.jail - Jail meme command",false)
      .addField("10.","am.level - Shows your level",false)
      .addField("11.","am.chat - Talk with an AI Its learns.",false)
      .addField("12.","am.amongify - Amongify your profile picture",false)
      .addField("13.","am.changemymind - Change my mind meme.",false)
      .setColor("99caff");
    // Send the embed to the same channel as the message
    message.author.send(embed);
    message.channel.send("Check your dms!")
  }
	
	
     if (command === "trigger") {
        var user = message.mentions.users.first() || message.author
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.trigger(avatar);
        let attachment = new Discord.MessageAttachment(image, "triggered.gif");
        return message.channel.send(attachment);
  }

  if(command === "jail") {
        var user = message.mentions.users.first() || message.author
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.jail(avatar);
        let attachment = new Discord.MessageAttachment(image, "bruh.png");
        return message.channel.send(attachment);
    }


  if(command === "trash") {
        var user = message.mentions.users.first() || message.author
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.trash(avatar);
        let attachment = new Discord.MessageAttachment(image, "bruh.png");
        return message.channel.send(attachment);
    }
  if(command === "level") {
        var user = message.mentions.users.first() || message.author

        var output = await leveling.Fetch(user.id)
    	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px Century-Gothic-Bold';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${user.tag} has`, canvas.width / 2.5, canvas.height / 3.5);

	
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${output.level} level(s)`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(user.displayAvatarURL({ format: 'png' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'testing.png');

	message.channel.send(attachment);
   }
	if(command === "membercount") {
	message.guild.members.fetch().then(fetchedMembers => {
	const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');
	// We now have a collection with all online member objects in the totalOnline variable
	message.channel.send(`There are currently ${totalOnline.size} members online in this guild!`);
});
	}
	
	 if(command === "amongify") {
     message.channel.send("``This will most likely not work on transparent avatars``")
     var user = message.mentions.users.first() || message.author

    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('./wallpaper.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    const cyan = await Canvas.loadImage('./cyan.png')
    ctx.drawImage(cyan, 0, 0, canvas.width, canvas.height);

    const avatar = await Canvas.loadImage(user.displayAvatarURL({ format: 'png' }));
    ctx.drawImage(avatar, 300, 25, 200, 200);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'testing.png');

    message.channel.send(attachment);
  }

 if(command === "chat") {
  let text = args.join(" ");
  ai.getReply(text).then(reply => message.channel.send(reply))
 }

 if(command === "changemymind") {
  let text = args.join(" ");
  let img = await canvacord.changemymind(text);
  let attachment = new Discord.MessageAttachment(img, "bruher.png");
  message.channel.send(attachment)
}  	
})

client.login(process.env.TOKEN)
