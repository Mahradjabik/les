exports.run = (client, message, args) => {
    const Discord = require('discord.js')   
    var rand = Math.round (Math.random() * 100) 
    message.reply("Вам выпало число: " + rand);
}
exports.help = {
    name: 'roll'
}