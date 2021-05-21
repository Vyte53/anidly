
const request = require('request-promise-native');
const Discord = require("discord.js");

exports.run = async (Bastion, message, args) => {

let myShows = ['anime blush', 'blush anime', 'waifu blush'];
      
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

.setColor("#EA80F3")
.setDescription(`> ${message.author} kızardı, acaba neden! ${args.join(' ')}`.slice(0, 256))
.setImage(response.data[Math.floor(Math.random() * response.data.length)].images.original.url)

return message.channel.send(embed);

}

else {

return Bastion.emit('Error', '', Bastion.i18n.error(message.guild.language, '404 not found', 'We are sorry '), message.channel);

}

}
  



exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'kızarma',

  description: "pyhonic-v12",

  usage: 'kızarma'

};