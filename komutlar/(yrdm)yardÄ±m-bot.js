const Discord = require('discord.js')

exports.run = async(client, message, args) => {

let vyte = "botsunucu"

if(!args[0]) {
    const embed = new Discord.MessageEmbed()
    .setAuthor('Captain Tsubasa Discord Bot', client.user.avatarURL())
    .setDescription('**Captain Tsubasa: Discord** `Daima Hizmetinizdeyiz!`\n**Örnek Kullanım:** `+yapımcım``')
    .addField('Komutlar:', 
    `**• +yapımcım** : Botun yapımcısını gösterir.
    **• +havadurumu <il/ilçe>** : Bulunduğunuz il veya ilçenin hava durumunu gönderir.
    **• +duyurular** : Botun geliştirildiği sunucu hakkında duyuruları gösterir.
    **• +depremler** : Türkiye'de gerçekleşen son 10 depremi gösterir.
    **• +istatistik** : Botun istatistiklerini görürsünüz.
    **• +döviz** : Güncel kurları görürsünüz.`)
    .addField('» Bağlantılar', 
    `✉️ | **Botun Geliştirildiği Sunucu** [Buraya Tıkla](https://discord.gg/PEDwZW3)
    📂| **Kaptan Tsubasa Türkçe Vikipedisi** [Buraya Tıkla](https://captain-tsubasa-discord.fandom.com/tr/wiki/Main_Page)
    ━━━━━━━━━:ღ:━━━━━━━━━`)
    .setImage('https://media.discordapp.net/attachments/782965002885791751/784766889845850112/sassa.png')
    .setThumbnail(client.user.avatarURL())
    .setColor("RANDOM")
    .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
    message.channel.send(embed)
}
}

exports.conf = {
    aliases: ["yardım-bot"]
}
exports.help = {
    name: "bot"
}