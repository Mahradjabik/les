exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    answer = ["Да","Нет"];
         message.reply( answer[ Math.floor( Math.random() * answer.length)]);
}
exports.help = {
    name: 'luck'
}