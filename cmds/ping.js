exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    var embed = new Discord.RichEmbed()
    .setTitle('Pong!')
    .setDescription(`Задержка **${client.ping}ms**`)
    .setColor('RANDOM')
    .setFooter('Лес 2.0', client.user.avatarURL)
    message.channel.send(embed)
}
exports.help = {
    name: 'ping'
}