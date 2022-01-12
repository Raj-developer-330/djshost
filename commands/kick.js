const Discord = require("discord.js")
module.exports.run = async(bot,message,args)=>{
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`❌ ${message.author} You don't have Permissions!`)
  const target = message.mentions.members.first()
  if(!target) return message.reply(`Please specify a member to kick!`)

let reason = args.slice(1).join(" ") || "No Reason Specified";
  await target.kick({ reason : args.slice(1).join(" ") || "No Reason was provided"})

message.channel.send(`Successfully Kicked ${target} from the server\nReason: ${reason || "No Reason was provided"}`)
    }

    module.exports.help ={
      name: "kick"
}
