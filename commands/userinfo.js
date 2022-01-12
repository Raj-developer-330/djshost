const Disccord = require ('discord.js')
const bot = new Disccord.Client


module.exports.run = (bot,message,args)=>{
    
    let target = message.mentions.users.first() || message.guild.members.cache.get(args[1]) || message.author;
if(!target) return message.reply('No Users Mentioned')
let userinfoembed = new Disccord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`__USERINFO COMMAND__ !`)
.setDescription(`:black_square_button: BOT : ${target.bot} \n :black_square_button: USER ID : ${target.id} \n :black_square_button: TAG : ${target.tag} \n :black_square_button: JOINED DISCORD : ${target.createdAt}`)
.setTimestamp()
.setThumbnail(target.displayAvatarURL({dynamic : true}))
message.channel.send(userinfoembed)

}

module.exports.help ={
    name:"userinfo"
}
