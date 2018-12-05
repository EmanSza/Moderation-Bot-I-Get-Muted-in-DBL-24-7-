const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    let prefix = botconfig.prefix;
    if (!message.content.startsWith(prefix)) return;
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setThumbnail(bicon)
        .addField("Moderation", "Commands")
        .addField("Ban", "Bans a Member from the Server")
    .addField("Kick", "Kicks a Member From The Server")
    .addField("Tempmute", "Tempmute Someone From Talking")
    .addField("Warn", "Warn someone for breaking the rules")
        .setColor('RANDOM');
      

    message.channel.send(botembed);
}

module.exports.help = {
    name: "help1"
}
