const Discord = require('discord.js')

exports.run = async(client, message, args) => {

let vyte = "botsunucu"

if(!args[0]) {
    const embed = new Discord.MessageEmbed()
    .setAuthor('Captain Tsubasa Discord Bot', client.user.avatarURL())
    .setDescription('**Aşağıdaki Gibi Kullanın.** \n**Örnek:** `+eğlence`')
    .addField('Komutlar:', 
    `**• +sil <sayı>** : Belirlediğiniz sayıya göre mesaj siler.
    **• +slowmode [1-100]** : Belirlediğiniz saniyeye göre slowmode ayarlar
    **• +kanalaçıklama <açıklama>** : Girdiğiniz açıklamaya göre kanalın açıklaması değişir.
    **• +yardım** : Yakında`)
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
    aliases: ["yetkili", "mod"]
}
exports.help = {
    name: "moderasyon"
}