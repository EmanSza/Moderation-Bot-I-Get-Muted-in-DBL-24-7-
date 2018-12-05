const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    let prefix = botconfig.prefix;
    if (!message.content.startsWith(prefix)) return;
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setThumbnail(bicon)
        .addField("Fun", "Commands")
        .addField("Ping", "Find The Ping Of The Bot")
    .addField("Serverinfo", "Find Info on the server")
    .addField("Botinfo", "Find info on the bot")
    .addField("uptime", "Find The Bots Uptime")
    .addField("youtube", "youtube somthing")
        .setColor('RANDOM');

    message.channel.send(botembed);
}

module.exports.help = {
    name: "help2"
}
