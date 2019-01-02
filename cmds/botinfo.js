exports.run = (client, message, args) => {
    const moment = require('moment')
    const Discord = require('discord.js')
    var embed = new Discord.RichEmbed()
    .addField('📌 Название', client.user.username, true)
    .addField('👹 Создатель', client.users.get(client.owner), true)
    .addField('📆 Создан', moment(client.user.createdAt).format('HH:MM DD-MM-YY'), true)
    .addField('⌛ Ping', Math.floor(client.ping), true)
    .setThumbnail(client.user.avatarURL)
    .setColor('RANDOM')
    .setFooter('Лес 2.0', client.user.avatarURL)
    message.channel.send(embed)
}
exports.help = {
    name: 'botinfo'
}