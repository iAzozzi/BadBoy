const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.TOKEN);
var prefix = "k";



       
      

client.on("message", async message => {
  let args = message.content.split(" ");
  let user =
    message.mentions.users.first() || message.guild.members.cache.get(args[1]);
  if (message.content.startsWith(prefix + "mute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check Your Permission MUTE_MEBMERS**"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check My Permission MUTE_MEBMERS**"
      );
    if (!user)
      return message.channel.send(`**>>> ${prefix}mute <@mention Or ID>**`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    if (!mute)
      mute = await message.guild.roles.create({
        data: {
          name: "Muted",
          color: "#000000",
          permissions: []
        }
      });
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.add(mute);
    message.channel.send(`**${user.username} has been muted!**`);
  }
  if (message.content.toLowerCase() === `${prefix}help mute`) {
    let mute = new Discord.MessageEmbed()
      .setTitle(`Command: Mute `)
      .addField("Usage", `${prefix}mute @user`)
      .addField("Information", "Mute Members");
    message.channel.send(mute);
  }
});


var statuss = [`${prefix}help`,`By iAzozzi`];
var secound = 5;
client.on("ready", () => {
  var timeing = Math.floor(secound * 700);
  setInterval(function() {
    var ammount = statuss.length;
    var num = Math.floor(Math.random() * ammount);
    client.user.setActivity(statuss[num], { type: "PLAYING" });
  }, timeing);
});








client.on('message', message => {
if(message.content.startsWith('يلعن') || message.content.startsWith('ابوك') || message.content.startsWith('كس') || message.content.startsWith('كس امك') || message.content.startsWith('كسم') || message.content.startsWith('امك') || message.content.startsWith('اختك') ||
message.content.startsWith('كل زق')||
message.content.startsWith('كل خرا')||
message.content.startsWith('حنيث')||
message.content.startsWith('مخانيث')||
message.content.startsWith(' مخنوث')||
message.content.startsWith('العن امك')||
message.content.startsWith('بلعن')||
message.content.startsWith('العن')||
message.content.startsWith('العن ابوهم')||
message.content.startsWith('ks amkm')||
message.content.startsWith('ks')) {

    message.delete();
const embed = new Discord.MessageEmbed()
          .setColor('YELLOW')
          .setTitle(`:warning: لقد تم تحذيرك`)
          .addField('السبب', 'شتم في السيرفر')
          .setFooter(message.guild.name, message.guild.iconURL())
message.author.send(embed);
  }
});




client.on("message", message => {
  if (!message.guild) return
  if (message.content.startsWith(prefix + "ban") || message.content.startsWith("حرك")) {
    if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        "**You Dont Have Permission To Do This <a:wrong:769804342353723422>**"
      );
    let args = message.content.split(' ').slice(3);
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: `${args}`
          })
          .then(() => {
            message.reply(`Successfully banned <@${user.id}> <a:done:769804326494404608>

            **${args} : السبب**`);
          })
          const ress = new Discord.MessageEmbed()
          .setColor('RED')
          .setTitle(`:warning: You Are Banned From ${message.guild.name}`)
          .addField('السبب', `**${args}**`)
          .setFooter(message.guild.name, message.guild.iconURL())
          user.send(ress)
          .catch(err => {
            message.reply("I was unable to ban the member");
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      const embed = new Discord.MessageEmbed()
      .setColor('BLACK')
      .setDescription(`
**Command: ban**
Bans a member.
Aliases:
ban , حرك
Usage:
${prefix}ban (user) (time m/h/d/mo/y) (reason)

**Examples:**
${prefix}ban JustsBot
${prefix}ban  spamming
${prefix}ban  1h spamming
${prefix}ban  1d spamming
${prefix}ban  1w
`);
      message.channel.send(embed);
    }
  }
});



client.on("message", message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + "kick") || message.content.startsWith("برا")) {
    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message.channel.send(
        "**You Dont Have Permission To Do This <a:wrong:769804342353723422>**"
      );
     let args = message.content.split(' ').slice(3);
     const user = message.mentions.users.first();
     if (user.id) {
      const member = message.guild.member(user.id);
      if (member) {
        member
          .kick({
          reason: `${args}`
          })
          .then(() => {
            message.reply(`Successfully kick <@${user.id}> <a:done:769804326494404608> 

            **${args} : السبب**`);
          })
          const ress = new Discord.MessageEmbed()
          .setColor('RED')
          .setTitle(` ${message.guild.name} تم طردك من سيرفر :warning:`)
          .addField(`: السبب` ,` **${args}**`)
          .setFooter(message.guild.name, message.guild.iconURL())
          user.send(ress)
          .catch(err => {
            message.reply("I was unable to kick the member");
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      const embed = new Discord.MessageEmbed()
      .setColor('BLACK')
      .setDescription(`
**Command:kick **
Bans a member.
Aliases:
kick , برا
Usage:
${prefix}kicj (user) (time m/h/d/mo/y) (reason)

**Examples:**
${prefix}kick 
${prefix}kick  spamming
${prefix}kick  1h spamming
${prefix}kick  1d spamming
${prefix}kick  1w
`);
      message.channel.send(embed);
    }
  }
});


client.on('message', message => {
  if(message.content.startsWith('https://') || message.content.startsWith('discord.gg/') || message.content.startsWith('youtube') || 
  message.content.startsWith('http://') ||
   message.content.startsWith('.org') ||
  message.content.startsWith('.com') || message.content.startsWith('.net')) {
    message.delete()
    const embed = new Discord.MessageEmbed()

.setColor('RED')
.setTitle(' يمنع نشر الروابط :warning: ')
  
    message.author.send(embed)
  }
});

//code clean msesage
client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith( prefix + 'clear')) {
const messageArray = message.content.split(' ');
    const args = messageArray.slice(1);

    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Lack of Perms!');
    
    let deleteAmount;

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Please put a number only!') }

    if (parseInt(args[0]) > 100) {
        return message.reply('You can only delete 100 messages at a time!')
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount + 1, true);
    message.reply(`**Successfully** Deleted ***${deleteAmount}*** Messages.`)
  }
   
});
//code clean message

client.on('message', message => {
    if (message.content.startsWith(prefix + 'avatar')) {
        const user = message.mentions.users.first() || message.author;
        const avatarEmbed = new Discord.MessageEmbed()
            .setAuthor(`${user.username} Avatar`)  
            .setTitle(`**Avatar link**`)
            .setURL(user.displayAvatarURL({ dynamic: true })) 
            .setColor('RANDOM')
.setImage(user.displayAvatarURL({ dynamic: true }))
message.channel.send(avatarEmbed);
}
});


client.on('message', abd => {
if (abd.author.bot) return;
let abdu = abd.content.split(" ").slice(1).join(" ")
if (abd.content.startsWith (prefix + "say")) {
  abd.delete();
const embed = new Discord.MessageEmbed()
  .setColor(`BLACK`)
  .setDescription(abdu)
abd.channel.send(embed)
}
});



client.on('message', message => {
   if (message.content.startsWith(prefix + 'bot')) {
    const embed = new Discord.MessageEmbed()
      .setThumbnail(message.guild.iconURL())
      .setAuthor(client.user.username, client.user.avatarURL)
      .setColor(`RED`)
      .addField(`**Servers** :  `, ` ${client.guilds.cache.size}`)
      .addField(`**Channels** : `, ` ${client.channels.cache.size} `)
      .addField(`**Users** : `, ` ${client.users.cache.size} `)
      .addField(`**Bot Name** :  `,` ${client.user.tag} `)
      message.channel.send(embed);
}
});




client.on('message', message => {
  if(message.content.startsWith(prefix + 'Azoz')) {
const embed = new Discord.MessageEmbed()

.setColor('RED')
.setTitle('عبادي')



message.author.send(embed)
  }
});


client.on('message', message => {
    if (message.content === prefix + 'iserver') {  
       var year = message.guild.createdAt.getFullYear()
       var month = message.guild.createdAt.getMonth()
       var day = message.guild.createdAt.getDate()  
       
       
        const embed = new Discord.MessageEmbed()
            .setTitle('**server info**')
            .setThumbnail(message.guild.iconURL({ dynamic: true}))  
            .addField("**:information_source: Name server**",`**${message.guild.name}**`)
            .addField("**:id: Server ID**:",`**${message.guild.id} **`)
       
            .addField("**:crown:Server Owner**:",`** ${message.guild.owner.user} **`)  //layer team. make by BodaRamzy300
            .addField(":busts_in_silhouette:**MemberCount**:",`** [ ${message.guild.memberCount} ] **`) //layer team. make by BodaRamzy300
       .addField(":earth_americas:**Region**:",`**[ ${message.guild.region} ]**`) 
       .addField(":mute: **AFK Room**:",`**${message.guild.afkChannelID ? `<#${message.guild.afkChannelID}> after ${message.guild.afkTimeout / 60}min` : 'None.'}**`)    //layer team. make by BodaRamzy300
       .addField(':calendar: **Created IN**: ' ,year + "-"+ month +"-"+ day)    
        .addField(`:744106862445854740: Status : `, message.guild.status, true)
          
            .setFooter(message.author.username, message.author.displayAvatarURL())
        message.channel.send(embed)
    }
});

client.on("message", (message) => {
     
   if (message.content.startsWith("-new")) {
        const reason = message.content.split(" ").slice(1).join(" ");      
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);     
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });     
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("-close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`-confirm\`. This will time out in 10 seconds and be cancelled.`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '-confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })     
                   .then((collected) => {
                       message.channel.delete();
                   })     
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});





   client.on('message',async message => {
	
  if(message.content.startsWith(prefix + "تقديم")) {
 
if(!message.channel.guild) return message.reply(' ');
 
 
  let submite = message.guild.channels.find(`name`, "التقديمات");
 
  if(!submite) return message.channel.send("❌لم اجد الروم الخاص بالتقديمات");
 
    let filter = m => m.author.id === message.author.id;
 
    let thisMessage;
 
    let thisFalse;
 
    message.channel.send('📝 **| من فضلك اكتب اسمك الأن... ✏ **').then(msg => {
 
 
 
    message.channel.awaitMessages(filter, {
 
      max: 1,
 
      time: 90000,
 
      errors: ['time']
 
    })
 
    .then(collected => {
 
      collected.first().delete();
 
      thisMessage = collected.first().content;
 
      let boi;
 
      msg.edit('📜 **| هل ستحترم القوانين؟... ✏ **').then(msg => {
 
 
 
          message.channel.awaitMessages(filter, {
 
            max: 1,
 
            time: 90000,
 
            errors: ['time']
 
          })
 
          .then(collected => {
 
            collected.first().delete();
 
            boi = collected.first().content;
 
            let boi2;
 
            msg.edit('🤵 **| ما اسم ارتبه التى تريد الحصول عليها ولماذا؟... ✏ **').then(msg => {
 
 
 
              message.channel.awaitMessages(filter, {
 
                max: 1,
 
                time: 90000,
 
                errors: ['time']
 
              })
 
              .then(collected => {
 
                collected.first().delete();
 
              boi2 = collected.first().content;
 
      msg.edit('🛡 **| [ هل انت متأكد من تقديمك؟ | [ نعم ] او [ لا**');
 
 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
 
        max: 1,
 
        time: 90000,
 
        errors: ['time']
 
      })
 
      .then(collected => {
 
        if(collected.first().content === 'لا') {
 
          msg.delete();
 
          message.delete();
 
          thisFalse = false;
 
        }
 
        if(collected.first().content === 'نعم') {
 
          if(thisFalse === false) return;
 
          msg.edit('🕊 **| Done ✅, تم بنجاح نشر تقديم في روم التقديمات**');
 
          collected.first().delete();
 
          submite.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**[ ${message.guild.name}:arrow_down: ] Submite⬇**
 
[**اسم المقدم**]:
${thisMessage}
 
[**هل سيحترم القوانين؟**]:
${boi}
 
[**اسم الرتبه والسبب**]:
${boi2}
 
[**تم التقديم بواسطة**]:
${message.author}
 
[**ايدي المقدم**]:
${message.author.id}`);
 
        }
 
      }
 
  );
 
});
 
    });
 
  }
 
    );
 
  });
 
}
 
);
 
    })}});
  