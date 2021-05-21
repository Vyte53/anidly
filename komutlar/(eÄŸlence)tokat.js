const Discord = require('discord.js');
const funnyWords = require("funny-words");

exports.run = async (client, message, args) => {
if(!message.mentions.members.first()) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`Kullanıcı Etiketleyerek dener misin?`)).then(a => a.delete({timeout: 10000}))
var gifler = [
  "https://cdn.discordapp.com/attachments/767247105172439042/767262725105254400/giphy.gif",
  "https://cdn.discordapp.com/attachments/767247105172439042/767262735838216232/bf4ac591346c0e44d88beff1c8525a9e.gif",
  "https://cdn.discordapp.com/attachments/767247105172439042/767262731556225034/HkA6mJFP-.gif",
  "https://cdn.discordapp.com/attachments/767247105172439042/767262733212450846/HyPjmytDW.gif",
  "https://cdn.weeb.sh/images/H1n57yYP-.gif",
  "https://cdn.weeb.sh/images/B1jk41KD-.gif",
  "https://cdn.weeb.sh/images/ry2tWxcyf.gif",
  "https://cdn.weeb.sh/images/SJ-CQytvW.gif",
  "https://cdn.weeb.sh/images/r1dc7yFvZ.gif",
  "https://cdn.weeb.sh/images/r1VF-lcyz.gif",
  "https://cdn.weeb.sh/images/SJx7M0Ft-.gif",
  "https://cdn.weeb.sh/images/rknn7Jtv-.gif",
  "https://cdn.weeb.sh/images/HJKpm1twW.gif",
  "https://cdn.weeb.sh/images/Byjqm1tDW.gif",
  "https://cdn.weeb.sh/images/ry_RQkYDb.gif",
  "https://cdn.weeb.sh/images/Hk6JVkFPb.gif",
  "https://cdn.weeb.sh/images/B1-nQyFDb.gif",
  "https://cdn.weeb.sh/images/ryv3myFDZ.gif",
  "https://i.pinimg.com/originals/65/57/f6/6557f684d6ffcd3cd4558f695c6d8956.gif",
  "https://img.wattpad.com/72be41dbd6fb9df325343f2fc9b8b54ab1e45242/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f42387137307a6e352d64647a4a513d3d2d3732363633343634322e313539613932376633363865623862343933393234353531363139322e676966?s=fit&w=720&h=720",
  "https://media1.tenor.com/images/9ea4fb41d066737c0e3f2d626c13f230/tenor.gif?itemid=7355956",
  "https://media1.tenor.com/images/b221fb3f50f0e15b3ace6a2b87ad0ffa/tenor.gif?itemid=8576304",
  "https://media1.tenor.com/images/89309d227081132425e5931fbbd7f59b/tenor.gif?itemid=4880762",
  "https://media1.tenor.com/images/58fec9c4b4fa70d83d305a3f4d9638df/tenor.gif?itemid=13999556",
  "https://media1.tenor.com/images/66565ea66cd80447af18962481812124/tenor.gif?itemid=4867262",
  "https://media1.tenor.com/images/86bd4ab7511d7ce2e8dc8634257d96c0/tenor.gif?itemid=11602504",
  "https://cdn.lowgif.com/full/6fc8d6bbe59fba01-anime-slap-tumblr.gif"
];
let resimler = gifler[Math.floor(Math.random() * gifler.length)];
if(message.author.id === message.mentions.members.first().id) return message.channel.send(new Discord.MessageEmbed().setColor('#00567e').setTitle('Dur Orda!').setDescription('Kendini tokat atıcaksın olum sakin.')).then(a => a.delete({timeout: 10000}))
message.channel.send(`> ${message.author} ${message.mentions.members.first()} **kişisine Osmanlı tokatı attı.**`, new Discord.MessageAttachment(resimler));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["tokat-at"],
  permLevel: 0
}

exports.help = {
  name: 'tokat'
};