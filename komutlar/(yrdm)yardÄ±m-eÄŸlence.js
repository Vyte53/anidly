const Discord = require('discord.js')

exports.run = async(client, message, args) => {

let vyte = "botsunucu"

if(!args[0]) {
    const embed = new Discord.MessageEmbed()
    .setAuthor('Captain Tsubasa Discord Bot', client.user.avatarURL())
    .setDescription('**Captain Tsubasa: Discord** \n`Daima Hizmetinizdeyiz!`\n**Örnek Kullanım:** `+tsubasa-gif``')
    .addField('Komutlar:', 
    `**• +sarıl** : Etiketlediğin kişiye sarılırsın. (:
    **• +öp** : Etiketlediğin kişiyi öpersin. UwU
    **• +tokat** : Etiketlediğin kişiye tokatını atarsın!
    **• +sorusor** : Bota soru sorarsınız.
    **• +avatar <@kullanıcı>** : Belirlediğiniz kişinin avatarını atar.
    **• +animeara** : Belirttiğiniz animenin bilgilerine erişirsiniz.
    **• +aşk** : Etiketlediğin kişi ile arandaki aşk seviyesini ölçersin.
    **• +tkm** : Bot ile taş kağıt makas oynarsınız.`)
    .addField('Komutlar 2:',
    `**• +animegif** : Rastgele anime gif görürsünüz.
    **• +mcbaşarım** : Minecraft başarımı elde edersiniz. *Türkçe* karakterler desteklememektedir.
    **• +slot** : Slot oyununu oynarsınız.
    **• +ejderha <yazı>** : Yazdığınız yazı ile logo oluşturursunuz.
    **• +kızarma** : :blush:.
    **• +trump <yazı>** : Trump Tweet atar.
    **• +cmm <yazı>** : Change My Mind.
    **• +kedi** : Rastgele kedi resimleri atar.
    **• +cry** : :cry:
    **• +düello <@kullanıcı>** : Etiketlediğiniz kişiyle düello atarsınız.
    **• +xox <@kullanıcı>** : Etiketlediğiniz kişiyle xox oynarsınız.
    **• +şanslı-sayım** : Şanslı sayınızı bulursunuz.`)
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
    aliases: ["yardım-eğlence"]
}
exports.help = {
    name: "eğlence"
}