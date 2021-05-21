const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const { randomRange, verify } = require('../util/Util.js');
exports.run = async (client, message, args) => {
  
  this.fighting = new Set();
  
	let opponent = message.mentions.users.first()
	if (!opponent) return message.reply("<:kirmizitik:799255640693538816>  Oynamak istediğin kişiyi etiketlemelisin!")
  
  if (opponent.bot) return message.reply('<:kirmizitik:799255640693538816>  Botlar ile oynayamazsın!');
  if (opponent.id === message.author.id) return message.reply('<:kirmizitik:799255640693538816>  Kendin ile düello atamazsın!');
		if (this.fighting.has(message.channel.id)) return message.reply('<:kirmizitik:799255640693538816>  Kanal başına sadece bir düello meydana gelebilir.');
		this.fighting.add(message.channel.id);
		try {
			if (!opponent.bot) {
                await message.channel.send(`${opponent}, düello isteği geldi. Düello'yu kabul ediyor musun? (\`evet\` <:kirmizitik:799255640693538816> veya \`hayır\` <:yesiltik:799255640715034644> olarak cevap veriniz.)`);
				const verification = await verify(message.channel, opponent);
				if (!verification) {
					this.fighting.delete(message.channel.id);
					return message.channel.send(`<:kirmizitik:799255640693538816> Düello kabul edilmedi...`);
				}
			}
			let userHP = 500;
			let oppoHP = 500;
			let userTurn = false;
			let guard = false;
			const reset = (changeGuard = true) => {
				userTurn = !userTurn;
				if (changeGuard && guard) guard = false;
			};
			const dealDamage = damage => {
				if (userTurn) oppoHP -= damage;
				else userHP -= damage;
			};
			const forfeit = () => {
				if (userTurn) userHP = 0;
				else oppoHP = 0;
			};
			while (userHP > 0 && oppoHP > 0) { // eslint-disable-line no-unmodified-loop-condition
				const user = userTurn ? message.author : opponent;
				let choice;
				if (!opponent.bot || (opponent.bot && userTurn)) {
					await message.channel.send(stripIndents`
						${user}, ne yapmak istersin? \`saldır\` <:saldir:799251571912474644>, \`savun\` <:kalkan:799250258491605022>, \`ultra güç\` <a:patlama:799250259464159242>, veya \`kaç\`?
						**${message.author.username}**: ${userHP} :heartpulse:
						**${opponent.username}**: ${oppoHP} :heartpulse:
					`);
					const filter = res =>
						res.author.id === user.id && ['saldır', 'savun', 'ultra güç', 'kaç'].includes(res.content.toLowerCase());
					const turn = await message.channel.awaitMessages(filter, {
						max: 1,
						time: 30000
					});
					if (!turn.size) {
						await message.reply(`<a:sure:799253388797149245> Üzgünüm ama, süre doldu!`);
						reset();
						continue;
					}
					choice = turn.first().content.toLowerCase();
				} else {
					const choices = ['saldır', 'savun', 'ultra güç'];
					choice = choices[Math.floor(Math.random() * choices.length)];
				}
				if (choice === 'saldır') {
					const damage = Math.floor(Math.random() * (guard ? 10 : 100)) + 1;
					await message.channel.send(`${user}, **${damage}** hasar <:saldir:799251571912474644> vurdu!`);
					dealDamage(damage);
					reset();
				} else if (choice === 'savun') {
					await message.channel.send(`${user}, kendisini süper kalkan <:kalkan:799250258491605022> ile savundu!`);
					guard = true;
					reset(false);
				} else if (choice === 'ultra güç') {
					const miss = Math.floor(Math.random() * 4);
					if (!miss) {
						const damage = randomRange(100, guard ? 150 : 300);
						await message.channel.send(`${user}, Kendini zorladın ve rakibine **${damage}** hasar <a:patlama:799250259464159242> vurdun!!`);
						dealDamage(damage);
					} else {
						await message.channel.send(`${user}, Kendini zorladın fakat ultra gücü kullanmakta başarılı olamadın!`);
					}
					reset();
				} else if (choice === 'kaç') {
					await message.channel.send(`${user}, kaçtı! Korkak!`);
					forfeit();
					break;
				} else {
					await message.reply('❓ Ne yapmak istediğini anlamadım.');
				}
			}
			this.fighting.delete(message.channel.id);
            const winner = userHP > oppoHP ? message.author : opponent;
			return message.channel.send(`Oyun bitti! Tebrikler, **${winner}** kazandı! \n**${message.author.username}**: ${userHP} :heartpulse: \n**${opponent.username}**: ${oppoHP} :heartpulse:`);
		} catch (err) {
			this.fighting.delete(message.channel.id);
			throw err;
		}
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['1vs1', '1v1', 'savaş'],
  permLevel: `Yetki gerekmiyor.`
};
exports.help = {
  name: 'düello',
  category: "eğlence",
  description: 'İstediğiniz bir kişi ile düello atarsınız!',
  usage: 'düello <@kullanıcı>'
};
