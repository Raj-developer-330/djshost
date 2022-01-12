const Disccord = require ('discord.js')
const bot = new Disccord.Client();


module.exports.run = (bot,message,args)=>{

    let server = message.guild
let serverinfoembed = new Disccord.MessageEmbed()
.setTitle(`SERVERINFO OF __${server.name}__`)
.setColor('0x#32ddff')
.setDescription(`:black_square_button: ID: ${server.id} \n :black_square_button: Owner: ${server.owner} \n :black_square_button: Region: ${server.region} \n :black_square_button: Channels: ${server.channels.cache.size} \n :black_square_button: Members: ${server.members.cache.size} \n :black_square_button: Server Created At: ${server.createdAt}`)



message.channel.send(serverinfoembed)


}

module.exports.help ={
    name: "serverinfo"
}