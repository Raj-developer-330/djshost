const Discord = require("discord.js")
module.exports.run = async (bot,message,args)=>{
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`❌ ${message.author} You don't have Permissions!`)

    let target = message.mentions.members.first() 
    if(!target) return message.reply("Please specify a user to ban !")

let reason = args.slice(1).join(" ") || "No Reason Specified";
await target.ban({ reason : args.slice(1).join(" ") || "No Reason was provided"})   
message.channel.send(`Successfully Banned ${target} from the server\nReason: ${reason || "No Reason was provided"}`)

    }

    module.exports.help ={
  name: "ban"
}
