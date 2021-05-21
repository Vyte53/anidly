const Discord = require('discord.js')

exports.run = async(client, message, args) => {

let vyte = "botsunucu"

if(!args[0]) {
    const embed = new Discord.MessageEmbed()
    .setAuthor('Captain Tsubasa Discord Bot', client.user.avatarURL())
    .addField('Yapımcım:', 
    `**Benim Yapımcım:** Vanuatu#5557`)
    .addField('» Bağlantılar', 
    `✉️ | **Botun Geliştirdiği Sunucu** [Buraya Tıkla](https://discord.gg/PEDwZW3)
    📂| **Kaptan Tsubasa Türkçe Vikipedisi** [Buraya Tıkla](https://captain-tsubasa-discord.fandom.com/tr/wiki/Main_Page)`)
    .setImage('https://cdn.discordapp.com/attachments/702883614756700212/mlogo_1.png')
    .setThumbnail(client.user.avatarURL())
    .setColor("RANDOM")
    .setFooter('Komudu kullanan kullanıcı: ' + message.author.tag, message.author.avatarURL())
    message.channel.send(embed)
}
}

exports.conf = {
    aliases: []
}
exports.help = {
    name: "yapımcım"
}