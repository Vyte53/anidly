const Discord = require('discord.js');
const funnyWords = require("funny-words");

exports.run = async (client, message, args) => {
if(!message.channel.send()) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription('Tsubasa')).then(a => a.delete({timeout: 10000}))
var gifler = [
  'https://i.pinimg.com/originals/d6/09/22/d6092242f6d609b0b3ccdb728f9bfa2c.gif',
  'https://i.pinimg.com/originals/5f/c6/56/5fc6567ff6e5e4e03d7050be3752d47a.gif',
  'https://i.makeagif.com/media/7-31-2014/XoRZGF.gif',
  'https://store.donanimhaber.com/02/c0/ed/02c0edfddfa856cf0bcd0c28778c9d50.gif',
  'https://listelist.com/wp-content/uploads/2013/08/10-numara-tsubasa.gif',
  'https://64.media.tumblr.com/8084cfba145b05aece7b9f88aee2f2a8/tumblr_p728wh6yXr1uudgw5o1_400.gifv',
  'https://static.wikia.nocookie.net/captaintsubasa/images/a/a5/Sky_Rocket_Volley.gif/revision/latest?cb=20201022123626'
  
];
let resimler = gifler[Math.floor(Math.random() * gifler.length)];
message.channel.send(`> ${message.author} ** komudu kullandı.**`, new Discord.MessageAttachment(resimler));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["tsubasa-gif"],
  permLevel: 0
}

exports.help = {
  name: 'tsubasagif'
};