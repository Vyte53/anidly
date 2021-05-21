const Discord = require('discord.js')

exports.run = async(client, message, args) => {

let vyte = "botsunucu"

if(!args[0]) {
    const embed = new Discord.MessageEmbed()
    .setAuthor('Captain Tsubasa Discord Bot', client.user.avatarURL())
    .addField('Haberler:', 
    `**26.12.2020 >** Bota 15'ten fazla komut ve bazı komutlarda güncellemeler yapıldı.
    **━━━━━━━━━:ღ:━━━━━━━━━**
    **07.12.2020 >** *Bota 10'dan fazla komut eklendi.
    **━━━━━━━━━:ღ:━━━━━━━━━**
    **03.12.2020 >** *Captain Tsubasa Discord Botu, uzun bir zaman sonra tekrar güzel şeyler barındırmaya başladı. **+tsubasa-gif**, **+sarıl**, **+deprem-bilgi** bunlardan bazıları.*`)
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
    name: "duyurular"
}