const Discord = require('discord.js');

const client = new Discord.Client();

 exports.run = (client, message) => {

   var baliklar = [
     'https://cdn.weeb.sh/images/Hy4CS1h5G.gif',
     'https://cdn.weeb.sh/images/SJ-11x5kz.gif',
     'https://cdn.weeb.sh/images/rJXwmLQv-.jpeg',
     'https://cdn.weeb.sh/images/ByF7REgdf.gif',
     'https://cdn.weeb.sh/images/SJHw6yFVf.gif',
     'https://cdn.weeb.sh/images/H1nGQ8Qw-.gif',
     'https://cdn.weeb.sh/images/BJJkFTN0b.gif',
     'https://cdn.weeb.sh/images/rJ5IX8XPZ.gif',
     'https://cdn.weeb.sh/images/B1N87IQDZ.gif',
     'https://cdn.weeb.sh/images/S11LXImPZ.gif',
     'https://cdn.weeb.sh/images/SJ08mUXwZ.gif',
     'https://cdn.weeb.sh/images/BkoBX8mwW.gif',
     'https://cdn.weeb.sh/images/r1WMmLQvW.gif',
     'https://cdn.weeb.sh/images/SkwVQLXwW.gif',
     'https://cdn.weeb.sh/images/ByPGQIQwb.gif',
     'https://cdn.weeb.sh/images/Bk_fmL7wZ.gif',
     'https://cdn.weeb.sh/images/r1UGQLXvb.gif',
     'https://cdn.weeb.sh/images/ByuM1x5Jz.gif',
     'https://64.media.tumblr.com/0c6c24139702399121af533ab6011237/tumblr_oqcj9ycnPO1w46s3lo1_540.gif',
     'https://i.pinimg.com/originals/8e/b0/9a/8eb09a5fcb7694f237e79bb65c21a33b.gif'
   ];
      var balik = baliklar[Math.floor(Math.random() * baliklar.length)];
            const Embedbalikcik = new Discord.MessageEmbed()
            .setColor("58caf5")
            .setTimestamp()
            .setDescription(`**${message.author.username}** ağlıyor...`)
            .setImage(`${balik}`)
            .setFooter('Captain Tsubasa: Discord tarafından güçlendirildi.')
              message.channel.send(Embedbalikcik)
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hü', 'üzgün', 'ağla', 'hüü'],
  permLevel: 0
};

exports.help = {
  name: 'cry',
  description: 'Balık Tutarsın.',
  usage: 'cry'
};