const Discord = require('discord.js');
	module.exports.run=(bot,message,args)=>{
	let therole = message.mentions.roles.first();
	if(!therole) return message.reply(`No Role Mentioned !`)
	

	let theroleembed = new Discord.MessageEmbed()
	.setTitle(`Roleinfo Of <a:aCrown:868153979929002024> __${therole.name}__ <a:aCrown:868153979929002024>`)
	.setColor('RANDOM')
	.addField(`Name`,`${therole.name}`)
	.addField(`Role Id`,`${therole.id}`)
	.addField(`Color`,`${therole.hexColor}`)
	.addField(`Hoisted`,`${therole.hoist}`)
	.setTimestamp()
	

	message.channel.send(theroleembed);
	}
	

	module.exports.help = {
	name:"roleinfo"
}
