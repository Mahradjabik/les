module.exports.run = async (bot,message, args) => {
    const Discord = require("discord.js");

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("У вас недостаточно прав!");
        let botmessage = args.join(" ");
        message.delete().catch();
        message.channel.send(botmessage);
    }
exports.help = {
    name: 'message'
}