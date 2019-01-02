exports.run = (client, message, args) => {
    const moment = require('moment')
    const Discord = require('discord.js')
    var embed = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .addField('-ping', 'Узнать задержку бота.' )
    .addField('-roll', 'Рандомное число от 1-100.' )
    .addField('-dice', 'Рандомное число от 2-12.' )
    .addField('-luck [Текст]', 'Рандомное значение Да/Нет.' )
    .addField('-rps', 'Камень, Ножницы, Бумага.')
    .addField('-serverinfo', 'Информация Дискорд Сервера.' )
    .addField('-botinfo', 'Информация о боте.' )
    .addField('-owner', 'Создатель бота.' )
    .addField('-message [Сообщение]', 'Сообщения от имени бота только с правами Администратора.' )
    .addField('-clear [Кол-во]', 'Очищает сообщения только с правами Администратора.' )
    .addField('-kick [@Ник] [Причина]', 'Кикает участника только с правами Администратора.' )
    .addField('-ban [@Ник] [Причина]', 'Банит участника только с правами Администратора.' )
    .addField('-giverole [@Ник] [Роль]', 'Выдаёт роль только с правами Администратора.' )
    .addField('-removerole [@Ник] [Роль]', 'Убирает роль только с правами Администратора.' )
    .setColor('RANDOM')
    .setFooter('Лес 2.0', client.user.avatarURL)
    message.channel.send(embed)
}
exports.help = {
    name: 'help'
}