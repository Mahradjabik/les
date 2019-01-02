exports.run = (client, message, args) => {
    const moment = require('moment')
    const Discord = require('discord.js')
    var embed = new Discord.RichEmbed()
    .addField('👹 Владелец', message.guild.owner, true)
    .addField('👺 Зам.Владельца', client.users.get(client.zamowner), true)
    .addField('📌 Название', message.guild.name, true)
    .addField('📆 Создан', moment(message.guild.createdAt).format('HH:MM DD-MM-YY'), true)
    .addField('🥉 Роли', message.guild.roles.size, true)
    .addField('👫 Участники', message.guild.members.size, true)
    .setThumbnail(message.guild.iconURL)
    .setFooter('Лес 2.0', client.user.avatarURL)
    .setColor('RANDOM')
    message.channel.send(embed)
}
exports.help = {
    name: 'serverinfo'
}