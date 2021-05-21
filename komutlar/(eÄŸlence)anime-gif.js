
const request = require('request-promise-native');
const Discord = require("discord.js");

exports.run = async (Bastion, message, args) => {

let myShows = ['anime', 'animes', 'anime girl', 'waifu', 'manga', 'bleach', 
'anime gifs', 'death note', 'anime gif', 'konosuba gif', 'konosuba', 'naruto', 'boruto', 're zero', 'hot waifu', 'hunter x hunter', 'no game no life'];
      
	  let show = myShows[Math.floor(Math.random() * myShows.length)];


    
let options = {

url: 'http://api.giphy.com/v1/gifs/search',

qs: {

q: show,

api_key: 'HJRdLicjONcNueCY7UaK3zKugs5JUUFl',

limit: 10,

offset: 0

},

json: true

};

let response = await request(options);

if (response.data.length) {

const embed = new Discord.MessageEmbed()

.setColor("#27167A")
.setDescription(`Gif Bulundu! ${args.join(' ')}`.slice(0, 256))
.setImage(response.data[Math.floor(Math.random() * response.data.length)].images.original.url)
.setFooter('Gifler APİden çekildiği için sıkıntılar olabilir.')

return message.channel.send(embed);

}

else {

return Bastion.emit('Error', '', Bastion.i18n.error(message.guild.language, '404 not found', 'We are sorry '), message.channel);

}

}
  



exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: ['anime', 'anime-gif'],

  permLevel: 0

};

exports.help = {

  name: 'animegif',

  description: "pythonic-v12",

  usage: 'animegif'

};