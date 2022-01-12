const Discord = require('discord.js')
const bot = new Discord.Client()


module.exports.run = (bot,message,args)=>{
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`INVITE LINK !`)
.setDescription(`[CLICK HERE](https://discord.com/api/oauth2/authorize?client_id=867063932648816640&permissions=8&scope=bot)`)
.setFooter(`REQUESTED BY ${message.author.tag}`,`${message.author.displayAvatarURL({dynamic : true})}`)



message.channel.send(embed)
}

module.exports.help ={
    name:"invite"
}