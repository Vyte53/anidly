const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
const { stripIndents } = require('common-tags');
const slots = ['<a:s1:793793038383448084>', '<a:s2:793793038245822495>', '<a:d3:793793037984727040>', '<a:s4:793793037842382849>', '<a:s5:793793037716291585>'];

exports.run = function(client, message) {

	var slot1 = slots[Math.floor(Math.random() * slots.length)];
	var slot2 = slots[Math.floor(Math.random() * slots.length)];
	var slot3 = slots[Math.floor(Math.random() * slots.length)];
	
	if (slot1 === slot2 && slot1 === slot3) {
		message.channel.send(stripIndents`
		${slot1} : ${slot2} : ${slot3}
		**Tebrikler!**, kazandın!
		`); 
	} else {
		message.channel.send(stripIndents`
		${slot1} : ${slot2} : ${slot3}
		**Kaybettin**, tekrar dene.
		`);	
	}

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['jackpot','bet','csn'],
  permLevel: 0
};

exports.help = {
  name: 'slot', 
  description: 'Slots oyunu oynatır',
  usage: 'slot'
};