const Discord = require('discord.js');
const funnyWords = require("funny-words");

exports.run = async (client, message, args) => {
if(!message.mentions.members.first()) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription('Sarılmak istediğin kişiyi etiketlemelisin')).then(a => a.delete({timeout: 10000}))
var gifler = [
  'https://cdn.discordapp.com/attachments/767145493822046229/767156810796498954/BJF5_uXvZ.gif',
  'https://cdn.discordapp.com/attachments/767145493822046229/767156815381135380/BkBs2uk_b.gif',
  'https://cdn.discordapp.com/attachments/767145493822046229/767156818103107585/H1ui__XDW.gif',
  'https://cdn.discordapp.com/attachments/767145493822046229/767156823790452776/SywetdQvZ.gif',
  'https://cdn.discordapp.com/attachments/767145493822046229/767156853250719784/BkBs2uk_b.gif',
  'https://cdn.discordapp.com/attachments/767145493822046229/767156865829306419/8e70d198-9ddc-40aa-b0c6-ccb4573f14a42FHJU2OdmwW.gif',
  'https://cdn.discordapp.com/attachments/767145493822046229/767156871458455592/BJ0UovdUM.gif',
  'https://cdn.discordapp.com/attachments/767145493822046229/767156876198019082/ByPGRkFVz.gif',
  'https://cdn.weeb.sh/images/BJx2l0ttW.gif',
  'https://cdn.weeb.sh/images/Hyv6uOQPZ.gif',
  'https://cdn.weeb.sh/images/S1qhfy2cz.gif',
  'https://cdn.weeb.sh/images/Hy0KO_7DZ.gif',
  'https://cdn.weeb.sh/images/SJebhd1Ob.gif',
  'https://cdn.weeb.sh/images/B1wRd_XP-.gif',
  'https://cdn.weeb.sh/images/ByuHsvu8z.gif',
  'https://cdn.weeb.sh/images/H1ui__XDW.gif',
  'https://cdn.weeb.sh/images/S18oOuQw-.gif',
  "https://media1.tenor.com/images/bb9c0c56769afa3b58b9efe5c7bcaafb/tenor.gif?itemid=16831471",
  "https://media1.tenor.com/images/f5df55943b64922b6b16aa63d43243a6/tenor.gif?itemid=9375012",
  "https://media1.tenor.com/images/c1058ebe89313d50dfc878d38630036b/tenor.gif?itemid=13976210",
  "https://media1.tenor.com/images/5845f40e535e00e753c7931dd77e4896/tenor.gif?itemid=9920978",
  "https://media1.tenor.com/images/2e167ff6634636c27c3dbd6a33ae6c84/tenor.gif?itemid=12668686",
  "https://media1.tenor.com/images/94a0ac3e1077d2ea0510a0d694e09f0c/tenor.gif?itemid=19364998"
];
let resimler = gifler[Math.floor(Math.random() * gifler.length)];
if(message.author.id === message.mentions.members.first().id) return message.channel.send(new Discord.MessageEmbed().setColor('#9c5cb2').setTitle('Agaa beeeeeeeee!').setDescription('O kadar yoklukta mısın la kendine sarılıyorsun, Yıkıksın oğlum. 🙄')).then(a => a.delete({timeout: 10000}))
message.channel.send(`> ${message.author} ${message.mentions.members.first()} **adlı kişiye sarıldı.**`, new Discord.MessageAttachment(resimler));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["saril"],
  permLevel: 0
}

exports.help = {
  name: 'sarıl'
};