module.exports.run = async (client, message, args) => {
    const Discord = require("discord.js");
    
      if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
      if(!args[0]) return message.channel.send("`-clear [Кол-во]`");
      message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Очищено ${args[0]} сообщений.`).then(msg => msg.delete(5000));
      })
}
exports.help = {
    name: 'clear'
}