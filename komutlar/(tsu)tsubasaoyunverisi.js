const Discord = require('discord.js')

exports.run = async(client, message, args) => {

let vyte = "botsunucu"

if(!args[0]) {
    const embed = new Discord.MessageEmbed()
    .setAuthor('Captain Tsubasa Discord Bot', client.user.avatarURL())
    .addField('CT Oyunları ve puanları:', 
    `**Captain Tsubasa: Dream Team**
      » Google Play Store: 4,1 ⭐ 161.410'den
      » App Store: 4,5 ⭐ 6.900'den
    **Captain Tsubasa: Zero**
      » Google Play Store: 4,2⭐ 38.924'den
      » App Store: 4,6 ⭐ 727'den
    **Tsubasa+**
      » Google Play Store: 3,1 ⭐ 255'den
      » App Store: 3,8 ⭐ 9'den
    **Son Güncelleme: 26.12.2020 - 18:03**`)
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
    aliases: ["duyuru"]
}
exports.help = {
    name: "oyun-puanları"
}