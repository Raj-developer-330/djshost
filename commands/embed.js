const Discord = require('discord.js')
module.exports.run = (bot,message,args)=>{
let content = args.slice(1).join(' ')
if(content.size < "2") return message.reply(`Please Specify Somethin To Embed !`)



    const embedname = new Discord.MessageEmbed()
.setDescription(message.content.substring(6))
.setColor('0x#32ddff')
.setFooter(`REQUESTED BY ${message.author.tag}`,`${message.author.displayAvatarURL({dynamic : true})}`)
.setTimestamp()
message.channel.send(embedname)
}

module.exports.help ={
    name:"embed"
}
