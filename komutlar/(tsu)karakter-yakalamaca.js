const Discord = require('discord.js');
const data = require('quick.db');

const client = new Discord.Client();

 exports.run = async (client, message, args) => {
if(await data.fetch(`slm.${message.author.id}.${message.guild.id}.aşk`)) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setDescription(`**3 saniyenin altında hızlı kullanamazsın!**`));

             message.channel.send('Bir dakika').then(message => {

   var baliklar = [
     '`Stefan Levin` yakaladın.',
     '`Mark Owairan` yakaladın.',
     '`Tomeya Akai` yakaladın.',
     '`Alberto` yakaladın.',
     '`Gino Hernandez` yakaladın.',
     '`Ryoma Hino` yakaladın.',
     '`Roberto Hongo` yakaladın.',
     '`Gakuto Igawa` yakaladın.',
     '`Shingo Aoi` yakaladın.',
     '`Ryo Ishizaki` yakaladın.',
     '`Mamoru Izawa` yakaladın.',
     '`Bossi` yakaladın.',
     '`Ricardo Espadas` yakaladın.',
     '`Teppei Kisugi` yakaladın.',
     '`Kojiro Hyuga` yakaladın.',
     '`Tsubasa Ozora` yakaladın.',
     '`Genzo Wakabayashi` yakaladın.',
     '`Ken Wakashimazu` yakaladın.',
     '`Takeshi Sawada` yakaladın.',
     '`Hikaru Matsuyama` yakaladın.',
     '`Hiroshi Jito` yakaladın.',
     '`Karl Heinz Schneider` yakaladın.',
     '`Brolin` yakaladın.',
     '`Singprasert Bunnark` yakaladın.',
     '`Juan Diaz` yakaladın.',
     '`Elle Sid Pierre` yakaladın.',
     '`Taro Misaki` yakaladın.',
     '`Lopez` yakaladın.',
     '`Manfred Margus` yakaladın.',
     '`Xiao Junguang` yakaladın.',
     '`Jun Misugi` yakaladın.',
     '`Deuter Müller` yakaladın.'
   ];
      var balik = baliklar[Math.floor(Math.random() * baliklar.length)];
            message.edit(`${balik}`);
 });
               data.set(`slm.${message.author.id}.${message.guild.id}.aşk`, 'codare');
               setTimeout(() => {
               data.delete(`slm.${message.author.id}.${message.guild.id}.aşk`)
               }, 3000);          
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'karakter-yakalamaca',
  description: 'Balık Tutarsın.',
  usage: 'karakter-yakalamaca'
};