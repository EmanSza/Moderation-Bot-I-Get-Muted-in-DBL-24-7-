const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    let prefix = botconfig.prefix;
    if (!message.content.startsWith(prefix)) return;
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setThumbnail(bicon)
        .addField("Command Info", "Commands")
        .addField("help1", "Moderation Commands")
    .addField("help2", "Extra  Commands")
    .addField("ModLogs","Create A Channel Called Mod-logs to get bot logs")
    .addField("GlobalLogs", "Create a Channel Called Global-mod-logs For Global Logs")
    .addField("Offical Support Server", "https://discord.gg/jnUnXTX")
        .setColor('RANDOM');

    message.channel.send(botembed);
}

module.exports.help = {
    name: "help"
}
