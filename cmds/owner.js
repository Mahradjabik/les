exports.run = (client, message, args) => {
    const Discord = require('discord.js')   
    message.channel.send(client.users.get(client.owner) + ' Мой Папа.')
}
exports.help = {
    name: 'owner'
}