const Discord = require('discord.js');
const data = require('quick.db');

const client = new Discord.Client();

 exports.run = (client, message) => {
   if(data.fetch(`baliklar.${message.author.id}.${message.guild.id}.parca`)) return message.channel.send(new Discord.MessageEmbed().setColor('#006600'));
             message.channel.send('🎄 | Yeni Yılınız Kutlu Olsun! CTD-2021').then(message => {
   var baliklar = [
     'https://media.tenor.com/images/738880fc462113674d38aceb1923321e/tenor.gif'
   ];
      var balik = baliklar[Math.floor(Math.random() * baliklar.length)];
            message.edit(`${balik}`);
 });
data.set(`baliklar.${message.author.id}.${message.guild.id}.parca`, 'parca');
setTimeout(() => {
data.delete(`baliklar.${message.author.id}.${message.guild.id}.parca`)
}, 1000);
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ttt"],
  permLevel: 0
};

exports.help = {
  name: 'tt',
  description: 'alık Tutarsın.',
  usage: 'tt'
};