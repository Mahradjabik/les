exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    answer = ["Ножницы","Камень","Бумага"];
         message.reply( answer[ Math.floor( Math.random() * answer.length)]);
}
exports.help = {
    name: 'rps'
}