const Discord = require('discord.js');

const client = new Discord.Client();

 exports.run = (client, message) => {

             message.channel.send('Bir dakika').then(message => {

   var baliklar = [
     'Yakında.',
     'Yakında'
   ];
      var balik = baliklar[Math.floor(Math.random() * baliklar.length)];
            message.edit(`${balik}`);
 });
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'dt-transfer',
  description: 'Balık Tutarsın.',
  usage: 'dt-transfer'
};