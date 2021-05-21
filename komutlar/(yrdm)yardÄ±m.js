const Discord = require('discord.js')

exports.run = async(client, message, args) => {

let vyte = "botsunucu"

if(!args[0]) {
    const embed = new Discord.MessageEmbed()
    .setAuthor('Captain Tsubasa Discord Bot', client.user.avatarURL())
    .setDescription('**Aşağıdaki Gibi Kullanın.** \n**Örnek:** `+eğlence`')
    .addField('<a:kq:793838451397099621> Komutlar:', 
    ` **• +eğlence** : Eğlence komutlarını gösterir.
    **• +tsubasa-yardım** : Kaptan Tsubasa ile ilgili komutları gösterir.
    **• +moderasyon** : Yetkililerin kullanabileceği komutlar.
    **• +bot** : Bot ve genel komutları gösterir.
    ━━━━━━━━━:ღ:━━━━━━━━━
    **• +duyurular** : Botun geliştirildiği sunucu hakkında duyuruları gösterir.
    ━━━━━━━━━:ღ:━━━━━━━━━
    **• +depremler** : Türkiye'de gerçekleşen son 10 depremi görebilirsiniz.`)
    .addField('<a:kr:793835589170495518> Bağlantılar', 
    ` ✉️ | **Botun Geliştirildiği Sunucu** [Buraya Tıkla](https://discord.gg/PEDwZW3)
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
    aliases: []
}
exports.help = {
    name: "yardım"
}