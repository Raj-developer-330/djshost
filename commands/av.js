const { Client , MessageEmbed} = require('discord.js')
const bot = new Client();
module.exports.run = (bot,message,args)=>{
    let target = message.mentions.members.first()
    message.guild.members.cache.get(args[1]) || message.member;
    if(!target) return message.reply(`NO USERS MENTIONED !`)
const avembed = new MessageEmbed()
.setTitle(`AVATAR OF ${target.user.tag}`)
.setColor('RANDOM')
.setImage(target.user.displayAvatarURL({dynamic : true , size: 4096 ,format:"png"}))
.setFooter(`Requested by ${message.author.tag}`)
.setTimestamp()
 
 
 
    message.channel.send(avembed)
}
 
module.exports.help ={
    name:"av"
}