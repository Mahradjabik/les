const Discord = require('discord.js')
const client = new Discord.Client();
const fs =require('fs')
client.login('TOKEN')
client.owner = '305493523086573569';
client.zamowner = '436902981070356481';
client.on('ready', () => {
})

client.prefix = '-'
client.commands = new Discord.Collection();
fs.readdir('./cmds/', (err, files) => {
    if(err) console.log(err)
    let jsfile = files.filter(f => f.split('.').pop() === 'js');
    if(jsfile.length <= 0) {
        console.log('No commands!')
        return
    }
    console.log(`[COMMANDS] Loaded ${files.length} commands!`)
    jsfile.forEach(f => {
        let props = require(`./cmds/${f}`)
        client.commands.set(props.help.name, props);
    })
})
client.on('message', message => {
    let msg = message.content.toLowerCase() || message.content.toUpperCase()
    if(!msg.startsWith(client.prefix)) return;
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    const args = message.content.slice(client.prefix.length).trim().split(/ +/g);

    let command = args.shift().toLowerCase();
    let cmd;
    if(client.commands.has(command)) {
        cmd = client.commands.get(command)
    }
    if(!cmd) return;
    cmd.run(client, message, args)
})
client.on('guildMemberAdd', member => {
    var channel = member.guild.channels.get('527926959825616906')
    channel.send(`Поприветствуем нового участника ${member} на сервере ${member.guild.name}`)
    member.send(`Добро пожаловать на наш сервер!`)
})
client.on('guildMemberRemove', member => {
    var channel = member.guild.channels.get('527926959825616906')
    channel.send(`Прощай ${member.user.tag}`)
})
client.on('messageDelete', message => {
    if(message.author.bot) return;
    var channel = message.guild.channels.get('529396588704038922')
    var channel1 = message.guild.channels.get('527926959825616906')
    var embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`**Удалено сообщение**\nСодержание: ${message.content}\nID: ${message.id}`)
    .setColor('RANDOM')
    .setFooter('Лес 2.0', client.user.avatarURL)
    channel.send(embed)
}) 
client.on('ready', () => {
    console.log(`${client.user.username} Online`);
    client.user.setPresence({status: 'Online', game:{name: '-help', type: 0}})
})