module.exports.run = async (client, message, args) => {
    const Discord = require("discord.js");

      if (!message.member.permissions.has("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
      if (args[0] == "help") {
        message.reply("Используйте: -removerole [@Ник] [Роль]");
        return;
      }
      let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
      if(!rMember) return message.reply("Пользователь не найден.\n`-removerole [@Ник] [Роль]`");
      let role = args.join(" ").slice(22);
      if(!role) return message.reply("Укажите роль!");
      let gRole = message.guild.roles.find(`name`, role);
      if(!gRole) return message.reply("Не могу найти эту роль.");
    
      if(!rMember.roles.has(gRole.id)) return message.reply("У пользователя нету этой роли.");
      await(rMember.removeRole(gRole.id));
    
      try{
        await rMember.send(`Вы потеряли ${gRole.name} роль.`)
      }catch(e){
        message.channel.send(`Пользователю <@${rMember.id}>, была удалена роль ${gRole.name}.`)
      }
    }

    exports.help = {
      name: "removerole"
    }