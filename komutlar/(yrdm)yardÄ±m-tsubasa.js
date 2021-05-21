const Discord = require('discord.js')

exports.run = async(client, message, args) => {

let vyte = "botsunucu"

if(!args[0]) {
    const embed = new Discord.MessageEmbed()
    .setAuthor('Captain Tsubasa Discord Bot', client.user.avatarURL())
    .setDescription('**Aşağıdaki Gibi Kullanın.** \n**Örnek:** `+zero-transfer`')
    .addField('Komutlar:', 
    `
    **• +tsubasagif** : Tsubasa ile ilgili gif (hareketli resim) atar. (Bakımda)
    **• +oyun-puanları** : Kaptan Tsubasa ile ilgili *şu anlık* mobil oyunların puanlarını görürsünüz.
    **• +dt-oyun** : 5 DB kullanarak Dream Team oyuncusu görürsünüz. (%30 SSR şansı) (Gerçek DB kullanılmamaktadır.)
    **• +dt-transfer** : Yakında
    **• +zero-transfer** : Yakında
    **• +karakter-yakalamaca** : Kaptan Tsubasa karakterleri yakalarsınız. :> *şu anlık 2 karakter var.*
    ━━━━━━━━━:ღ:━━━━━━━━━
    **• +yardım-karakter** : Yakında`)
    .addField('» Bağlantılar', 
    `✉️ | **Botun Geliştirildiği Sunucu** [Buraya Tıkla](https://discord.gg/PEDwZW3)
    📂| **Kaptan Tsubasa Türkçe Vikipedisi** [Buraya Tıkla](https://captain-tsubasa-discord.fandom.com/tr/wiki/Main_Page)
    ━━━━━━━━━:ღ:━━━━━━━━━`)
    .setImage('https://media.discordapp.net/attachments/782965002885791751/784766889845850112/sassa.png')
    .setThumbnail(client.user.avatarURL())
    .setColor("RANDOM")
    .setFooter('Komudu kullanan kullanıcı: ' + message.author.tag, message.author.avatarURL())
    message.channel.send(embed)
}
}

exports.conf = {
    aliases: ["yardım-tsubasa"]
}
exports.help = {
    name: "tsubasa-yardım"
}