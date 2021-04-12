const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'ODI5MjQ2OTAyOTE3OTIyODQ4.YG1WXA.8KZC9fwNIHlC2T-djm5f6d13i3U';

const PREFIX = '.';

var version = '1.0.1';


bot.on('ready', () => {
    console.log('This bot is online!')
    bot.user.setActivity('Shawn Mendes', { type: 'LISTENING' }).catch(console.error);
})

bot.on('guildMemberAdd', member => {

    const channel = members.guild.channels.find(channel => channel.name === "welcome");
    if (!channel) return;

    channel.send(`Welcome to our server! ${member}, Please read the rules in the rules channel!`)

});

bot.on('message', message => {

    let args = message.content.slice(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'meme'
            : const Embed = new Discord.MessageEmbed()
                .setTitle('Get the best memes here')
                .setURL('https://www.reddit.com/r/dankmemes/')
                .addField('Click the above text for memes!', message.author.username)
                .setColor('0xBFDF1D')
            message.channel.send(Embed);
            break;

        case 'ping':
            message.channel.send('pong!')
            break;
        case 'yt':
            message.channel.send('youtube.com/channel/UCIt6KCVO7MUIcHSiJZC8H3Q')
            break;
        case 'info':
            if (args[1] === 'version') {
                message.channel.send('Version ' + version);
            } else {
                message.channel.send('Invalid Args')
            }
            break;
        case 'clear':
            if (!message.member.roles.cache.find(r => r.name === "Owner"))
                if (!args[1]) return message.reply('Error, Please define second arg');
            message.channel.bulkDelete(args[1]);
            break;
        case 'profile':
            const embed = new Discord.MessageEmbed()
                .setTitle('User Info')
                .addField('User Name', message.author.username)
                .addField('Version', version)
                .addField('Current Server', message.guild.name)
                .setColor(0x3D1DDF)
                .setThumbnail(message.author.Avatar)
            message.channel.send(embed);
            break;
        case 'creator':
            message.channel.send('TFB_1yt!')
            break;
        case 'add':
            message.channel.send('https://discord.com/oauth2/authorize?client_id=829246902917922848&permissions=0&scope=bot')
            break;
        case 'Token':
            message.channel.send('Im a bot, but not dumb...')
            break;
        case 'senddiscord':
            message.channel.send('https://i.pinimg.com/originals/62/d1/26/62d126dcfc3c38c276627e6a251a6c25.jpg');
            break;
        case 'kick':
            if (!message.member.roles.cache.find(r => r.name === "Owner"))
                if (args[1]) message.channel.send('You need to specify a person!')

            let user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    member.kick('You were kicked for rule violation!').then(() => {
                        message.reply(`Sucessfully kicked ${user.tag}`);
                    }).catch(err => {
                        message.reply('I was unable to kick the specified member');
                        console.log(err);
                    });
                } else {
                    message.reply("That user isn\'t in this guild")
                }
            } else {
                message.reply('You need to specify a person!');
            }
            break;

    }
})

bot.login(token);