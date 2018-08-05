const Discord = require('discord.js');
const bot = new Discord.Client();

const config = require('./config.json');
const links = require('./links.json');

bot.on('guildMemberAdd',member =>{
    member.guild.channels.get('475140838637174795').send(member.user.username + ' É o(a) Mais Novo(a) Membro(a)!! Digite*!Comandos com C maiusculo e boa sorte!!. Olhe Seu Privado!!');
    member.send('É muito bom ter voçe conosco! Ajude a Divulgar nossos servidores!!');
});

bot.on('ready', () =>{
    bot.user.setActivity('EM DESENVOLVIMENTO!!')
    console.log('Online!');
});

    bot.on('message', message =>{
        responseObject = links;

    if(responseObject[message.content]){
        message.channel.send(responseObject[message.content]);
    }

    if(message.content.startsWith(config.prefix + 'Salve')){
        message.reply('Salvado Jovem');
        message.channel.send('Salvado em público!!');
    }
    if(message.content.startsWith(config.prefix + 'Link')){
        message.reply('Chame seus amigos!! https://discord.gg/JZw58v');
    }
    
    const msgs = message.content.slice(config.prefix.length).trim().split(/ + /g);

    if(message.content.startsWith(config.prefix + 'MudarNome')){
        message.member.setNickname(msgs[1]);
        message.channel.send(message.author + "Agora é!" + msgs[1]);
    }


    });
    
;

bot.login(config.token);




