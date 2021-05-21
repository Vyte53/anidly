const Discord = require('discord.js');
const funnyWords = require("funny-words");

exports.run = async (client, message, args) => {
if(!message.mentions.members.first()) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`Kullanıcı Etiketleyerek dener misin?`)).then(a => a.delete({timeout: 10000}))
var gifler = [
  "https://media3.giphy.com/media/G3va31oEEnIkM/200.gif",
  "https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865",
  "https://media1.tenor.com/images/b088ccf8075a4113efcbc5bc31fa46c2/tenor.gif?itemid=17668336",
  "https://66.media.tumblr.com/f34fe7b01573743938f30c51d211227e/tumblr_oqgoupiCnF1slt45io1_400.gifv",
  "https://cdn.weeb.sh/images/ry-r3TuD-.gif",
  "https://cdn.weeb.sh/images/SkQIn6Ovb.gif",
  "https://cdn.weeb.sh/images/H1Gx2aOvb.gif",
  "https://cdn.weeb.sh/images/Skc42pdv-.gif",
  "https://cdn.weeb.sh/images/SyY0j6Ov-.gif",
  "https://cdn.weeb.sh/images/r10UnpOPZ.gif",
  "https://media1.tenor.com/images/f5167c56b1cca2814f9eca99c4f4fab8/tenor.gif?itemid=6155657",
  "https://media1.tenor.com/images/ea9a07318bd8400fbfbd658e9f5ecd5d/tenor.gif?itemid=12612515",
  "https://media1.tenor.com/images/3d56f6ef81e5c01241ff17c364b72529/tenor.gif?itemid=13843260",
  "https://media1.tenor.com/images/4b5d5afd747fe053ed79317628aac106/tenor.gif?itemid=5649376",
  "https://media1.tenor.com/images/b5e6414f36c3c27b3b43046aff7b01c8/tenor.gif?itemid=17083402",
  "https://media1.tenor.com/images/1306732d3351afe642c9a7f6d46f548e/tenor.gif?itemid=6155670",
  "https://media1.tenor.com/images/7ea0b8822e5390c2393ef6f18a40893d/tenor.gif?itemid=16687888",
  "https://media1.tenor.com/images/e9968947e3b94104bd0359397570db59/tenor.gif?itemid=14343923",
  "https://media1.tenor.com/images/fba65aad7517bcc73925df830bc36921/tenor.gif?itemid=19522052",
  "https://media1.tenor.com/images/fc16163cc510879347264875e8c04a39/tenor.gif?itemid=17077533",
  "https://media1.tenor.com/images/af50852d633a2f77828a7018eed43ea8/tenor.gif?itemid=17845616"
];
let resimler = gifler[Math.floor(Math.random() * gifler.length)];
if(message.author.id === message.mentions.members.first().id) return message.channel.send(new Discord.MessageEmbed().setColor('#9c5cb2').setTitle('Agaa beeeeeeeee!').setDescription('O kadar yoklukta mısın la kendini öpmeye çalışıyorsun, Yıkıksın oğlum. 🙄')).then(a => a.delete({timeout: 10000}))
message.channel.send(`> ${message.author} ${message.mentions.members.first()} **kişisini öptü.**`, new Discord.MessageAttachment(resimler));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["muck"],
  permLevel: 0
}

exports.help = {
  name: 'öp'
};