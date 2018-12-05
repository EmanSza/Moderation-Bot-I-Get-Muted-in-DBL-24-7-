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
    .addField("Report", "Reports a Member To The Staff Team")
    .addField("Mute", "Mute someone from Talking")
    .addField("Unmute", "Unmute a member from Talking")
    .addField("Warn", "Warn someone for breaking the rules")
        .setColor('RANDOM');
      

    message.channel.send(botembed);
}

module.exports.help = {
    name: "help1"
}
