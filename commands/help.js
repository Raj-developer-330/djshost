const Discord = require('discord.js')
const bot = new Discord.Client()


module.exports.run = (bot,message,args)=>{
    const embed = new Discord.MessageEmbed()
.setTitle(`__HELP COMMAND__`)
.setColor('RANDOM')
.setFooter(`REQUESTED BY ${message.author.tag}`,`${message.author.displayAvatarURL({dynamic : true})}`)
.setDescription(`MY COMMANDS 
1.ping
2.av
3.embed
4.roleinfo
5.serverinfo
7.userinfo
8.uptime
9.support
10.addrole
11.Kick
12.Ban`)
message.channel.send(embed)


}

module.exports.help ={
    name:"help"
}
