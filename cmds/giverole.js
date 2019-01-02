module.exports.run = async (bot, message, args) => {
    const Discord = require('discord.js')
    
      if (!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
      if (args[0] == "help") {
        message.reply("Используйте: -giverole [@Ник] [Роль]");
        return;
      }

      let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
      if(!rMember) return message.reply("Пользователь не найден.\n`-giverole [@Ник] [Роль]`");
      let role = args.join(" ").slice(22);
      if (!role) return message.reply("Вы не указали роль!");
      let gRole = message.guild.roles.find(`name`, role);
      if (!gRole) return message.reply("Не могу найти эту роль.");
    
      if (rMember.roles.has(gRole.id)) return message.reply("У данного пользователя уже имеется эта роль.");
      await (rMember.addRole(gRole.id));
    
      try {
        await rMember.send(`Поздравляю, вам дали роль ${gRole.name}`)
      } catch (e) {
        console.log(e.stack);
        message.channel.send(`Поздравляю <@${rMember.id}>, вам дали роль ${gRole.name}.`)
      }
    }
    module.exports.help = {
      name: "giverole"
    }