exports.run = (client, message, args) => {
    const Discord = require('discord.js')   
    function myRandom (from, to) {
        return Math.floor((Math.random () * (to - from + 1)) + from);
    }
    var rand = myRandom(2, 12);
    message.reply("На костях: " + rand)  
}
exports.help = {
    name: 'dice'
}