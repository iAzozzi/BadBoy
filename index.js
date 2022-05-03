const Discord = require("discord.js");
const client = new Discord.Client({
  intents: [
     Discord.Intents.FLAGS.GUILDS,
     Discord.Intents.FLAGS.GUILD_MESSAGES
  ]
});

client.login("token")
client.on('ready', () => {
  console.log(`Token is Ready ✅`)
})

const prefix = "~"



const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Bot is Online!");
 console.log(`${client.user.username} ✅`)

});
//////////////////////


    //code status BOT
    
var statuss = [`${prefix} `, `By 𝐴𝑧𝑜𝑧𝑧 ア`];
var secound = 3;
client.on("ready", () => {
  var timeing = Math.floor(secound * 400);
  setInterval(function() {
    var ammount = statuss.length;
    var num = Math.floor(Math.random() * ammount);
    client.user.setActivity(statuss[num], { type: "STREAMING" });
  }, timeing);
});

///////////////////////////////////////////////////////


///// start code reply Message (ZAJEL)
client.on("message", message => {

  if(message.channel.id !== "968226526279663657" )
 
  { 
 return;
   } 
 
   
   if (message.author.bot) return;
   let reply = message.content.split("   ")
  let channel = message.guild.channels.cache.get(968226526279663657)
  var serverIcon = message.guild.iconURL();
    {
     message.delete();
      const ServerLogo = `https://discord.gg/grvvq8RhAx`;
      
     const embed = new Discord.MessageEmbed()
     //up name
     //.setAuthor(client.user.username,client.user.displayAvatarURL({ format : 'png' , dynamic: true, size: 32 }))
     //down name
     .setFooter(` ${message.author.username}`, message.author.displayAvatarURL({  dynamic: true, size: 2048 }))
       .setColor(`RANDOM`)
   .setTitle('**                                <a:zajel:874858011636670524>  𝐙𝐀𝐉𝐄𝐋** ')
   .setDescription(reply)
 
   //.addField('_____', `**${message.guild.name}**` )
   
      
      .setThumbnail(message.author.displayAvatarURL({  dynamic: true, size: 2048 }))
      //.setThumbnail(serverIcon)
      .setTimestamp()
      .setURL(ServerLogo)
     message.channel.send(embed).then(msg=>{
msg.react('<a:mail:874865020905848873>').then(r =>
msg.react('<a:retweet:874865020763246622>').then(r =>
msg.react('<a:njm:874942608500215848>')

))
 })
   }
   
 });
////End code reply Message (ZAJEL)

///// STart code reaction

// code Re ZAJEL?
/*
 client.on("message", message => {
  if(message.channel.id !== "968226526279663657" )
 
  { 
 return;
   } 
 
  let channel = message.guild.channels.cache.get(968226526279663657)
   if(!message.author.id == " 769763773241360414") return;
  if(message.author.id == "769763773241360414"){
 
 message.react("<a:mail:874865020905848873>")
 message.react("<a:retweet:874865020763246622>")
 message.react("<a:njm:874942608500215848>") 
  }
 });*/
 // END CODE ZAJEL
 //CODE Re booster server
 client.on("message", message => {
  if(message.channel.id == "968228138679173160"){
 message.react("<a:8_:874864998520873031>") 
 message.react("<a:njm:874942608500215848>") 
 
  }
 });
///// END code Reaction






/////start code info BOT
client.on("message", async message => {
    if (message.content.startsWith(prefix + "bot")) {
const m = await message.channel.send("Bot's info !");
const bot = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.displayAvatarURL({ format : 'png' , dynamic: true, size: 2048 }))
.setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL({  dynamic: true, size: 2048 }))
.setTimestamp()
.setColor("RANDOM")
.addField(`🚀 ⊢Bot Name`, `**${client.user.tag}**`, true)
.addField(`🆔 ⊢Bot ID`, `${client.user.id}`, true)
.addField(`👑 ⊢Bot Owner`, `<@753061953873641567>`, true)
.addField(`📶 ⊢Bot Ping`, `\`${m.createdTimestamp - message.createdTimestamp}ms\`\n Uptime : \`${client.uptime}\``, true)
.addField(`📒 ⊢Library`,`Discord.js\nnode.js-javascript`, true)
.addField(`📉 ⊢Memory Usage`,`RSS : \`\`${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB\`\`\n Heap : \`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\`\``, true)
.addField(`📌 ⊢Guilds Size`, `${client.guilds.cache.size}`, true)
.addField(`👥 ⊢Users Size`, `${client.users.cache.size}`, true)
.addField(`💬 ⊢Channels Size`, `${client.channels.cache.size}`, true)

m.edit(bot)
}
});
///// End code info BOT



client.on("message", async message => {
  if (message.content.startsWith("ping")) {
    if (message.author.bot) return;
const m = await message.channel.send("ping bot.. !");
const bot = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.displayAvatarURL({ format : 'png' , dynamic: true, size: 2048 }))
.setFooter(`Requested By ${message.author.username}`, message.author.displayAvatarURL({  dynamic: true, size: 2048 }))
.setTimestamp()
.setColor("RANDOM")
.addField(`🚀 ⊢Bot Name`, `**${client.user.tag}**`, true)
.addField(`🆔 ⊢Bot ID`, `${client.user.id}`, true)
.addField(`👑 ⊢Bot Owner`, `<@753061953873641567>`, true)
.addField(`📶 ⊢Bot Ping`, `\`${m.createdTimestamp - message.createdTimestamp}ms\`\n Uptime : \`${client.uptime}\``, true)
.addField(`📒 ⊢Library`,`Discord.js\nnode.js-javascript`, true)
.addField(`📉 ⊢Memory Usage`,`RSS : \`\`${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB\`\`\n Heap : \`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\`\``, true)


m.edit(bot)
}
});





client.on("message", message => {

  if(message.channel.id !== "968226526279663657" )
 
  { 
 return;
   } 
   if (message.author.id == "769763773241360414") return;
      {
       const msg = "https://cdn.discordapp.com/attachments/857634821504630785/970956424932904990/IMG_4708.gif"
         
         message.channel.send(msg)
         
       }
     });




// enabled by default
client.isPaused = false;

client.on('message', (message) => {
  if (message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  // the only command allowed when bot is paused
  if (command === 'unpause') {
    if (!client.isPaused)
      return message.channel.send(
        `The bot is already listening to commands, can't unpause it.`,
      );

    client.isPaused = false;

    return message.channel.send(`The bot is listening to your commands again.`);
  }

  // if bot is paused, exit so the commands below will not get executed
  if (client.isPaused) return;

  if (command === 'pause') {
    client.isPaused = true;
    return message.channel.send(
      `The bot is paused. Use \`${prefix}unpause\` to unpause it.`,
    );
  }

  if (command === 'ping') {
    return message.channel.send('Pong!');



    
  }

  if (command === 'time') {
    return message.channel.send(
      `The time is ${new Date().toLocaleTimeString()}`,
    );
  }
});






/*



*/
///start logg console
console.Clear 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} ✅!`);
  client.user.setStatus("online");
});        


client.on("disconnected", () => {
    client.user.setStatus("offline");
    console.log(client.user); //returns the current user
});

console.log(client.users); //returns all users
client.on("message", function(msg){
  if(client.user.isAdmin){ //checking as an admin for example
    if(msg.content == "-showUsers"){
       client.deleteMessage(msg, callBackFunc);
       console.log(bot.users);
    }
  }
})

client.login("NzY5NzYzNzczMjQxMzYwNDE0.X5TwYQ.C0pHpgn4EeI71TJpvSWoiDVs3DU")
client.once("ready",() => {
  console.log("Your BOT is online ✅");
  });
  
///END logg console